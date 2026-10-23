// Contenido en inglés de las listas basadas en datos.
// Los nombres propios (attraction) y los enlaces oficiales (authorityLinks) son
// compartidos desde site.ts, ya que no requieren traducción.
export { attraction, authorityLinks, SITE_NAME } from './site';

export const timeline = [
 {year:'1801',title:'The former San Roque square',text:'The National Association of Mexican World Heritage Cities associates the former San Roque square and El Parián with 1801.'},
 {year:'1961',title:'The crafts-market phase',text:'The same historical account places crafts-market use of the former market from 1961. These are historical references, not a guarantee of current conditions at individual stalls.'}
] as const;

export const stories = [
 {kind:'documentado',tag:'Published description',title:'A group of craft stalls',text:'The World Heritage Cities description mentions 112 units. This is a figure published by that source, not a live count of open stalls or a guarantee of availability.'},
 {kind:'documentado',tag:'Crafts described',title:'Puebla materials and crafts',text:'The source lists ceramics, textiles, leatherwork, wood, palm and glass among the crafts. Selection and opening hours depend on each vendor.'}
] as const;

export const services = [
  {
    icon: '◆',
    label: 'Restrooms',
    title: 'Public restrooms',
    text: 'Around the Historic Center there are public restrooms and facilities in establishments that usually require a small fee or a purchase. It helps to locate the nearest one before walking the market.',
    hint: 'Usually paid'
  },
  {
    icon: 'P',
    label: 'Parking',
    title: 'Parking and arrival by car',
    text: 'The market does not advertise its own parking for visitors. A few blocks away there are paid public parking lots; check rate, hours and maximum height before entering.',
    hint: 'No on-site parking'
  },
  {
    icon: '✽',
    label: 'Food',
    title: 'Nearby food and drinks',
    text: 'The area concentrates fondas, cafés and restaurants of Pueblan and Mexican cuisine: mole, chalupas, cemitas, molotes and traditional sweets. There are also street-food stalls around.',
    hint: 'Pueblan and Mexican cuisine'
  },
  {
    icon: '⌂',
    label: 'Lodging',
    title: 'Where to stay nearby',
    text: 'The Historic Center offers hotels, hostels and guesthouses of different ranges. Booking ahead helps in high season and on long weekends.',
    hint: 'Hotels and hostels in the Center'
  },
  {
    icon: '✕',
    label: 'Shops',
    title: 'Stores and groceries',
    text: 'In the city center there are convenience stores, pharmacies and small shops covering basic needs during the walk.',
    hint: 'Convenience in the center'
  },
  {
    icon: '◉',
    label: 'Fuel and charging',
    title: 'Gas stations and EV charging',
    text: 'Gas stations are located on the main avenues outside the city center. Some parking lots in the area have chargers for electric vehicles.',
    hint: 'On nearby avenues'
  },
  {
    icon: '✚',
    label: 'Health',
    title: 'Pharmacies and medical care',
    text: 'There are pharmacies in the Historic Center and nearby emergency services. For major medical care, go to public or private hospitals in the metropolitan area.',
    hint: 'Pharmacies in the area'
  },
  {
    icon: '¤',
    label: 'Cash',
    title: 'ATMs and payments',
    text: 'There are ATMs in the city center. Cash is still useful: many market stalls operate mainly in cash, although some accept cards or transfers.',
    hint: 'Bring cash'
  }
] as const;

export const etiquette = {
  do: [
    'Ask about materials, origin and certification of each piece before buying.',
    'If you look for Talavera with denomination of origin, ask the workshop for certification information.',
    'Compare prices at several stalls; it is part of the market experience.',
    'Ask permission before photographing stalls or portraits of sellers.',
    'Carry cash in small denominations to make change easier.',
    'Walk calmly and give way in narrow aisles during busy hours.'
  ],
  dont: [
    'Avoid touching fragile ceramic or glass pieces without asking first.',
    'Do not assume everything can be bargained; do it respectfully and without pressure.',
    'Do not block stall access or aisles when you stop to look.',
    'Avoid photographing sellers without permission, especially if they ask you kindly.',
    'Do not leave personal items unattended; in crowded areas watch your wallet and phone.'
  ]
} as const;

