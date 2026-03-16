@beautifulMention te paso los requerimeintos, haceme las preguntas necesarias para lograr las definiciones faltantes y que puedas construir el sitio en su totalidad. SECCIÓN 1: IDENTIDAD Y OBJETIVO DEL PROYECTO
[INST]
Contexto del Proyecto:
Estamos construyendo la landing page institucional para una agencia de desarrollo web con un modelo de negocio de "Servicio Productizado" (productized service).
* Nombre de la Agencia: [Tu Nombre de Agencia, ej: "WebScale AI"]
* Misión: Ofrecer sitios web de alto rendimiento de forma estandarizada y transparente.
* Diferencial: Desarrollo rápido basado en plantillas probadas, con precios claros y sin presupuestos ocultos.
Objetivo de la Web:
La web debe actuar como un "Constructor de Proyecto" o configurador interactivo. El usuario debe poder seleccionar su "Paquete Base" (excluyente), añadir "Opcionales" (múltiples) y ver cómo el precio se actualiza en tiempo real. Finalmente, debe haber un CTA claro para enviar la solicitud.
SECCIÓN 2: ESPECIFICACIONES TÉCNICAS (PARA ANTIGRAVITY)
Stack Tecnológico Requerido:
1. Framework: Next.js (App Router).
2. Lenguaje: TypeScript.
3. Styling: Tailwind CSS.
4. Generación: Static Site Generation (SSG) por defecto para máximo rendimiento. La lógica del configurador debe manejarse en el cliente ('use client').
5. Interacciones: Sutiles y fluidas. Usar Framer Motion para animaciones de entrada (fades) y transiciones de estado de las tarjetas.
Requerimientos de Performance:
La web debe estar optimizada para Google Core Web Vitals. La IA debe estructurar el código para lograr un puntaje de 98+ en Lighthouse Performance.
SECCIÓN 3: ESTRUCTURA DE LA PÁGINA (Single Page)
0. Navigation Bar (Minimalista)
* Logo: [Tu Logo]
* Links: [Cómo Funciona], [Catálogo], [FAQ]
* CTA: Botón [Empezar Configuración] (Mismo comportamiento que el Hero CTA).
1. Hero Section (El Gancho)
* Título Principal (H1): "Tu Sitio Web Profesional en Tiempo Récord, con Precios 100% Transparentes. "
* Subtítulo: "Sin presupuestos ocultos ni demoras infinitas. Elegí tu base, sumá tus opcionales y lanzá."
* CTA: Botón [Empezar Configuración] que scrollea suavemente a la Sección 2.
* Interacción: Incluir microanimación en el CTA al hacer hover.
2. El Configurador Interactivo (El Corazón de la Web)
Esta sección debe programarse para gestionar un "estado de carrito". La IA debe crear un useContext o useState para rastrear las selecciones y actualizar el precio total en tiempo real.
PASO 1: Elegí tu Base (Excluyente - Radio Buttons visuales)
Crear tarjetas visuales e interactivas para cada opción. Solo una puede estar seleccionada.
1. Paquete: Landing
    * Contenido: Página web estática de 1 sección, Form de contacto.
    * Precio: USD 1000
    * Interacciones: 3 interacciones con el equipo (ver FAQ).
    * Bóton: [Ver Demo] (Enlace externo ficticio a la plantilla).
2. Paquete: Home y 1 sección adicional
    * Contenido: Páginas web estáticas de 2 secciones, Form de Contacto, Menú superior.
    * Precio: USD 1500
    * Interacciones: 3 interacciones con el equipo.
3. Paquete: Home y 2 secciones adicionales
    * Contenido: Páginas web estáticas de 3 secciones, Form de Contacto, Menú superior.
    * Precio: USD 2000
    * Interacciones: 4 interacciones con el equipo.
4. Paquete: Home y 3 secciones adicionales
    * Contenido: Páginas web estáticas de 4 secciones, Form de Contacto, Menú superior.
    * Precio: USD 2500
    * Interacciones: 4 interacciones con el equipo.
PASO 2: Potenciá tu sitio (Adicionales - Checkboxes visuales)
Crear una lista de tarjetas de opcionales. Múltiples selecciones permitidas.
1. Bot Personalizado (AI)
    * Descripción: Chatbot inteligente integrado para atención al cliente y ventas.
    * Precio: USD 800
    * Interacción: Poner un badge sutil de "Más Popular".
2. CMS (Gestor de Contenidos)
    * Descripción: Panel autoadministrable para editar tus textos e imágenes fácilmente.
    * Precio: USD 1000
3. 2 Microanimaciones
    * Descripción: Animaciones sutiles que mejoran la experiencia de usuario (ej: scroll, hover).
    * Precio: USD 500
4. Animación Home
    * Descripción: Una animación de introducción de alto impacto en la sección principal.
    * Precio: USD 1000
5. Hosting y Soporte Básico
    * Descripción: Alojamiento anual en servidores optimizados y soporte por email.
    * Precio: USD 300 /año
    * Interacción: En el JSON y en la UI, este ítem debe marcarse como "Recurrente Anual".
