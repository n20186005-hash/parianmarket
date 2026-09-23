import { attraction } from '../data/site';
import { content } from '../data/content';
import * as es from '../data/site';
import * as en from '../data/site.en';
import type { Locale } from '../data/content';

// Construye el JSON-LD (@graph) de la página. Usa URLs absolutas cuando `site` está disponible.
export function buildSchema(locale: Locale, site?: URL) {
  const data = locale === 'es' ? es : en;
  const copy = content[locale];
  const pageUrl = site ? new URL('/', site).href : undefined;
  const entityId = site ? new URL(locale === 'es' ? '/#mercado-el-parian' : '/en/#mercado-el-parian', site).href : undefined;
  const ogImage = site ? new URL('/images/og-el-parian.jpg', site).href : '/images/og-el-parian.jpg';

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['TouristAttraction', 'LocalBusiness'],
        ...(entityId ? { '@id': entityId } : {}),
        name: attraction.name,
        alternateName: [...attraction.alternateName, 'Puebla ' + attraction.name, 'El Parián de Puebla'],
        description: copy.schemaDescription,
        ...(pageUrl ? { url: pageUrl } : {}),
        sameAs: [
          attraction.googleMaps,
          'https://www.wikidata.org/wiki/Q16606365',
          'https://commons.wikimedia.org/wiki/Category:Market_of_El_Pari%C3%A1n',
          'https://visita.pueblacapital.gob.mx/atractivos/los-imperdibles-de-puebla/itemlist/category/31-mercados-de-artesanias'
        ],
        address: {
          '@type': 'PostalAddress',
          streetAddress: '6 Norte 205, Centro Histórico',
          addressLocality: 'Heroica Puebla de Zaragoza',
          addressRegion: 'Puebla',
          postalCode: '72000',
          addressCountry: 'MX'
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: attraction.latitude,
          longitude: attraction.longitude
        },
        image: [ogImage],
        hasMap: attraction.googleMaps,
        isAccessibleForFree: true,
        touristType: ['Mercado tradicional', 'Mercado de artesanías', 'Atractivo del Centro Histórico'],
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            opens: '10:00',
            closes: '20:00'
          }
        ],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: attraction.rating,
          reviewCount: attraction.reviewCount,
          bestRating: 5,
          worstRating: 1
        },
        subjectOf: [
          { '@type': 'WebPage', name: 'Turismo del Municipio de Puebla', url: 'https://visita.pueblacapital.gob.mx/' },
          { '@type': 'WebPage', name: 'Secretaría de Desarrollo Turístico de Puebla', url: 'https://sectur.puebla.gob.mx/' }
        ]
      },
      {
        '@type': 'FAQPage',
        mainEntity: data.faqs.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a }
        }))
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          ...(pageUrl ? [{ '@type': 'ListItem', position: 1, name: copy.breadcrumbHome, item: pageUrl }] : []),
          ...(entityId ? [{ '@type': 'ListItem', position: 2, name: attraction.name, item: entityId }] : []),
          { '@type': 'ListItem', position: 3, name: attraction.city },
          { '@type': 'ListItem', position: 4, name: attraction.state },
          { '@type': 'ListItem', position: 5, name: attraction.country }
        ]
      }
    ]
  };
}