export const photoSpots = [
  {
    title: 'The arcade corridor',
    text: 'The aisles with brick arches create ideal lead-in lines at sunrise or in the afternoon.'
  },
  {
    title: 'Talavera tiles',
    text: 'Get close to the facades to capture tile and brick detail with side light.'
  },
  {
    title: 'Ceramic stalls',
    text: 'The stacked pieces form color compositions; ask permission and shoot with respect.'
  },
  {
    title: 'Faces of the craft',
    text: 'Sellers and artisans at work tell stories; portray them only with their consent.'
  }
] as const;

export const faqs = [
  {
    q: 'What are the opening hours of El Parián in Puebla?',
    a: 'Municipal tourism lists 10:00–20:00 daily. Google Maps, checked on 23 October 2026, shows 10:00–21:00 on a listing addressed to stall 111. Individual stalls may differ: check with the vendor, especially for a late visit.'
  },
  {
    q: 'Is there an entrance fee to visit the Mercado de Artesanías El Parián?',
    a: 'Guides published by the Puebla City Council have listed El Parián as free entry. Purchases at the stalls are paid separately, and any extraordinary condition should be confirmed if there is a special event.'
  },
  {
    q: 'What handicrafts can be found at El Parián?',
    a: 'It is known for Pueblan ceramics, Talavera-style pieces, textiles, embroidery, onyx, glass, clay, miniatures and regional sweets. If you look for Talavera with denomination of origin, ask the seller for its certification.'
  },
  {
    q: 'How much time is worth spending at El Parián?',
    a: 'As an editorial recommendation, allow 45 to 75 minutes. If you plan to compare pieces, take photos or combine the visit with nearby museums, 90 minutes is more comfortable.'
  },
  {
    q: 'Is there parking inside the market?',
    a: 'The municipal tourism sheet does not advertise its own parking for visitors. In the Historic Center there are paid public parking lots; check signage, rates and hours on arrival.'
  },
  {
    q: 'Is it worth bringing cash?',
    a: 'Yes. Payment methods depend on each stall, so carrying some cash can be useful even if some sellers accept cards or transfers.'
  },
  {
    q: 'Are there public restrooms near El Parián?',
    a: 'The market does not advertise restrooms for visitors. Around the Historic Center there are public restrooms and facilities in establishments, usually with a small fee or a purchase. Locate the nearest one before starting the walk.'
  },
  {
    q: 'Where to eat near El Parián?',
    a: 'The city-center area concentrates fondas, cafés and restaurants of Pueblan and Mexican cuisine. This guide does not prioritize specific businesses: look for mole poblano, chalupas, cemitas, molotes and traditional sweets.'
  },
  {
    q: 'Is it accessible for people with reduced mobility?',
    a: 'The market occupies corridors and aisles in a 19th-century historic building, so there may be steps and narrow aisles. This guide has not verified a detailed accessible route; confirm conditions with the market before visiting.'
  },
  {
    q: 'Are photographs allowed in the market?',
    a: 'Generally yes, and it is part of the experience. As a courtesy, ask permission before photographing stalls or portraits of sellers, and avoid interrupting commercial activity.'
  },
  {
    q: 'Are there hotels near El Parián?',
    a: 'The Historic Center of Puebla has hotels, hostels and guesthouses of different ranges, a short walk from the market. In high season it is worth booking ahead.'
  },
  {
    q: 'Can I get to El Parián by public transport?',
    a: 'Yes. Several routes run along the axes of Boulevard Héroes del 5 de Mayo and 2 Oriente. Get off at a central stop and walk the last stretch; confirm the current route on the day.'
  }
] as const;

export const airportTransit = [
  {
    mode: 'Puebla Airport',
    title: 'From Puebla International Airport (PBC)',
    text: 'PBC (Hermanos Serdán) is about 25–35 km from the Historic Center. By taxi or ride app the trip usually takes 25–40 minutes depending on traffic; there is also bus service and car rental counters at the airport. As destination indicate “Mercado de Artesanías El Parián, Centro Histórico”.'
  },
  {
    mode: 'Mexico City',
    title: 'From Mexico City (AICM / AIFA)',
    text: 'Many people arrive by executive bus from downtown Mexico City or the AICM to the Puebla Central Bus Station (2–2.5 h), and from there by taxi or app to the Center (~15–25 min). From AIFA the time is longer; confirm schedules on the day.'
  }
] as const;

