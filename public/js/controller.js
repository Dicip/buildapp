<h3>🏗️ Sistema de Construcción</h3>
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

<button onclick="calcularMateriales('${type}')">Calcular Materiales Necesarios</button>
<div id="result"></div>