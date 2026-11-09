export const site = {
  name: 'cantte',
  url: 'https://www.cantte.com',
  email: 'contact@cantte.com',
  /** Digits only, with country code. PUBLIC_WHATSAPP_NUMBER overrides it; an empty value hides the WhatsApp buttons. */
  whatsapp: (import.meta.env.PUBLIC_WHATSAPP_NUMBER ?? '573002206329').replace(/\D/g, ''),
  title: 'cantte · Desarrollo de software a la medida en Colombia',
  description:
    'Empresa de desarrollo de software en Colombia. Construimos plataformas web, APIs e integraciones, apps móviles y analítica de datos, y operamos nuestros propios productos en producción.',
} as const

export type ServiceId = 'web' | 'apis' | 'movil' | 'datos'

export const services: readonly {
  id: ServiceId
  name: string
  /** How the service reads inside the contact message. */
  ask: string
  summary: string
  deliverables: readonly string[]
  examples: string
}[] = [
  {
    id: 'web',
    ask: 'una plataforma web a la medida',
    name: 'Plataformas web a la medida',
    summary:
      'Productos SaaS, herramientas internas y portales para clientes. Reemplazamos hojas de cálculo y procesos manuales por software que tu equipo usa todos los días.',
    deliverables: ['Aplicación web', 'Panel de administración', 'Autenticación y roles', 'Despliegue'],
    examples: 'SaaS · ERP ligeros · portales de clientes',
  },
  {
    id: 'apis',
    ask: 'una API o una integración',
    name: 'APIs e integraciones',
    summary:
      'Backends y APIs REST documentadas, pagos, facturación electrónica ante la DIAN, WhatsApp y servicios de terceros. Con idempotencia, colas de trabajo y webhooks firmados.',
    deliverables: ['API REST /v1', 'Especificación OpenAPI', 'Webhooks', 'Documentación'],
    examples: 'DIAN · pasarelas de pago · WhatsApp Business',
  },
  {
    id: 'movil',
    ask: 'una app móvil',
    name: 'Apps móviles',
    summary:
      'Aplicaciones para iOS y Android conectadas al mismo backend que tu plataforma web, con notificaciones y el flujo pensado para el teléfono.',
    deliverables: ['App iOS', 'App Android', 'Notificaciones', 'Publicación en tiendas'],
    examples: 'apps de clientes · apps de campo · reservas',
  },
  {
    id: 'datos',
    ask: 'un proyecto de analítica de datos',
    name: 'Analítica de datos',
    summary:
      'Tableros, reportes y flujos de datos que reúnen lo que hoy está repartido entre sistemas, para decidir con cifras y no con intuición.',
    deliverables: ['Tableros', 'Flujos de datos (ETL)', 'Reportes automáticos', 'Modelo de datos'],
    examples: 'ventas · operación · facturación',
  },
]

/** Real milestones, dated from the products' repositories and release tags. */
export const deliveries: readonly {
  date: string
  label: string
  product: 'Cetus' | 'Wappiz'
  text: string
  version?: string
}[] = [
  {
    date: '2026-11-08',
    label: 'nov 2026',
    product: 'Cetus',
    text: 'Consola con asistente de habilitación ante la DIAN',
  },
  {
    date: '2026-10-23',
    label: 'oct 2026',
    product: 'Cetus',
    text: 'Ambiente de simulación con un simulador de la DIAN',
  },
  {
    date: '2026-10-19',
    label: 'oct 2026',
    product: 'Cetus',
    text: 'Notas crédito y webhooks firmados',
  },
  {
    date: '2026-10-12',
    label: 'oct 2026',
    product: 'Wappiz',
    text: 'Versión estable, de código abierto',
    version: 'v1.0.0',
  },
  {
    date: '2026-05-29',
    label: 'may 2026',
    product: 'Wappiz',
    text: 'Primera beta: citas por WhatsApp',
    version: 'v0.1.0',
  },
]

export const steps: readonly { title: string; text: string }[] = [
  {
    title: 'Conversación',
    text: 'Nos cuentas el problema, no la solución. Entendemos quién va a usar el software, qué hace hoy y qué tiene que cambiar.',
  },
  {
    title: 'Propuesta por escrito',
    text: 'Alcance, entregables, tecnología, tiempos y costo en un documento. Sin letra pequeña y sin cifras que cambien a mitad de camino.',
  },
  {
    title: 'Construcción con entregas',
    text: 'Ves el avance funcionando, no en diapositivas. Cada entrega queda en un ambiente de pruebas que puedes usar.',
  },
  {
    title: 'Producción y operación',
    text: 'Desplegamos, monitoreamos y seguimos contigo. El código, la infraestructura y la documentación son tuyos.',
  },
]

export const stack: readonly { area: string; tools: string }[] = [
  { area: 'Backend', tools: 'Java · Quarkus · Go · Node.js' },
  { area: 'Web', tools: 'TypeScript · React · TanStack Start · Astro' },
  { area: 'Datos', tools: 'PostgreSQL · Drizzle · Flyway' },
  { area: 'Nube', tools: 'AWS (KMS, S3) · Docker · Railway · Cloudflare' },
  { area: 'Calidad', tools: 'Testcontainers · Vitest · Playwright · k6' },
]

export const faq: readonly { question: string; answer: string }[] = [
  {
    question: '¿Qué tipo de software desarrollan?',
    answer:
      'Software a la medida: plataformas web y SaaS, APIs e integraciones (pagos, facturación electrónica ante la DIAN, WhatsApp), apps móviles para iOS y Android, y tableros de analítica de datos.',
  },
  {
    question: '¿Cuánto cuesta desarrollar un software a la medida?',
    answer:
      'Depende del alcance. Después de la primera conversación te enviamos una propuesta por escrito con alcance, entregables, tiempos y el costo de cada etapa, para que sepas cuánto vas a pagar antes de empezar.',
  },
  {
    question: '¿Cuánto tarda un proyecto?',
    answer:
      'Lo definimos en la propuesta según el alcance. Trabajamos por entregas: cada una queda funcionando en un ambiente de pruebas que puedes usar, así ves el avance sin esperar al final.',
  },
  {
    question: '¿Pueden integrar facturación electrónica de la DIAN en mi sistema?',
    answer:
      'Sí. Construimos y operamos Cetus, una API de facturación electrónica conectada a la DIAN. Podemos integrarla en tu sistema o construir la integración que necesites.',
  },
  {
    question: '¿De quién es el código?',
    answer:
      'Tuyo. Al final de cada etapa entregamos el código fuente, la infraestructura y la documentación para que puedas operarlo con nosotros o con otro equipo.',
  },
  {
    question: '¿Trabajan con empresas fuera de Colombia?',
    answer:
      'Sí. Trabajamos de forma remota, en español, con empresas de Colombia y de otros países de Latinoamérica.',
  },
]

const serviceName = (id: ServiceId | null) => services.find((s) => s.id === id)?.name

export function contactMessage(id: ServiceId | null): string {
  const ask = services.find((s) => s.id === id)?.ask
  return ask
    ? `Hola, cantte. Quiero cotizar ${ask}.`
    : 'Hola, cantte. Quiero hablar sobre un proyecto de software.'
}

export function mailtoHref(id: ServiceId | null = null): string {
  const subject = serviceName(id) ? `Proyecto: ${serviceName(id)}` : 'Nuevo proyecto'
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(contactMessage(id))}`
}

export function whatsappHref(id: ServiceId | null = null): string | null {
  return site.whatsapp ? `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(contactMessage(id))}` : null
}
