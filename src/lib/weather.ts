// Utilidades de clima para El Parián (Puebla).
// Los datos se obtienen de un servicio meteorológico público vía HTTP en el navegador
// (sin claves ni configuración). Este módulo solo construye URLs y formatea valores.

export interface WeatherNow {
  temperature: number;
  apparent: number;
  humidity: number;
  windSpeed: number; // km/h
  code: number;
  isDay: number;
  uv: number;
}

export interface WeatherDay {
  date: string; // YYYY-MM-DD
  code: number;
  tMax: number;
  tMin: number;
  precipProb: number; // %
  windMax: number; // km/h
  uvMax: number;
}

export interface WeatherData {
  now: WeatherNow;
  days: WeatherDay[];
  timezone: string;
  fetchedAt: number;
}

export function buildWeatherUrl(lat: number, lon: number): string {
  const p = new URLSearchParams({
    latitude: String(lat),
    longitude: String(lon),
    current: 'temperature_2m,relative_humidity_2m,apparent_temperature,is_day,weather_code,wind_speed_10m,uv_index',
    daily: 'weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,wind_speed_10m_max,uv_index_max',
    timezone: 'America/Mexico_City',
    forecast_days: '7',
    wind_speed_unit: 'kmh',
    precipitation_unit: 'mm'
  });
  return `https://api.open-meteo.com/v1/forecast?${p.toString()}`;
}

const WMO: Record<number, { label: string; icon: string }> = {
  0: { label: 'Despejado', icon: '☀' },
  1: { label: 'Mayormente despejado', icon: '🌤' },
  2: { label: 'Parcialmente nublado', icon: '⛅' },
  3: { label: 'Nublado', icon: '☁' },
  45: { label: 'Niebla', icon: '🌫' },
  48: { label: 'Niebla con escarcha', icon: '🌫' },
  51: { label: 'Llovizna ligera', icon: '🌦' },
  53: { label: 'Llovizna', icon: '🌦' },
  55: { label: 'Llovizna intensa', icon: '🌧' },
  56: { label: 'Llovizna helada', icon: '🌧' },
  61: { label: 'Lluvia débil', icon: '🌧' },
  63: { label: 'Lluvia', icon: '🌧' },
  65: { label: 'Lluvia fuerte', icon: '🌧' },
  66: { label: 'Lluvia helada', icon: '🌧' },
  71: { label: 'Nieve débil', icon: '🌨' },
  73: { label: 'Nieve', icon: '🌨' },
  75: { label: 'Nieve fuerte', icon: '❄' },
  77: { label: 'Aguanieve', icon: '🌨' },
  80: { label: 'Chubascos', icon: '🌦' },
  81: { label: 'Chubascos', icon: '🌧' },
  82: { label: 'Chubascos fuertes', icon: '⛈' },
  85: { label: 'Chubascos de nieve', icon: '🌨' },
  95: { label: 'Tormenta eléctrica', icon: '⛈' },
  96: { label: 'Tormenta con granizo', icon: '⛈' },
  99: { label: 'Tormenta con granizo', icon: '⛈' }
};

export function wmo(code: number): { label: string; icon: string } {
  return WMO[code] ?? { label: 'Condición variable', icon: '🌡' };
}

// Conversión de km/h a escala de Beaufort.
export function kmhToBeaufort(kmh: number): number {
  const steps = [1, 6, 12, 20, 29, 39, 50, 62, 75, 89, 103, 118];
  let b = 0;
  for (let i = 0; i < steps.length; i++) {
    if (kmh >= steps[i]) b = i + 1;
  }
  return b;
}

const WD = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];

export function dayLabel(iso: string): string {
  const d = new Date(`${iso}T00:00:00`);
  return WD[d.getDay()];
}

export function shortDay(iso: string): string {
  return dayLabel(iso).slice(0, 3);
}

type Locale = 'es' | 'en';

interface Phrases {
  summary: (label: string, tMin: number, tMax: number, windWord: string, uvWord: string) => string;
  riskStorm: string;
  riskHeavyRain: string;
  riskWind: string;
  riskFog: string;
  riskHeat: string;
  rainPlan: string;
  rainItems: string;
  drizzlePlan: string;
  drizzleItems: string;
  heatOutfit: string;
  heatPlan: string;
  heatItems: string;
  uvStrongItems: string;
  uvStrongPlan: string;
  uvModItems: string;
  coldHeavyOutfit: string;
  coldHeavyItems: string;
  coldDiffOutfit: string;
  coldNightOutfit: string;
  windPlan: string;
  windItems: string;
  clearPlan: string;
  cloudyPlan: string;
  windWord: (bft: number) => string;
  uvWord: (uv: number) => string;
}

