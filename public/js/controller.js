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
        case 'Casa Moderna':
            materiales = calcularCasaModerna();
            break;
        case 'Casa de Campo':
            materiales = calcularCasaCampo();
            break;
        case 'Casa de Madera':
            materiales = calcularCasaMadera();
            break;
        case 'Casa de Cemento':
            materiales = calcularCasaCemento();
            break;
        case 'Casa de Ladrillo':
            materiales = calcularCasaLadrillo();
            break;
        case 'Casa Prefabricada':
            materiales = calcularCasaPrefabricada();
            break;
        case 'Casa de Adobe':
            materiales = calcularCasaAdobe();
            break;
        case 'Casa Sustentable':
            materiales = calcularCasaSustentable();
            break;
        default:
            alert('Tipo de casa no reconocido.');
            return;
    }

    mostrarResultados(materiales);
}

function generateCalculator(type) {
    const calculatorContainer = document.getElementById('calculatorContainer');
    let calculatorHTML = '';

    switch (type) {
        case 'Casa Moderna':
            calculatorHTML += `
                <input type="number" id="areaCasaModerna" placeholder="Área total (m²)" required min="10" max="500">
                <input type="number" id="habitacionesModerna" placeholder="Número de habitaciones" required min="1" max="10">
                <input type="number" id="banosModerna" placeholder="Número de baños" required min="1" max="6">
                <select id="materialPrincipalModerna" required>
                    <option value="">Seleccione el material principal</option>
                    <option value="ladrillo">Ladrillo</option>
                    <option value="madera">Madera</option>
                </select>
                <select id="tipoTechoModerna" required>
                    <option value="">Seleccione el tipo de techo</option>
                    <option value="teja">Teja</option>
                    <option value="metalico">Metálico</option>
                </select>
                <input type="number" id="altoCasaModerna" placeholder="Altura de la casa (m)" required min="2" max="5">
                <input type="number" id="anchoParedesModerna" placeholder="Ancho de las paredes (m)" required min="0.1" max="0.5">
                <input type="number" id="profundidadCasaModerna" placeholder="Profundidad de la casa (m)" required min="5" max="30">
                <select id="tipoPisoModerna" required>
                    <option value="">Seleccione el tipo de piso</option>
                    <option value="concreto">Concreto</option>
                    <option value="mosaico">Mosaico</option>
                </select>
           `;
            break;
        case 'Casa de Campo':
            calculatorHTML += `
                <input type="number" id="areaCasaCampo" placeholder="Área total (m²)" required>
                <input type="number" id="habitacionesCampo" placeholder="Número de habitaciones" required>
                <input type="number" id="banosCampo" placeholder="Número de baños" required>
                <select id="materialPrincipalCampo" required>
                    <option value="">Seleccione el material principal</option>
                    <option value="madera">Madera</option>
                    <option value="piedra">Piedra</option>
                    <option value="ladrillo">Ladrillo</option>
                </select>
                <input type="number" id="altoCasaCampo" placeholder="Altura de la casa (m)" required min="2" max="4">
                <input type="number" id="anchoParedesCampo" placeholder="Ancho de las paredes (m)" required min="0.1" max="0.6">
                <input type="number" id="profundidadCasaCampo" placeholder="Profundidad de la casa (m)" required min="5" max="40">
                <select id="tipoCoberturaCampo" required>
                    <option value="">Seleccione el tipo de cobertura</option>
                    <option value="teja">Teja</option>
                    <option value="telgopor">Telgopor</option>
                 </select>
                <input type="number" id="altoMuroPerimetral" placeholder="Altura del muro perimetral (m)" required>
                <input type="number" id="anchoFoso" placeholder="Ancho del foso (m)" required>
            `;
            break;
        case 'Casa de Madera':
            calculatorHTML += `
                <input type="number" id="areaCasaMadera" placeholder="Área total (m²)" required>
                <input type="number" id="habitacionesMadera" placeholder="Número de habitaciones" required>
                <input type="number" id="banosMadera" placeholder="Número de baños" required>
                <select id="tipoMadera" required>
                    <option value="">Seleccione el tipo de madera</option>
                    <option value="pino">Pino</option>
                    <option value="roble">Roble</option>
                    <option value="cedro">Cedro</option>
                </select>
                <input type="number" id="altoCasaMadera" placeholder="Altura de la casa (m)" required min="2" max="3">
                <input type="number" id="anchoParedesMadera" placeholder="Ancho de las paredes (m)" required min="0.1" max="0.4">
                <input type="number" id="profundidadCasaMadera" placeholder="Profundidad de la casa (m)" required min="4" max="25">
                <select id="tipoTechoMadera" required>
                    <option value="">Seleccione el tipo de techo</option>
                    <option value="teja">Teja</option>
                    <option value="metalico">Metálico</option>
                 </select>
                <input type="number" id="altoPisoMadera" placeholder="Altura del piso (m)" required>
                <input type="number" id="espesorTablas" placeholder="Espesor de las tablas (cm)" required>
            `;
            break;
        case 'Casa de Cemento':
            calculatorHTML += `
                <input type="number" id="areaCasaCemento" placeholder="Área total (m²)" required>
                <input type="number" id="habitacionesCemento" placeholder="Número de habitaciones" required>
                <input type="number" id="banosCemento" placeholder="Número de baños" required>
                <select id="tipoCemento" required>
                    <option value="">Seleccione el tipo de cemento</option>
                    <option value="portland">Portland</option>
                    <option value="aluminoso">Aluminoso</option>
                    <option value="blanco">Blanco</option>
                </select>
                <input type="number" id="altoCasaCemento" placeholder="Altura de la casa (m)" required min="2" max="6">
                <input type="number" id="anchoParedesCemento" placeholder="Ancho de las paredes (m)" required min="0.1" max="0.8">
                <input type="number" id="profundidadCasaCemento" placeholder="Profundidad de la casa (m)" required min="10" max="40">
                <select id="tipoIluminacion" required>
                    <option value="">Seleccione el tipo de iluminación</option>
                    <option value="natural">Natural</option>
                    <option value="artificial">Artificial</option>
                </select>   
                <input type="number" id="altoVentanas" placeholder="Altura de las ventanas (cm)" required>
            `;
            break;
        case 'Casa de Ladrillo':
            calculatorHTML += `
                <input type="number" id="areaCasaLadrillo" placeholder="Área total (m²)" required>
                <input type="number" id="habitacionesLadrillo" placeholder="Número de habitaciones" required>
                <input type="number" id="banosLadrillo" placeholder="Número de baños" required>
                <select id="tipoLadrillo" required>
                    <option value="">Seleccione el tipo de ladrillo</option>
                    <option value="comun">Común</option>
                    <option value="hueco">Hueco</option>
                    <option value="refractario">Refractario</option>
                </select>
                <input type="number" id="altoCasaLadrillo" placeholder="Altura de la casa (m)" required min="2" max="5">
                <input type="number" id="anchoParedesLadrillo" placeholder="Ancho de las paredes (m)" required min="0.1" max="0.7">
                <input type="number" id="profundidadCasaLadrillo" placeholder="Profundidad de la casa (m)" required min="10" max="35">
                <select id="tipoDiseño" required>
                    <option value="">Seleccione el tipo de diseño</option>
                    <option value="moderno">Moderno</option>
                    <option value="clásico">Clásico</option>
                   <option value="minimalista">Minimalista</option>
                </select>
                <input type="number" id="altoSistemaEnergiaSolar" placeholder="Altura del sistema de energía solar (cm)" required>
            `;
            break;
        case 'Casa Prefabricada':
            calculatorHTML += `
                <input type="number" id="areaCasaPrefabricada" placeholder="Área total (m²)" required>
                <input type="number" id="habitacionesPrefabricada" placeholder="Número de habitaciones" required>
                <input type="number" id="banosPrefabricada" placeholder="Número de baños" required>
                <select id="tipoPrefabricada" required>
                    <option value="">Seleccione el tipo de prefabricada</option>
                    <option value="modular">Modular</option>
                    <option value="paneles">Paneles</option>
                    <option value="contenedor">Contenedor</option>
                </select>
                <input type="number" id="altoCasaPrefabricada" placeholder="Altura de la casa (m)" required min="2" max="4">
                <input type="number" id="anchoParedesPrefabricada" placeholder="Ancho de las paredes (m)" required min="0.1" max="0.6">
                <input type="number" id="profundidadCasaPrefabricada" placeholder="Profundidad de la casa (m)" required min="5" max="20">
                <select id="tipoSistemaEnergiaRenovable" required>
                    <option value="">Seleccione el tipo de sistema energía renovable</option>
                    <option value="solar">Solar</option>
                    <option value="eólico">Eólico</option>
                    <option value="hidráulico">Hidráulico</option> 
                </select>
                <input type="number" id="altoSistemaEnergiaRenovable" placeholder="Altura del sistema de energía renovable (cm)" required>
            `;
            break;
        case 'Casa de Adobe':
            calculatorHTML += `
                <input type="number" id="areaCasaAdobe" placeholder="Área total (m²)" required>
                <input type="number" id="habitacionesAdobe" placeholder="Número de habitaciones" required>
                <input type="number" id="banosAdobe" placeholder="Número de baños" required>
                <select id="tipoAdobe" required>
                    <option value="">Seleccione el tipo de adobe</option>
                    <option value="tradicional">Tradicional</option>
                    <option value="estabilizado">Estabilizado</option>
                    <option value="comprimido">Comprimido</option>
                </select>
                <input type="number" id="altoCasaAdobe" placeholder="Altura de la casa (m)" required min="2" max="3">
                <input type="number" id="anchoParedesAdobe" placeholder="Ancho de las paredes (m)" required min="0.2" max="0.8">
                <input type="number" id="profundidadCasaAdobe" placeholder="Profundidad de la casa (m)" required min="5" max="25">
                <select id="tipoSistemaIrrigación" required>
                    <option value="">Seleccione el tipo de sistema irrigación</option>
                    <option value="aspersión">Aspersión</option>
                    <option value="goteo">Goteo</option>
                  <option value="riego superficial">Riego superficial</option>
                </select>
            `;
            break;
        case 'Casa Sustentable':
            calculatorHTML += `
                <input type="number" id="areaCasaSustentable" placeholder="Área total (m²)" required>
                <input type="number" id="habitacionesSustentable" placeholder="Número de habitaciones" required>
                <input type="number" id="banosSustentable" placeholder="Número de baños" required>
                <select id="materialSustentable" required>
                    <option value="">Seleccione el material sustentable</option>
                    <option value="bambu">Bambú</option>
                    <option value="paja">Paja</option>
                    <option value="reciclado">Material Reciclado</option>
                </select>
                <input type="number" id="altoCasaSustentable" placeholder="Altura de la casa (m)" required min="2" max="4">
                <input type="number" id="anchoParedesSustentable" placeholder="Ancho de las paredes (m)" required min="0.1" max="0.5">
                <input type="number" id="profundidadCasaSustentable" placeholder="Profundidad de la casa (m)" required min="5" max="30">
                <select id="sistemaEnergiaRenovable" required>
                    <option value="">Seleccione el sistema energía renovable</option>
                    <option value="solar">Solar</option>
                    <option value="eólico">Eólico</option>
                     <option value="hidráulico">Hidráulico</option>
                </select>
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
    let resultadoHTML = '<h4>Materiales Estimados:</h4><ul>';
    for (let material in materiales) {
        // Exclude the 'materialesExtra' object from the main list if it exists
        if (material !== 'materialesExtra' && materiales[material] > 0) {
            let materialName = material.replace(/_/g, ' ');
            resultadoHTML += `<li><span class="material-name">${materialName}</span> <span class="material-quantity">${materiales[material]} ${obtenerUnidad(material)}</span></li>`;
        }
    }
     // Optionally display materialsExtra separately if needed
    if (materiales.materialesExtra) {
        resultadoHTML += '</ul><h4>Materiales Extra:</h4><ul>';
        for (let extraMaterial in materiales.materialesExtra) {
             if (materiales.materialesExtra[extraMaterial] > 0) {
                let materialName = extraMaterial.replace(/_/g, ' ');
                resultadoHTML += `<li><span class="material-name">${materialName}</span> <span class="material-quantity">${materiales.materialesExtra[extraMaterial]} ${obtenerUnidad(extraMaterial)}</span></li>`;
            }
        }
    }

    resultadoHTML += '</ul>';
    resultadoHTML += '<p>Nota: Esta es una estimación aproximada. Los materiales exactos pueden variar según especificaciones detalladas y regulaciones locales.</p>';


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
function calcularCasaModerna() {
    const area = parseFloat(document.getElementById('areaCasaModerna').value);
    const habitaciones = parseInt(document.getElementById('habitacionesModerna').value);
    const banos = parseInt(document.getElementById('banosModerna').value);
    const materialPrincipal = document.getElementById('materialPrincipalModerna').value;
    const tipoTecho = document.getElementById('tipoTechoModerna').value;
    const altoCasa = parseFloat(document.getElementById('altoCasaModerna').value);
    const anchoParedes = parseFloat(document.getElementById('anchoParedesModerna').value);
    const profundidadCasa = parseFloat(document.getElementById('profundidadCasaModerna').value);
    const tipoPiso = document.getElementById('tipoPisoModerna').value;


    return {
        cemento: Math.ceil(area * 0.5),
        arena: Math.ceil(area * 0.3),
        grava: Math.ceil(area * 0.3),
        varillas_acero: Math.ceil(area * 7),
        ladrillos: materialPrincipal === 'ladrillo' ? Math.ceil(area * 60) : 0,
        madera: materialPrincipal === 'madera' ? Math.ceil(area * 0.3) : Math.ceil(area * 0.1),
        tejas: tipoTecho === 'teja' ? Math.ceil(area * 25) : 0,
        laminas: tipoTecho === 'metalico' ? Math.ceil(area * 0.5) : 0,
        pintura: Math.ceil(area * 0.2),
        ventanas: Math.ceil(habitaciones * 1.5),
        puertas: habitaciones + banos + 2,
        inodoros: banos,
        lavamanos: banos,
        duchas: banos,
        enchufes: Math.ceil((habitaciones * 4) + (banos * 2) + 10),
        interruptores: Math.ceil(habitaciones + banos + 5),
        cable_electrico: Math.ceil(area * 2.5),
        tuberia_agua: Math.ceil(area * 1.5),
        tuberia_drenaje: Math.ceil(area * 1),
        materialesExtra: {
            rejas: habitaciones + banos + 10,
            cerraduras: habitaciones + banos + 15,
            iluminacion: habitaciones + banos + 20
        }
    };
}

function calcularCasaCampo() {
    const area = parseFloat(document.getElementById('areaCasaCampo').value);
    const habitaciones = parseInt(document.getElementById('habitacionesCampo').value);
    const banos = parseInt(document.getElementById('banosCampo').value);
    const materialPrincipal = document.getElementById('materialPrincipalCampo').value;
    const altoCasa = parseFloat(document.getElementById('altoCasaCampo').value);
    const anchoParedes = parseFloat(document.getElementById('anchoParedesCampo').value);
    const profundidadCasa = parseFloat(document.getElementById('profundidadCasaCampo').value);
    const tipoCobertura = document.getElementById('tipoCoberturaCampo').value;
    const altoMuroPerimetral = parseFloat(document.getElementById('altoMuroPerimetral').value);
    const anchoFoso = parseFloat(document.getElementById('anchoFoso').value);


    // Materiales básicos para la construcción de la casa o campo
    const cemento = Math.ceil(area * 0.4);
    const arena = Math.ceil(area * 0.25);
    const grava = Math.ceil(area * 0.25);
    const varillasAcero = Math.ceil(area * 6);

    // Materiales específicos para el material principal
    let ladrillos = 0;
    let madera = Math.ceil(area * 0.2);

    if (materialPrincipal === 'ladrillo') {
        ladrillos = Math.ceil(area * 50);
        madera = Math.ceil(area * 0.4); // Ajustar si es necesario
    }

    const pintura = Math.ceil(area * 0.15);

    // Materiales adicionales basados en el número de habitaciones y baños
    const ventanas = Math.ceil(habitaciones * 1.2);
    const puertas = habitaciones + banos + 2;
    const inodoros = banos;
    const lavamanos = banos;
    const duchas = banos;
    const enchufes = Math.ceil((habitaciones * 3) + (banos * 2) + 8);
    const interruptores = Math.ceil(habitaciones + banos + 4);
    const cableElectrico = Math.ceil(area * 2);
    const tuberiaAgua = Math.ceil(area * 1.2);
    const tuberiaDrenaje = Math.ceil(area * 0.8);

    // Materiales extra adicionales para el diseño y funcionalidad
    const rejas = habitaciones + banos + 12;
    const cerraduras = habitaciones + banos + 18;
    const iluminacion = habitaciones + banos + 25;
    const ventilacion = habitaciones + banos + 30;

    return {
        cemento,
        arena,
        grava,
        varillasAcero,
        ladrillos,
        madera,
        pintura,
        ventanas,
        puertas,
        inodoros,
        lavamanos,
        duchas,
        enchufes,
        interruptores,
        cableElectrico,
        tuberiaAgua,
        tuberiaDrenaje,
        materialesExtra: {
            rejas,
            cerraduras,
            iluminacion,
            ventilacion
        }
    };
}

function calcularCasaMadera() {
    const area = parseFloat(document.getElementById('areaCasaMadera').value);
    const habitaciones = parseInt(document.getElementById('habitacionesMadera').value);
    const banos = parseInt(document.getElementById('banosMadera').value);
    const tipoMadera = document.getElementById('tipoMadera').value;
    const altoCasa = parseFloat(document.getElementById('altoCasaMadera').value);
    const anchoParedes = parseFloat(document.getElementById('anchoParedesMadera').value);
    const profundidadCasa = parseFloat(document.getElementById('profundidadCasaMadera').value);
    const tipoTecho = document.getElementById('tipoTechoMadera').value;
    const altoPiso = parseFloat(document.getElementById('altoPisoMadera').value);
    const espesorTablas = parseFloat(document.getElementById('espesorTablas').value);


    return {
        madera: Math.ceil(area * 0.6),
        cemento: Math.ceil(area * 0.3),
        pintura: Math.ceil(area * 0.1),
        ventanas: Math.ceil(habitaciones * 1.2),
        puertas: habitaciones + banos + 2,
        inodoros: banos,
        lavamanos: banos,
        duchas: banos,
        enchufes: Math.ceil((habitaciones * 3) + (banos * 2) + 8),
        interruptores: Math.ceil(habitaciones + banos + 4),
        cable_electrico: Math.ceil(area * 1.5),
        tuberia_agua: Math.ceil(area * 1),
        tuberia_drenaje: Math.ceil(area * 0.6),
        materialesExtra: {
            rejas: habitaciones + banos + 10,
            cerraduras: habitaciones + banos + 15,
            iluminacion: habitaciones + banos + 20,
            ventilacion: habitaciones + banos + 25
        }
    };
}

function calcularCasaCemento() {
    const area = parseFloat(document.getElementById('areaCasaCemento').value);
    const habitaciones = parseInt(document.getElementById('habitacionesCemento').value);
    const banos = parseInt(document.getElementById('banosCemento').value);
    const tipoCemento = document.getElementById('tipoCemento').value;
    const altoCasa = parseFloat(document.getElementById('altoCasaCemento').value);
    const anchoParedes = parseFloat(document.getElementById('anchoParedesCemento').value);
    const profundidadCasa = parseFloat(document.getElementById('profundidadCasaCemento').value);
    const tipoIluminacion = document.getElementById('tipoIluminacion').value;
    const altoVentanas = parseFloat(document.getElementById('altoVentanas').value);

    return {
        cemento: Math.ceil(area * 0.7),
        arena: Math.ceil(area * 0.35),
        grava: Math.ceil(area * 0.35),
        varillas_acero: Math.ceil(area * 8),
        pintura: Math.ceil(area * 0.25),
        ventanas: Math.ceil(habitaciones * 1.5),
        puertas: habitaciones + banos + 2,
        inodoros: banos,
        lavamanos: banos,
        duchas: banos,
        enchufes: Math.ceil((habitaciones * 4) + (banos * 2) + 10),
        interruptores: Math.ceil(habitaciones + banos + 5),
        cable_electrico: Math.ceil(area * 2.5),
        tuberia_agua: Math.ceil(area * 1.5),
        tuberia_drenaje: Math.ceil(area * 1),
        materialesExtra: {
            rejas: habitaciones + banos + 12,
            cerraduras: habitaciones + banos + 18,
            iluminacion: habitaciones + banos + 22,
            ventilacion: habitaciones + banos + 28
        }
    };
}

function calcularCasaLadrillo() {
    const area = parseFloat(document.getElementById('areaCasaLadrillo').value);
    const habitaciones = parseInt(document.getElementById('habitacionesLadrillo').value);
    const banos = parseInt(document.getElementById('banosLadrillo').value);
    const tipoLadrillo = document.getElementById('tipoLadrillo').value;
    const altoCasa = parseFloat(document.getElementById('altoCasaLadrillo').value);
    const anchoParedes = parseFloat(document.getElementById('anchoParedesLadrillo').value);
    const profundidadCasa = parseFloat(document.getElementById('profundidadCasaLadrillo').value);
    const tipoDiseño = document.getElementById('tipoDiseño').value;
    const altoSistemaEnergiaSolar = parseFloat(document.getElementById('altoSistemaEnergiaSolar').value);

    return {
        ladrillos: Math.ceil(area * 60),
        cemento: Math.ceil(area * 0.5),
        arena: Math.ceil(area * 0.3),
        grava: Math.ceil(area * 0.3),
        varillas_acero: Math.ceil(area * 7),
        pintura: Math.ceil(area * 0.2),
        ventanas: Math.ceil(habitaciones * 1.5),
        puertas: habitaciones + banos + 2,
        inodoros: banos,
        lavamanos: banos,
        duchas: banos,
        enchufes: Math.ceil((habitaciones * 4) + (banos * 2) + 10),
        interruptores: Math.ceil(habitaciones + banos + 5),
        cable_electrico: Math.ceil(area * 2.5),
        tuberia_agua: Math.ceil(area * 1.5),
        tuberia_drenaje: Math.ceil(area * 1),
        materialesExtra: {
            rejas: habitaciones + banos + 15,
            cerraduras: habitaciones + banos + 20,
            iluminacion: habitaciones + banos + 25,
            ventilacion: habitaciones + banos + 30
        }
    };
}

function calcularCasaPrefabricada() {
    const area = parseFloat(document.getElementById('areaCasaPrefabricada').value);
    const habitaciones = parseInt(document.getElementById('habitacionesPrefabricada').value);
    const banos = parseInt(document.getElementById('banosPrefabricada').value);
    const tipoPrefabricada = document.getElementById('tipoPrefabricada').value;
    const altoCasa = parseFloat(document.getElementById('altoCasaPrefabricada').value);
    const anchoParedes = parseFloat(document.getElementById('anchoParedesPrefabricada').value);
    const profundidadCasa = parseFloat(document.getElementById('profundidadCasaPrefabricada').value);
    const tipoSistemaEnergiaRenovable = document.getElementById('tipoSistemaEnergiaRenovable').value;
    const altoSistemaEnergiaRenovable = parseFloat(document.getElementById('altoSistemaEnergiaRenovable').value);


    return {
        prefabricados: Math.ceil(area * 0.7),
        cemento: Math.ceil(area * 0.2),
        pintura: Math.ceil(area * 0.1),
        ventanas: Math.ceil(habitaciones * 1.2),
        puertas: habitaciones + banos + 2,
        inodoros: banos,
        lavamanos: banos,
        duchas: banos,
        enchufes: Math.ceil((habitaciones * 3) + (banos * 2) + 8),
        interruptores: Math.ceil(habitaciones + banos + 4),
        cable_electrico: Math.ceil(area * 1.5),
        tuberia_agua: Math.ceil(area * 1),
        tuberia_drenaje: Math.ceil(area * 0.6),
        materialesExtra: {
            rejas: habitaciones + banos + 10,
            cerraduras: habitaciones + banos + 15,
            iluminacion: habitaciones + banos + 20,
            ventilacion: habitaciones + banos + 25
        }
    };
}

function calcularCasaAdobe() {
    const area = parseFloat(document.getElementById('areaCasaAdobe').value);
    const habitaciones = parseInt(document.getElementById('habitacionesAdobe').value);
    const banos = parseInt(document.getElementById('banosAdobe').value);
    const tipoAdobe = document.getElementById('tipoAdobe').value;
    const altoCasa = parseFloat(document.getElementById('altoCasaAdobe').value);
    const anchoParedes = parseFloat(document.getElementById('anchoParedesAdobe').value);
    const profundidadCasa = parseFloat(document.getElementById('profundidadCasaAdobe').value);
    const tipoSistemaIrrigación = document.getElementById('tipoSistemaIrrigación').value;


    return {
        adobe: Math.ceil(area * 0.6),
        cemento: Math.ceil(area * 0.2),
        pintura: Math.ceil(area * 0.1),
        ventanas: Math.ceil(habitaciones * 1.2),
        puertas: habitaciones + banos + 2,
        inodoros: banos,
        lavamanos: banos,
        duchas: banos,
        enchufes: Math.ceil((habitaciones * 3) + (banos * 2) + 8),
        interruptores: Math.ceil(habitaciones + banos + 4),
        cable_electrico: Math.ceil(area * 1.5),
        tuberia_agua: Math.ceil(area * 1),
        tuberia_drenaje: Math.ceil(area * 0.6),
        materialesExtra: {
            rejas: habitaciones + banos + 12,
            cerraduras: habitaciones + banos + 18,
            iluminacion: habitaciones + banos + 24,
            ventilacion: habitaciones + banos + 30
        }
    };
}

function calcularCasaSustentable() {
    const area = parseFloat(document.getElementById('areaCasaSustentable').value);
    const habitaciones = parseInt(document.getElementById('habitacionesSustentable').value);
    const banos = parseInt(document.getElementById('banosSustentable').value);
    const materialSustentable = document.getElementById('materialSustentable').value;
    const altoCasa = parseFloat(document.getElementById('altoCasaSustentable').value);
    const anchoParedes = parseFloat(document.getElementById('anchoParedesSustentable').value);
    const profundidadCasa = parseFloat(document.getElementById('profundidadCasaSustentable').value);
    const sistemaEnergiaRenovable = document.getElementById('sistemaEnergiaRenovable').value;


    return {
        paneles_solares: Math.ceil(area * 0.1),
        sistema_recolecta_agua: Math.ceil(area * 0.05),
        materiales_ecologicos: Math.ceil(area * 0.4),
        ventanas: Math.ceil(habitaciones * 1.2),
        puertas: habitaciones + banos + 2,
        inodoros: banos,
        lavamanos: banos,
        duchas: banos,
        enchufes: Math.ceil((habitaciones * 3) + (banos * 2) + 8),
        interruptores: Math.ceil(habitaciones + banos + 4),
        cable_electrico: Math.ceil(area * 1.5),
        tuberia_agua: Math.ceil(area * 1),
        tuberia_drenaje: Math.ceil(area * 0.6),
        materialesExtra: {
            rejas: habitaciones + banos + 15,
            cerraduras: habitaciones + banos + 22,
            iluminacion: habitaciones + banos + 30,
            ventilacion: habitaciones + banos + 35
        }
    };
}