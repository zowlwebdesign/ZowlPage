import React from 'react';

export default function Manifesto() {
  return (
    <>
      <section id="manifesto" className="sec">
  <div className="secWrap">
    <div className="mGrid">
      <div className="mLogoWrap rev">
        <img src="/images/extracted_1.webp" alt="ZOWL Web Design — Logo" className="mLogo" />
      </div>
      <div className="mText rev d2">
        <h2 className="secTitle" data-i18n-html="manifestoTitle">Tu web <em>no es un gasto</em></h2>
        <div className="mLine"></div>
        <p data-i18n="manifestoP1">Construimos presencias digitales que trabajan mientras duermes. Cada píxel tiene un propósito: convertir visitantes en clientes. El 97% de los consumidores busca tu negocio online antes de comprar.</p>
        <p data-i18n="manifestoP2">Si tu presencia digital no los impresiona en 3 segundos, ya los perdiste. Y cada día así es dinero regalándole a tu competencia.</p>
        <div className="mLine"></div>
        <p className="taglineM" data-i18n-html="manifestoTagline">Diseño que vende.<br />Estrategia que escala.</p>
      </div>
    </div>
  </div>
</section>
    </>
  );
}
