// Cargar coeficientes desde JSON
let coeficientes = {};

fetch('js/coeficientes.json')
    .then(response => response.json())
    .then(data => {
        coeficientes = data;
    })
    .catch(error => {
        console.error('Error cargando coeficientes:', error);
        // Valores por defecto en caso de error
        coeficientes = {
            factorDesperdicio: 1.1,
            sistemas: {},
            instalaciones: {
                electricas: { enchufes_por_habitacion: 4, enchufes_por_bano: 2, enchufes_comunes: 8 },
                sanitarias: { inodoros_por_bano: 1, lavamanos_por_bano: 1, duchas_por_bano: 1 },
                aberturas: { ventanas_por_habitacion: 1.5, puertas_interiores_por_habitacion: 1, puertas_por_bano: 1 }
            }
        };
    });

document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById("myModal");
    const span = document.getElementsByClassName("close")[0];
    const constructionTypes = document.querySelectorAll('.construction-type');

    constructionTypes.forEach(type => {
        type.addEventListener('click', function () {
            const constructionType = this.getAttribute('data-type');
            const title = this.querySelector('h3').textContent;
            const description = this.querySelector('p').textContent;

            document.getElementById('modalTitle').textContent = title;
            document.getElementById('modalDescription').textContent = description;

            generateCalculator(constructionType);

            modal.style.display = "block";
        });
    });

    span.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});

function calcularMateriales(tipo) {
    const resultado = document.getElementById('result');
    let materiales = {};

    // Validación de entradas
    if (!validarEntradas(tipo)) {
        alert('Por favor, ingrese valores válidos y positivos para todos los campos.');
        return;
    }

    switch (tipo) {
        case 'Albañilería Confinada':
            materiales = calcularAlbanileriaConfinada();
            break;
        case 'Hormigón Armado':
            materiales = calcularHormigonArmado();
            break;
        case 'Madera':
            materiales = calcularMadera();
            break;
        case 'Steel Framing':
            materiales = calcularSteelFraming();
            break;
        case 'Prefabricada':
            materiales = calcularPrefabricada();
            break;
        case 'Adobe':
            materiales = calcularAdobe();
            break;
        default:
            alert('Tipo de construcción no reconocido.');
            return;
    }

    mostrarResultados(materiales);
}

