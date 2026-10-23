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
    current: 'temperature_2m,relative_humidity_2m,apparent_temperature,is_day,weather_code,wind_speed_10m',
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

const WMO_EN: Record<number,string> = {0:'Clear',1:'Mostly clear',2:'Partly cloudy',3:'Overcast',45:'Fog',48:'Rime fog',51:'Light drizzle',53:'Drizzle',55:'Heavy drizzle',56:'Freezing drizzle',61:'Light rain',63:'Rain',65:'Heavy rain',66:'Freezing rain',71:'Light snow',73:'Snow',75:'Heavy snow',77:'Snow grains',80:'Rain showers',81:'Rain showers',82:'Heavy showers',85:'Snow showers',95:'Thunderstorm',96:'Thunderstorm with hail',99:'Thunderstorm with hail'};
export function wmo(code: number,locale: 'es'|'en'='es'): { label: string; icon: string } {
 const item=WMO[code] ?? { label: 'Condición variable', icon: '🌡' };
 return locale==='en'?{icon:item.icon,label:WMO_EN[code]||'Variable conditions'}:item;
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

export function dayLabel(iso: string,locale: 'es'|'en'='es'): string {
  const d = new Date(`${iso}T00:00:00`);
  return (locale==='es'?WD:['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'])[d.getDay()];
}

export function shortDay(iso: string,locale: 'es'|'en'='es'): string {
  return dayLabel(iso,locale).slice(0, 3);
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
    cloudyPlan: 'Cielo nublado: la luz puede ser difusa para fotos; adapta el paseo al UV y a las condiciones reales.',
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
    cloudyPlan: 'Cloudy sky: light may be diffuse for photos; adapt your walk to UV levels and actual conditions.',
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

  const cur = wmo(code,locale);
  const windWord = T.windWord(bft);
  const uvWord = T.uvWord(uv);
  out.summary = T.summary(cur.label, tMin, tMax, windWord, uvWord);

  out.outfit = [...new Set(out.outfit)];
  out.plan = [...new Set(out.plan)];
  out.items = [...new Set(out.items)];
  out.risk = [...new Set(out.risk)];
  return out;
}

// Validate every numeric field consumed by the existing view/advice before formatting.
export function validWeather(data: any): data is WeatherData {
 const num=(v:any)=>typeof v==='number'&&Number.isFinite(v);
 return !!data&&num(data.fetchedAt)&&data.fetchedAt<=Date.now()&&!!data.now&&['temperature','apparent','humidity','windSpeed','code','isDay','uv'].every(k=>num(data.now[k]))&&Array.isArray(data.days)&&data.days.length===7&&data.days.every((d:any)=>d&&/^\d{4}-\d{2}-\d{2}$/.test(d.date)&&['code','tMax','tMin','precipProb','windMax','uvMax'].every(k=>num(d[k])));
}
export function normalizeWeather(j:any):WeatherData {
 const current=['temperature_2m','apparent_temperature','relative_humidity_2m','wind_speed_10m','weather_code','is_day'];
 const daily=['weather_code','temperature_2m_max','temperature_2m_min','precipitation_probability_max','wind_speed_10m_max','uv_index_max'];
 const num=(v:any)=>typeof v==='number'&&Number.isFinite(v);
 if(!j?.current||!current.every(k=>num(j.current[k]))||!j.daily||!Array.isArray(j.daily.time)||j.daily.time.length!==7||!daily.every(k=>Array.isArray(j.daily[k])&&j.daily[k].length===7&&j.daily[k].every(num)))throw Error('Incomplete forecast');
 const data={now:{temperature:j.current.temperature_2m,apparent:j.current.apparent_temperature,humidity:j.current.relative_humidity_2m,windSpeed:j.current.wind_speed_10m,code:j.current.weather_code,isDay:j.current.is_day,uv:j.daily.uv_index_max[0]},days:j.daily.time.map((date:string,i:number)=>({date,code:j.daily.weather_code[i],tMax:j.daily.temperature_2m_max[i],tMin:j.daily.temperature_2m_min[i],precipProb:j.daily.precipitation_probability_max[i],windMax:j.daily.wind_speed_10m_max[i],uvMax:j.daily.uv_index_max[i]})),timezone:'America/Mexico_City',fetchedAt:Date.now()};
 if(!validWeather(data))throw Error('Invalid forecast');return data;
}
