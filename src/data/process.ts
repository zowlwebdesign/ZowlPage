export interface ProcessStep {
  num: string;
  title: string;
  sub: string;
  desc: string;
  detail: string;
  /** Full modal body HTML */
  body: string;
  includes: string[];
  why: string;
  who: string;
}

export const processSteps: ProcessStep[] = [
  {
    num: '01',
    title: '01 - Diagnóstico',
    sub: 'Entendemos tu negocio a fondo',
    desc: 'Entendemos tu negocio, industria, competencia y objetivos reales antes de diseñar.',
    detail: 'Reunión de discovery · Análisis de competidores · Brief estratégico',
    body: '<p>Antes de escribir una sola línea de código o diseñar un solo píxel, nos sumergimos en tu mundo. Analizamos tu industria, tu competencia, tu cliente ideal y tus objetivos de negocio reales.</p><p>Esta fase define el éxito del proyecto. Sin un diagnóstico sólido, el diseño más bonito del mundo no va a vender. Nosotros construimos sobre datos, no sobre suposiciones.</p>',
    includes: ['Reunión de discovery (1-2h)', 'Análisis de competencia digital', 'Mapa del cliente ideal', 'Definición de KPIs y objetivos', 'Brief estratégico entregable'],
    why: 'El 70% de los proyectos fallidos no tienen un brief claro. Esta fase evita retrabajos costosos.',
    who: 'Todo cliente nuevo. Sin importar el servicio.',
  },
  {
    num: '02',
    title: '02 - Diseño',
    sub: 'Cada pantalla aprobada antes de construir',
    desc: 'Creamos la experiencia visual completa. Apruebas cada pantalla antes de construir.',
    detail: 'Wireframes · Mockups alta fidelidad · Prototipo interactivo',
    body: '<p>Basados en el diagnóstico, creamos la experiencia visual completa del proyecto. No solo hacemos "que se vea bonito": cada decisión de diseño tiene una razón estratégica.</p><p>Presentamos wireframes, mockups en alta fidelidad y un prototipo interactivo. Tú apruebas cada pantalla. Revisiones ilimitadas hasta tu 100% de satisfacción. Solo cuando das luz verde, avanzamos a desarrollo.</p>',
    includes: ['Wireframes de todas las vistas', 'Mockups alta fidelidad en Figma', 'Prototipo interactivo navegable', 'Sesión de revisión y feedback', 'Sistema de design tokens'],
    why: 'Ver el diseño aprobado antes de construir elimina el 90% de los cambios costosos en desarrollo.',
    who: 'Proyectos web, apps y e-commerce.',
  },
  {
    num: '03',
    title: '03 - Desarrollo',
    sub: 'Código limpio que escala',
    desc: 'Código limpio, veloz y optimizado. Sin plantillas, sin atajos baratos.',
    detail: 'Front-end + Back-end · Integraciones · Pruebas cross-browser',
    body: '<p>Con el diseño aprobado, construimos. Código limpio, semántico y optimizado. Sin plantillas de WordPress robadas, sin código copiado de StackOverflow que nadie entiende. Cada línea es intencional.</p><p>Velocidad de carga, compatibilidad en todos los navegadores, SEO técnico integrado desde la base y arquitectura que escala cuando tu negocio crece.</p>',
    includes: ['Desarrollo front-end y back-end', 'Optimización de velocidad (<2s carga)', 'Cross-browser: Chrome, Safari, Firefox, Edge', 'Responsive: móvil, tablet, desktop, TV', 'SEO técnico on-page', 'Pruebas de calidad (QA)'],
    why: 'Código mal escrito es deuda técnica. En 6 meses, lo que ahorras pagando barato lo pierdes en mantenimiento.',
    who: 'Todos los proyectos digitales.',
  },
  {
    num: '04',
    title: '04 - Lanzamiento',
    sub: 'Salimos a ganar, no solo a publicar',
    desc: 'Publicamos, capacitamos y monitoreamos. Tu sitio sale listo para ganar.',
    detail: 'Deploy · Google Analytics · Capacitación · Soporte 30 días',
    body: '<p>Publicar es la parte fácil. Lo que importa es que el lanzamiento sea un éxito. Configuramos analytics, verificamos que todo funcione en producción, te capacitamos y monitoreamos los primeros días.</p><p>30 días de soporte post-lanzamiento incluidos. Tu inversión está protegida.</p>',
    includes: ['Deploy a servidor de producción', 'Configuración Google Analytics 4', 'Google Search Console', 'Capacitación de uso (1-2h)', 'SSL y seguridad básica', 'Soporte prioritario 30 días', 'Reporte de velocidad Lighthouse'],
    why: 'El 30% de los proyectos tienen bugs menores en producción. El soporte incluido los resuelve sin costo adicional.',
    who: 'Todos los proyectos. Sin excepción.',
  },
];