export const seasonalStrategy = [
  {
    season: 'Winter',
    months: 'Dec – Feb',
    climate: 'Cool highland climate: nights of 8–12 °C, days 18–22 °C. Occasional cold fronts (“nortes”).',
    advice: 'Good light and little rain for photographing the arches; bring a light jacket for the afternoon and night.',
    pack: 'Jacket, light layer'
  },
  {
    season: 'Spring',
    months: 'Mar – May',
    climate: 'Dry and pleasant: days 22–27 °C. Local festive season (Holy Week, city anniversary).',
    advice: 'One of the best times to walk; book ahead for Holy Week and long weekends.',
    pack: 'Sunglasses, water'
  },
  {
    season: 'Summer / rains',
    months: 'Jun – Oct',
    climate: 'Afternoon rains, cool nights; days 20–25 °C. The highland rainy regime.',
    advice: 'Visit in the morning; bring an umbrella or raincoat and comfortable shoes for the aisles.',
    pack: 'Umbrella, comfortable shoes'
  },
  {
    season: 'Autumn',
    months: 'Oct – Nov',
    climate: 'Dry transition: days 20–24 °C, clear skies and good visibility.',
    advice: 'Excellent to combine the market with the city-center museums without rush.',
    pack: 'Layered clothing'
  }
] as const;

export const audienceRoutes = [
  {
    tag: 'Families',
    title: 'Family route',
    text: 'Short, ground-floor route with breaks and options for children.',
    items: [
      'Start at the ceramics, miniatures and traditional sweets stalls.',
      'Pueblan food stop in the city center (mole, chalupas, cemitas).',
      'Locate nearby public restrooms before starting the walk.',
      'Close with an accessible neighboring museum (San Pedro or Casa de Alfeñique).'
    ]
  },
  {
    tag: 'Photography',
    title: 'Light and detail route',
    text: 'Designed to capture arches, tile and the craft with respect.',
    items: [
      'Arrive between 10:00 and 11:00 for raking light on the arches and aisles.',
      'Get close to tile and brick; avoid direct flash on pieces.',
      'Ask permission before portraying stalls and artisans.',
      'On rainy afternoons, use interiors and saturated color.'
    ]
  },
  {
    tag: 'Reduced mobility',
    title: 'Low-effort route',
    text: 'Ground-floor corridors and shade breaks; no stairs in the main area.',
    items: [
      'Walk the main ground-floor aisles, avoiding ramps with level changes.',
      'Alternate with shade breaks between aisles.',
      'Use the benches and waiting areas of the city center.',
      'Confirm access conditions on the day, as it is a historic building.'
    ]
  }
] as const;

export const itineraries = [
  {
    type: 'Half day',
    title: 'Half-day itinerary',
    duration: '2.5 – 3 h',
    steps: [
      '10:00 · Mercado de Artesanías El Parián (45–75 min).',
      'Zócalo and Puebla Cathedral (30 min walk).',
      'Typical lunch in the Historic Center (45 min).',
      'Return or complementary crafts stop.'
    ]
  },
  {
    type: 'Full day',
    title: 'Full-day itinerary',
    duration: '5 – 6 h',
    steps: [
      '10:00 · Mercado de Artesanías El Parián.',
      'Casa de los Hermanos Serdán (history and Revolution).',
      'San Pedro Museo de Arte.',
      'Lunch in the Historic Center.',
      'Biblioteca Palafoxiana and Casa de Alfeñique.',
      'Cathedral and Zócalo at sunset.'
    ]
  }
] as const;

export const visitorResponsibility = [
  {
    icon: '◆',
    title: 'Authenticity of the craft',
    text: 'Ask about material, maker, origin and documentation for pieces advertised as Talavera. Compare information and prices across vendors.'
  },
  {
    icon: '✽',
    title: 'Respect for commerce',
    text: 'Ask permission before photographing stalls and people, and do not block aisles or accesses when you stop to look.'
  },
  {
    icon: '♺',
    title: 'Zero waste',
    text: 'Bring a reusable bag and water bottle; dispose of trash in the containers of the Historic Center.'
  },
  {
    icon: '☀',
    title: 'Sun and altitude',
    text: 'Puebla is at ~2,135 m; wear a cap and sunscreen, even on cloudy days, and stay hydrated.'
  },
  {
    icon: '☂',
    title: 'Afternoon rain',
    text: 'In the rainy season (Jun–Oct) bring an umbrella; mornings are usually clear and ideal for walking.'
  },
  {
    icon: '✚',
    title: 'Safety and health',
    text: 'Watch personal items in crowded areas; there are pharmacies and care nearby in the city center.'
  }
] as const;
