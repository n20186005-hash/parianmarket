// Diccionario de textos de la interfaz (prosa que no vive en las listas de datos).
// El español es la fuente principal; el inglés es su traducción para la versión /en/.
export const content = {
  es: {
    htmlLang: 'es-MX',
    ogLocale: 'es_MX',
    tdk: {
      title: 'El Parián Puebla: artesanías, horario y cómo llegar',
      description:
        'Guía independiente del Mercado de Artesanías El Parián en el Centro Histórico de Puebla, México horario, artesanías, cómo llegar, estacionamiento, costos, comida cercana, servicios y consejos de visita.'
    },
    schemaDescription:
      'Guía independiente del Mercado de Artesanías El Parián en el Centro Histórico de Puebla: ubicación, horario, artesanías, servicios, historia y consejos de visita.',
    breadcrumbHome: 'Inicio',
    hero: {
      eyebrow: 'Centro Histórico de Puebla · Mercado artesanal',
      h1Html: 'Mercado de Artesanías <em>El Parián</em> (Puebla)',
      introHtml:
        'El <strong>Mercado de Artesanías El Parián</strong> —conocido simplemente como <strong>El Parián de Puebla</strong>— es un corredor de ladrillo, azulejo y oficios poblanos: una parada clásica para descubrir cerámica, textiles, ónix, barro y recuerdos en el corazón del <strong>Centro Histórico de Puebla</strong>, en el estado de <strong>Puebla</strong>, <strong>México</strong>.',
      cta1: 'Planear la visita',
      cta2: 'Abrir en Google Maps',
      trust: [
        { big: '10:00–20:00', small: 'Horario publicado por turismo municipal' },
        { big: '1801', small: 'Referencia histórica del mercado' },
        { big: '4.5 / 5', small: 'Google Maps · 28,659 reseñas · 23 oct 2026' }
      ],
      panel: {
        badge: 'PUEBLA',
        title: 'Antes de ir',
        dl: [
          { dt: 'Zona', dd: 'Centro Histórico' },
          { dt: 'Tiempo sugerido', dd: '45–75 min' },
          { dt: 'Acceso', dd: 'Entrada gratuita en guías municipales consultadas' },
          { dt: 'Mejor ritmo', dd: 'Mañana entre semana' }
        ],
        micro:
          'Consejo: si una pieza se vende como Talavera con denominación de origen, pide información sobre certificación y procedencia.'
      }
    },
    identity: [
      { n: '01', html: '<strong>Mercado de Artesanías El Parián</strong><br/>Puebla de Zaragoza, Puebla, México' },
      { n: '02', html: '<strong>Plazuela de San Roque</strong><br/>Antecedente histórico del entorno' },
      { n: '03', html: '<strong>Artesanía poblana</strong><br/>Cerámica, textiles, ónix, barro y vidrio' }
    ],
    history: {
      eyebrow: 'Una plaza hecha mercado',
      h2: 'El Parián y la memoria comercial de Puebla',
      paragraphs: [
        'La Asociación Nacional de Ciudades Mexicanas del Patrimonio Mundial relaciona El Parián con la antigua plazuela de San Roque y con 1801. Su descripción distingue la etapa de mercado de artesanías desde 1961.',
        'Esa fuente publica una descripción de 112 locales y una oferta de cerámica, textiles y otros trabajos artesanales de Puebla. La cifra no es un recuento actual de puestos abiertos; consulta con cada vendedor su disponibilidad.',
        'Para conocer la historia publicada y el contexto del conjunto, consulta la fuente enlazada. Esta guía independiente ofrece sugerencias de visita y no representa a la administración del mercado.'
      ],
      sourceBoxHtml:
        'Fuente histórica: <a href="https://www.ciudadespatrimonio.mx/el-parian/" target="_blank" rel="noopener noreferrer">Asociación Nacional de Ciudades Mexicanas del Patrimonio Mundial</a>. Su descripción publicada no garantiza el estado actual de cada puesto.'
    },
    timeline: { eyebrow: 'De la plaza al mercado', h2: 'Dos referencias históricas publicadas' },
    stories: { eyebrow: 'Contexto publicado', h2: 'El mercado en la descripción de Ciudades Patrimonio' },
    artesanias: {
      eyebrow: 'Qué mirar con atención',
      h2: 'Artesanías que cuentan Puebla',
      cards: [
        { icon: '✦', title: 'Cerámica y Talavera', text: 'Platos, azulejos y piezas decorativas con el lenguaje cromático que identifica a Puebla. La certificación importa si buscas Talavera protegida.' },
        { icon: '⌁', title: 'Textiles y bordados', text: 'Prendas, manteles, accesorios y piezas bordadas que reúnen motivos regionales y trabajo manual.' },
        { icon: '◆', title: 'Ónix, barro y vidrio', text: 'Objetos utilitarios y decorativos en materiales habituales de la oferta artesanal poblana.' },
        { icon: '✺', title: 'Miniaturas y dulces', text: 'Pequeños recuerdos y especialidades regionales fáciles de integrar a una visita por el Centro Histórico.' }
      ]
    },
    visita: {
      eyebrow: 'Plan práctico',
      h2: 'Visitar El Parián sin improvisar',
      cards: [
        { span: 'Horario', h3: 'Lunes a domingo · 10:00–20:00', text: 'Horario publicado por Turismo del Municipio de Puebla. En festivos o eventos extraordinarios conviene reconfirmar.' },
        { span: 'Costos', h3: 'Entrada gratuita en guías municipales', text: 'Guías del Ayuntamiento han listado El Parián con entrada gratuita. La compra de artesanías es independiente y conviene verificar condiciones extraordinarias en eventos especiales.' },
        { span: 'Mejor momento', h3: '10:00–12:00 entre semana', text: 'Es una recomendación editorial para recorrer con más calma; no es un horario oficial de baja afluencia.' },
        { span: 'Duración', h3: '45–75 minutos', text: 'Reserva hasta 90 minutos si quieres comparar piezas, conversar con vendedores o sumar museos cercanos.' }
      ]
    },
    weather: {
      eyebrow: 'Antes de salir',
      h2: 'Clima en el Centro de Puebla',
      lead: 'Condiciones actuales y pronóstico de varios días para planear tu visita a El Parián. Se actualiza cada vez que abres la página.'
    },
    servicios: {
      eyebrow: 'Servicios y comodidades',
      h2: 'Lo que hay alrededor del mercado',
      lead: 'El Parián no anuncia servicios propios para visitantes, pero el primer cuadro del Centro Histórico ofrece lo necesario para una visita cómoda. Esta guía menciona tipos de servicio, no negocios concretos.'
    },
    comoLlegar: {
      eyebrow: 'Movilidad',
      h2: 'Cómo llegar y dónde estacionar',
      blocks: [
        { h3: 'A pie desde el Zócalo', text: 'El Parián está dentro del Centro Histórico y se integra bien a un recorrido peatonal desde el Zócalo, la Catedral y la zona de museos. El trayecto suele tomar alrededor de 10 minutos según el punto de partida y el ritmo.' },
        { h3: 'Transporte público', text: 'Varias rutas circulan por los ejes de Boulevard Héroes del 5 de Mayo y 2 Oriente. Baja en una parada céntrica y completa el último tramo a pie; confirma la ruta vigente el mismo día.' },
        { h3: 'Taxi o aplicación', text: 'Usa como destino “Mercado de Artesanías El Parián, Puebla”. En horas con calles cerradas o mucha actividad, puede ser más práctico descender a una o dos cuadras.' },
        { h3: 'Estacionamiento', text: 'La ficha municipal no anuncia estacionamiento propio. Hay estacionamientos públicos de pago en el Centro Histórico, incluidos establecimientos en el entorno de 6 Oriente. Revisa tarifa, horario y altura máxima al llegar.' }
      ]
    },
    map: {
      eyebrow: 'Ubicación exacta',
      h2: 'Dos referencias de dirección, un mismo mercado',
      linesHtml: [
        '<strong>Turismo municipal:</strong> 6 Norte 205, Centro Histórico.',
        '<strong>Ficha de Google Maps facilitada:</strong> Mercado de artesanías El Parián local 111, 72000 Heroica Puebla de Zaragoza.'
      ],
      plusCodeLabel: 'Plus Code:',
      plusCodeTail: 'Heroica Puebla de Zaragoza, Puebla, México.',
      micro: 'La diferencia corresponde a la forma en que distintas fuentes describen el acceso o el local. Para navegación, usa el pin del mapa.',
      govLinksHtml:
        'Para información oficial y actualizada del lugar, consulta el <a href="https://visita.pueblacapital.gob.mx/" target="_blank" rel="noopener noreferrer">Portal de Turismo del Municipio de Puebla</a> y la <a href="https://sectur.puebla.gob.mx/" target="_blank" rel="noopener noreferrer">Secretaría de Turismo del Estado de Puebla</a>.',
      iframeTitle: 'Mapa de Mercado de Artesanías El Parián en Puebla'
    },
    alrededores: {
      eyebrow: 'Haz una ruta',
      h2: 'Sabores y lugares cercanos',
      lead: 'El Parián funciona mejor como una parada dentro de un paseo por el Centro Histórico.',
      cards: [
        { cls: 'nearby food', span: 'Comer', h3: 'Sabores poblanos', text: 'Busca mole poblano, chalupas, cemitas, molotes y dulces tradicionales. La zona del Centro Histórico concentra múltiples opciones; esta guía no prioriza negocios concretos.' },
        { cls: 'nearby', span: 'Museo', h3: 'Casa de los Hermanos Serdán', text: 'Una de las visitas culturales más próximas, asociada al inicio de la Revolución Mexicana.' },
        { cls: 'nearby', span: 'Arte', h3: 'San Pedro Museo de Arte', text: 'Un buen complemento para cambiar del comercio artesanal a una lectura museística del patrimonio poblano.' },
        { cls: 'nearby', span: 'Patrimonio', h3: 'Casa de Alfeñique y Biblioteca Palafoxiana', text: 'Dos referencias clave del Centro Histórico que pueden integrarse al mismo recorrido peatonal.' }
      ]
    },
    fotografia: {
      eyebrow: 'Para tu lente',
      h2: 'Dónde tomar las mejores fotos',
      lead: 'Ideas de encuadre para retratar el mercado con respeto por su actividad comercial.'
    },
    galeria: {
      eyebrow: 'Ilustraciones conceptuales',
      h2: 'El Parián en imágenes',
      lead: 'Gráficos originales sobre arcos, cerámica y textiles. Son ilustraciones conceptuales, no fotografías ni representaciones exactas del mercado actual.',
      creditLabel: 'Fotografía',
      seeLabel: 'Ver créditos de esta guía',
      items: []
    },
    etiqueta: {
      eyebrow: 'Etiqueta del visitante',
      h2: 'Un mercado se recorre con respeto',
      doTitle: 'Se recomienda',
      dontTitle: 'Se agradece evitar'
    },
    temporadas: {
      eyebrow: 'Cuándo ir',
      h2: 'Estrategia de visita por temporada',
      lead: 'El clima de Puebla es de altiplano: la temporada de lluvias (jun–oct) trae chubascos por las tardes, mientras que el resto del año es seco y templado. Esta guía usa promedios climáticos típicos de la región para ayudarte a elegir el mejor momento, no predicciones puntuales.',
      tableHead: ['Temporada', 'Clima típico', 'Recomendación', 'Qué llevar'],
      climateNote: 'Las condiciones reales varían año con año; consulta siempre el pronóstico cercano a tu fecha de visita (módulo de clima más arriba).'
    },
    rutas: {
      eyebrow: 'Tu tipo de visita',
      h2: 'Rutas según el perfil del visitante',
      lead: 'Tres recorridos sugeridos por ritmo y motivo. No recomendamos comercios concretos: solo tipos de experiencia y servicios.'
    },
    itinerarios: {
      eyebrow: 'Planifica tu recorrido',
      h2: 'Itinerarios sugeridos',
      lead: 'Dos opciones según el tiempo disponible. Combínalas con los museos del primer cuadro del Centro Histórico.'
    },
    responsabilidad: {
      eyebrow: 'Ciencia ciudadana y respeto',
      h2: 'Responsabilidad del visitante',
      lead: 'El Parián es un espacio vivo de comercio y oficio. Estas pautas ayudan a cuidarlo y a entenderlo mejor, sin promover marcas ni negocios específicos.'
    },
    faq: { eyebrow: 'Preguntas frecuentes', h2: 'FAQ de El Parián Puebla' },
    sources: {
      eyebrow: 'Fuentes de referencia',
      h2: 'Información contrastada, no afiliación oficial',
      links: [
        { href: 'https://visita.pueblacapital.gob.mx/directorio/itemlist/category/31-mercados-de-artesanias', strong: 'Turismo del Municipio de Puebla', span: 'Dirección y horario del mercado' },
        { href: 'https://sectur.puebla.gob.mx/', strong: 'Secretaría de Desarrollo Turístico de Puebla', span: 'Contexto turístico estatal' },
        { href: 'https://www.ciudadespatrimonio.mx/el-parian/', strong: 'Ciudades Patrimonio de México', span: 'Historia, artesanías y horario general' },
        { href: '/CREDITS.txt', strong: 'Créditos de esta guía', span: 'Ilustraciones originales conceptuales · CC0' }
      ],
      noteHtml:
        '<p><strong>Nota editorial:</strong> guía independiente. Los horarios generales se contrastan con el directorio municipal y la descripción histórica con Ciudades Patrimonio; la ficha de Maps es una observación de terceros fechada. Los horarios y la oferta de cada vendedor pueden variar. Revisión: 23 de octubre de 2026.</p>'
    },
    ui: {
      nav: { historia: 'Historia', historias: 'Historias', artesanias: 'Artesanías', galeria: 'Galería', servicios: 'Servicios', faq: 'FAQ' },
      ctaLlegar: 'Cómo llegar',
      footerLead: 'Guía independiente para comprender y visitar el Mercado de Artesanías El Parián, en el Centro Histórico de Puebla.',
      footerInfo: 'Información',
      footerPrivacy: 'Privacidad',
      footerTerms: 'Términos de servicio',
      footerCookies: 'Configuración de cookies',
      footerSources: 'Fuentes públicas',
      footerNotes: [
        'Este sitio es un proyecto independiente y sin fines de lucro de información para visitantes; no tiene relación de dependencia con el H. Ayuntamiento de Puebla, el Gobierno del Estado de Puebla, la Secretaría de Turismo del Gobierno de México ni con la administración del mercado.',
        'Las fuentes específicas se enlazan en el contenido. Los planes de visita son sugerencias editoriales; confirma con cada proveedor sus horarios y condiciones. No contiene recomendaciones comerciales pagadas.',
        'Las tres ilustraciones originales se identifican como conceptuales y se ofrecen bajo CC0. Créditos y archivos: /CREDITS.txt.',
        '© 2026 Guía de El Parián Puebla. Ilustraciones originales: CC0; otros contenidos según sus derechos aplicables.'
      ],
      langSwitch: { label: 'Idioma', es: 'Español', en: 'English' }
    }
  },
  en: {
    htmlLang: 'en',
    ogLocale: 'en_US',
    tdk: {
      title: 'Mercado de Artesanías El Parián (Puebla) | Visitor Guide & Location',
      description:
        'Plan your visit to the Mercado de Artesanías El Parián in the Historic Center of Puebla, Mexico opening hours, crafts, how to get there, parking, cost, nearby food, services and visitor tips.'
    },
    schemaDescription:
      'Independent guide to the Mercado de Artesanías El Parián in the Historic Center of Puebla: location, hours, crafts, services, history and visitor tips.',
    breadcrumbHome: 'Home',
    hero: {
      eyebrow: 'Historic Center of Puebla · Craft market',
      h1Html: 'Mercado de Artesanías <em>El Parián</em> (Puebla)',
      introHtml:
        'The <strong>Mercado de Artesanías El Parián</strong> —simply known as <strong>El Parián de Puebla</strong>— is a corridor of brick, tile and Pueblan crafts: a classic stop to discover ceramics, textiles, onyx, clay and souvenirs in the heart of the <strong>Historic Center of Puebla</strong>, in the state of <strong>Puebla</strong>, <strong>Mexico</strong>.',
      cta1: 'Plan your visit',
      cta2: 'Open in Google Maps',
      trust: [
        { big: '10:00–20:00', small: 'Hours published by municipal tourism' },
        { big: '1801', small: 'Historical reference of the market' },
        { big: '4.5 / 5', small: 'Google Maps · 28,659 reviews · 23 Oct 2026' }
      ],
      panel: {
        badge: 'PUEBLA',
        title: 'Before you go',
        dl: [
          { dt: 'Area', dd: 'Historic Center' },
          { dt: 'Suggested time', dd: '45–75 min' },
          { dt: 'Access', dd: 'Free entry in consulted municipal guides' },
          { dt: 'Best pace', dd: 'Weekday morning' }
        ],
        micro:
          'Tip: if a piece is sold as Talavera with denomination of origin, ask about its certification and provenance.'
      }
    },
    identity: [
      { n: '01', html: '<strong>Mercado de Artesanías El Parián</strong><br/>Puebla de Zaragoza, Puebla, Mexico' },
      { n: '02', html: '<strong>Plazuela de San Roque</strong><br/>Historical antecedent of the area' },
      { n: '03', html: '<strong>Pueblan crafts</strong><br/>Ceramics, textiles, onyx, clay and glass' }
    ],
    history: {
      eyebrow: 'A plaza turned market',
      h2: 'El Parián and the commercial memory of Puebla',
      paragraphs: [
        'The National Association of Mexican World Heritage Cities associates El Parián with the former San Roque square and 1801. Its account distinguishes the crafts-market phase from 1961.',
        'That source publishes a description of 112 units and an offering of ceramics, textiles and other Puebla crafts. The figure is not a current count of open stalls; check availability with individual vendors.',
        'Read the linked source for the published historical account and context. This independent guide offers visitor suggestions and does not represent the market administration.'
      ],
      sourceBoxHtml:
        'Historical source: <a href="https://www.ciudadespatrimonio.mx/el-parian/" target="_blank" rel="noopener noreferrer">National Association of Mexican World Heritage Cities</a>. Its published description does not guarantee current conditions at every stall.'
    },
    timeline: { eyebrow: 'From the plaza to the market', h2: 'Two published historical references' },
    stories: { eyebrow: 'Published context', h2: 'The market in the World Heritage Cities account' },
    artesanias: {
      eyebrow: 'What to look at closely',
      h2: 'Crafts that tell Puebla',
      cards: [
        { icon: '✦', title: 'Ceramics and Talavera', text: 'Plates, tiles and decorative pieces with the chromatic language that identifies Puebla. Certification matters if you look for protected Talavera.' },
        { icon: '⌁', title: 'Textiles and embroidery', text: 'Garments, tablecloths, accessories and embroidered pieces that gather regional motifs and manual work.' },
        { icon: '◆', title: 'Onyx, clay and glass', text: 'Utility and decorative objects in materials usual to the Pueblan craft offer.' },
        { icon: '✺', title: 'Miniatures and sweets', text: 'Small souvenirs and regional specialties easy to add to a walk through the Historic Center.' }
      ]
    },
    visita: {
      eyebrow: 'Practical plan',
      h2: 'Visit El Parián without improvising',
      cards: [
        { span: 'Hours', h3: 'Monday to Sunday · 10:00–20:00', text: 'Hours published by the Tourism Office of the Municipality of Puebla. On holidays or extraordinary events it is worth reconfirming.' },
        { span: 'Cost', h3: 'Free entry in municipal guides', text: 'City Council guides have listed El Parián as free entry. Buying crafts is separate, and extraordinary conditions should be verified for special events.' },
        { span: 'Best time', h3: '10:00–12:00 on weekdays', text: 'This is an editorial recommendation to walk more calmly; it is not an official low-attendance schedule.' },
        { span: 'Duration', h3: '45–75 minutes', text: 'Allow up to 90 minutes if you want to compare pieces, talk to sellers or add nearby museums.' }
      ]
    },
    weather: {
      eyebrow: 'Before you go',
      h2: 'Weather in Puebla City Center',
      lead: 'Current conditions and a multi-day forecast to plan your visit to El Parián. It refreshes every time you open the page.'
    },
    servicios: {
      eyebrow: 'Services and amenities',
      h2: 'What is around the market',
      lead: 'El Parián does not advertise its own services for visitors, but the city center offers what is needed for a comfortable visit. This guide mentions types of service, not specific businesses.'
    },
    comoLlegar: {
      eyebrow: 'Getting around',
      h2: 'How to get there and where to park',
      blocks: [
        { h3: 'On foot from the Zócalo', text: 'El Parián is within the Historic Center and fits well into a walking route from the Zócalo, the Cathedral and the museum zone. The walk usually takes about 10 minutes depending on the starting point and pace.' },
        { h3: 'Public transport', text: 'Several routes run along the axes of Boulevard Héroes del 5 de Mayo and 2 Oriente. Get off at a central stop and walk the last stretch; confirm the current route on the day.' },
        { h3: 'Taxi or ride app', text: 'Use as destination “Mercado de Artesanías El Parián, Puebla”. When streets are closed or very busy, it may be more practical to get off one or two blocks away.' },
        { h3: 'Parking', text: 'The municipal sheet does not advertise its own parking. There are paid public parking lots in the Historic Center, including establishments around 6 Oriente. Check rate, hours and maximum height on arrival.' }
      ]
    },
    map: {
      eyebrow: 'Exact location',
      h2: 'Two address references, one market',
      linesHtml: [
        '<strong>Municipal tourism:</strong> 6 Norte 205, Centro Histórico.',
        '<strong>Provided Google Maps sheet:</strong> Mercado de artesanías El Parián local 111, 72000 Heroica Puebla de Zaragoza.'
      ],
      plusCodeLabel: 'Plus Code:',
      plusCodeTail: 'Heroica Puebla de Zaragoza, Puebla, Mexico.',
      micro: 'The difference corresponds to how different sources describe the access or the shop. For navigation, use the map pin.',
      govLinksHtml:
        'For official and updated information about the place, consult the <a href="https://visita.pueblacapital.gob.mx/" target="_blank" rel="noopener noreferrer">Tourism Portal of the Municipality of Puebla</a> and the <a href="https://sectur.puebla.gob.mx/" target="_blank" rel="noopener noreferrer">Tourism Secretariat of the State of Puebla</a>.',
      iframeTitle: 'Map of Mercado de Artesanías El Parián in Puebla'
    },
    alrededores: {
      eyebrow: 'Build a route',
      h2: 'Flavors and nearby places',
      lead: 'El Parián works best as a stop within a walk through the Historic Center.',
      cards: [
        { cls: 'nearby food', span: 'Eat', h3: 'Pueblan flavors', text: 'Look for mole poblano, chalupas, cemitas, molotes and traditional sweets. The Historic Center area concentrates multiple options; this guide does not prioritize specific businesses.' },
        { cls: 'nearby', span: 'Museum', h3: 'Casa de los Hermanos Serdán', text: 'One of the closest cultural visits, linked to the beginning of the Mexican Revolution.' },
        { cls: 'nearby', span: 'Art', h3: 'San Pedro Museo de Arte', text: 'A good complement to switch from craft commerce to a museum reading of Pueblan heritage.' },
        { cls: 'nearby', span: 'Heritage', h3: 'Casa de Alfeñique and Biblioteca Palafoxiana', text: 'Two key references of the Historic Center that can be added to the same walking route.' }
      ]
    },
    fotografia: {
      eyebrow: 'For your lens',
      h2: 'Where to take the best photos',
      lead: 'Framing ideas to portray the market with respect for its commercial activity.'
    },
    galeria: {
      eyebrow: 'Conceptual illustrations',
      h2: 'El Parián in images',
      lead: 'Original graphics about arches, ceramics and textiles. These are conceptual illustrations, not photographs or exact depictions of the current market.',
      creditLabel: 'Photograph',
      seeLabel: 'See this guide’s credits',
      items: []
    },
    etiqueta: {
      eyebrow: 'Visitor etiquette',
      h2: 'A market is walked with respect',
      doTitle: 'Recommended',
      dontTitle: 'Please avoid'
    },
    temporadas: {
      eyebrow: 'When to go',
      h2: 'Visit strategy by season',
      lead: 'Puebla has a highland climate: the rainy season (Jun–Oct) brings afternoon showers, while the rest of the year is dry and mild. This guide uses typical regional climate averages to help you choose the best time, not point predictions.',
      tableHead: ['Season', 'Typical climate', 'Recommendation', 'What to bring'],
      climateNote: 'Real conditions vary year to year; always check the forecast close to your visit date (weather module above).'
    },
    rutas: {
      eyebrow: 'Your type of visit',
      h2: 'Routes by visitor profile',
      lead: 'Three suggested routes by pace and purpose. We do not recommend specific businesses: only types of experience and services.'
    },
    itinerarios: {
      eyebrow: 'Plan your route',
      h2: 'Suggested itineraries',
      lead: 'Two options depending on available time. Combine them with the city-center museums.'
    },
    responsabilidad: {
      eyebrow: 'Citizen science and respect',
      h2: 'Visitor responsibility',
      lead: 'El Parián is a living space of commerce and craft. These guidelines help care for it and understand it better, without promoting specific brands or businesses.'
    },
    faq: { eyebrow: 'Frequently asked questions', h2: 'El Parián Puebla FAQ' },
    sources: {
      eyebrow: 'Reference sources',
      h2: 'Cross-checked information, not official affiliation',
      links: [
        { href: 'https://visita.pueblacapital.gob.mx/directorio/itemlist/category/31-mercados-de-artesanias', strong: 'Tourism of the Municipality of Puebla', span: 'Market address and hours' },
        { href: 'https://sectur.puebla.gob.mx/', strong: 'Puebla State Tourism Development Secretariat', span: 'State tourism context' },
        { href: 'https://www.ciudadespatrimonio.mx/el-parian/', strong: 'Ciudades Patrimonio de México', span: 'History, crafts and general hours' },
        { href: '/CREDITS.txt', strong: 'This guide’s credits', span: 'Original conceptual illustrations · CC0' }
      ],
      noteHtml:
        '<p><strong>Editorial note:</strong> independent guide. General hours are checked against the municipal directory and historical context against the World Heritage Cities account; the Maps listing is a dated third-party observation. Individual vendors’ hours and selection may vary. Reviewed: 23 October 2026.</p>'
    },
    ui: {
      nav: { historia: 'History', historias: 'Stories', artesanias: 'Crafts', galeria: 'Gallery', servicios: 'Services', faq: 'FAQ' },
      ctaLlegar: 'How to get there',
      footerLead: 'Independent guide to understand and visit the Mercado de Artesanías El Parián, in the Historic Center of Puebla.',
      footerInfo: 'Information',
      footerPrivacy: 'Privacy',
      footerTerms: 'Terms of service',
      footerCookies: 'Cookie settings',
      footerSources: 'Public sources',
      footerNotes: [
        'This site is an independent, non-profit information project for visitors; it has no dependency relationship with the H. Ayuntamiento de Puebla, the Government of the State of Puebla, the Tourism Secretariat of the Government of Mexico, or the market administration.',
        'Specific sources are linked in the content. Visit plans are editorial suggestions; confirm hours and conditions with each provider. It contains no paid commercial recommendations.',
        'Original illustrations are labelled conceptual and offered under CC0.',
        '© 2026 Guía de El Parián Puebla. Original illustrations: CC0; other content subject to its applicable rights.'
      ],
      langSwitch: { label: 'Language', es: 'Español', en: 'English' }
    }
  }
} as const;

export type Locale = 'es' | 'en';
export type Content = (typeof content)['es'];