const PHRASES: Record<Locale, Phrases> = {
  es: {
    summary: (l, tMin, tMax, w, u) => `${l} ${Math.round(tMin)}–${Math.round(tMax)}℃ · viento ${w} · UV ${u}`,
    riskStorm: 'Tormenta eléctrica: no te quedes en áreas descubiertas ni bajo árboles; los puestos al aire libre pueden cerrar.',
    riskHeavyRain: 'Lluvia fuerte: evita zonas bajas y descubiertas; mejor impermeable que paraguas de vara larga por el viento.',
    riskWind: 'Viento fuerte: aléjate de toldos sueltos y carteles; cuida tus pertenencias.',
    riskFog: 'Niebla: visibilidad reducida; camina con cuidado entre los pasillos.',
    riskHeat: 'Calor intenso: limita el tiempo al sol y mantente bien hidratado.',
    rainPlan: 'Alta probabilidad de lluvia: lleva paraguas; si llueve fuerte, prioriza museos cercanos (Palafoxiana, Alfeñique, San Pedro).',
    rainItems: 'Paraguas o impermeable.',
    drizzlePlan: 'Alguna llovizna posible; los pasillos al aire libre se mojan.',
    drizzleItems: 'Paraguas plegable por si acaso.',
    heatOutfit: 'Hace calor: ropa ligera y transpirable.',
    heatPlan: 'Evita la exposición al mediodía y descansa a la sombra entre pasillos.',
    heatItems: 'Protector solar y suficiente agua.',
    uvStrongItems: 'Protector solar, gafas de sol y gorra (rayos fuertes).',
    uvStrongPlan: 'Luz intensa: ideal para fotos, pero cuídate del sol.',
    uvModItems: 'Protector solar si estarás mucho tiempo al aire libre.',
    coldHeavyOutfit: 'Frío: abrigo grueso y bufanda.',
    coldHeavyItems: 'Ropa de abrigo.',
    coldDiffOutfit: 'Gran diferencia entre día y noche: lleva una chaqueta ligera para quitar y poner.',
    coldNightOutfit: 'Fresco por la tarde y la noche: una chaqueta ligera va bien.',
    windPlan: 'Viento notable: sujeta bolsas y objetos ligeros al recorrer los pasillos.',
    windItems: 'Gorra (se la lleva el viento); evita faldas muy amplias.',
    clearPlan: 'Día despejado: ideal para recorrer los pasillos y fotografiar los arcos.',
    cloudyPlan: 'Cielo nublado: luz suave, excelente para fotos y paseos largos sin sol fuerte.',
    windWord: (b) => (b <= 2 ? 'leve' : b <= 4 ? 'moderado' : b <= 6 ? 'notable' : 'fuerte'),
    uvWord: (u) => (u >= 6 ? 'fuerte' : u >= 3 ? 'moderada' : 'baja')
  },
  en: {
    summary: (l, tMin, tMax, w, u) => `${l} ${Math.round(tMin)}–${Math.round(tMax)}℃ · wind ${w} · UV ${u}`,
    riskStorm: 'Electric storm: do not stay in open areas or under trees; open-air stalls may close.',
    riskHeavyRain: 'Heavy rain: avoid low and open areas; a raincoat beats a long umbrella in the wind.',
    riskWind: 'Strong wind: keep away from loose awnings and signs; watch your belongings.',
    riskFog: 'Fog: reduced visibility; walk carefully between the aisles.',
    riskHeat: 'Intense heat: limit time in the sun and stay well hydrated.',
    rainPlan: 'High chance of rain: bring an umbrella; if it pours, prefer nearby museums (Palafoxiana, Alfeñique, San Pedro).',
    rainItems: 'Umbrella or raincoat.',
    drizzlePlan: 'Possible drizzle; the open-air aisles get wet.',
    drizzleItems: 'Foldable umbrella just in case.',
    heatOutfit: 'It is hot: light, breathable clothing.',
    heatPlan: 'Avoid midday exposure and rest in the shade between aisles.',
    heatItems: 'Sunscreen and plenty of water.',
    uvStrongItems: 'Sunscreen, sunglasses and a cap (strong rays).',
    uvStrongPlan: 'Strong light: great for photos, but protect yourself from the sun.',
    uvModItems: 'Sunscreen if you will be outdoors for a long time.',
    coldHeavyOutfit: 'Cold: thick coat and scarf.',
    coldHeavyItems: 'Warm clothing.',
    coldDiffOutfit: 'Big day-to-night swing: bring a light jacket you can add or remove.',
    coldNightOutfit: 'Cool in the afternoon and evening: a light jacket works well.',
    windPlan: 'Noticeable wind: hold bags and light objects while walking the aisles.',
    windItems: 'Cap (the wind takes it); avoid very wide skirts.',
    clearPlan: 'Clear day: ideal to walk the aisles and photograph the arches.',
    cloudyPlan: 'Cloudy sky: soft light, excellent for photos and long walks without strong sun.',
    windWord: (b) => (b <= 2 ? 'light' : b <= 4 ? 'moderate' : b <= 6 ? 'breezy' : 'strong'),
    uvWord: (u) => (u >= 6 ? 'strong' : u >= 3 ? 'moderate' : 'low')
  }
};

