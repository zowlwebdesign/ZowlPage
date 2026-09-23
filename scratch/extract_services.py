import re
import json

data_str = """
  web:{title:'Páginas Web Profesionales',sub:'Tu presencia digital de alto impacto',body:`<p>Una página web profesional es la diferencia entre ser invisible y ser la opción obvia en tu mercado. El 97% de los consumidores busca negocios en Google antes de comprar, y los juzga en menos de 3 segundos.</p><p>En ZOWL diseñamos sitios corporativos, portfolios y páginas de servicios desde cero: sin plantillas, sin atajos. Cada elemento está pensado para guiar al usuario exactamente donde quieres que llegue.</p>`,includes:['Diseño UX/UI personalizado','Responsive (móvil, tablet, TV, 4K)','Velocidad < 2 seg carga','SEO técnico on-page','Formulario de contacto','Integración WhatsApp','Google Analytics 4','SSL incluido','Capacitación de uso'],why:'El 75% de los consumidores juzga la credibilidad de una empresa por su sitio web. Sin web profesional, no existe confianza. Sin confianza, no hay ventas.',who:'Profesionales independientes, consultores, médicos, abogados, restaurantes, hoteles, constructoras y cualquier empresa de servicios.'},
  ecommerce:{title:'Tiendas Online / E-commerce',sub:'Vende 24 horas, 365 días',body:`<p>Tu tienda online es tu mejor vendedor: trabaja sin descanso, puede atender miles de clientes al mismo tiempo y está disponible cuando tu cliente decide comprar, incluso a las 3am.</p><p>El comercio electrónico en Colombia creció más del 40% en los últimos dos años. Cada día sin tienda online son ventas que le estás regalando a tu competencia.</p>`,includes:['Catálogo ilimitado de productos','Carrito de compras optimizado','Pagos: PSE, tarjetas, Nequi','Gestión de inventario','Panel de administración','Cupones y descuentos','Cálculo de envíos','SEO para productos','Reporte de ventas'],why:'Las tiendas online tienen en promedio 300% más alcance que una tienda física. Con el diseño correcto, tu conversión puede superar el 3%.',who:'Tiendas físicas que quieren expandirse online, emprendedores con productos propios, marcas de moda, artesanos, alimentos.'},
  app:{title:'Aplicaciones Web',sub:'Software a medida para escalar',body:`<p>¿Tienes procesos que consumen horas manuales? ¿Excel y WhatsApp ya no alcanzan? Las herramientas genéricas llegaron a su límite en tu negocio.</p><p>Construimos aplicaciones web a medida: sistemas de gestión, dashboards en tiempo real, plataformas SaaS, portales de clientes.</p>`,includes:['Análisis y arquitectura del sistema','Base de datos estructurada','Panel de administración','Sistema de usuarios y roles','APIs e integraciones externas','Dashboard con métricas en tiempo real','Notificaciones por email/WhatsApp','Documentación técnica','Soporte técnico 3 meses'],why:'Las empresas que automatizan procesos crecen 2.5x más rápido. El costo de no automatizar es mucho mayor que el costo de construir la solución.',who:'Empresas con procesos repetitivos, startups construyendo su MVP, negocios con necesidades que Excel y Google Sheets ya no cubren.'},
  logo:{title:'Logo & Identidad de Marca',sub:'La cara de tu negocio ante el mundo',body:`<p>Tu logo no es solo un dibujo. Es el primer apretón de manos con cada cliente potencial. Lo que transmite en una fracción de segundo si tu empresa es confiable, profesional y vale la pena.</p><p>Las marcas con identidad visual consistente generan 23% más reconocimiento.</p>`,includes:['Logo vectorial en 3+ variaciones','Paleta de colores primaria y secundaria','Sistema tipográfico completo','Manual de marca (guía de uso)','Formatos web (PNG, SVG, WebP)','Formatos impresión (AI, PDF vectorial)','Favicon para web','Mockups de presentación'],why:'Una identidad visual profesional genera hasta 3x más confianza en consumidores nuevos.',who:'Emprendedores lanzando su primer negocio, empresas que quieren renovar su imagen.'},
  seo:{title:'SEO & Posicionamiento en Google',sub:'Sé el primero cuando te buscan',body:`<p>El 75% de los usuarios nunca pasa de la primera página de Google. Si no estás en los primeros resultados, no existes para miles de clientes que te buscan ahora mismo.</p><p>A diferencia de la publicidad pagada que para cuando dejas de pagar, el tráfico orgánico crece con el tiempo y es gratuito.</p>`,includes:['Auditoría técnica completa','Investigación de keywords','Optimización velocidad y Core Web Vitals','Estructura de URLs y contenido','Títulos y meta descripciones','Construcción de autoridad','Google Search Console','Reporte mensual de posiciones'],why:'El tráfico orgánico tiene una tasa de conversión 5x mayor que el tráfico pagado.',who:'Negocios locales que quieren dominar su ciudad, e-commerce sin pagar por cada clic.'},
  marketing:{title:'Marketing Digital',sub:'Clientes reales, no solo impresiones',body:`<p>El marketing digital mal hecho es la forma más rápida de quemar tu presupuesto. Sin estrategia, sin segmentación correcta, sin creatividades que conviertan, cada peso invertido se va al vacío.</p><p>El bien hecho, con datos y optimización semanal, es la máquina de crecimiento más poderosa que existe.</p>`,includes:['Estrategia de campañas personalizada','Pixel de Meta y conversiones','Audiencias y segmentación avanzada','Diseño de creatividades y copies','Campañas de reconocimiento y conversión','A/B testing continuo','Remarketing y retargeting','Optimización semanal de presupuesto','Reporte mensual de ROAS'],why:'Las empresas con marketing digital correcto obtienen entre 3x y 8x retorno sobre su inversión.',who:'Negocios con producto validado que quieren escalar, e-commerce que buscan más ventas.'}
"""

