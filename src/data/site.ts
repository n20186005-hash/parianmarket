export const attraction = {
  name: 'Mercado de Artesanías El Parián',
  shortName: 'El Parián Puebla',
  alternateName: ['Parian market', 'Mercado El Parián', 'El Parían'],
  city: 'Heroica Puebla de Zaragoza',
  state: 'Puebla',
  country: 'México',
  officialAddress: '6 Norte 205, Centro Histórico, 72000 Heroica Puebla de Zaragoza, Pue., México',
  mapsAddress: 'Mercado de artesanías El Parián local 111, 72000 Heroica Puebla de Zaragoza, Pue., México',
  plusCode: '2RV4+7M',
  latitude: 19.04318,
  longitude: -98.19586,
  googleMaps: 'https://maps.app.goo.gl/N9nQNtMzptexARSx7',
  rating: 4.5,
  reviewCount: 28524,
  openingHours: '10:00–20:00',
  openingDays: 'Lunes a domingo',
  founded: '1801',
  stalls: 112,
  gaId: 'G-HXM22WWPKP',
} as const;

export const authorityLinks = [
  { label: 'Turismo del Municipio de Puebla', href: 'https://visita.pueblacapital.gob.mx/' },
  { label: 'Secretaría de Desarrollo Turístico del Estado de Puebla', href: 'https://sectur.puebla.gob.mx/' },
  { label: 'Secretaría de Turismo del Gobierno de México', href: 'https://www.gob.mx/sectur' },
  { label: 'VisitMexico', href: 'https://visitmexico.com/' },
];

export const timeline = [
  {
    year: '1531',
    title: 'Fundación de la ciudad',
    text: 'Puebla de los Ángeles se funda y la zona que hoy ocupa El Parián se consolida como espacio de comercio y tránsito desde los primeros siglos de la ciudad.'
  },
  {
    year: '1796',
    title: 'El incendio del Portal de las Flores',
    text: 'El 7 de enero, una noche después del Día de Reyes, 23 estancos de madera frente a la Catedral quedan destruidos por un incendio de causa no documentada.'
  },
  {
    year: '1801',
    title: 'Nace El Parián',
    text: 'Por encargo del intendente Manuel de Flón, el arquitecto Antonio Santamaría Inchárragui diseña los locales comerciales en la antigua Plazuela de San Roque.'
  },
  {
    year: '1961',
    title: 'Mercado típico de artesanías',
    text: 'El espacio se convierte formalmente en el mercado de artesanías de la ciudad y concentra la oferta artesanal de distintas regiones de Puebla.'
  },
  {
    year: '1987',
    title: 'Patrimonio Mundial de la UNESCO',
    text: 'El Centro Histórico de Puebla, del que El Parián forma parte, se inscribe en la Lista del Patrimonio Mundial por su valor urbano y arquitectónico.'
  }
] as const;

export const services = [
  {
    icon: '◆',
    label: 'Sanitarios',
    title: 'Baños y sanitarios públicos',
    text: 'En el entorno del Centro Histórico hay sanitarios públicos y baños en establecimientos que suelen requerir un pago mínimo o consumo. Conviene ubicar el más cercano antes de recorrer el mercado.',
    hint: 'Suele ser de pago'
  },
  {
    icon: 'P',
    label: 'Estacionamiento',
    title: 'Estacionamiento y llegada en auto',
    text: 'El mercado no anuncia estacionamiento propio para visitantes. A pocas cuadras hay estacionamientos públicos de pago; revisa tarifa, horario y altura máxima antes de entrar.',
    hint: 'Sin estacionamiento propio'
  },
  {
    icon: '✽',
    label: 'Alimentos',
    title: 'Comida y bebidas cercanas',
    text: 'La zona concentra fondas, cafeterías y restaurantes de cocina poblana y mexicana: mole, chalupas, cemitas, molotes y dulces tradicionales. También hay puestos de antojitos alrededor.',
    hint: 'Cocina poblana y mexicana'
  },
  {
    icon: '⌂',
    label: 'Alojamiento',
    title: 'Dónde dormir cerca',
    text: 'El Centro Histórico ofrece hoteles, hostales y casas de huéspedes de distintos rangos. Reservar con anticipación ayuda en temporada alta y fines de semana largos.',
    hint: 'Hoteles y hostales en el Centro'
  },
  {
    icon: '✕',
    label: 'Tiendas',
    title: 'Comercios y abarrotes',
    text: 'En el primer cuadro hay tiendas de conveniencia, farmacias y pequeños comercios que cubren necesidades básicas durante el recorrido.',
    hint: 'Conveniencia en el primer cuadro'
  },
  {
    icon: '◉',
    label: 'Combustible y carga',
    title: 'Gasolineras y carga eléctrica',
    text: 'Las gasolineras se localizan en los ejes y avenidas principales fuera del primer cuadro. Algunos estacionamientos del área cuentan con cargadores para vehículos eléctricos.',
    hint: 'En ejes y avenidas cercanas'
  },
  {
    icon: '✚',
    label: 'Salud',
    title: 'Farmacias y atención médica',
    text: 'Hay farmacias en el Centro Histórico y servicios de emergencia cercanos. Para atención médica mayor conviene acudir a hospitales públicos o privados del área metropolitana.',
    hint: 'Farmacias en la zona'
  },
  {
    icon: '¤',
    label: 'Efectivo',
    title: 'Cajeros y pagos',
    text: 'Existen cajeros automáticos en el primer cuadro. El efectivo sigue siendo útil: muchos puestos del mercado operan principalmente en efectivo, aunque algunos aceptan tarjeta o transferencia.',
    hint: 'Lleva efectivo'
  }
] as const;

