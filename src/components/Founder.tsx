import React from 'react';

export default function Founder() {
  return (
    <>
      <section id="founder" className="sec">
  <div className="secWrap">
    <div className="fGrid">
      <div className="fPhotoWrap rev">
        <img src="/images/extracted_5.webp" alt="Carlos Andrés Ovalle Marín, CEO y Fundador de ZOWL Web Design" loading="lazy" />
      </div>
      <div className="fCopy">
        <h2 className="fName rev d1">Carlos Andrés<br />Ovalle Marín</h2>
        <div className="fBio rev d2">
          <p data-i18n="fBio1">CEO y fundador de ZOWL Web Design. Diseño y construyo cada proyecto desde cero — sin plantillas, sin atajos — porque creo que la diferencia entre una web genérica y una que realmente vende está en los detalles que nadie más se toma el tiempo de cuidar.</p>
          <p data-i18n="fBio2">Mi enfoque combina innovación visual, experiencia de usuario y estrategia de negocio: no diseño para que algo se vea bonito, diseño para que convierta. Cada pixel, cada transición y cada decisión de color tiene una razón detrás, pensada para la marca específica que la necesita, no para un molde reutilizable.</p>
        </div>
        <p className="fQuote rev d3" data-i18n="fQuote">"La creatividad sin estrategia es solo decoración. En ZOWL diseñamos experiencias que se ven espectaculares y que además hacen crecer el negocio de quien confía en nosotros."</p>
        <div className="fLinks rev d4">
          <a href="https://wa.me/573112332539" target="_blank" className="btnFire" style={{ "color": "#fff" }}><span data-i18n="fCta1">Hablar con Carlos</span></a>
          <a href="mailto:zowlwebdesign@gmail.com" className="btnGhost" style={{ "borderColor": "rgba(15,20,25,.2)", "color": "var(--ink)" }} data-i18n="fCta2">Enviar email</a>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  );
}
