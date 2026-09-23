import React from 'react';

export default function Cta() {
  return (
    <>
      <section id="ctaBlock" className="sec">
  <div className="ctaGlow"></div>
  <div className="secWrap">
    <div className="ctaInner">
      <h2 className="ctaBig rev" data-i18n-html="ctaTitle">¿Listo para<br /><span>dominar</span><br />online?</h2>
      <p className="rev d1" data-i18n="ctaPara">Si tu competencia ya tiene presencia digital y tú no, cada día que pasa son clientes y dinero que estás perdiendo.</p>
      <div className="ctaBtns rev d2">
        <a href="https://wa.me/573112332539" target="_blank" className="btnFire">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 8.5-8.5h.4a8.5 8.5 0 0 1 8.1 8v.5z"/></svg>
          <span data-i18n="ctaWhatsapp">Hablar por WhatsApp</span>
        </a>
        <a href="#services" className="btnGhost" style={{ "borderColor": "rgba(15,20,25,.2)", "color": "var(--ink)" }} data-i18n="ctaAllServices">Ver todos los servicios</a>
      </div>
      <div className="ctaLinks rev d3">
        <a href="mailto:contacto@zowlwebdesign.com" className="ctaLink"><svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>contacto@zowlwebdesign.com</a>
        <a href="tel:+573112332539" className="ctaLink"><svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72A12.84 12.84 0 0 0 9.3 5.75a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.14-1.84a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 15z"/></svg>+57 311 233 2539</a>
      </div>
    </div>
  </div>
</section>
    </>
  );
}
