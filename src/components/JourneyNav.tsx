import React from 'react';

export default function JourneyNav() {
  return (
    <>
      <nav className="journeyNav" id="journeyNav" aria-label="Mapa del sitio">
  <svg className="journeyLine" viewBox="0 0 20 600" preserveAspectRatio="none"><path id="journeyPath" d="M10,0 L10,600"/></svg>
  <button className="jStop" data-target="#hero" data-label="Inicio"><span className="jDot"></span><span className="jLbl">Inicio</span></button>
  <button className="jStop" data-target="#manifesto" data-label="Filosofía"><span className="jDot"></span><span className="jLbl">Filosofía</span></button>
  <button className="jStop" data-target="#services" data-label="Servicios"><span className="jDot"></span><span className="jLbl">Servicios</span></button>
  <button className="jStop" data-target="#projects" data-label="Proyectos"><span className="jDot"></span><span className="jLbl">Proyectos</span></button>
  <button className="jStop" data-target="#why" data-label="Por qué"><span className="jDot"></span><span className="jLbl">Por qué</span></button>
  <button className="jStop" data-target="#process" data-label="Proceso"><span className="jDot"></span><span className="jLbl">Proceso</span></button>
  <button className="jStop" data-target="#founder" data-label="Fundador"><span className="jDot"></span><span className="jLbl">Fundador</span></button>
  <button className="jStop" data-target="#ctaBlock" data-label="Contacto"><span className="jDot"></span><span className="jLbl">Contacto</span></button>
</nav>
    </>
  );
}