export const stories = [
  {
    kind: 'documentado',
    tag: 'Historia documentada',
    title: 'Una noche de fuego frente a la Catedral',
    text: 'El 7 de enero de 1796, al día siguiente del Día de Reyes, un incendio de causa no documentada consumió 23 estancos de madera instalados en el Portal de las Flores, frente al Sagrario de la Catedral. La plaza de comercio quedó en cenizas y la ciudad necesitó reubicar a los mercaderes.'
  },
  {
    kind: 'documentado',
    tag: 'Historia documentada',
    title: 'El intendente y el arquitecto',
    text: 'El intendente Manuel de Flón (1786–1811), primer gobernante con ese cargo en Puebla, encargó al arquitecto Antonio Santamaría Inchárragui el diseño de los nuevos locales. El mismo arquitecto es autor de la Casa de Alfeñique y de la Fuente de San Miguel, por lo que su firma está en varias piezas clave del patrimonio poblanos.'
  },
  {
    kind: 'documentado',
    tag: 'Origen del nombre',
    title: 'Un nombre que cruzó el océano',
    text: 'Se atribuye a la palabra "parián" un origen vinculado con el comercio asiático: en Manila, el Parián era el barrio de comerciantes chinos o sangleyes. La palabra habría llegado a la Nueva España con el comercio transpacífico del Galeón de Manila.'
  },
  {
    kind: 'tradición',
    tag: 'Tradición local',
    title: 'Los arrieros y la Plaza del Varadillo',
    text: 'Otra explicación popular relaciona el nombre con los arrieros que transitaban la zona trayendo mercancías de Veracruz, Oaxaca y Guerrero. La antigua plaza se conocía como Plaza del Varadillo, y su vocación de paso y trueque precedió al edificio actual.'
  },
  {
    kind: 'documentado',
    tag: 'Historia documentada',
    title: 'De mercado general a vitrina de artesanías',
    text: 'Durante más de siglo y medio El Parián funcionó como un mercado general. En 1961 se convirtió formalmente en el mercado típico de artesanías, concentrando la producción de distintos pueblos de Puebla en un solo recorrido.'
  },
  {
    kind: 'tradición',
    tag: 'Tradición local',
    title: 'La Talavera con nombre protegido',
    text: 'La cerámica que hoy se vende en El Parián sigue una tradición del siglo XVI. Solo las piezas elaboradas en talleres certificados pueden llamarse "Talavera" con denominación de origen; al comprar, conviene preguntar por la certificación y la procedencia.'
  }
] as const;

export const etiquette = {
  do: [
    'Pregunta por materiales, origen y certificación de cada pieza antes de comprar.',
    'Si buscas Talavera con denominación de origen, solicita información de certificación del taller.',
    'Compara precios en varios puestos; es parte de la experiencia del mercado.',
    'Pide permiso antes de fotografiar puestos o retratos de vendedores.',
    'Lleva efectivo en denominaciones pequeñas para facilitar el cambio.',
    'Camina con calma y cede el paso en pasillos angostos durante horas concurridas.'
  ],
  dont: [
    'Evita tocar piezas frágiles de cerámica o vidrio sin pedirlo primero.',
    'No des por hecho que todo se puede regatear; hazlo con respeto y sin presión.',
    'No bloquees accesos de puestos o pasillos al detenerte a mirar.',
    'Evita tomar fotos de vendedores sin permiso, sobre todo si te lo piden amablemente.',
    'No dejes objetos personales sin vigilancia; en zonas concurridas conviene cuidado con carteras y teléfonos.'
  ]
} as const;

