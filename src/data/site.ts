export const attraction = {
  name: 'Mercado de Artesanías El Parián',
  shortName: 'El Parián Puebla',
  alternateName: ['Parian market', 'Mercado El Parián', 'El Parían'],
  city: 'Heroica Puebla de Zaragoza',
  state: 'Puebla',
  country: 'México',
  officialAddress: '6 Norte 205, Centro Histórico, 72000 Heroica Puebla de Zaragoza, Pue., México',
  mapsAddress: 'Mercado de artesanías El Parián local 111, 72000 Heroica Puebla de Zaragoza, Pue., México',
  latitude: 19.04367,
  longitude: -98.19345,
  googleMaps: 'https://maps.app.goo.gl/N9nQNtMzptexARSx7',
  rating: 4.5,
  reviewCount: 28524,
  openingHours: '10:00–20:00',
  openingDays: 'Lunes a domingo',
  founded: '1801',
  gaId: 'G-HXM22WWPKP',
} as const;

export const authorityLinks = [
  { label: 'Turismo del Municipio de Puebla', href: 'https://visita.pueblacapital.gob.mx/' },
  { label: 'Secretaría de Desarrollo Turístico del Estado de Puebla', href: 'https://sectur.puebla.gob.mx/' },
  { label: 'Secretaría de Turismo del Gobierno de México', href: 'https://www.gob.mx/sectur' },
  { label: 'VisitMexico', href: 'https://visitmexico.com/' },
];

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
  }
] as const;