function generateCalculator(type) {
    const calculatorContainer = document.getElementById('calculatorContainer');
    let calculatorHTML = '';

    switch (type) {
        case 'Albañilería Confinada':
            calculatorHTML += `
                <h3>🧱 Especificaciones del Sistema</h3>
                <div class="form-grid">
                    <div class="form-section">
                        <input type="number" id="areaTotal" placeholder="Área total construida (m²)" required min="30" max="500" step="0.1">
                        <input type="number" id="largo" placeholder="Largo de la construcción (m)" required min="5" max="30" step="0.1">
                    </div>
                    <div class="form-section">
                        <input type="number" id="ancho" placeholder="Ancho de la construcción (m)" required min="4" max="20" step="0.1">
                        <input type="number" id="altura" placeholder="Altura promedio (m)" required min="2.4" max="4" step="0.1" value="2.6">
                    </div>
                </div>
                
                <h3>🏠 Distribución</h3>
                <div class="form-grid">
                    <div class="form-section">
                        <input type="number" id="habitaciones" placeholder="Número de habitaciones" required min="1" max="8">
                    </div>
                    <div class="form-section">
                        <input type="number" id="banos" placeholder="Número de baños" required min="1" max="6">
                    </div>
                </div>
                
                <h3>🧱 Albañilería Confinada</h3>
                <div class="form-grid">
                    <div class="form-section">
                        <select id="tipoLadrillo" required>
                            <option value="">Tipo de ladrillo</option>
                            <option value="ceramico">Ladrillo Cerámico</option>
                            <option value="tierra_cocida">Ladrillo de Tierra Cocida</option>
                            <option value="bloque_ceramico">Bloque Cerámico</option>
                        </select>
                        <input type="number" id="espesorMuro" placeholder="Espesor del muro (cm)" required min="14" max="25" value="15">
                    </div>
                    <div class="form-section">
                        <select id="tipoMortero" required>
                            <option value="">Tipo de mortero</option>
                            <option value="1_3">Cemento:Arena 1:3</option>
                            <option value="1_4">Cemento:Arena 1:4</option>
                        </select>
                    </div>
                </div>
                
                <h3>🌍 Condiciones del Sitio</h3>
                <div class="form-grid">
                    <div class="form-section">
                        <select id="zonaClimatica" required>
                            <option value="">Zona climática</option>
                            <option value="norte">Norte (Arica-Antofagasta)</option>
                            <option value="centro">Centro (Valparaíso-O'Higgins)</option>
                            <option value="sur">Sur (Araucanía-Los Ríos)</option>
                        </select>
                    </div>
                    <div class="form-section">
                        <select id="zonaSismica" required>
                             <option value="">Zona sísmica</option>
                             <option value="zona1">Zona 1 (Baja sismicidad)</option>
                             <option value="zona2">Zona 2 (Sismicidad intermedia)</option>
                             <option value="zona3">Zona 3 (Alta sismicidad)</option>
                         </select>
                    </div>
                </div>
            `;
            break;
        case 'Hormigón Armado':
            calculatorHTML += `
                <h3>🏗️ Especificaciones del Sistema</h3>
                <div class="form-grid">
                    <div class="form-section">
                        <input type="number" id="areaTotal" placeholder="Área total construida (m²)" required min="30" max="500" step="0.1">
                        <input type="number" id="largo" placeholder="Largo de la construcción (m)" required min="5" max="30" step="0.1">
                    </div>
                    <div class="form-section">
                        <input type="number" id="ancho" placeholder="Ancho de la construcción (m)" required min="4" max="20" step="0.1">
                        <input type="number" id="altura" placeholder="Altura promedio (m)" required min="2.4" max="4" step="0.1" value="2.6">
                    </div>
                </div>
                
                <h3>🏠 Distribución</h3>
                <div class="form-grid">
                    <div class="form-section">
                        <input type="number" id="habitaciones" placeholder="Número de habitaciones" required min="1" max="8">
                    </div>
                    <div class="form-section">
                        <input type="number" id="banos" placeholder="Número de baños" required min="1" max="6">
                    </div>
                </div>
                
                <h3>🏗️ Hormigón Armado</h3>
                <div class="form-grid">
                    <div class="form-section">
                        <select id="resistenciaHormigon" required>
                            <option value="">Resistencia del hormigón</option>
                            <option value="h20">H20 (200 kg/cm²)</option>
                            <option value="h25">H25 (250 kg/cm²)</option>
                            <option value="h30">H30 (300 kg/cm²)</option>
                        </select>
                        <select id="tipoAcero" required>
                            <option value="">Tipo de acero</option>
                            <option value="a44_28h">A44-28H</option>
                            <option value="a63_42h">A63-42H</option>
                        </select>
                    </div>
                    <div class="form-section">
                        <input type="number" id="espesorLosa" placeholder="Espesor de losa (cm)" required min="12" max="25" value="15">
                    </div>
                </div>
                
                <h3>🌍 Condiciones del Sitio</h3>
                <div class="form-grid">
                    <div class="form-section">
                        <select id="zonaClimatica" required>
                            <option value="">Zona climática</option>
                            <option value="norte">Norte (Arica-Antofagasta)</option>
                            <option value="centro">Centro (Valparaíso-O'Higgins)</option>
                            <option value="sur">Sur (Araucanía-Los Ríos)</option>
                        </select>
                    </div>
                    <div class="form-section">
                        <select id="zonaSismica" required>
                            <option value="">Zona sísmica</option>
                            <option value="zona1">Zona 1 (Baja sismicidad)</option>
                            <option value="zona2">Zona 2 (Sismicidad intermedia)</option>
                            <option value="zona3">Zona 3 (Alta sismicidad)</option>
                        </select>
                    </div>
                </div>
            `;
            break;
        case 'Madera':
            calculatorHTML += `
                <h3>🌲 Especificaciones del Sistema</h3>
                <div class="form-grid">
                    <div class="form-section">
                        <input type="number" id="areaTotal" placeholder="Área total construida (m²)" required min="30" max="500" step="0.1">
                        <input type="number" id="largo" placeholder="Largo de la construcción (m)" required min="5" max="30" step="0.1">
                    </div>
                    <div class="form-section">
                        <input type="number" id="ancho" placeholder="Ancho de la construcción (m)" required min="4" max="20" step="0.1">
                        <input type="number" id="altura" placeholder="Altura promedio (m)" required min="2.4" max="4" step="0.1" value="2.6">
                    </div>
                </div>
                
                <h3>🏠 Distribución</h3>
                <div class="form-grid">
                    <div class="form-section">
                        <input type="number" id="habitaciones" placeholder="Número de habitaciones" required min="1" max="8">
                    </div>
                    <div class="form-section">
                        <input type="number" id="banos" placeholder="Número de baños" required min="1" max="6">
                    </div>
                </div>
                
                <h3>🌲 Construcción en Madera</h3>
                <div class="form-grid">
                    <div class="form-section">
                        <select id="tipoMadera" required>
                            <option value="">Tipo de madera</option>
                            <option value="pino_radiata">Pino Radiata</option>
                            <option value="roble">Roble</option>
                            <option value="coigue">Coigüe</option>
                        </select>
                        <select id="sistemaConstructivo" required>
                            <option value="">Sistema constructivo</option>
                            <option value="entramado_2x4">Entramado 2x4"</option>
                            <option value="entramado_2x6">Entramado 2x6"</option>
                            <option value="paneles_clt">Paneles CLT</option>
                        </select>
                    </div>
                    <div class="form-section">
                        <input type="number" id="humedadMadera" placeholder="Humedad de la madera (%)" required min="8" max="18" value="12">
                    </div>
                </div>
                
                <h3>🌍 Condiciones del Sitio</h3>
                <div class="form-grid">
                    <div class="form-section">
                        <select id="zonaClimatica" required>
                            <option value="">Zona climática</option>
                            <option value="norte">Norte (Arica-Antofagasta)</option>
                            <option value="centro">Centro (Valparaíso-O'Higgins)</option>
                            <option value="sur">Sur (Araucanía-Los Ríos)</option>
                        </select>
                    </div>
                    <div class="form-section">
                        <select id="zonaSismica" required>
                            <option value="">Zona sísmica</option>
                            <option value="zona1">Zona 1 (Baja sismicidad)</option>
                            <option value="zona2">Zona 2 (Sismicidad intermedia)</option>
                            <option value="zona3">Zona 3 (Alta sismicidad)</option>
                        </select>
                    </div>
                </div>
            `;
            break;
        case 'Steel Framing':
            calculatorHTML += `
                <h3>🔩 Especificaciones del Sistema</h3>
                <div class="form-grid">
                    <div class="form-section">
                        <input type="number" id="areaTotal" placeholder="Área total construida (m²)" required min="30" max="500" step="0.1">
                        <input type="number" id="largo" placeholder="Largo de la construcción (m)" required min="5" max="30" step="0.1">
                    </div>
                    <div class="form-section">
                        <input type="number" id="ancho" placeholder="Ancho de la construcción (m)" required min="4" max="20" step="0.1">
                        <input type="number" id="altura" placeholder="Altura promedio (m)" required min="2.4" max="4" step="0.1" value="2.6">
                    </div>
                </div>
                
                <h3>🏠 Distribución</h3>
                <div class="form-grid">
                    <div class="form-section">
                        <input type="number" id="habitaciones" placeholder="Número de habitaciones" required min="1" max="8">
                    </div>
                    <div class="form-section">
                        <input type="number" id="banos" placeholder="Número de baños" required min="1" max="6">
                    </div>
                </div>
                
                <h3>🔩 Steel Framing</h3>
                <div class="form-grid">
                    <div class="form-section">
                        <select id="espesorPerfil" required>
                            <option value="">Espesor del perfil</option>
                            <option value="0.6mm">0.6 mm</option>
                            <option value="0.8mm">0.8 mm</option>
                            <option value="1.0mm">1.0 mm</option>
                            <option value="1.2mm">1.2 mm</option>
                        </select>
                        <select id="tipoAislante" required>
                            <option value="">Tipo de aislante</option>
                            <option value="lana_mineral">Lana Mineral</option>
                            <option value="poliestireno">Poliestireno Expandido</option>
                            <option value="poliuretano">Poliuretano</option>
                        </select>
                    </div>
                    <div class="form-section">
                        <input type="number" id="espesorAislante" placeholder="Espesor del aislante (mm)" required min="50" max="150" value="100">
                    </div>
                </div>
                
                <h3>🌍 Condiciones del Sitio</h3>
                <div class="form-grid">
                    <div class="form-section">
                        <select id="zonaClimatica" required>
                            <option value="">Zona climática</option>
                            <option value="norte">Norte (Arica-Antofagasta)</option>
                            <option value="centro">Centro (Valparaíso-O'Higgins)</option>
                            <option value="sur">Sur (Araucanía-Los Ríos)</option>
                        </select>
                    </div>
                    <div class="form-section">
                        <select id="zonaSismica" required>
                            <option value="">Zona sísmica</option>
                            <option value="zona1">Zona 1 (Baja sismicidad)</option>
                            <option value="zona2">Zona 2 (Sismicidad intermedia)</option>
                            <option value="zona3">Zona 3 (Alta sismicidad)</option>
                        </select>
                    </div>
                </div>
            `;
            break;
        case 'Prefabricada':
            calculatorHTML += `
                <h3>🏭 Especificaciones del Sistema</h3>
                <div class="form-grid">
                    <div class="form-section">
                        <input type="number" id="areaTotal" placeholder="Área total construida (m²)" required min="30" max="500" step="0.1">
                        <input type="number" id="largo" placeholder="Largo de la construcción (m)" required min="5" max="30" step="0.1">
                    </div>
                    <div class="form-section">
                        <input type="number" id="ancho" placeholder="Ancho de la construcción (m)" required min="4" max="20" step="0.1">
                        <input type="number" id="altura" placeholder="Altura promedio (m)" required min="2.4" max="4" step="0.1" value="2.6">
                    </div>
                </div>
                
                <h3>🏠 Distribución</h3>
                <div class="form-grid">
                    <div class="form-section">
                        <input type="number" id="habitaciones" placeholder="Número de habitaciones" required min="1" max="8">
                    </div>
                    <div class="form-section">
                        <input type="number" id="banos" placeholder="Número de baños" required min="1" max="6">
                    </div>
                </div>
                
                <h3>🏭 Construcción Prefabricada</h3>
                <div class="form-grid">
                    <div class="form-section">
                        <select id="tipoPrefabricado" required>
                            <option value="">Tipo de prefabricado</option>
                            <option value="paneles_hormigon">Paneles de Hormigón</option>
                            <option value="modulos_madera">Módulos de Madera</option>
                            <option value="paneles_sip">Paneles SIP</option>
                            <option value="contenedores">Contenedores Adaptados</option>
                        </select>
                    </div>
                    <div class="form-section">
                        <select id="nivelTerminacion" required>
                            <option value="">Nivel de terminación</option>
                            <option value="basico">Básico</option>
                            <option value="medio">Medio</option>
                            <option value="alto">Alto</option>
                        </select>
                    </div>
                </div>
                
                <h3>🌍 Condiciones del Sitio</h3>
                <div class="form-grid">
                    <div class="form-section">
                        <select id="zonaClimatica" required>
                            <option value="">Zona climática</option>
                            <option value="norte">Norte (Arica-Antofagasta)</option>
                            <option value="centro">Centro (Valparaíso-O'Higgins)</option>
                            <option value="sur">Sur (Araucanía-Los Ríos)</option>
                        </select>
                    </div>
                    <div class="form-section">
                        <select id="zonaSismica" required>
                            <option value="">Zona sísmica</option>
                            <option value="zona1">Zona 1 (Baja sismicidad)</option>
                            <option value="zona2">Zona 2 (Sismicidad intermedia)</option>
                            <option value="zona3">Zona 3 (Alta sismicidad)</option>
                        </select>
                    </div>
                </div>
            `;
            break;
        case 'Adobe':
            calculatorHTML += `
                <h3>🏺 Especificaciones del Sistema</h3>
                <div class="form-grid">
                    <div class="form-section">
                        <input type="number" id="areaTotal" placeholder="Área total construida (m²)" required min="30" max="300" step="0.1">
                        <input type="number" id="largo" placeholder="Largo de la construcción (m)" required min="5" max="25" step="0.1">
                    </div>
                    <div class="form-section">
                        <input type="number" id="ancho" placeholder="Ancho de la construcción (m)" required min="4" max="15" step="0.1">
                        <input type="number" id="altura" placeholder="Altura promedio (m)" required min="2.4" max="3.5" step="0.1" value="2.6">
                    </div>
                </div>
                
                <h3>🏠 Distribución</h3>
                <div class="form-grid">
                    <div class="form-section">
                        <input type="number" id="habitaciones" placeholder="Número de habitaciones" required min="1" max="6">
                    </div>
                    <div class="form-section">
                        <input type="number" id="banos" placeholder="Número de baños" required min="1" max="3">
                    </div>
                </div>
                
                <h3>🏺 Construcción en Adobe</h3>
                <div class="form-grid">
                    <div class="form-section">
                        <select id="tipoAdobe" required>
                            <option value="">Tipo de adobe</option>
                            <option value="tradicional">Adobe Tradicional</option>
                            <option value="estabilizado">Adobe Estabilizado</option>
                            <option value="comprimido">Adobe Comprimido</option>
                        </select>
                        <input type="number" id="espesorMuro" placeholder="Espesor del muro (cm)" required min="30" max="50" value="40">
                    </div>
                    <div class="form-section">
                        <select id="tipoRevoque" required>
                            <option value="">Tipo de revoque</option>
                            <option value="barro_cal">Barro y Cal</option>
                            <option value="cemento_cal">Cemento y Cal</option>
                        </select>
                    </div>
                </div>
                
                <h3>🌍 Condiciones del Sitio</h3>
                <div class="form-grid">
                    <div class="form-section">
                        <select id="zonaClimatica" required>
                            <option value="">Zona climática</option>
                            <option value="norte">Norte (Arica-Antofagasta)</option>
                            <option value="centro">Centro (Valparaíso-O'Higgins)</option>
                            <option value="sur">Sur (Araucanía-Los Ríos)</option>
                        </select>
                    </div>
                    <div class="form-section">
                        <select id="zonaSismica" required>
                            <option value="">Zona sísmica</option>
                            <option value="zona1">Zona 1 (Baja sismicidad)</option>
                            <option value="zona2">Zona 2 (Sismicidad intermedia)</option>
                        </select>
                    </div>
                </div>
            `;
            break;
        default:
            calculatorHTML += '<p>Calculadora no disponible para este tipo de construcción.</p>';
            break;
    }

    calculatorHTML += `
        <button onclick="calcularMateriales('${type}')">Calcular Materiales Necesarios</button>
        <div id="result"></div>
    `;

    calculatorContainer.innerHTML = calculatorHTML;
    calculatorContainer.style.display = 'block';
}

