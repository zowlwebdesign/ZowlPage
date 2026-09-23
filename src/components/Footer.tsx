import React from 'react';

export default function Footer() {
  return (
    <>
      <footer>
  <div className="ftMain">
    <div>
      <span className="ftLogo" style={{ "display": "flex", "alignItems": "center", "gap": "10px" }}><img src="/images/extracted_3.webp" alt="ZOWL" style={{ "height": "30px", "width": "auto" }} />ZOWL<span>.</span></span>
      <p className="ftTag" data-i18n="ftTag">Construimos presencias digitales que trabajan mientras duermes. Diseño + Estrategia + Resultados para tu negocio.</p>
      <div className="ftSocs">
        <a href="https://wa.me/573112332539" target="_blank" rel="noopener noreferrer" aria-label="Contactar por WhatsApp" className="ftSoc"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 8.5-8.5h.4a8.5 8.5 0 0 1 8.1 8v.5z"/></svg></a>
      </div>
    </div>
    <div className="ftCol">
      <h5 data-i18n="ftColServices">Servicios</h5>
      <ul>
        <li><a href="#services" data-i18n="ftSvc1">Páginas Web</a></li>
        <li><a href="#services">E-commerce</a></li>
        <li><a href="#services" data-i18n="ftSvc3">Aplicaciones Web</a></li>
        <li><a href="#services" data-i18n="ftSvc4">Logo & Marca</a></li>
        <li><a href="#services">SEO</a></li>
        <li><a href="#services" data-i18n="ftSvc6">Marketing Digital</a></li>
      </ul>
    </div>
    <div className="ftCol">
      <h5 data-i18n="ftColCompany">Empresa</h5>
      <ul>
        <li><a href="#projects" data-i18n="navProjects">Proyectos</a></li>
        <li><a href="#why" data-i18n="ftAbout">Sobre ZOWL</a></li>
        <li><a href="#founder" data-i18n="navFounder">Fundador</a></li>
        <li><a href="#process" data-i18n="navProcess">Proceso</a></li>
        <li><a href="#ctaBlock" data-i18n="navQuote">Cotizar</a></li>
      </ul>
    </div>
    <div className="ftCol">
      <h5 data-i18n="ftColContact">Contacto</h5>
      <ul>
        <li><a href="https://wa.me/573112332539" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 8.5-8.5h.4a8.5 8.5 0 0 1 8.1 8v.5z"/></svg>+57 311 233 2539</a></li>
        <li><a href="mailto:contacto@zowlwebdesign.com"><svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>contacto@zowlwebdesign.com</a></li>
        <li><span><svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg><span data-i18n="fLocation2">Bogotá, Colombia</span></span></li>
      </ul>
    </div>
  </div>
  <div className="ftBar">
    <span className="ftCopy" data-i18n="ftCopy">© 2026 ZOWL Web Design — Todos los derechos reservados</span>
    <div className="ftLegal"><a href="/privacidad" data-i18n="ftPriv">Privacidad</a><a href="/terminos" data-i18n="ftTerms">Términos</a></div>
  </div>
</footer>
    </>
  );
}
