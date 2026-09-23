'use client';
import React, { useState } from 'react';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Optional: prevent body scroll when menu is open
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <>
      <nav id="nav">
        <a href="#hero" className="navLogo" onClick={closeMenu}>
          <img src="/images/extracted_3.webp" alt="ZOWL" />
          <span>ZOWL<span className="dot">.</span></span>
        </a>

        <ul className="navLinks">
          <li><a href="#services">Servicios</a></li>
          <li><a href="#projects">Proyectos</a></li>
          <li><a href="#why">Nosotros</a></li>
          <li>
            <a href="#ctaBlock">
              <button className="navCta">Cotizar</button>
            </a>
          </li>
        </ul>

        <button 
          className={`hamb ${isOpen ? 'open' : ''}`} 
          id="hamb" 
          onClick={toggleMenu}
          aria-label="Abrir menú"
        >
          <i /><i /><i />
        </button>
      </nav>

      <nav className={`mobNav ${isOpen ? 'on' : ''}`} id="mobNav">
        <a href="#services" className="mob" onClick={closeMenu}>Servicios</a>
        <a href="#projects" className="mob" onClick={closeMenu}>Proyectos</a>
        <a href="#why" className="mob" onClick={closeMenu}>Nosotros</a>
        <a href="https://wa.me/573112332539" target="_blank" rel="noreferrer" className="fire" onClick={closeMenu}>Cotizar →</a>
      </nav>
    </>
  );
}