export const photoSpots = [
  {
    title: 'El corredor de arcos',
    text: 'Los pasillos con arcos y techos de ladrillo crean líneas de fuga ideales al amanecer o en la tarde.'
  },
  {
    title: 'Azulejos de Talavera',
    text: 'Acércate a las fachadas para capturar los detalles de azulejo y ladrillo con luz lateral.'
  },
  {
    title: 'Puestos de cerámica',
    text: 'Las piezas apiladas forman composiciones de color; pide permiso y dispara con respeto.'
  },
  {
    title: 'Rostros del oficio',
    text: 'Los vendedores y artesanos en su quehacer cuentan historias; retrátalos solo con su consentimiento.'
  }
] as const;

export const faqs = [
  {
    q: '¿Cuál es el horario de El Parián en Puebla?',
    a: 'La información turística del Municipio de Puebla publica un horario de lunes a domingo, de 10:00 a 20:00. Conviene verificar cambios extraordinarios en días festivos o eventos especiales antes de ir.'
  },
  {
    q: '¿Se paga entrada para visitar el Mercado de Artesanías El Parián?',
    a: 'Guías publicadas por el Ayuntamiento de Puebla han listado El Parián con entrada gratuita. Las compras en los puestos se pagan por separado y conviene confirmar cualquier condición extraordinaria si hay un evento especial.'
  },
  {
    q: '¿Qué artesanías se encuentran en El Parián?',
    a: 'Es conocido por cerámica poblana, piezas de estilo Talavera, textiles, bordados, ónix, vidrio, barro, miniaturas y dulces regionales. Si buscas Talavera con denominación de origen, pregunta al vendedor por su certificación.'
  },
  {
    q: '¿Cuánto tiempo conviene dedicar a El Parián?',
    a: 'Como recomendación editorial, reserva entre 45 y 75 minutos. Si vas a comparar piezas, tomar fotografías o combinar la visita con museos cercanos, 90 minutos resulta más cómodo.'
  },
  {
    q: '¿Hay estacionamiento dentro del mercado?',
    a: 'La ficha turística municipal no anuncia un estacionamiento propio para visitantes. En el Centro Histórico hay estacionamientos públicos de pago; revisa señalización, tarifas y horarios al llegar.'
  },
  {
    q: '¿Conviene llevar efectivo?',
    a: 'Sí. Los métodos de pago dependen de cada puesto, por lo que llevar algo de efectivo puede ser útil incluso si algunos vendedores aceptan tarjeta o transferencias.'
  },
  {
    q: '¿Hay baños públicos cerca de El Parián?',
    a: 'El mercado no anuncia sanitarios para visitantes. En el entorno del Centro Histórico hay baños públicos y sanitarios en establecimientos, normalmente con un pago mínimo o consumo. Ubica el más cercano antes de comenzar el recorrido.'
  },
  {
    q: '¿Dónde comer cerca de El Parián?',
    a: 'La zona del primer cuadro concentra fondas, cafeterías y restaurantes de cocina poblana y mexicana. Esta guía no prioriza negocios concretos: busca mole poblano, chalupas, cemitas, molotes y dulces tradicionales.'
  },
  {
    q: '¿Es accesible para personas con movilidad reducida?',
    a: 'El mercado ocupa corredores y pasillos en un edificio histórico del siglo XIX, por lo que pueden existir escalones y pasillos angostos. La información oficial no publica un plan de accesibilidad específico; conviene verificar las condiciones el mismo día.'
  },
  {
    q: '¿Se permite tomar fotografías en el mercado?',
    a: 'En general sí, y forma parte de la experiencia. Por cortesía, pide permiso antes de fotografiar puestos o retratos de vendedores, y evita interrumpir la actividad comercial.'
  },
  {
    q: '¿Hay hoteles cerca de El Parián?',
    a: 'El Centro Histórico de Puebla cuenta con hoteles, hostales y casas de huéspedes de distintos rangos, a poca distancia peatonal del mercado. En temporada alta conviene reservar con anticipación.'
  },
  {
    q: '¿Puedo llegar a El Parián en transporte público?',
    a: 'Sí. Varias rutas circulan por los ejes de Boulevard Héroes del 5 de Mayo y 2 Oriente. Baja en una parada céntrica y completa el último tramo a pie; confirma la ruta vigente el mismo día.'
  }
] as const;
