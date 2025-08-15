# BuildApp — Calculadora de Materiales y Presupuesto de Construcción

Aplicación web para estimar materiales por sistema constructivo y (próximamente) calcular presupuesto. Incluye un rediseño con estética “sitio en construcción” (amarillo seguridad, gris hormigón, naranja vallas y azul de planos), navegación unificada y formularios optimizados.

## Características
- Calculadora de materiales por sistema constructivo (Albañilería confinada, Hormigón armado, Madera, Steel Framing, Prefabricada, Adobe).
- UI/UX “Under Construction”: cintas de precaución animadas, líneas de andamio, partículas, barra de progreso y tipografía de alto contraste.
- Modal de cálculo con diseño responsivo y formularios en grilla de dos columnas.
- Página de presupuesto en desarrollo (secciones de materiales, mano de obra y documentos).

## Requisitos
- Node.js 16+ (recomendado 18+)
- npm 8+

## Instalación
1. Clona el repositorio y entra al proyecto:
   ```bash
   git clone https://github.com/Dicip/buildapp.git
   cd buildapp
   ```
2. Instala dependencias:
   ```bash
   npm install
   ```

## Ejecución
- Desarrollo (recarga con Nodemon):
  ```bash
  npm run dev
  ```
  Servidor en: http://localhost:3000/

- Producción (Node):
  ```bash
  npm start
  ```
  Puedes establecer PORT si lo deseas (por defecto 3000).

## Estructura del proyecto (resumen)
```
buildapp/
├── public/
│   ├── index.html              # Inicio (tema “Under Construction”)
│   ├── calculadora.html        # Selección de sistemas + modal de cálculo
│   ├── presupuesto.html        # Calculadora de presupuesto (en desarrollo)
│   ├── style.css               # Estilos globales y tema visual
│   ├── js/
│   │   ├── controller.js       # Lógica de UI y generador de formularios
│   │   └── coeficientes.json   # Datos/coeficientes para cálculos
│   └── img/                    # Activos gráficos (logo e íconos)
├── server.js                   # Servidor Express (estáticos + ruta raíz)
├── package.json                # Scripts y dependencias
└── README.md                   # Este archivo
```

## Uso
1. Inicia el servidor y visita http://localhost:3000/.
2. Desde “Calculadora”, elige un sistema constructivo para abrir el modal.
3. Completa los campos; los formularios usan una grilla de dos columnas y validaciones básicas.
4. “Presupuesto” mostrará (WIP) secciones para materiales, mano de obra y documentos.

## Contribución
¡Las contribuciones son bienvenidas!
1. Crea un issue para discutir la propuesta o bug.
2. Haz un fork y crea una rama descriptiva:
   ```bash
   git checkout -b feat/nombre-corto
   ```
3. Aplica cambios siguiendo el estilo existente (HTML semántico, CSS con variables, JS modular en `controller.js`).
4. Commits claros (por ejemplo: `feat:`, `fix:`, `style:`, `refactor:`).
5. Abre un Pull Request enlazando el issue y describe el cambio.

## Notas
- No incluyas llaves/secretos en el repo ni en logs.
- Verifica en el navegador y en la terminal que no existan errores antes de abrir PR.