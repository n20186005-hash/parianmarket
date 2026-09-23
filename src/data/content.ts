// Diccionario de textos de la interfaz (prosa que no vive en las listas de datos).
// El español es la fuente principal; el inglés es su traducción para la versión /en/.
export const content = {
  es: {
    htmlLang: 'es-MX',
    ogLocale: 'es_MX',
    tdk: {
      title: 'Mercado de Artesanías El Parián (Puebla) | Guía de visita y ubicación',
      description:
        'Guía independiente del Mercado de Artesanías El Parián en el Centro Histórico de Puebla, México (2RV4+7M): horario, artesanías, cómo llegar, estacionamiento, costos, comida cercana, servicios y consejos de visita.'
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
        { big: '4.5 / 5', small: '28,579 reseñas en la ficha facilitada' }
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
        'La historia turística de Puebla relaciona El Parián con la antigua Plazuela de San Roque y sitúa su conformación como mercado en 1801. El conjunto conserva una imagen muy reconocible: fachadas de ladrillo, detalles de azulejo y pequeños locales alineados alrededor del corredor.',
        'El origen del edificio se remonta a una madrugada de enero de 1796: un incendio de causa no documentada destruyó 23 estancos de madera del Portal de las Flores, frente a la Catedral. El intendente Manuel de Flón encargó entonces al arquitecto Antonio Santamaría Inchárragui el diseño de los nuevos locales, que se levantaron en la antigua Plazuela de San Roque y dieron forma al Parián que hoy se recorre.',
        'Durante más de siglo y medio el espacio funcionó como mercado general, punto de llegada y reventa de mercancías. En 1961 se convirtió formalmente en el mercado típico de artesanías: unos 112 locales que hoy concentran cerámica, textiles, ónix, vidrio, barro y dulces procedentes de distintas regiones del estado.',
        'Hoy funciona principalmente como mercado de artesanías. Su valor para el visitante no está sólo en comprar un recuerdo, sino en reconocer materiales y técnicas vinculadas con la identidad poblana, dentro de un Centro Histórico inscrito en la Lista del Patrimonio Mundial de la UNESCO desde 1987.'
      ],
      sourceBoxHtml:
        'Entidad verificada: esta guía usa el nombre completo, ubicación, geodatos y referencias cruzadas de turismo municipal y estatal para evitar confundir El Parián de Puebla con mercados homónimos de otras ciudades.'
    },
    timeline: { eyebrow: 'De la plaza al mercado', h2: 'Una historia en cinco momentos' },
    stories: { eyebrow: 'Historias y leyendas', h2: 'Lo que pocas veces se cuenta sobre El Parián' },
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
      eyebrow: 'Fotografía documental',
      h2: 'El Parián en imágenes',
      lead: 'Fotografías reales del mercado y su cerámica, con créditos y licencia de Wikimedia Commons.',
      creditLabel: 'Fotografía',
      seeLabel: 'Ver en Wikimedia Commons',
      items: [
        { alt: 'Mercado de Artesanías El Parián — vista principal en Puebla, México', cap: 'El corredor artesanal del mercado', author: 'Luis Alvaz · CC BY-SA 4.0', href: 'https://commons.wikimedia.org/wiki/File:Mercado_El_Pari%C3%A1n,_Puebla_06.jpg' },
        { alt: 'Arcos y fachadas de ladrillo del Mercado El Parián, Puebla', cap: 'Arcos, ladrillo y azulejo', author: 'Luis Alvaz · CC BY-SA 4.0', href: 'https://commons.wikimedia.org/wiki/File:Mercado_El_Pari%C3%A1n,_Puebla_04.jpg' },
        { alt: 'Puestos de artesanías del Mercado El Parián, Puebla', cap: 'Puestos y mercancía', author: 'Luis Alvaz · CC BY-SA 4.0', href: 'https://commons.wikimedia.org/wiki/File:Mercado_El_Pari%C3%A1n,_Puebla_08.jpg' },
        { alt: 'Detalles de las piezas artesanales del Mercado El Parián, Puebla', cap: 'Detalles de la oferta poblana', author: 'Luis Alvaz · CC BY-SA 4.0', href: 'https://commons.wikimedia.org/wiki/File:Mercado_El_Pari%C3%A1n,_Puebla_10.jpg' },
        { alt: 'Cerámica de Puebla, tradición artesanal del estado', cap: 'Cerámica poblana', author: 'Hector Garcia · CC BY-SA 2.0', href: 'https://commons.wikimedia.org/wiki/File:Ceramica_de_Puebla.jpg' }
      ]
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
        { href: 'https://visita.pueblacapital.gob.mx/atractivos/los-imperdibles-de-puebla/itemlist/category/31-mercados-de-artesanias', strong: 'Turismo del Municipio de Puebla', span: 'Dirección y horario del mercado' },
        { href: 'https://sectur.puebla.gob.mx/', strong: 'Secretaría de Desarrollo Turístico de Puebla', span: 'Contexto turístico estatal' },
        { href: 'https://visitmexico.com/', strong: 'VisitMexico', span: 'Referencia turística nacional' },
        { href: 'https://commons.wikimedia.org/wiki/Category:Market_of_El_Pari%C3%A1n', strong: 'Wikimedia Commons', span: 'Fotografía documental y licencias' }
      ],
      noteHtml:
        '<p><strong>Nota editorial:</strong> esta guía independiente y sin fines de lucro contrasta la información con fuentes oficiales de turismo municipal, estatal y nacional, además de publicaciones históricas sobre el incendio de 1796, el origen del nombre “parián” y la conversión del inmueble en mercado de artesanías en 1961. Última revisión de contenido: septiembre de 2026.</p><p>Para información oficial y actualizada, consulta el <a href="https://sectur.puebla.gob.mx/" target="_blank" rel="noopener noreferrer">Portal de Turismo del Estado de Puebla</a> o el <a href="https://www.gob.mx/sectur" target="_blank" rel="noopener noreferrer">Portal de Turismo del Gobierno de México</a>.</p>'
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
        'La información histórica y turística se contrasta con publicaciones del H. Ayuntamiento de Puebla y su Secretaría de Economía y Turismo, la Secretaría de Desarrollo Turístico del Gobierno del Estado de Puebla y la Secretaría de Turismo del Gobierno de México. No contiene recomendaciones comerciales pagadas.',
        'Derechos de imagen: la titularidad y los derechos de las fotografías corresponden a sus autores originales y se respetan conforme a las licencias indicadas en los créditos.',
        '© 2026 Guía de El Parián Puebla. Todos los derechos reservados.'
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
        'Plan your visit to the Mercado de Artesanías El Parián in the Historic Center of Puebla, Mexico (2RV4+7M): opening hours, crafts, how to get there, parking, cost, nearby food, services and visitor tips.'
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
        { big: '4.5 / 5', small: '28,579 reviews on the provided sheet' }
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
        'The tourist history of Puebla links El Parián to the old Plazuela de San Roque and places its formation as a market in 1801. The ensemble keeps a very recognizable image: brick facades, tile details and small shops lined along the corridor.',
        'The origin of the building goes back to a January dawn in 1796: a fire of undocumented cause destroyed 23 wooden stalls of the Portal de las Flores, facing the Cathedral. Intendant Manuel de Flón then commissioned architect Antonio Santamaría Inchárragui to design the new units, built in the old Plazuela de San Roque and giving shape to the Parián walked today.',
        'For more than a century and a half the space operated as a general market, a point of arrival and resale of goods. In 1961 it formally became the typical crafts market: about 112 shops that today concentrate ceramics, textiles, onyx, glass, clay and sweets from different regions of the state.',
        'Today it works mainly as a crafts market. Its value for the visitor is not only in buying a souvenir, but in recognizing materials and techniques linked to Pueblan identity, within a Historic Center inscribed on the UNESCO World Heritage List since 1987.'
      ],
      sourceBoxHtml:
        'Verified entity: this guide uses the full name, location, geodata and cross-references from municipal and state tourism to avoid confusing El Parián de Puebla with markets of the same name in other cities.'
    },
    timeline: { eyebrow: 'From the plaza to the market', h2: 'A history in five moments' },
    stories: { eyebrow: 'Stories and legends', h2: 'What is rarely told about El Parián' },
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
      eyebrow: 'Documentary photography',
      h2: 'El Parián in images',
      lead: 'Real photos of the market and its ceramics, with credits and Wikimedia Commons license.',
      creditLabel: 'Photograph',
      seeLabel: 'See on Wikimedia Commons',
      items: [
        { alt: 'Mercado de Artesanías El Parián — main view in Puebla, Mexico', cap: 'The artisanal corridor of the market', author: 'Luis Alvaz · CC BY-SA 4.0', href: 'https://commons.wikimedia.org/wiki/File:Mercado_El_Pari%C3%A1n,_Puebla_06.jpg' },
        { alt: 'Brick arches and facades of Mercado El Parián, Puebla', cap: 'Arches, brick and tile', author: 'Luis Alvaz · CC BY-SA 4.0', href: 'https://commons.wikimedia.org/wiki/File:Mercado_El_Pari%C3%A1n,_Puebla_04.jpg' },
        { alt: 'Craft stalls of Mercado El Parián, Puebla', cap: 'Stalls and goods', author: 'Luis Alvaz · CC BY-SA 4.0', href: 'https://commons.wikimedia.org/wiki/File:Mercado_El_Pari%C3%A1n,_Puebla_08.jpg' },
        { alt: 'Details of the craft pieces of Mercado El Parián, Puebla', cap: 'Details of the Pueblan offer', author: 'Luis Alvaz · CC BY-SA 4.0', href: 'https://commons.wikimedia.org/wiki/File:Mercado_El_Pari%C3%A1n,_Puebla_10.jpg' },
        { alt: 'Ceramics of Puebla, artisanal tradition of the state', cap: 'Pueblan ceramics', author: 'Hector Garcia · CC BY-SA 2.0', href: 'https://commons.wikimedia.org/wiki/File:Ceramica_de_Puebla.jpg' }
      ]
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
        { href: 'https://visita.pueblacapital.gob.mx/atractivos/los-imperdibles-de-puebla/itemlist/category/31-mercados-de-artesanias', strong: 'Tourism of the Municipality of Puebla', span: 'Market address and hours' },
        { href: 'https://sectur.puebla.gob.mx/', strong: 'Puebla State Tourism Development Secretariat', span: 'State tourism context' },
        { href: 'https://visitmexico.com/', strong: 'VisitMexico', span: 'National tourism reference' },
        { href: 'https://commons.wikimedia.org/wiki/Category:Market_of_El_Pari%C3%A1n', strong: 'Wikimedia Commons', span: 'Documentary photography and licenses' }
      ],
      noteHtml:
        '<p><strong>Editorial note:</strong> this independent, non-profit guide contrasts information with official municipal, state and national tourism sources, plus historical publications on the 1796 fire, the origin of the name “parián” and the conversion of the building into a crafts market in 1961. Last content review: September 2026.</p><p>For official and updated information, consult the <a href="https://sectur.puebla.gob.mx/" target="_blank" rel="noopener noreferrer">Puebla State Tourism Portal</a> or the <a href="https://www.gob.mx/sectur" target="_blank" rel="noopener noreferrer">Tourism Portal of the Government of Mexico</a>.</p>'
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
        'Historical and tourist information is contrasted with publications of the H. Ayuntamiento de Puebla and its Secretariat of Economy and Tourism, the Tourism Development Secretariat of the Government of the State of Puebla, and the Tourism Secretariat of the Government of Mexico. It contains no paid commercial recommendations.',
        'Image rights: ownership and rights of the photographs correspond to their original authors and are respected according to the licenses indicated in the credits.',
        '© 2026 Guía de El Parián Puebla. All rights reserved.'
      ],
      langSwitch: { label: 'Language', es: 'Español', en: 'English' }
    }
  }
} as const;

export type Locale = 'es' | 'en';
export type Content = (typeof content)['es'];