with open(r'c:\Users\ASUS\Desktop\zowl\zowlpage\src\data\services.tsx', 'r', encoding='utf-8') as f:
    services_code = f.read()

# Update the interface
services_code = services_code.replace(
"""export interface Service {
  num: string;
  icon: React.ReactNode;
  label: string;
  name: string;
  desc: string;
  bullets: string[];
  tags: string[];
}""",
"""export interface Service {
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
}"""
)

# Extract mappings
import ast


def fix_dict_str(s):
    # This is a bit hacky, let's just parse it manually with regex
    pass

import re

items = [
    ('web', '01'),
    ('ecommerce', '02'),
    ('app', '03'),
    ('logo', '04'),
    ('seo', '05'),
    ('marketing', '06'),
]

for key, num in items:
    # Find the block for this key
    pattern = rf"{key}:{{title:'(.*?)',sub:'(.*?)',body:`(.*?)`,includes:\[(.*?)\],why:'(.*?)',who:'(.*?)'}}"
    match = re.search(pattern, data_str)
    if match:
        title = match.group(1)
        sub = match.group(2)
        body = match.group(3)
        includes = match.group(4)
        why = match.group(5)
        who = match.group(6)
        
        # Format the replacements safely
        includes_arr = f"[{includes}]"
        
        # Find the object in services_code
        obj_pattern = rf"(num: '{num}',.*?)(?=\n  }},|\n\];)"
        obj_match = re.search(obj_pattern, services_code, re.DOTALL)
        
        if obj_match:
            original_obj = obj_match.group(1)
            # Remove existing bullets, desc, tags and label to replace them cleanly
            new_obj = re.sub(r"\n\s*label: '.*?',", f"\n    label: '{sub}',", original_obj)
            new_obj = re.sub(r"\n\s*name: '.*?',", f"\n    name: '{title}',", new_obj)
            new_obj = re.sub(r"\n\s*desc: '.*?',", f"\n    desc: '{body[:50]}...',", new_obj)
            new_obj = re.sub(r"\n\s*bullets: \[.*?\],", f"\n    bullets: {includes_arr},", new_obj)
            
            # Now add body, why, who
            # Tags are left as is, but let's just leave tags or remove them if who is better. I will just leave tags alone.
            addition = f"""\n    body: `{body}`,\n    why: '{why}',\n    who: '{who}',"""
            new_obj += addition
            
            services_code = services_code.replace(original_obj, new_obj)

with open(r'c:\Users\ASUS\Desktop\zowl\zowlpage\src\data\services.tsx', 'w', encoding='utf-8') as f:
    f.write(services_code)

print("Updated services.tsx")