function validarEntradas(tipo) {
    const inputs = document.querySelectorAll(`#calculatorContainer input, #calculatorContainer select`);
    for (let input of inputs) {
        if (input.tagName === 'INPUT' && input.type === 'number') {
            // Check for empty and negative values for number inputs
            if (!input.value.trim() || parseFloat(input.value) < 0) {
                return false;
            }
        } else if (input.tagName === 'SELECT') {
            // Check for empty selection in dropdowns
             if (!input.value) {
                 return false;
             }
        } else {
             // Check for empty text inputs
             if (!input.value.trim()) {
                 return false;
             }
        }
    }
    return true;
}

function mostrarResultados(materiales) {
    let resultadoHTML = '<h4>Materiales Estimados:</h4>';
    
    // Mostrar información del sistema y especificaciones
    if (materiales.especificaciones) {
        const esp = materiales.especificaciones;
        resultadoHTML += `<div class="sistema-info">`;
        resultadoHTML += `<h3>🏗️ Sistema de Construcción: ${esp.sistema}</h3>`;
        resultadoHTML += `<div class="especificaciones-tecnicas">`;
        resultadoHTML += `<p><strong>📏 Dimensiones:</strong> ${esp.dimensiones}</p>`;
        resultadoHTML += `<p><strong>📐 Área construida:</strong> ${esp.area_construida} m²</p>`;
        resultadoHTML += `<p><strong>🌡️ Zona climática:</strong> ${esp.zona_climatica}</p>`;
        resultadoHTML += `<p><strong>🌍 Zona sísmica:</strong> ${esp.zona_sismica}</p>`;
        resultadoHTML += `<p><strong>🏔️ Tipo de suelo:</strong> ${esp.tipo_suelo}</p>`;
        if (esp.distribucion) {
            resultadoHTML += `<p><strong>🏠 Distribución:</strong> ${esp.distribucion.dormitorios} dormitorios, ${esp.distribucion.banos} baños, ${esp.distribucion.cocinas} cocina(s), ${esp.distribucion.estar_living} estar/living</p>`;
        }
        resultadoHTML += `</div>`;
        resultadoHTML += `</div>`;
    } else {
        // Mostrar información del sistema constructivo si está disponible
        const tipoSistema = Object.keys(coeficientes.sistemas || {}).find(key => 
            coeficientes.sistemas[key].materiales && 
            Object.keys(coeficientes.sistemas[key].materiales).some(mat => materiales[mat])
        );
        
        if (tipoSistema && coeficientes.sistemas[tipoSistema]) {
            const sistema = coeficientes.sistemas[tipoSistema];
            resultadoHTML += `<div class="sistema-info">`;
            resultadoHTML += `<h5>${sistema.nombre}</h5>`;
            resultadoHTML += `<p><em>${sistema.descripcion}</em></p>`;
            resultadoHTML += `</div>`;
        }
    }
    
    resultadoHTML += '<div class="materiales-principales"><h5>Materiales Estructurales:</h5><ul>';
    
    for (let material in materiales) {
        if (material !== 'materialesExtra' && materiales[material]) {
            const item = materiales[material];
            
            // Manejar tanto el formato nuevo (objeto) como el viejo (número)
            if (typeof item === 'object' && item.cantidad !== undefined) {
                if (item.cantidad > 0) {
                    let materialName = material.replace(/_/g, ' ');
                    materialName = materialName.charAt(0).toUpperCase() + materialName.slice(1);
                    resultadoHTML += `<li>`;
                    resultadoHTML += `<span class="material-name">${materialName}</span>: `;
                    resultadoHTML += `<span class="material-quantity">${item.cantidad} ${item.unidad}</span>`;
                    if (item.descripcion) {
                        resultadoHTML += `<br><small class="material-desc">${item.descripcion}</small>`;
                    }
                    resultadoHTML += `</li>`;
                }
            } else if (typeof item === 'number' && item > 0) {
                // Compatibilidad con formato anterior
                let materialName = material.replace(/_/g, ' ');
                materialName = materialName.charAt(0).toUpperCase() + materialName.slice(1);
                resultadoHTML += `<li><span class="material-name">${materialName}</span>: <span class="material-quantity">${item} ${obtenerUnidad(material)}</span></li>`;
            }
        }
    }
    
    // Mostrar materiales extra si existen
    if (materiales.materialesExtra) {
        resultadoHTML += '</ul></div><div class="materiales-extra"><h5>Materiales Adicionales:</h5><ul>';
        for (let extraMaterial in materiales.materialesExtra) {
            if (materiales.materialesExtra[extraMaterial] > 0) {
                let materialName = extraMaterial.replace(/_/g, ' ');
                materialName = materialName.charAt(0).toUpperCase() + materialName.slice(1);
                resultadoHTML += `<li><span class="material-name">${materialName}</span>: <span class="material-quantity">${materiales.materialesExtra[extraMaterial]} ${obtenerUnidad(extraMaterial)}</span></li>`;
            }
        }
        resultadoHTML += '</ul></div>';
    } else {
        resultadoHTML += '</ul></div>';
    }
    
    // Mostrar factor de desperdicio aplicado
    const factor = coeficientes.factorDesperdicio || 1.1;
    const porcentajeDesperdicio = Math.round((factor - 1) * 100);
    
    resultadoHTML += `<div class="nota-tecnica">`;
    resultadoHTML += `<p><strong>Factor de desperdicio aplicado:</strong> ${porcentajeDesperdicio}% (${factor}x)</p>`;
    resultadoHTML += `<p><strong>Nota:</strong> Esta estimación se basa en normas chilenas (NCh) y coeficientes técnicos. `;
    resultadoHTML += `Los materiales exactos pueden variar según especificaciones detalladas, condiciones del terreno y regulaciones locales.</p>`;
    resultadoHTML += `</div>`;

    document.getElementById('result').innerHTML = resultadoHTML;
}

