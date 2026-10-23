// Contenido de las páginas legales (cookies, privacidad, términos) en es/en.
type Card = { title: string; text: string; state: 'locked-on' | 'analytics' | 'prefs' | 'locked-off'; label: string };
type Block = { h2: string; html: string };

export const legal = {
  es: {
    cookies: {
      title: 'Configuración de cookies | El Parián Puebla',
      description: 'Gestiona las preferencias de cookies y analítica de El Parián Puebla.',
      eyebrow: 'Información legal',
      h1: 'Configuración de cookies',
      updated: 'Última actualización: 23 de octubre de 2026',
      intro: 'Usamos tecnologías mínimas para operar el sitio y, sólo con tu elección, analítica para comprender el uso de la guía. Puedes cambiar estas preferencias en cualquier momento desde esta página.',
      cards: [
        { title: 'Necesarias', text: 'Permiten funciones básicas y la conservación local de tus preferencias. No pueden desactivarse desde este panel.', state: 'locked-on', label: 'Siempre activas' },
        { title: 'Analíticas', text: 'Google Analytics 4. Ayuda a entender de forma agregada cómo se usa el sitio. El script no se carga hasta que lo actives.', state: 'analytics', label: 'Activar' },
        { title: 'Preferencias', text: 'No hay ajustes opcionales de interfaz que usen esta categoría. El idioma se elige mediante las URL ES/EN.', state: 'prefs', label: 'No disponible' },
        { title: 'Marketing', text: 'No instalamos cookies de publicidad personalizada ni scripts de remarketing en esta versión.', state: 'locked-off', label: 'Desactivado' }
      ] as Card[],
      save: 'Guardar preferencias',
      reject: 'Rechazar opcionales',
      consentTitle: 'Gestión del consentimiento',
      consentText: 'Las preferencias se guardan en el almacenamiento local de este navegador con la clave <code>elparian-cookie-preferences</code>. Si limpias los datos del navegador, tendrás que configurarlas de nuevo. Al guardar una autorización correctamente, la analítica puede cargarse inmediatamente. Retirarla detiene la medición de esta página, pero no recupera datos ya enviados. Un veto de sesión ayuda a mantenerla desactivada si falla el guardado.'
    },
    privacidad: {
      title: 'Política de privacidad | El Parián Puebla',
      description: 'Política de privacidad de la guía independiente El Parián Puebla.',
      eyebrow: 'Información legal',
      h1: 'Política de privacidad',
      updated: 'Última actualización: 23 de octubre de 2026',
      blocks: [
        { h2: 'Alcance', html: 'Esta guía es un sitio informativo independiente, sin cuentas de usuario, base de datos, área de inicio de sesión ni CMS. Buscamos recopilar únicamente los datos mínimos necesarios para operar y entender el uso del sitio.' },
        { h2: 'Información que puede recopilarse', html: '<ul><li>Datos técnicos de navegación, como dirección IP, tipo de navegador, dispositivo y páginas visitadas, cuando los proveedores de infraestructura o analítica los procesan.</li><li>Cookies, almacenamiento local y tecnologías similares según las preferencias que elijas.</li><li>Información que proporciones voluntariamente si en el futuro se habilita un canal de contacto.</li></ul>' },
        { h2: 'Cómo usamos la información', html: '<ul><li>Mejorar el contenido, rendimiento y experiencia de navegación.</li><li>Analizar tráfico y patrones de uso cuando el usuario acepta cookies analíticas.</li><li>Responder solicitudes enviadas voluntariamente por canales que puedan habilitarse.</li><li>Cumplir obligaciones legales aplicables.</li></ul>' },
        { h2: 'Google Analytics 4', html: 'Este sitio está preparado para usar Google Analytics 4 (ID G-HXM22WWPKP). El script de analítica sólo se carga cuando la preferencia de analítica está activada en la página de configuración de cookies. Google puede procesar datos técnicos conforme a sus propias políticas.' },
        { h2: 'Clima y alojamiento', html: 'El navegador consulta Open-Meteo para el pronóstico de la zona y puede guardar una copia durante 30 minutos. Open-Meteo recibe los datos técnicos de esa conexión. Cloudflare aloja el sitio y puede procesar registros técnicos o añadir un beacon de rendimiento independiente de Google Analytics; la elección de GA no controla ese beacon. La presencia de un script no prueba una transmisión concreta. <a href="https://developers.cloudflare.com/web-analytics/data-metrics/data-origin-and-collection/">Cloudflare</a> · <a href="https://open-meteo.com/en/terms">Open-Meteo</a>.' },
        { h2: 'Google Maps', html: 'La página principal incorpora un mapa de Google mediante iframe. Al cargar ese contenido, Google puede recibir datos técnicos de la conexión y aplicar sus propias tecnologías y condiciones.' },
        { h2: 'Fotografías y servicios de terceros', html: 'Las ilustraciones originales se sirven localmente y se identifican como conceptuales, no fotografías. Los enlaces a fuentes externas pueden llevar a sitios con políticas propias.' },
        { h2: 'Tus derechos', html: 'Según la normativa que resulte aplicable —incluida la legislación mexicana de protección de datos y, cuando corresponda, el RGPD— puedes tener derechos de acceso, rectificación, supresión, oposición al tratamiento, limitación, portabilidad y reclamación ante una autoridad competente.' },
        { h2: 'Retención y seguridad', html: 'No mantenemos perfiles de usuario ni una base de datos propia. Las preferencias de cookies se guardan localmente en tu navegador. Los proveedores de infraestructura o analítica aplican sus propios periodos de retención y medidas de seguridad.' },
        { h2: 'Cambios', html: 'Podemos actualizar esta política para reflejar cambios técnicos, legales o de proveedores. La fecha indicada al inicio identifica la versión publicada.' }
      ] as Block[],
      footerLink: { href: '/cookies/', text: 'Administrar configuración de cookies →' }
    },
    terminos: {
      title: 'Términos de servicio | El Parián Puebla',
      description: 'Términos de uso de la guía independiente El Parián Puebla.',
      eyebrow: 'Información legal',
      h1: 'Términos de servicio',
      updated: 'Última actualización: 23 de octubre de 2026',
      blocks: [
        { h2: 'Naturaleza independiente del sitio', html: 'Este es un proyecto independiente y sin fines de lucro de información para visitantes. No representa al Mercado de Artesanías El Parián, al H. Ayuntamiento de Puebla, al Gobierno del Estado de Puebla, a la Secretaría de Turismo del Gobierno de México ni a operadores comerciales.' },
        { h2: 'Uso del contenido', html: 'El contenido se ofrece exclusivamente con fines informativos y de planificación turística. No constituye asesoría profesional, garantía de disponibilidad ni recomendación comercial.' },
        { h2: 'Exactitud de la información', html: 'Contrastamos datos con fuentes públicas, pero horarios, condiciones de acceso, rutas, precios, métodos de pago, estacionamientos y servicios pueden cambiar sin previo aviso. Verifica información crítica con fuentes oficiales o con el proveedor correspondiente antes de desplazarte o realizar una compra.' },
        { h2: 'Propiedad intelectual', html: 'El diseño, textos originales, gráficos de marca y código propio están protegidos por la normativa aplicable. Las ilustraciones originales se identifican como conceptuales y se publican bajo CC0. Google Maps y sus datos se usan conforme a los términos de Google.' },
        { h2: 'Enlaces externos', html: 'Los enlaces a autoridades, mapas y repositorios documentales se facilitan como referencia. No controlamos esos sitios ni su disponibilidad, contenido o políticas.' },
        { h2: 'Limitación de responsabilidad', html: 'El sitio se proporciona “tal cual”, sin garantías. En la medida permitida por la ley, no asumimos responsabilidad por pérdidas derivadas de decisiones de viaje, compras, cambios de horario, cierres, transporte, estacionamiento o cualquier otra acción basada exclusivamente en esta guía.' },
        { h2: 'Modificaciones', html: 'Podemos modificar estos términos cuando cambie el funcionamiento del sitio o el marco aplicable. La fecha indicada al inicio identifica la versión publicada.' }
      ] as Block[],
      footerLink: null
    }
  },
  en: {
    cookies: {
      title: 'Cookie settings | El Parián Puebla',
      description: 'Manage cookie and analytics preferences for El Parián Puebla.',
      eyebrow: 'Legal information',
      h1: 'Cookie settings',
      updated: 'Last updated: 23 October 2026',
      intro: 'We use minimal technologies to operate the site and, only with your choice, analytics to understand how the guide is used. You can change these preferences at any time from this page.',
      cards: [
        { title: 'Necessary', text: 'They allow basic functions and local saving of your preferences. They cannot be disabled from this panel.', state: 'locked-on', label: 'Always active' },
        { title: 'Analytics', text: 'Google Analytics 4. Helps understand, in aggregate, how the site is used. The script is not loaded until you enable it.', state: 'analytics', label: 'Enable' },
        { title: 'Preferences', text: 'No optional interface settings use this category. Language is selected through the ES/EN URLs.', state: 'prefs', label: 'Not used' },
        { title: 'Marketing', text: 'We do not install personalized advertising cookies or remarketing scripts in this version.', state: 'locked-off', label: 'Disabled' }
      ] as Card[],
      save: 'Save preferences',
      reject: 'Reject optional',
      consentTitle: 'Consent management',
      consentText: 'Preferences are stored in the local storage of this browser under the key <code>elparian-cookie-preferences</code>. If you clear browser data, you will have to set them again. A successfully saved permission may load analytics immediately. Withdrawal stops measurement on this page but cannot recall data already sent. A session veto helps keep it off if saving fails.'
    },
    privacidad: {
      title: 'Privacy policy | El Parián Puebla',
      description: 'Privacy policy of the independent guide El Parián Puebla.',
      eyebrow: 'Legal information',
      h1: 'Privacy policy',
      updated: 'Last updated: 23 October 2026',
      blocks: [
        { h2: 'Scope', html: 'This guide is an independent informational site, with no user accounts, database, login area or CMS. We seek to collect only the minimum data necessary to operate and understand the use of the site.' },
        { h2: 'Information that may be collected', html: '<ul><li>Technical browsing data, such as IP address, browser type, device and visited pages, when infrastructure or analytics providers process them.</li><li>Cookies, local storage and similar technologies according to the preferences you choose.</li><li>Information you provide voluntarily if a contact channel is enabled in the future.</li></ul>' },
        { h2: 'How we use the information', html: '<ul><li>Improve content, performance and browsing experience.</li><li>Analyze traffic and usage patterns when the user accepts analytics cookies.</li><li>Respond to requests sent voluntarily through channels that may be enabled.</li><li>Comply with applicable legal obligations.</li></ul>' },
        { h2: 'Google Analytics 4', html: 'This site is prepared to use Google Analytics 4 (ID G-HXM22WWPKP). The analytics script is only loaded when the analytics preference is active on the cookie settings page. Google may process technical data under its own policies.' },
        { h2: 'Weather and hosting', html: 'The browser requests the area forecast from Open-Meteo and may cache it for 30 minutes. Open-Meteo receives technical connection data. Cloudflare hosts this site and may process technical logs or add a performance beacon separate from Google Analytics; the GA choice does not control that beacon. Script presence does not prove a particular transmission. <a href="https://developers.cloudflare.com/web-analytics/data-metrics/data-origin-and-collection/">Cloudflare</a> · <a href="https://open-meteo.com/en/terms">Open-Meteo</a>.' },
        { h2: 'Google Maps', html: 'The main page embeds a Google map via iframe. When loading that content, Google may receive technical connection data and apply its own technologies and terms.' },
        { h2: 'Photographs and third-party services', html: 'Original illustrations are served locally and labelled conceptual, not photographs. Links to external sources may lead to sites with their own policies.' },
        { h2: 'Your rights', html: 'Under applicable law —including Mexican data protection legislation and, where relevant, the GDPR— you may have rights of access, rectification, erasure, objection to processing, restriction, portability and complaint to a competent authority.' },
        { h2: 'Retention and security', html: 'We do not keep user profiles or our own database. Cookie preferences are stored locally in your browser. Infrastructure or analytics providers apply their own retention periods and security measures.' },
        { h2: 'Changes', html: 'We may update this policy to reflect technical, legal or provider changes. The date shown at the beginning identifies the published version.' }
      ] as Block[],
      footerLink: { href: '/en/cookies/', text: 'Manage cookie settings →' }
    },
    terminos: {
      title: 'Terms of service | El Parián Puebla',
      description: 'Terms of use of the independent guide El Parián Puebla.',
      eyebrow: 'Legal information',
      h1: 'Terms of service',
      updated: 'Last updated: 23 October 2026',
      blocks: [
        { h2: 'Independent nature of the site', html: 'This is an independent, non-profit information project for visitors. It does not represent the Mercado de Artesanías El Parián, the H. Ayuntamiento de Puebla, the Government of the State of Puebla, the Tourism Secretariat of the Government of Mexico, or commercial operators.' },
        { h2: 'Use of content', html: 'Content is offered exclusively for informational and tourist planning purposes. It does not constitute professional advice, a guarantee of availability, or a commercial recommendation.' },
        { h2: 'Accuracy of information', html: 'We contrast data with public sources, but hours, access conditions, routes, prices, payment methods, parking and services may change without notice. Verify critical information with official sources or the corresponding provider before traveling or making a purchase.' },
        { h2: 'Intellectual property', html: 'The design, original texts, brand graphics and own code are protected by applicable law. Original illustrations are labelled conceptual and published under CC0. Google Maps and its data are used under Google’s terms.' },
        { h2: 'External links', html: 'Links to authorities, maps and documentary repositories are provided as reference. We do not control those sites or their availability, content or policies.' },
        { h2: 'Limitation of liability', html: 'The site is provided “as is”, without warranties. To the extent permitted by law, we are not liable for losses arising from travel decisions, purchases, schedule changes, closures, transport, parking or any other action based solely on this guide.' },
        { h2: 'Modifications', html: 'We may modify these terms when the operation of the site or the applicable framework changes. The date shown at the beginning identifies the published version.' }
      ] as Block[],
      footerLink: null
    }
  }
} as const;

export type LegalPage = 'cookies' | 'privacidad' | 'terminos';
