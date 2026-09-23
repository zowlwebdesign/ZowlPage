import React from 'react';

export default function Founder() {
  return (
    <>
      <section id="founder" className="sec">
        <div className="secWrap">
          {/* CEO Block */}
          <div className="fGrid" style={{ marginBottom: '80px' }}>
            <div className="fPhotoWrap rev">
              <img src="/images/extracted_5.webp" alt="Carlos Andrés Ovalle Marín, CEO y Fundador de ZOWL Web Design" loading="lazy" />
            </div>
            <div className="fCopy">
              <h2 className="fName rev d1">Carlos Andrés<br />Ovalle Marín</h2>
              <div className="fBio rev d2">
                <p>CEO & Founder de ZOWL Web Design. Especializado en dirección creativa, diseño web, estrategia digital y desarrollo de experiencias digitales enfocadas en convertir ideas de negocio en marcas y productos digitales con identidad propia.</p>
                <p>Mi enfoque combina creatividad, diseño experiencial, experiencia de usuario y estrategia de negocio. No se trata únicamente de crear una web visualmente atractiva, sino de entender qué necesita cada proyecto y construir una experiencia que comunique, conecte y cumpla un propósito.</p>
                <p>Como fundador de ZOWL, lidero la visión creativa y estratégica de cada proyecto, definiendo su identidad visual, concepto, estructura y dirección general. Cada decisión de diseño busca responder a una necesidad concreta y evitar soluciones genéricas o basadas en plantillas.</p>
                <p>Mis principales habilidades incluyen dirección creativa, diseño web, UI/UX, branding digital, estrategia, conceptualización y resolución de problemas, con especial atención a los detalles que hacen que una experiencia digital sea diferente.</p>
              </div>
              <p className="fQuote rev d3">"El diseño no consiste únicamente en hacer que algo se vea bien. Consiste en entender una idea, darle identidad y convertirla en una experiencia que tenga un propósito."</p>
              <div className="fLinks rev d4">
                <a href="https://wa.me/573112332539" target="_blank" className="btnFire" style={{ "color": "#fff" }}><span data-i18n="fCta1">Hablar con Carlos</span></a>
                <a href="mailto:zowlwebdesign@gmail.com" className="btnGhost" style={{ "borderColor": "rgba(15,20,25,.2)", "color": "var(--ink)" }} data-i18n="fCta2">Enviar email</a>
              </div>
            </div>
          </div>

          {/* CTO Block (Mirrored) */}
          <div className="fGrid mirrored">
            <div className="fPhotoWrap rev">
              <img src="https://res.cloudinary.com/d8wuma28/image/upload/v1790177424/40e87227-bbf1-4c74-9899-6af50b1d1f9a.jpg" alt="Adrian Sebastian Botia Riaño, CTO & Co-Founder de ZOWL Web Design" loading="lazy" style={{ objectFit: 'cover' }} />
            </div>
            <div className="fCopy">
              <h2 className="fName rev d1">Adrian Sebastian<br />Botia Riaño</h2>
              <div className="fBio rev d2">
                <p>CTO & Co-Founder en ZOWL Web Design. Especializado en arquitectura de software, desarrollo web y soluciones técnicas escalables.</p>
                <p>Mi enfoque une la robustez del código con la experiencia de usuario: no se trata solo de que una plataforma funcione, sino de que sea rápida, segura y soporte el crecimiento real de cada negocio.</p>
                <p>Como CTO, lidero la infraestructura técnica y el desarrollo en ZOWL, transformando conceptos visuales en productos digitales sólidos, eficientes y libres de soluciones genéricas.</p>
                <p>Mis fortalezas abarcan desarrollo full-stack, optimización web, arquitectura de sistemas y resolución de problemas técnicos complejos.</p>
              </div>
              <p className="fQuote rev d3">"La tecnología debe ser el motor invisible que impulsa el diseño. Un código robusto y escalable es lo que convierte una buena idea visual en una plataforma imparable."</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