function obtenerUnidad(material) {
    const unidades = {
        cemento: 'Toneladas',
        arena: 'Metros cúbicos (m³)',
        grava: 'Metros cúbicos (m³)',
        varillas_acero: 'Piezas',
        ladrillos: 'Piezas',
        madera: 'Metros cúbicos (m³)',
        tejas: 'Piezas',
        laminas: 'Piezas',
        pintura: 'Galones',
        ventanas: 'Unidades',
        puertas: 'Unidades',
        inodoros: 'Unidades',
        lavamanos: 'Unidades',
        duchas: 'Unidades',
        enchufes: 'Unidades',
        interruptores: 'Unidades',
        cable_electrico: 'Metros (m)',
        tuberia_agua: 'Metros (m)',
        tuberia_drenaje: 'Metros (m)',
        cañerías_hidraulicas: 'Metros (m)',
        válvulas_hidraulicas: 'Piezas',
        hidrográficos: 'Piezas',
        paneles_solares: 'Unidades',
        rejas: 'Unidades',
        cerraduras: 'Unidades',
        iluminacion: 'Unidades',
        ventilacion: 'Unidades',
        prefabricados: 'Unidades',
        adobe: 'Bloques',
        sistema_recolecta_agua: 'Unidades',
        materiales_ecologicos: 'Metros cúbicos (m³)',
        // Add any other units for new materials here
    };
    return unidades[material] || 'Piezas';
}


