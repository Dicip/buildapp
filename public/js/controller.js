// Controlador principal para la aplicación de construcción

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Configurar modal si existe
    const modal = document.getElementById('myModal');
    const closeBtn = document.getElementsByClassName('close')[0];
    
    if (closeBtn) {
        closeBtn.onclick = function() {
            if (modal) {
                modal.style.display = 'none';
            }
        }
    }
    
    if (modal) {
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        }
    }
});

// Función principal para calcular materiales
function calcularMateriales(tipo) {
    try {
        // Obtener valores básicos
        const areaTotal = parseFloat(document.getElementById('areaTotal')?.value) || 0;
        const largo = parseFloat(document.getElementById('largo')?.value) || 0;
        const ancho = parseFloat(document.getElementById('ancho')?.value) || 0;
        const altura = parseFloat(document.getElementById('altura')?.value) || 2.6;
        const habitaciones = parseInt(document.getElementById('habitaciones')?.value) || 1;
        const banos = parseInt(document.getElementById('banos')?.value) || 1;
        
        // Validar datos básicos
        if (!areaTotal || !largo || !ancho) {
            mostrarError('Por favor, complete todos los campos obligatorios.');
            return;
        }
        
        // Cargar coeficientes y calcular
        fetch('/js/coeficientes.json')
            .then(response => response.json())
            .then(data => {
                const resultado = calcularSegunTipo(tipo, {
                    areaTotal,
                    largo,
                    ancho,
                    altura,
                    habitaciones,
                    banos
                }, data);
                
                mostrarResultado(resultado);
            })
            .catch(error => {
                console.error('Error al cargar coeficientes:', error);
                mostrarError('Error al cargar los datos de cálculo.');
            });
            
    } catch (error) {
        console.error('Error en cálculo:', error);
        mostrarError('Error en el cálculo. Verifique los datos ingresados.');
    }
}

// Función para calcular según el tipo de construcción
function calcularSegunTipo(tipo, datos, coeficientes) {
    const tipoData = coeficientes[tipo];
    if (!tipoData) {
        throw new Error(`Tipo de construcción '${tipo}' no encontrado`);
    }
    
    const resultado = {
        tipo: tipoData.nombre,
        descripcion: tipoData.descripcion,
        materiales: []
    };
    
    // Calcular materiales según coeficientes
    for (const [material, factor] of Object.entries(tipoData.factores)) {
        const cantidad = Math.ceil(datos.areaTotal * factor);
        resultado.materiales.push({
            nombre: material,
            cantidad: cantidad,
            unidad: tipoData.unidades[material] || 'unidad'
        });
    }
    
    return resultado;
}

// Función para mostrar resultados
function mostrarResultado(resultado) {
    const resultDiv = document.getElementById('result');
    if (!resultDiv) return;
    
    let html = `
        <div class="resultado-container">
            <h3>📋 Resultado del Cálculo</h3>
            <div class="tipo-construccion">
                <h4>${resultado.tipo}</h4>
                <p>${resultado.descripcion}</p>
            </div>
            <div class="materiales-lista">
                <h4>🔨 Materiales Necesarios:</h4>
                <ul>
    `;
    
    resultado.materiales.forEach(material => {
        html += `<li><strong>${material.nombre}:</strong> ${material.cantidad} ${material.unidad}</li>`;
    });
    
    html += `
                </ul>
            </div>
            <div class="nota-importante">
                <p><strong>Nota:</strong> Estos cálculos son estimativos. Se recomienda consultar con un profesional para proyectos específicos.</p>
            </div>
        </div>
    `;
    
    resultDiv.innerHTML = html;
    resultDiv.scrollIntoView({ behavior: 'smooth' });
}

// Función para mostrar errores
function mostrarError(mensaje) {
    const resultDiv = document.getElementById('result');
    if (!resultDiv) {
        alert(mensaje);
        return;
    }
    
    resultDiv.innerHTML = `
        <div class="error-container">
            <h3>⚠️ Error</h3>
            <p>${mensaje}</p>
        </div>
    `;
    resultDiv.scrollIntoView({ behavior: 'smooth' });
}

// Función para mostrar modal con información
function mostrarModal(titulo, descripcion) {
    const modal = document.getElementById('myModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    
    if (modal && modalTitle && modalDescription) {
        modalTitle.textContent = titulo;
        modalDescription.textContent = descripcion;
        modal.style.display = 'block';
    }
}

// Función para validar formularios
function validarFormulario() {
    const campos = ['areaTotal', 'largo', 'ancho'];
    let valido = true;
    
    campos.forEach(campo => {
        const elemento = document.getElementById(campo);
        if (elemento && !elemento.value) {
            elemento.style.borderColor = '#ff4444';
            valido = false;
        } else if (elemento) {
            elemento.style.borderColor = '';
        }
    });
    
    return valido;
}

// Exportar funciones para uso global
window.calcularMateriales = calcularMateriales;
window.mostrarModal = mostrarModal;
window.validarFormulario = validarFormulario;