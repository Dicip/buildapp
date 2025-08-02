# Informe técnico: Tipos de construcción de viviendas en Chile

## Introducción

A continuación se describen los principales sistemas constructivos habitacionales en Chile, detallando su método de ejecución, materiales y especificaciones técnicas, así como las fórmulas de cálculo estructural y de cantidades. Al final se presenta una comparación de costo, vida útil y sostenibilidad ambiental de cada sistema. Se citan normas chilenas relevantes (OGUC, NCh) y referencias especializadas para respaldar la información.
## Albañilería confinada
La albañilería confinada consiste en muros de albañilería (ladrillo o bloques cerámicos/ladrillos de tierra cocida) rodeados (“confinados”) en sus bordes por elementos de concreto armado (pilares y cadenas horizontales). Este sistema combina la resistencia del muro (trabaja a compresión) con la ductilidad de la armadura de hormigón. La ejecución típica es secuencial: se colocan las zapatas y los pilares de hormigón armado, luego se levantan los muros de albañilería (usando mortero de cemento-arena) encajando estos muros dentro del marco de pilares y vigas. Cada vano de muro queda “enmarcado” por pilares y cadenas de hormigón que se vacían en obra una vez levantado el muro. Las vigas y cadenas suelen ser de dimensiones mínimas (p.ej. 15×20 cm) según OGUC, y los pilares de sección acorde con la altura del muro (p.ej. 15×15 cm a 25×25 cm). El mortero de asiento suele ser cemento Portland y arena fina en proporción 1:3 ó 1:4 (NCh2256/1) y la junta horizontal se refuerza con mortero fluido en los ladrillos aligerados. El hormigón de pilares y cadenas debe cumplir NCh1928 (por ejemplo, f’c ≈ 210 kgf/cm²), y la armadura vertical (tensores) suele ser barras de acero de refuerzo de Ø10–16 mm. La NCh2123:1997 especifica requisitos de diseño: por ejemplo, define la resistencia básica a compresión del conjunto como
f'm = x̄ - 0.431(x₅ - x₁)
donde $\bar{x}$ es la resistencia media de probetas y $x_5, x_1$ los percentiles (ver NCh2123
confinedmasonry.org
). En la práctica, el cálculo estructural considera la carga axial sobre pilares (por ejemplo $N = A\cdot\sigma_{adm}$, área por tensión admisible) y la capacidad flector de cadenas. Para cuantificar materiales se emplea: volumen de hormigón $V=\text{(sección pilar)}\times \text{largo}$ o $V=A\cdot L$, área de muro $A_m=L \times espesor$, número de ladrillos $N=\frac{A_m}{área_{ladrillo}+junta}$. Las fórmulas de ingeniería incluyen la capacidad axial de pilares reforzados y los momentos de inercia de muros para sismo. En cuanto a costos, la albañilería confinada es tradicionalmente más económica que el hormigón armado (en rango social, ~7–10 UF/m² en vivienda básica) debido al uso abundante de mano de obra. Su durabilidad puede superar los 50 años si se usa ladrillo cerámico grado 1 (bajo normas NCh2250) y mortero de buena calidad. En términos ambientales, tiene mediocre aislación térmica y alto uso de materiales pesados (cemento y acero). Según la OGUC, en construcción en zonas frías los elementos de hormigón (pilares, cadenas) quedan exentos de aislamiento (Tabla 1) si se cumple NCh2123
modulor.cl
; sin embargo, en general este sistema requiere agregar aislación sobre el muro exterior (poliestireno, lana mineral) para cumplir exigencias térmicas. El hormigón y el acero contribuyen significativamente a la huella de carbono (cemento y acero representan ~15% de las emisiones sectoriales
certificacionsustentable.cl
), y su reciclabilidad es baja (los ladrillos pueden reutilizarse pero el hormigón no).
## Hormigón armado
La estructura de hormigón armado se basa en pilares, vigas y losas de hormigón colados en obra, con refuerzo de acero corrugado (NCh263). Se emplean zapatas aisladas o radier y pilares de concreto armado, unidos por vigas de cimentación que conforman un marco rígido. En casas de uno o varios pisos, las losas suelen ser de hormigón (vigueta y bovedilla o losa alveolar). Este método permite grandes luces y flexibilidad arquitectónica. Los materiales son cemento Portland y áridos según NCh1038 (resistencia del concreto), acero de alta ductilidad (fierro con fy ≈ 4200 kgf/cm² según NCh171) para armaduras. El diseño sigue NCh430:2007 (o D.S.60/2011) que incorpora fórmulas ACI. Por ejemplo, el momento nominal de una sección rectangular se calcula como
M_n = A_s f_y (d - a/2),
donde $A_s$ es área de acero, $f_y$ su tensión de fluencia, $d$ altura efectiva, y $a=\frac{A_s f_y}{0.85 f'c b}$ (anchura $b$ del muro/viga). La capacidad a compresión de pilares se obtiene de $N_n = 0.85 f'c (A_g - A_s) + f_y A_s$. Para hormigón simple, la resistencia se estima por ensayos NCh1038. Las acciones sísmicas se resuelven con fundamentos NCh433 (ditto Piedra y cadenas de hormigón). Las fórmulas de cantidades: volumen de hormigón $V = L \times sección$, peso propio $W = \gamma , V$, cantidad de acero $M = \text{peso por m}\times \text{largo}$. Ejemplo: $V{columna}=A{col}\cdot h_{piso}$. Los costos de hormigón armado son altos (aprox. +15–20 UF/m² en obra gruesa de standard medio-alto). Su vida útil es muy larga (+100 años) con mínimo mantenimiento. Sin embargo, requiere gran energía en producción (alto CO₂ por cemento) y la estructura final tiene baja eficiencia térmica (gran inercia, pero conductividad alta) a menos que se integre aislación. Según la Estrategia Nacional de Huella de Carbono, el cemento y acero producen ~15% de las emisiones del sector construcción en Chile
certificacionsustentable.cl
. El hormigón usado (mezclas tipo Atm3 o similar) y el acero son 100% reciclables como materias primas secundarias, pero el desmontaje es complejo.
## Madera
La construcción en madera emplea elementos estructurales de madera aserrada o de ingeniería (vigas, columnas, paneles) unidos con herrajes metálicos. Puede ser entramado (frame 2×4″ ó 2×6″) o con paneles contralaminados (CLT). Se levantan plataformas de piso, se instalan montantes verticales empotrados en las vigas perimetrales, se colocan travesaños horizontales (correas) y luego entramados de techo. Los acabados interiores y exteriores se revisten con tablones, enchapado u otros paneles. Chile cuenta con normas NCh1970/1 y /2 para clasificación visual de madera y NCh1198:2014 para cálculo estructural de construcciones en madera
madera21.cl
. Estas normas proveen tensiones admisibles (NCh1990, NCh2165) para flexión, compresión paralela a la fibra, etc. Por ejemplo, la tensión admisible por flexión puede ser del orden de 800–1200 kgf/cm² (según especie y clase estructural NCh1989). En diseño se usan ecuaciones clásicas (mano ACI modificada): momento $M = \sigma_{adm},I/y$ o $M_n = Z f_{adm}$. En obra es fundamental controlar la humedad (ideal < 15%) para evitar defectos. Los materiales son madera de pino radiata u otras maderas nativas (con durabilidad natural baja/moderada, tratadas según NCh819) y tableros estructurales (OSB, contrachapado). El costo de construcción en madera es competitivo (suelo estimarse ~10–15 UF/m² en vivienda tipo), aunque depende de diseño y calidad; es menor que el concreto armado pero algo más alto que albañilería simple. La madera ofrece muy buena aislación térmica (conductividad ~0,12 W/m·K) y baja inercia, favoreciendo eficiencia energética. Su vida útil puede ser de 50–80 años (según durabilidad natural, NCh789 clasifica de “muy durable” >20 años hasta “no durable” <5 años) si se mantiene protegido de humedad e insectos
madera21.cl
. Ambientalmente es el material más sustentable: captura CO₂ (aprox. 1,6 tCO₂ por m³ de madera
madera21.cl
) y demanda poca energía de producción (la madera blanda requiere 4 veces menos energía que el ladrillo
madera21.cl
). Además, es renovable y reutilizable, y los desechos (astillas, aserrín) son reciclables o combustibles. Las desventajas son la vulnerabilidad al fuego (requiere protecciones) y necesidad de tratamiento químico contra hongos (costo adicional, NCh819 prescribe preservantes).
## Acero liviano (Steel Framing)
El steel framing es un sistema industrializado de construcción en seco, basado en perfiles de chapa de acero galvanizado de espesor ligero (normalmente 0,6–1,2 mm; perﬁles C y U) que reemplazan al entramado de madera. Se arman montantes y canales en planta con tornillos autoperforantes, formando la estructura portante de muros y techos. Las láminas de acero se fijan a piso de radier o vigas metálicas, y se unen con cintas horizontales (costillas) para rigidez lateral. Después se instalan paneles aislantes (lana mineral, poliestireno, poliuretano) entre perfiles, y se remata con planchas exteriores (fibrocemento, tablas, cerámica) e interiores (tableros de yeso). Según Seco Steel, “el steel framing es un sistema constructivo industrializado basado en la utilización de perfiles estructurales de acero liviano”
secosteel.com
. El acero galvanizado cumple normas NCh para aceros estructurales (NCh2423, NCh2839) y la absorción sísmica se garantiza con conexiones atornilladas. Las fórmulas de cálculo estructural (flexión, compresión, corte) son idénticas a las usadas en madera pero con los valores de acero (módulo de elasticidad ~2.1e6 kgf/cm², fy ≈ 2400–3500 kgf/cm² según calibre y norma). Por ejemplo, la resistencia de un montante a pandeo local se calcula con la fórmula de Euler $P_{cr}=\frac{\pi^2EI}{(K L)^2}$. La cantidad de acero se estima por peso lineal: $m = \rho_s \cdot t \cdot L$, donde $\rho_s=7.85$ g/cm³, $t$ el espesor. El costo del steel frame es comparable al de la madera (o ligeramente superior), del orden de 12–18 UF/m² en obra gruesa, pero su montaje es más rápido (hasta 1/3 de tiempo de mampostería) y con menor mano de obra intensiva. La estructura metálica es muy duradera (+80–100 años) gracias al galvanizado anticorrosivo. Sin embargo, la transmisión térmica es alta en los perfiles (puentes térmicos lineales) por lo que es imprescindible un buen aislante envolvente. En ambiente sísmico ofrece excelente ductilidad. Respecto a sostenibilidad, el acero se recicla completamente (100%) y su energía incorporada es alta (alto carbono), pero la industrialización genera bajo desperdicio de obra. Puede lograrse alta eficiencia energética final si se instala aislación adecuada (R > 3–4 m²K/W cumpliendo OGUC). En cuanto a emisiones, el acero tiene huella de CO₂ elevada (parte de esos 15% sectorial
certificacionsustentable.cl
), pero es de los materiales más reciclables.
## Construcción prefabricada y modular
Las viviendas prefabricadas o modulares integran elementos producidos en fábrica (paneles, módulos completos) que se ensamblan en terreno. Existen módulos de hormigón (paneles prefabricados, containers adaptados), de madera (casas armadas) o estructuras metálicas industriales. El sistema se caracteriza por procesos serializados y control de calidad en planta. La norma NCh3744:2023 define el concepto de construcción industrializada y prefabricada
construye2025.cl
. En obra se requiere cimientos o radier, y luego se instalan módulos ensamblando muros, cubiertas y conexiones hidráulicas/eléctricas. Los materiales específicos varían: por ejemplo, paneles SIP (sandwich con tablero y aislación) o módulos de hormigón pretensado. Estructuralmente, cada panel o módulo se calcula según su material base (ver secciones anteriores: si es madera, usar NCh1198; si es concreto, NCh430; si es acero, diseños equivalentes). Las fórmulas de cálculo y cantidades de material se aplican a cada elemento prefabricado de forma análoga (volumen de concreto del módulo, área de panel, etc.). Un factor clave es la optimización de secciones y uniones para transporte y grúa. En términos de costos, las viviendas prefabricadas suelen tener precios iniciales bajos, debido al ahorro de obra y tiempo. Según estimaciones de mercado en Chile, las casas prefabricadas parten en ~24–30 UF/m² (sin contar traslado, fundaciones e instalaciones complementarias)
artechearquitecto.com
. Con IVA y trabajos adicionales, llega a ~30 UF/m². Esto es notablemente menor que los 35–40 UF/m² que valen construcciones tradicionales de alto estándar
artechearquitecto.com
. Su durabilidad estimada es comparable a la construcción tradicional: en una casa prefabricada de calidad puede esperarse vida útil de ~50–60 años
eterna.cl
, similar o superior a algunas viviendas convencionales. En cuanto a sostenibilidad, depende de los materiales: los módulos de acero reutilizan el material y facilitan reciclaje, mientras que los de madera aportan a la captura de CO₂. En general, la industrialización permite mayor eficiencia (menor desperdicio, mejor control térmico de fachadas) y se alinean con políticas de Construye2025 para vivienda industrializada
construye2025.cl
. Además, la norma NCh3744 aporta claridad en definiciones clave (“modular”, “industrializado”, “prefabricado”) para normativas futuras
construye2025.cl
.
## Construcción en tierra (adobe y quincha)
Las técnicas tradicionales de construcción en tierra incluyen el adobe (ladrillos de barro secado al sol) y la quincha (enfoscado de barro sobre un entramado de madera o carrizo). En el adobe se moldean ladrillos de tierra arcillosa y paja, que al secarse se apilan y unen con barro. En quincha ligera, se realiza primero un esqueleto de madera y cañas (tabiques), rellenándose con barro. Ambas técnicas siguen pasos sencillos: cimientos superficiales (piedra o zapatas de hormigón), armado de muros de adobe o armado de sillares de caña, y finalmente revoco de barro y cal para impermeabilizar. No existe una norma chilena vigente para cálculo formal de muros de adobe actuales. Históricamente el Decreto 1464 de 1960 permitía muros de adobe y materiales ligeros en ciertas obras rurales, pero hoy estos sistemas suelen emplearse en construcción patrimonial o ecológica más que en vivienda social moderna. Las fórmulas de cálculo son empíricas: se acostumbra que los muros de adobe tengan espesores grandes (≥ 30–40 cm) para soportar carga vertical (σ adm baja, ~0.5 MPa) y para aislamiento térmico. El empuje lateral se combate con cadenas de madera/concreto horizontales integradas cada ciertos muros o alturas. La cantidad de material se estima con $V = A_{\rm muro}\cdot espesor$ (volumen de tierra/paja por m²). El costo de materia prima es muy bajo (barro local, cañas), pero la mano de obra puede ser intensiva. La vida útil tradicional del adobe bien mantenido puede ser de varias décadas (30–50 años), aunque está expuesta a lluvias fuertes y requiere mantenimiento constante (revocos). La quincha es menos durable que el adobe (vida ~20–30 años) debido a su menor inercia. Estos sistemas destacan por su eficiencia energética (mucha masa térmica: retienen calor) y muy baja huella de carbono (tierra local, sin cemento ni fabricación industrial). Además, al fin de su vida los materiales vuelven a la tierra (reciclables). Su principal desventaja es su baja resistencia a sismos fuertes (falta de ductilidad), por lo que hoy se suele reforzar con red de acero o cuerdas de fibra para mejorar la tenacidad. Organismos patrimoniales abogan por desarrollar normativa especial, ya que la ingeniería moderna aún no ha codificado plenamente estos métodos
patrimoniocultural.gob.cl
.
## Comparativa de sistemas
Sistema	Costo referencial (UF/m²)    Vida útil estimada    Sostenibilidad ambiental
Albañilería confinada	7–12 UF/m² (básico)    ≥ 50 años (ladrillo ≥30–50, concreto ≥100)    Uso intensivo de cemento y acero (alta huella de CO₂); aislamientos agregan eficiencia energética mediocres. Reciclaje parcial (ladrillos)
certificacionsustentable.cl
.
Hormigón armado	≥ 15–20 UF/m² (obra gris)	≥ 100 años	Muy durable; alto consumo energético (cemento, acero representan ~15% emisiones sectoriales
certificacionsustentable.cl
); poco reciclable (agregado reutilizable con dificultad). Requiere aislación adicional.
Madera	~10–15 UF/m²	50–80 años (según durabilidad)	Material renovable de baja energía embebida; captura CO₂ (≈1.6 tCO₂/m³
madera21.cl
); buen aislamiento intrínseco. Requiere preservación contra humedad/termita (NCh819).
Steel framing	~12–18 UF/m²	80–100 años	Estructura 100% reciclable; acero de alta huella (emisiones) pero alta durabilidad. Menos desperdicio en obra; requiere aislante térmico de buena R (sino puentes térmicos).
Prefabricada	~24–30 UF/m² (incluye IVA y obras extra)
artechearquitecto.com
50–60 años (o más)
eterna.cl
Eficiente en uso de materiales; depende del material base (prefab de madera aprovecha captura de CO₂, de acero hereda reciclabilidad). Se busca alta eficiencia energética por diseño en fábrica. Menor m2 desperdiciado.
Tierra (adobe/quincha)	3–6 UF/m² (muy bajo)	20–50 años (según mantenimiento)	Material local, casi sin carbono embebido; excelente aislamiento por masa; totalmente reciclable. Muy bajo impacto en fabricación. Pobre sismorresistencia sin refuerzos.
Costo: los valores referenciales provienen de fuentes del sector
artechearquitecto.com
artechearquitecto.com
. La vivienda social en hormigón o albañilería suele costar ~7–10 UF/m² (normado), mientras que proyectos de alto estándar pueden superar 35 UF/m². Las prefabricadas actuales de precio de catálogo (~24–30 UF/m²) resultan en costo final competitivo tras sumar IVA y obras complementarias
artechearquitecto.com
.
Durabilidad: los sistemas con estructuras de hormigón o acero brindan mayor vida útil (>80–100 años). La madera en buenas condiciones dura varias décadas; la albañilería de ladrillo durable depende del tipo de ladrillo (clases Mqp, MqHv). Los sistemas de tierra son de menor vida útil salvo estricta mantención.
Sostenibilidad ambiental: en general, madera y tierra destacan por su baja energía incorporada y efectos positivos (captura de CO₂ en madera). El concreto y el acero tienen alta huella de carbono (cemento y acero suman gran parte de emisiones del sector
certificacionsustentable.cl
) y menor reciclabilidad efectiva (hormigón demolido es relleno, acero se recicla). El steel framing, pese a usar acero, permite un montaje limpio y 100% recuperable. Los prefabricados, al optimizar materiales y reducidos descartes en obra, suelen tener menor impacto que construcción tradicional equivalente. Todos los sistemas deben incorporar aislación térmica (poliestireno, lanas, etc.) para lograr eficiencia energética conforme al código (oguc).
## Fuentes

Normas oficiales y estudios técnicos chilenos. Por ejemplo, la NCh2123 y OGUC regulan la albañilería confinada
confinedmasonry.org
modulor.cl
; el D.S.60 de 2011 adopta el ACI para el hormigón armado; la NCh1198 define el cálculo para madera
madera21.cl
; la nueva NCh3744:2023 codifica conceptos de construcción prefabricada
construye2025.cl
. Se suman guías y comparativas del sector
artechearquitecto.com
madera21.cl
certificacionsustentable.cl
. Estas referencias respaldan las características técnicas, las fórmulas de cálculo mencionadas y las estimaciones de costos, durabilidad y sostenibilidad.