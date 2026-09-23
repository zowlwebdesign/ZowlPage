export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": "https://zowlwebdesign.com/#business",
        "name": "ZOWL Web Design",
        "alternateName": "ZOWL",
        "description": "Agencia de diseño web y desarrollo a medida en Bogotá, Colombia. Sitios web, e-commerce, apps y branding creados desde cero, sin plantillas.",
        "url": "https://zowlwebdesign.com",
        "telephone": "+573112332539",
        "email": "contacto@zowlwebdesign.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://zowlwebdesign.com/images/extracted_3.webp",
          "width": 512,
          "height": 512,
        },
        "image": "https://zowlwebdesign.com/images/extracted_3.webp",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Bogotá",
          "addressRegion": "Cundinamarca",
          "addressCountry": "CO",
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 4.711,
          "longitude": -74.0721,
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "08:00",
          "closes": "18:00",
        },
        "priceRange": "$$",
        "currenciesAccepted": "COP, USD",
        "paymentAccepted": "Cash, Credit Card, Bank Transfer",
        "areaServed": ["Colombia", "Latinoamérica"],
        "knowsAbout": [
          "Diseño web",
          "Desarrollo web",
          "E-commerce",
          "Branding",
          "SEO",
          "Marketing Digital",
          "Aplicaciones Web",
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Servicios de Diseño y Desarrollo Web",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Diseño y Desarrollo Web",
                "description": "Páginas web a medida, sin plantillas, optimizadas para conversión.",
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Tiendas E-commerce",
                "description": "Tiendas online completas con gestión de productos, pagos y pedidos.",
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Aplicaciones Web",
                "description": "Aplicaciones web a medida para automatizar y escalar tu negocio.",
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Branding y Diseño de Logo",
                "description": "Identidad de marca completa: logo, paleta de colores, tipografía y manual de marca.",
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "SEO y Posicionamiento",
                "description": "Posicionamiento orgánico en Google para atraer clientes de forma constante.",
              },
            },
          ],
        },
        "founder": {
          "@type": "Person",
          "name": "Carlos Andrés Ovalle Marín",
          "jobTitle": "Fundador y Director Creativo",
          "worksFor": {
            "@id": "https://zowlwebdesign.com/#business",
          },
        },
        "sameAs": [
          "https://wa.me/573112332539",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://zowlwebdesign.com/#website",
        "url": "https://zowlwebdesign.com",
        "name": "ZOWL Web Design",
        "description": "Agencia de diseño web a medida en Bogotá, Colombia.",
        "publisher": {
          "@id": "https://zowlwebdesign.com/#business",
        },
        "inLanguage": "es-CO",
      },
      {
        "@type": "WebPage",
        "@id": "https://zowlwebdesign.com/#webpage",
        "url": "https://zowlwebdesign.com",
        "name": "ZOWL Web Design — Agencia de Diseño Web 100% a Medida en Bogotá",
        "isPartOf": {
          "@id": "https://zowlwebdesign.com/#website",
        },
        "about": {
          "@id": "https://zowlwebdesign.com/#business",
        },
        "description": "Agencia de diseño web y desarrollo a medida en Bogotá, Colombia.",
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Inicio",
              "item": "https://zowlwebdesign.com",
            },
          ],
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
