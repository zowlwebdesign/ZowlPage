import React from 'react';

export interface Service {
  num: string;
  icon: React.ReactNode;
  label: string;
  name: string;
  desc: string;
  bullets: string[];
  tags: string[];
  body: string;
  why: string;
  who: string;
}

export const services: Service[] = [
  {
    num: '01',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    label: 'Tu presencia digital de alto impacto',
    name: 'Páginas Web Profesionales',
    desc: '<p>Una página web profesional es la diferencia ent...',
    bullets: ['Diseño UX/UI personalizado','Responsive (móvil, tablet, TV, 4K)','Velocidad < 2 seg carga','SEO técnico on-page','Formulario de contacto','Integración WhatsApp','Google Analytics 4','SSL incluido','Capacitación de uso'],
    tags: ['Pymes', 'Profesionales', 'Startups'],
    body: `<p>Una página web profesional es la diferencia entre ser invisible y ser la opción obvia en tu mercado. El 97% de los consumidores busca negocios en Google antes de comprar, y los juzga en menos de 3 segundos.</p><p>En ZOWL diseñamos sitios corporativos, portfolios y páginas de servicios desde cero: sin plantillas, sin atajos. Cada elemento está pensado para guiar al usuario exactamente donde quieres que llegue.</p>`,
    why: 'El 75% de los consumidores juzga la credibilidad de una empresa por su sitio web. Sin web profesional, no existe confianza. Sin confianza, no hay ventas.',
    who: 'Profesionales independientes, consultores, médicos, abogados, restaurantes, hoteles, constructoras y cualquier empresa de servicios.',
  },
  {
    num: '02',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
      </svg>
    ),
    label: 'Vende 24 horas, 365 días',
    name: 'Tiendas Online / E-commerce',
    desc: '<p>Tu tienda online es tu mejor vendedor: trabaja ...',
    bullets: ['Catálogo ilimitado de productos','Carrito de compras optimizado','Pagos: PSE, tarjetas, Nequi','Gestión de inventario','Panel de administración','Cupones y descuentos','Cálculo de envíos','SEO para productos','Reporte de ventas'],
    tags: ['Retail', 'Moda', 'Emprendedores'],
    body: `<p>Tu tienda online es tu mejor vendedor: trabaja sin descanso, puede atender miles de clientes al mismo tiempo y está disponible cuando tu cliente decide comprar, incluso a las 3am.</p><p>El comercio electrónico en Colombia creció más del 40% en los últimos dos años. Cada día sin tienda online son ventas que le estás regalando a tu competencia.</p>`,
    why: 'Las tiendas online tienen en promedio 300% más alcance que una tienda física. Con el diseño correcto, tu conversión puede superar el 3%.',
    who: 'Tiendas físicas que quieren expandirse online, emprendedores con productos propios, marcas de moda, artesanos, alimentos.',
  },
  {
    num: '03',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    label: 'Software a medida para escalar',
    name: 'Aplicaciones Web',
    desc: '<p>¿Tienes procesos que consumen horas manuales? ¿...',
    bullets: ['Análisis y arquitectura del sistema','Base de datos estructurada','Panel de administración','Sistema de usuarios y roles','APIs e integraciones externas','Dashboard con métricas en tiempo real','Notificaciones por email/WhatsApp','Documentación técnica','Soporte técnico 3 meses'],
    tags: ['Empresas', 'SaaS', 'Automatización'],
    body: `<p>¿Tienes procesos que consumen horas manuales? ¿Excel y WhatsApp ya no alcanzan? Las herramientas genéricas llegaron a su límite en tu negocio.</p><p>Construimos aplicaciones web a medida: sistemas de gestión, dashboards en tiempo real, plataformas SaaS, portales de clientes.</p>`,
    why: 'Las empresas que automatizan procesos crecen 2.5x más rápido. El costo de no automatizar es mucho mayor que el costo de construir la solución.',
    who: 'Empresas con procesos repetitivos, startups construyendo su MVP, negocios con necesidades que Excel y Google Sheets ya no cubren.',
  },
  {
    num: '04',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"/>
      </svg>
    ),
    label: 'La cara de tu negocio ante el mundo',
    name: 'Logo & Identidad de Marca',
    desc: '<p>Tu logo no es solo un dibujo. Es el primer apre...',
    bullets: ['Logo vectorial en 3+ variaciones','Paleta de colores primaria y secundaria','Sistema tipográfico completo','Manual de marca (guía de uso)','Formatos web (PNG, SVG, WebP)','Formatos impresión (AI, PDF vectorial)','Favicon para web','Mockups de presentación'],
    tags: ['Nuevos negocios', 'Rebranding'],
    body: `<p>Tu logo no es solo un dibujo. Es el primer apretón de manos con cada cliente potencial. Lo que transmite en una fracción de segundo si tu empresa es confiable, profesional y vale la pena.</p><p>Las marcas con identidad visual consistente generan 23% más reconocimiento.</p>`,
    why: 'Una identidad visual profesional genera hasta 3x más confianza en consumidores nuevos.',
    who: 'Emprendedores lanzando su primer negocio, empresas que quieren renovar su imagen.',
  },
  {
    num: '05',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><polyline points="8 13 10 11 12 13 16 9"/>
      </svg>
    ),
    label: 'Sé el primero cuando te buscan',
    name: 'SEO & Posicionamiento en Google',
    desc: '<p>El 75% de los usuarios nunca pasa de la primera...',
    bullets: ['Auditoría técnica completa','Investigación de keywords','Optimización velocidad y Core Web Vitals','Estructura de URLs y contenido','Títulos y meta descripciones','Construcción de autoridad','Google Search Console','Reporte mensual de posiciones'],
    tags: ['Negocios locales', 'E-commerce'],
    body: `<p>El 75% de los usuarios nunca pasa de la primera página de Google. Si no estás en los primeros resultados, no existes para miles de clientes que te buscan ahora mismo.</p><p>A diferencia de la publicidad pagada que para cuando dejas de pagar, el tráfico orgánico crece con el tiempo y es gratuito.</p>`,
    why: 'El tráfico orgánico tiene una tasa de conversión 5x mayor que el tráfico pagado.',
    who: 'Negocios locales que quieren dominar su ciudad, e-commerce sin pagar por cada clic.',
  },
  {
    num: '06',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
      </svg>
    ),
    label: 'Clientes reales, no solo impresiones',
    name: 'Marketing Digital',
    desc: '<p>El marketing digital mal hecho es la forma más ...',
    bullets: ['Estrategia de campañas personalizada','Pixel de Meta y conversiones','Audiencias y segmentación avanzada','Diseño de creatividades y copies','Campañas de reconocimiento y conversión','A/B testing continuo','Remarketing y retargeting','Optimización semanal de presupuesto','Reporte mensual de ROAS'],
    tags: ['Escala rápida', 'Lanzamientos'],
    body: `<p>El marketing digital mal hecho es la forma más rápida de quemar tu presupuesto. Sin estrategia, sin segmentación correcta, sin creatividades que conviertan, cada peso invertido se va al vacío.</p><p>El bien hecho, con datos y optimización semanal, es la máquina de crecimiento más poderosa que existe.</p>`,
    why: 'Las empresas con marketing digital correcto obtienen entre 3x y 8x retorno sobre su inversión.',
    who: 'Negocios con producto validado que quieren escalar, e-commerce que buscan más ventas.',
  },
];