PASO 3: Tu Resumen y Total
Una barra lateral o un panel inferior flotante que muestre:
* Base: [Nombre del Paquete Base seleccionado]
* Adicionales: [Lista de adicionales tildados]
* Resumen de Precios:
    * Total Desarrollo (One-time): USD [Monto Total Desarrollo]
    * Mantenimiento Anual: USD [Monto Total Recurrente, ej: 300]
* CTA Final: Botón [Solicitar mi Configuración]. Este botón abre una modal con el formulario de contacto (Paso 4).
3. Sección "Nuestra Propuesta de Valor" (Bento Grid)
Un diseño de 3 columnas explicando los beneficios del modelo:
* Col 1: Diseño de Alto Rendimiento (Mencionar Next.js).
* Col 2: Velocidad de Lanzamiento (Tiempos definidos).
* Col 3: Transparencia Radical (Precios fijos).
4. FAQ (Preguntas Frecuentes)
Esta sección es crucial para manejar objeciones de la estandarización. Diseñarla con acordeones (Show/Hide).
* ¿Qué es una "Interacción con el Equipo"?
    * Respuesta: Una interacción se define como una videollamada de 30 minutos o una ronda de feedback enviada por email. Esto nos permite mantener los costos bajos y la eficiencia alta.
* ¿Puedo personalizar el diseño?
    * Respuesta: Sí, puedes elegir entre nuestra galería de plantillas de alto rendimiento y nosotros personalizamos los colores, tipografía y contenido con tu marca.
* ¿Qué pasa si necesito algo que no está en el catálogo?
    * Respuesta: No hay problema. Podemos cotizarte un proyecto 100% customizado tras una reunión inicial.
5. Contacto / Formulario (Modal)
Campos: Nombre, Email, Configuración Seleccionada (Poblada automáticamente), Mensaje (Opcional).
SECCIÓN 4: REQUERIMIENTOS DE ESTILO Y DISEÑO (PARA STITCH)
La IA debe usar este bloque para definir el "Look & Feel" en Stitch.
Principios de Diseño y Referencia Visual:
* Estilo Principal: Minimalista, modular, "Bento Grid".
* Referencia Directa: Inspirarse en la web de Linear.app. Copiar la estructura de tarjetas independientes, el uso de espacios en blanco y la claridad tipográfica.
* Bordes: Usar sutilmente border-gray-200 o border-gray-100 de Tailwind para las tarjetas del configurador. Bordes redondeados sutiles (ej: rounded-xl).
* Interacciones (UI): Al seleccionar un Paquete Base o Adicional, la tarjeta debe tener un borde resaltado y un ligero efecto de elevación (shadow).
* Tipografía: Usar Google Fonts. Sans-Serif moderna y geométrica (ej: Inter o Outfit).
* Colores:
    * Fondo: Light Mode. Blanco puro (#FFFFFF) para las tarjetas y un gris muy claro (#F9FAFB) para el fondo general de la sección.
    * Acento: Un azul vibrante o verde esmeralda para CTAs y el precio final.
    * Recurrente: Mostrar el precio anual en un color sutil diferente para distinguirlo del total de desarrollo.
SECCIÓN 5: ESTRUCTURA DE DATOS (JSON)
La IA debe estructurar el componente para recibir datos desde un archivo JSON para que el diseño sea elástico y soporte más o menos opciones sin romperse.
Ejemplo de JSON Requerido (src/data/opciones.json):
JSON

{
  "paquetesBase": [
    { "id": "landing", "titulo": "Landing Page", "paginas": 1, "precio": 1000, "items": ["Página estática", "Form contacto"], "interacciones": 3, "demoUrl": "#" },
    { "id": "home-1", "titulo": "Home + 1 sección", "paginas": 2, "precio": 1500, "items": ["Páginas estáticas", "Form contacto", "Menú superior"], "interacciones": 3 }
  ],
  "adicionales": [
    { "id": "bot-ai", "titulo": "Bot Personalizado", "descripcion": "IA entrenada con tu data", "precio": 800, "popular": true },
    { "id": "cms", "titulo": "CMS (Gestor de Contenidos)", "descripcion": "Panel autoadministrable", "precio": 1000 },
    { "id": "micro-anim", "titulo": "2 Microanimaciones", "descripcion": "Mejora la UX", "precio": 500 },
    { "id": "home-anim", "titulo": "Animación Home", "descripcion": "Animación de alto impacto", "precio": 1000 },
    { "id": "hosting", "titulo": "Hosting + Soporte", "descripcion": "Mantenimiento anual premium", "precio": 300, "recurrente": true, "periodo": "/año" }
  ]
}
Instrucción de Layout Elástico:
Para garantizar que el diseño no se rompa al agregar o quitar ítems del JSON, utilizá grid-cols-[repeat(auto-fill,minmax(300px,1fr))] en los contenedores de las tarjetas.