// Funciones de cálculo para cada tipo de casa
function calcularAlbanileriaConfinada() {
    // Obtener valores del formulario
    const area = parseFloat(document.getElementById('areaTotal').value);
    const largo = parseFloat(document.getElementById('largo').value);
    const ancho = parseFloat(document.getElementById('ancho').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const habitaciones = parseInt(document.getElementById('habitaciones').value);
    const banos = parseInt(document.getElementById('banos').value);
    const tipoLadrillo = document.getElementById('tipoLadrillo').value;
    const espesorMuro = parseFloat(document.getElementById('espesorMuro').value) / 100; // convertir cm a m
    const tipoMortero = document.getElementById('tipoMortero').value;
    const zonaClimatica = document.getElementById('zonaClimatica').value;
    const zonaSismica = document.getElementById('zonaSismica').value;

    // Cálculos específicos para albañilería confinada
    const perimetro = 2 * (largo + ancho);
    const areaMuros = perimetro * altura;
    const volumenMuros = areaMuros * espesorMuro;
    const areaTecho = area * 1.1; // incluye aleros
    
    // Factores de ajuste por zona climática
    const factoresClimaticos = {
        'norte': 1.0,
        'centro': 1.1,
        'sur': 1.2
    };
    
    const factorClimatico = factoresClimaticos[zonaClimatica] || 1.0;
    
    // Factores sísmicos
    const factoresSismicos = {
        'zona1': 1.0,
        'zona2': 1.1,
        'zona3': 1.2
    };
    
    const factorSismico = factoresSismicos[zonaSismica] || 1.0;
    
    // Factores por tipo de ladrillo
    const factoresLadrillo = {
        'ceramico': 1.0,
        'tierra_cocida': 1.1,
        'bloque_ceramico': 0.9
    };
    
    const factorLadrillo = factoresLadrillo[tipoLadrillo] || 1.0;
    
    // Factores por tipo de mortero
    const factoresMortero = {
        '1_3': 1.0,  // más resistente
        '1_4': 1.1   // más económico pero requiere más
    };
    
    const factorMortero = factoresMortero[tipoMortero] || 1.0;
    
    let materiales = {};
    
    // Cálculo de ladrillos
    const ladrillosPorM2 = tipoLadrillo === 'bloque_ceramico' ? 12.5 : 50;
    materiales['ladrillos'] = {
        cantidad: Math.ceil(areaMuros * ladrillosPorM2 * factorLadrillo * 1.1), // 10% desperdicio
        unidad: 'unidades',
        descripcion: `Ladrillos ${tipoLadrillo.replace('_', ' ')}`
    };
    
    // Cálculo de cemento para mortero y pilares
    const cementoMortero = areaMuros * 0.02 * factorMortero; // mortero de asiento
    const cementoPilares = (perimetro / 3) * altura * 0.15 * 0.15 * 350; // pilares cada 3m, 350kg/m³
    materiales['cemento'] = {
        cantidad: Math.ceil((cementoMortero + cementoPilares) * factorSismico),
        unidad: 'sacos 25kg',
        descripcion: 'Cemento Portland'
    };
    
    // Cálculo de arena
    const arenaTotal = areaMuros * 0.015 * factorMortero + cementoPilares * 0.5;
    materiales['arena'] = {
        cantidad: Math.ceil(arenaTotal * 1.1),
        unidad: 'm³',
        descripcion: 'Arena fina para mortero'
    };
    
    // Cálculo de grava para pilares
    materiales['grava'] = {
        cantidad: Math.ceil(cementoPilares * 0.8),
        unidad: 'm³',
        descripcion: 'Grava para hormigón de pilares'
    };
    
    // Cálculo de acero de refuerzo
    const aceroPilares = (perimetro / 3) * altura * 4 * 0.617; // 4 barras Ø10 por pilar
    const aceroCadenas = perimetro * 2 * 0.617; // 2 barras Ø10 por cadena
    materiales['acero_refuerzo'] = {
        cantidad: Math.ceil((aceroPilares + aceroCadenas) * factorSismico),
        unidad: 'kg',
        descripcion: 'Barras de acero Ø10mm'
    };

    // Cálculo de instalaciones
    materiales['ventanas'] = {
        cantidad: habitaciones + 2, // ventanas por habitación + living y cocina
        unidad: 'unidades',
        descripcion: 'Ventanas de aluminio'
    };
    
    materiales['puertas'] = {
        cantidad: habitaciones + banos + 2, // + puerta principal y cocina
        unidad: 'unidades',
        descripcion: 'Puertas interiores y exteriores'
    };
    
    materiales['inodoros'] = {
        cantidad: banos,
        unidad: 'unidades',
        descripcion: 'Inodoros'
    };
    
    materiales['lavamanos'] = {
        cantidad: banos,
        unidad: 'unidades',
        descripcion: 'Lavamanos'
    };
    
    materiales['duchas'] = {
        cantidad: banos,
        unidad: 'unidades',
        descripcion: 'Duchas'
    };
    
    materiales['enchufes'] = {
        cantidad: (habitaciones * 4) + (banos * 2) + 8, // enchufes por ambiente
        unidad: 'unidades',
        descripcion: 'Enchufes eléctricos'
    };
    
    materiales['interruptores'] = {
        cantidad: habitaciones + banos + 4, // + áreas comunes
        unidad: 'unidades',
        descripcion: 'Interruptores eléctricos'
    };
    
    materiales['cable_electrico'] = {
        cantidad: Math.ceil(area * 1.5), // 1.5m de cable por m² construido
        unidad: 'metros',
        descripcion: 'Cable eléctrico (12 AWG)'
    };
    
    materiales['tuberia_agua'] = {
        cantidad: Math.ceil(perimetro + (banos * 8)), // red perimetral + conexiones
        unidad: 'metros',
        descripcion: 'Tubería de agua potable (PVC 20mm)'
    };
    
    materiales['tuberia_drenaje'] = {
        cantidad: Math.ceil(banos * 6 + area * 0.08), // drenajes + red general
        unidad: 'metros',
        descripcion: 'Tubería de drenaje (PVC 110mm)'
    };
    
    return materiales;
}

function calcularHormigonArmado() {
    const area = parseFloat(document.getElementById('areaTotal').value);
    const largo = parseFloat(document.getElementById('largo').value);
    const ancho = parseFloat(document.getElementById('ancho').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const habitaciones = parseInt(document.getElementById('habitaciones').value);
    const banos = parseInt(document.getElementById('banos').value);
    const resistenciaHormigon = document.getElementById('resistenciaHormigon').value;
    const tipoAcero = document.getElementById('tipoAcero').value;
    const espesorLosa = parseFloat(document.getElementById('espesorLosa').value) / 100;
    const zonaClimatica = document.getElementById('zonaClimatica').value;
    const zonaSismica = document.getElementById('zonaSismica').value;

    // Cálculos básicos
    const perimetro = 2 * (largo + ancho);
    const volumenLosa = area * espesorLosa;
    const areaMuros = perimetro * altura;
    
    // Factores de ajuste según zona
    const factorClimatico = zonaClimatica === 'sur' ? 1.3 : zonaClimatica === 'centro' ? 1.1 : 1.0;
    const factorSismico = zonaSismica === 'zona3' ? 1.4 : zonaSismica === 'zona2' ? 1.2 : 1.0;
    const factorTotal = factorClimatico * factorSismico;
    
    const materiales = {};
    
    // Hormigón para losa y estructura
    materiales['hormigon'] = {
        cantidad: Math.ceil((volumenLosa + areaMuros * 0.2) * factorTotal), // losa + columnas/vigas
        unidad: 'm³',
        descripcion: `Hormigón ${resistenciaHormigon}`
    };
    
    // Cemento
    materiales['cemento'] = {
        cantidad: Math.ceil(materiales['hormigon'].cantidad * 7 * factorTotal), // 7 sacos por m³
        unidad: 'sacos',
        descripcion: 'Cemento Portland'
    };
    
    // Arena
    materiales['arena'] = {
        cantidad: Math.ceil(materiales['hormigon'].cantidad * 0.5 * factorTotal),
        unidad: 'm³',
        descripcion: 'Arena gruesa'
    };
    
    // Grava
    materiales['grava'] = {
        cantidad: Math.ceil(materiales['hormigon'].cantidad * 0.8 * factorTotal),
        unidad: 'm³',
        descripcion: 'Grava 20mm'
    };
    
    // Acero de refuerzo
    const kgAceroPorM3 = tipoAcero === 'a63_42h' ? 120 : 100;
    materiales['acero_refuerzo'] = {
        cantidad: Math.ceil(materiales['hormigon'].cantidad * kgAceroPorM3 * factorTotal),
        unidad: 'kg',
        descripcion: `Acero ${tipoAcero}`
    };
    
    // Moldajes
    materiales['moldajes'] = {
        cantidad: Math.ceil((area + areaMuros) * 1.2 * factorTotal),
        unidad: 'm²',
        descripcion: 'Moldajes de madera'
    };
    
    // Instalaciones
    materiales['ventanas'] = {
        cantidad: habitaciones + 2,
        unidad: 'unidades',
        descripcion: 'Ventanas de aluminio'
    };
    
    materiales['puertas'] = {
        cantidad: habitaciones + banos + 2,
        unidad: 'unidades',
        descripcion: 'Puertas interiores y exteriores'
    };
    
    materiales['inodoros'] = {
        cantidad: banos,
        unidad: 'unidades',
        descripcion: 'Inodoros'
    };
    
    materiales['lavamanos'] = {
        cantidad: banos,
        unidad: 'unidades',
        descripcion: 'Lavamanos'
    };
    
    materiales['duchas'] = {
        cantidad: banos,
        unidad: 'unidades',
        descripcion: 'Duchas'
    };
    
    materiales['enchufes'] = {
        cantidad: (habitaciones * 4) + (banos * 2) + 8,
        unidad: 'unidades',
        descripcion: 'Enchufes eléctricos'
    };
    
    materiales['interruptores'] = {
        cantidad: habitaciones + banos + 4,
        unidad: 'unidades',
        descripcion: 'Interruptores eléctricos'
    };
    
    materiales['cable_electrico'] = {
        cantidad: Math.ceil(area * 1.5),
        unidad: 'metros',
        descripcion: 'Cable eléctrico (12 AWG)'
    };
    
    materiales['tuberia_agua'] = {
        cantidad: Math.ceil(perimetro + (banos * 8)),
        unidad: 'metros',
        descripcion: 'Tubería de agua potable (PVC 20mm)'
    };
    
    materiales['tuberia_drenaje'] = {
        cantidad: Math.ceil(banos * 6 + area * 0.08),
        unidad: 'metros',
        descripcion: 'Tubería de drenaje (PVC 110mm)'
    };
    
    return materiales;
}

function calcularMadera() {
    const area = parseFloat(document.getElementById('areaTotal').value);
    const largo = parseFloat(document.getElementById('largo').value);
    const ancho = parseFloat(document.getElementById('ancho').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const habitaciones = parseInt(document.getElementById('habitaciones').value);
    const banos = parseInt(document.getElementById('banos').value);
    const tipoMadera = document.getElementById('tipoMadera').value;
    const sistemaConstructivo = document.getElementById('sistemaConstructivo').value;
    const humedadMadera = parseFloat(document.getElementById('humedadMadera').value);
    const zonaClimatica = document.getElementById('zonaClimatica').value;
    const zonaSismica = document.getElementById('zonaSismica').value;

    // Cálculos básicos
    const perimetro = 2 * (largo + ancho);
    const areaMuros = perimetro * altura;
    
    // Factores de ajuste según zona
    const factorClimatico = zonaClimatica === 'sur' ? 1.2 : zonaClimatica === 'centro' ? 1.1 : 1.0;
    const factorSismico = zonaSismica === 'zona3' ? 1.3 : zonaSismica === 'zona2' ? 1.15 : 1.0;
    const factorHumedad = humedadMadera > 15 ? 1.1 : 1.0;
    const factorTotal = factorClimatico * factorSismico * factorHumedad;
    
    const materiales = {};
    
    // Estructura de madera
    const factorMadera = tipoMadera === 'pino_radiata' ? 1.0 : tipoMadera === 'coigue' ? 0.9 : 1.1;
    
    materiales['vigas_principales'] = {
        cantidad: Math.ceil((largo + ancho) * 2 * factorTotal * factorMadera),
        unidad: 'metros lineales',
        descripcion: `Vigas ${tipoMadera} ${sistemaConstructivo}`
    };
    
    materiales['pilares'] = {
        cantidad: Math.ceil(area / 16 * factorTotal), // 1 pilar cada 16m²
        unidad: 'unidades',
        descripcion: `Pilares ${tipoMadera} ${sistemaConstructivo}`
    };
    
    materiales['tablas_piso'] = {
        cantidad: Math.ceil(area * 1.1 * factorTotal),
        unidad: 'm²',
        descripcion: `Tablas de piso ${tipoMadera}`
    };
    
    materiales['tablas_muros'] = {
        cantidad: Math.ceil(areaMuros * 1.1 * factorTotal),
        unidad: 'm²',
        descripcion: `Tablas de muros ${tipoMadera}`
    };
    
    materiales['tablas_techo'] = {
        cantidad: Math.ceil(area * 1.2 * factorTotal), // incluye aleros
        unidad: 'm²',
        descripcion: `Tablas de techo ${tipoMadera}`
    };
    
    // Elementos de unión
    materiales['elementos_union'] = {
        cantidad: Math.ceil(area * 15 * factorTotal),
        unidad: 'kg',
        descripcion: 'Tornillos y clavos galvanizados'
    };
    
    // Aislación
    materiales['aislacion'] = {
        cantidad: Math.ceil(areaMuros * factorTotal),
        unidad: 'm²',
        descripcion: 'Aislación térmica'
    };
    
    // Impermeabilización
    materiales['impermeabilizacion'] = {
        cantidad: Math.ceil(area * 1.1 * factorTotal),
        unidad: 'm²',
        descripcion: 'Membrana impermeabilizante'
    };
    
    // Instalaciones
    materiales['ventanas'] = {
        cantidad: habitaciones + 2,
        unidad: 'unidades',
        descripcion: 'Ventanas de madera'
    };
    
    materiales['puertas'] = {
        cantidad: habitaciones + banos + 2,
        unidad: 'unidades',
        descripcion: 'Puertas de madera'
    };
    
    materiales['inodoros'] = {
        cantidad: banos,
        unidad: 'unidades',
        descripcion: 'Inodoros'
    };
    
    materiales['lavamanos'] = {
        cantidad: banos,
        unidad: 'unidades',
        descripcion: 'Lavamanos'
    };
    
    materiales['duchas'] = {
        cantidad: banos,
        unidad: 'unidades',
        descripcion: 'Duchas'
    };
    
    materiales['enchufes'] = {
        cantidad: (habitaciones * 4) + (banos * 2) + 8,
        unidad: 'unidades',
        descripcion: 'Enchufes eléctricos'
    };
    
    materiales['interruptores'] = {
        cantidad: habitaciones + banos + 4,
        unidad: 'unidades',
        descripcion: 'Interruptores eléctricos'
    };
    
    materiales['cable_electrico'] = {
        cantidad: Math.ceil(area * 1.5),
        unidad: 'metros',
        descripcion: 'Cable eléctrico (12 AWG)'
    };
    
    materiales['tuberia_agua'] = {
        cantidad: Math.ceil(perimetro + (banos * 8)),
        unidad: 'metros',
        descripcion: 'Tubería de agua potable (PVC 20mm)'
    };
    
    materiales['tuberia_drenaje'] = {
        cantidad: Math.ceil(banos * 6 + area * 0.08),
        unidad: 'metros',
        descripcion: 'Tubería de drenaje (PVC 110mm)'
    };
    
    return materiales;
}

function calcularSteelFraming() {
    const area = parseFloat(document.getElementById('areaTotal').value);
    const largo = parseFloat(document.getElementById('largo').value);
    const ancho = parseFloat(document.getElementById('ancho').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const habitaciones = parseInt(document.getElementById('habitaciones').value);
    const banos = parseInt(document.getElementById('banos').value);
    const espesorPerfil = document.getElementById('espesorPerfil').value;
    const tipoAislante = document.getElementById('tipoAislante').value;
    const espesorAislante = parseFloat(document.getElementById('espesorAislante').value);
    const zonaClimatica = document.getElementById('zonaClimatica').value;
    const zonaSismica = document.getElementById('zonaSismica').value;

    // Cálculos básicos
    const perimetro = 2 * (largo + ancho);
    const areaMuros = perimetro * altura;
    
    // Factores de ajuste según zona
    const factorClimatico = zonaClimatica === 'sur' ? 1.2 : zonaClimatica === 'centro' ? 1.1 : 1.0;
    const factorSismico = zonaSismica === 'zona3' ? 1.3 : zonaSismica === 'zona2' ? 1.15 : 1.0;
    const factorTotal = factorClimatico * factorSismico;
    
    const materiales = {};
    
    // Perfiles de acero
    const factorPerfil = espesorPerfil === '1.2mm' ? 1.0 : espesorPerfil === '1.0mm' ? 1.1 : espesorPerfil === '0.8mm' ? 1.2 : 1.3;
    
    materiales['perfiles_acero'] = {
        cantidad: Math.ceil(areaMuros * 8 * factorPerfil * factorTotal), // 8 metros lineales por m² de muro
        unidad: 'metros lineales',
        descripcion: `Perfiles de acero galvanizado ${espesorPerfil}`
    };
    
    // Placas de revestimiento
    materiales['placas_revestimiento'] = {
        cantidad: Math.ceil(areaMuros * 2.2 * factorTotal), // ambas caras + desperdicio
        unidad: 'm²',
        descripcion: 'Placas de fibrocemento o yeso-cartón'
    };
    
    // Aislación
    const factorAislante = tipoAislante === 'poliuretano' ? 0.8 : tipoAislante === 'lana_mineral' ? 1.0 : 1.1;
    materiales['aislacion'] = {
        cantidad: Math.ceil(areaMuros * factorAislante * factorTotal),
        unidad: 'm²',
        descripcion: `${tipoAislante.replace('_', ' ')} ${espesorAislante}mm`
    };
    
    // Elementos de fijación
    materiales['tornillos_fijacion'] = {
        cantidad: Math.ceil(areaMuros * 25 * factorTotal), // 25 tornillos por m²
        unidad: 'unidades',
        descripcion: 'Tornillos autoperforantes'
    };
    
    // Fundaciones (zapatas para estructura liviana)
    materiales['hormigon_fundacion'] = {
        cantidad: Math.ceil(perimetro * 0.3 * 0.6 * factorTotal), // zapata corrida
        unidad: 'm³',
        descripcion: 'Hormigón para fundaciones'
    };
    
    materiales['acero_fundacion'] = {
        cantidad: Math.ceil(perimetro * 8 * factorTotal), // 8 kg por metro lineal
        unidad: 'kg',
        descripcion: 'Acero de refuerzo para fundaciones'
    };

    // Instalaciones
    materiales['ventanas'] = {
        cantidad: habitaciones + 2,
        unidad: 'unidades',
        descripcion: 'Ventanas de aluminio'
    };
    
    materiales['puertas'] = {
        cantidad: habitaciones + banos + 2,
        unidad: 'unidades',
        descripcion: 'Puertas interiores y exteriores'
    };
    
    materiales['inodoros'] = {
        cantidad: banos,
        unidad: 'unidades',
        descripcion: 'Inodoros'
    };
    
    materiales['lavamanos'] = {
        cantidad: banos,
        unidad: 'unidades',
        descripcion: 'Lavamanos'
    };
    
    materiales['duchas'] = {
        cantidad: banos,
        unidad: 'unidades',
        descripcion: 'Duchas'
    };
    
    materiales['enchufes'] = {
        cantidad: (habitaciones * 4) + (banos * 2) + 8,
        unidad: 'unidades',
        descripcion: 'Enchufes eléctricos'
    };
    
    materiales['interruptores'] = {
        cantidad: habitaciones + banos + 4,
        unidad: 'unidades',
        descripcion: 'Interruptores eléctricos'
    };
    
    materiales['cable_electrico'] = {
        cantidad: Math.ceil(area * 1.5),
        unidad: 'metros',
        descripcion: 'Cable eléctrico (12 AWG)'
    };
    
    materiales['tuberia_agua'] = {
        cantidad: Math.ceil(perimetro + (banos * 8)),
        unidad: 'metros',
        descripcion: 'Tubería de agua potable (PVC 20mm)'
    };
    
    materiales['tuberia_drenaje'] = {
        cantidad: Math.ceil(banos * 6 + area * 0.08),
        unidad: 'metros',
        descripcion: 'Tubería de drenaje (PVC 110mm)'
    };
    
    return materiales;
}

function calcularPrefabricada() {
    const area = parseFloat(document.getElementById('areaTotal').value);
    const largo = parseFloat(document.getElementById('largo').value);
    const ancho = parseFloat(document.getElementById('ancho').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const habitaciones = parseInt(document.getElementById('habitaciones').value);
    const banos = parseInt(document.getElementById('banos').value);
    const tipoPrefabricado = document.getElementById('tipoPrefabricado').value;
    const nivelTerminacion = document.getElementById('nivelTerminacion').value;
    const zonaClimatica = document.getElementById('zonaClimatica').value;
    const zonaSismica = document.getElementById('zonaSismica').value;

    // Cálculos básicos
    const perimetro = 2 * (largo + ancho);
    
    // Factores de ajuste según zona
    const factorClimatico = zonaClimatica === 'sur' ? 1.15 : zonaClimatica === 'centro' ? 1.05 : 1.0;
    const factorSismico = zonaSismica === 'zona3' ? 1.2 : zonaSismica === 'zona2' ? 1.1 : 1.0;
    const factorTerminacion = nivelTerminacion === 'alto' ? 1.3 : nivelTerminacion === 'medio' ? 1.15 : 1.0;
    const factorTotal = factorClimatico * factorSismico * factorTerminacion;
    
    const materiales = {};
    
    // Módulos prefabricados según tipo
    const factorTipo = {
        'paneles_hormigon': 1.0,
        'modulos_madera': 0.8,
        'paneles_sip': 0.9,
        'contenedores': 0.6
    };
    
    materiales['modulos_prefabricados'] = {
        cantidad: Math.ceil(area / 20 * factorTipo[tipoPrefabricado] * factorTotal), // 1 módulo cada 20m²
        unidad: 'unidades',
        descripcion: `Módulos ${tipoPrefabricado.replace('_', ' ')}`
    };
    
    // Fundaciones (simplificadas para prefabricados)
    materiales['fundacion_prefabricada'] = {
        cantidad: Math.ceil(perimetro * 0.4 * 0.4 * factorTotal),
        unidad: 'm³',
        descripcion: 'Fundación para estructura prefabricada'
    };
    
    // Conexiones y montaje
    materiales['elementos_conexion'] = {
        cantidad: Math.ceil(area * 5 * factorTotal),
        unidad: 'kg',
        descripcion: 'Elementos de conexión y montaje'
    };
    
    // Sellado y terminaciones
    materiales['sellantes'] = {
        cantidad: Math.ceil(perimetro * 2 * factorTotal),
        unidad: 'metros lineales',
        descripcion: 'Sellantes para juntas'
    };
    
    // Aislación adicional si es necesaria
    if (tipoPrefabricado !== 'paneles_sip') {
        materiales['aislacion_adicional'] = {
            cantidad: Math.ceil(area * 0.8 * factorTotal),
            unidad: 'm²',
            descripcion: 'Aislación térmica adicional'
        };
    }

    // Instalaciones
    materiales['ventanas'] = {
        cantidad: habitaciones + 2,
        unidad: 'unidades',
        descripcion: 'Ventanas'
    };
    
    materiales['puertas'] = {
        cantidad: habitaciones + banos + 2,
        unidad: 'unidades',
        descripcion: 'Puertas interiores y exteriores'
    };
    
    materiales['inodoros'] = {
        cantidad: banos,
        unidad: 'unidades',
        descripcion: 'Inodoros'
    };
    
    materiales['lavamanos'] = {
        cantidad: banos,
        unidad: 'unidades',
        descripcion: 'Lavamanos'
    };
    
    materiales['duchas'] = {
        cantidad: banos,
        unidad: 'unidades',
        descripcion: 'Duchas'
    };
    
    materiales['enchufes'] = {
        cantidad: (habitaciones * 4) + (banos * 2) + 8,
        unidad: 'unidades',
        descripcion: 'Enchufes eléctricos'
    };
    
    materiales['interruptores'] = {
        cantidad: habitaciones + banos + 4,
        unidad: 'unidades',
        descripcion: 'Interruptores eléctricos'
    };
    
    materiales['cable_electrico'] = {
        cantidad: Math.ceil(area * 1.2),
        unidad: 'metros',
        descripcion: 'Cable eléctrico (12 AWG)'
    };
    
    materiales['tuberia_agua'] = {
        cantidad: Math.ceil(perimetro + (banos * 6)),
        unidad: 'metros',
        descripcion: 'Tubería de agua potable (PVC 20mm)'
    };
    
    materiales['tuberia_drenaje'] = {
        cantidad: Math.ceil(banos * 5 + area * 0.06),
        unidad: 'metros',
        descripcion: 'Tubería de drenaje (PVC 110mm)'
    };
    
    return materiales;
}

function calcularAdobe() {
    const area = parseFloat(document.getElementById('areaTotal').value);
    const largo = parseFloat(document.getElementById('largo').value);
    const ancho = parseFloat(document.getElementById('ancho').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const habitaciones = parseInt(document.getElementById('habitaciones').value);
    const banos = parseInt(document.getElementById('banos').value);
    const tipoAdobe = document.getElementById('tipoAdobe').value;
    const espesorMuro = parseFloat(document.getElementById('espesorMuro').value) / 100; // convertir cm a m
    const tipoRevoque = document.getElementById('tipoRevoque').value;
    const zonaClimatica = document.getElementById('zonaClimatica').value;
    const zonaSismica = document.getElementById('zonaSismica').value;

    // Cálculos básicos
    const perimetro = 2 * (largo + ancho);
    const areaMuros = perimetro * altura;
    const volumenMuros = areaMuros * espesorMuro;
    
    // Factores de ajuste según zona (adobe es más sensible al clima)
    const factorClimatico = zonaClimatica === 'sur' ? 1.3 : zonaClimatica === 'centro' ? 1.1 : 1.0;
    const factorSismico = zonaSismica === 'zona2' ? 1.2 : 1.0; // Adobe no recomendado en zona 3
    const factorTotal = factorClimatico * factorSismico;
    
    const materiales = {};
    
    // Adobes según tipo
    const factorTipoAdobe = {
        'tradicional': 1.0,
        'estabilizado': 0.9,
        'comprimido': 0.8
    };
    
    const adobesPorM3 = 120; // aproximadamente
    materiales['adobes'] = {
        cantidad: Math.ceil(volumenMuros * adobesPorM3 * factorTipoAdobe[tipoAdobe] * factorTotal * 1.1),
        unidad: 'unidades',
        descripcion: `Adobes ${tipoAdobe}`
    };
    
    // Barro para mortero
    materiales['barro_mortero'] = {
        cantidad: Math.ceil(areaMuros * 0.02 * factorTotal),
        unidad: 'm³',
        descripcion: 'Barro para mortero de asiento'
    };
    
    // Paja para refuerzo
    materiales['paja_refuerzo'] = {
        cantidad: Math.ceil(volumenMuros * 20 * factorTotal), // 20 kg por m³
        unidad: 'kg',
        descripcion: 'Paja para refuerzo del adobe'
    };
    
    // Revoque según tipo
    const factorRevoque = tipoRevoque === 'cemento_cal' ? 1.2 : 1.0;
    materiales['material_revoque'] = {
        cantidad: Math.ceil(areaMuros * 2 * 0.02 * factorRevoque * factorTotal), // ambas caras
        unidad: 'm³',
        descripcion: `Material para revoque ${tipoRevoque.replace('_', ' y ')}`
    };
    
    // Vigas de madera para techo (adobe requiere techo liviano)
    materiales['vigas_madera'] = {
        cantidad: Math.ceil(area / 2 * factorTotal), // 1 viga cada 2m²
        unidad: 'metros lineales',
        descripcion: 'Vigas de madera para estructura de techo'
    };
    
    // Sobrecimiento (fundamental en adobe)
    materiales['piedra_sobrecimiento'] = {
        cantidad: Math.ceil(perimetro * 0.4 * 0.6 * factorTotal), // 40cm alto x 60cm ancho
        unidad: 'm³',
        descripcion: 'Piedra para sobrecimiento'
    };
    
    // Cal para estabilización
    if (tipoAdobe === 'estabilizado') {
        materiales['cal'] = {
            cantidad: Math.ceil(volumenMuros * 50 * factorTotal), // 50 kg por m³
            unidad: 'kg',
            descripcion: 'Cal para estabilización del adobe'
        };
    }


    // Instalaciones (simplificadas para adobe)
    materiales['ventanas'] = {
        cantidad: habitaciones + 1, // menos ventanas en adobe
        unidad: 'unidades',
        descripcion: 'Ventanas de madera'
    };
    
    materiales['puertas'] = {
        cantidad: habitaciones + banos + 2,
        unidad: 'unidades',
        descripcion: 'Puertas de madera'
    };
    
    materiales['inodoros'] = {
        cantidad: banos,
        unidad: 'unidades',
        descripcion: 'Inodoros'
    };
    
    materiales['lavamanos'] = {
        cantidad: banos,
        unidad: 'unidades',
        descripcion: 'Lavamanos'
    };
    
    materiales['duchas'] = {
        cantidad: banos,
        unidad: 'unidades',
        descripcion: 'Duchas'
    };
    
    materiales['enchufes'] = {
        cantidad: (habitaciones * 3) + (banos * 2) + 6, // instalación eléctrica básica
        unidad: 'unidades',
        descripcion: 'Enchufes eléctricos'
    };
    
    materiales['interruptores'] = {
        cantidad: habitaciones + banos + 3,
        unidad: 'unidades',
        descripcion: 'Interruptores eléctricos'
    };
    
    materiales['cable_electrico'] = {
        cantidad: Math.ceil(area * 1.0),
        unidad: 'metros',
        descripcion: 'Cable eléctrico (12 AWG)'
    };
    
    materiales['tuberia_agua'] = {
        cantidad: Math.ceil(perimetro * 0.8 + (banos * 6)),
        unidad: 'metros',
        descripcion: 'Tubería de agua potable (PVC 20mm)'
    };
    
    materiales['tuberia_drenaje'] = {
        cantidad: Math.ceil(banos * 4 + area * 0.05),
        unidad: 'metros',
        descripcion: 'Tubería de drenaje (PVC 110mm)'
    };
    
    return materiales;
}