export interface Advice {
  summary: string;
  outfit: string[];
  plan: string[];
  items: string[];
  risk: string[];
}

// Motor de consejos para visitantes (tipo urbano/cultural: mercado + museos cercanos).
// Reglas basadas en combinaciones de datos; los bloques vacíos se ocultan en la UI.
export function buildAdvice(d: WeatherData, locale: Locale = 'es'): Advice {
  const out: Advice = { summary: '', outfit: [], plan: [], items: [], risk: [] };
  const now = d.now;
  const day = d.days[0];
  if (!day) return out;
  const T = PHRASES[locale];

  const code = now.code;
  const tNow = now.temperature;
  const tMax = day.tMax;
  const tMin = day.tMin;
  const diff = tMax - tMin;
  const precip = day.precipProb;
  const wind = now.windSpeed;
  const bft = kmhToBeaufort(wind);
  const uv = Math.max(now.uv ?? 0, day.uvMax ?? 0);

  const RAIN = [51, 53, 55, 56, 61, 63, 65, 66, 71, 73, 75, 80, 81, 82, 85];
  const DRIZZLE = [51, 53, 55, 56];
  const isRain = RAIN.includes(code);
  const isDrizzle = DRIZZLE.includes(code);
  const isStorm = code === 95 || code === 96 || code === 99;

  if (isStorm) out.risk.push(T.riskStorm);
  if (code === 65 || code === 82) out.risk.push(T.riskHeavyRain);
  if (bft >= 7) out.risk.push(T.riskWind);
  if (code === 45 || code === 48) out.risk.push(T.riskFog);
  if (tMax >= 35) out.risk.push(T.riskHeat);

  if (precip >= 60 || isRain) {
    out.plan.push(T.rainPlan);
    out.items.push(T.rainItems);
  } else if (isDrizzle || precip >= 30) {
    out.plan.push(T.drizzlePlan);
    out.items.push(T.drizzleItems);
  }

  if (tMax >= 32 || tNow >= 32) {
    out.outfit.push(T.heatOutfit);
    out.plan.push(T.heatPlan);
    out.items.push(T.heatItems);
  }
  if (uv >= 6) {
    out.items.push(T.uvStrongItems);
    out.plan.push(T.uvStrongPlan);
  } else if (uv >= 3) {
    out.items.push(T.uvModItems);
  }

  if (tMax <= 10) {
    out.outfit.push(T.coldHeavyOutfit);
    out.items.push(T.coldHeavyItems);
  } else if (diff > 8) {
    out.outfit.push(T.coldDiffOutfit);
  } else if (tMin <= 12) {
    out.outfit.push(T.coldNightOutfit);
  }

  if (bft >= 5 && bft < 7) {
    out.plan.push(T.windPlan);
    out.items.push(T.windItems);
  }

  if (code === 0 || code === 1) {
    out.plan.push(T.clearPlan);
  } else if (code === 2 || code === 3) {
    out.plan.push(T.cloudyPlan);
  }

  const cur = wmo(code);
  const windWord = T.windWord(bft);
  const uvWord = T.uvWord(uv);
  out.summary = T.summary(cur.label, tMin, tMax, windWord, uvWord);

  out.outfit = [...new Set(out.outfit)];
  out.plan = [...new Set(out.plan)];
  out.items = [...new Set(out.items)];
  out.risk = [...new Set(out.risk)];
  return out;
}
