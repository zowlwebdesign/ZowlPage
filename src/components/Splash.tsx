"use client";
import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';

export default function Splash() {
  const [hidden, setHidden] = useState(false);
  const splashRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const splash = splashRef.current;
    if (!splash) return;
    
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      setHidden(true);
      return;
    }
    
    document.documentElement.style.overflow = 'hidden';
    
    gsap.set('.splashLogoWrap', { scale: 0.4, rotate: -25 });
    gsap.set('.splashWelcome, .splashSub', { y: 14 });
    gsap.set('.splashBrand', { y: 20 });
    
    const tl = gsap.timeline({
      onComplete: () => {
        splash.classList.add('leaving');
        setTimeout(() => {
          setHidden(true);
          document.documentElement.style.overflow = '';
        }, 700);
      }
    });
    
    tl.to('.splashLogoWrap', { opacity: 1, scale: 1, rotate: 0, duration: 0.9, ease: 'back.out(1.8)' })
      .to('.splashWelcome', { opacity: 1, y: 0, duration: 0.55, ease: 'power3.out' }, '-=.4')
      .to('.splashBrand', { opacity: 1, y: 0, duration: 0.7, ease: 'power4.out' }, '-=.35')
      .to('.splashSub', { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }, '-=.4')
      .to('.splashBar', { opacity: 1, duration: 0.3 }, '-=.25')
      .to('.splashBarFill', { width: '100%', duration: 0.9, ease: 'power1.inOut' }, '-=.15')
      .to('.splashInner', { delay: 0.25, opacity: 1, duration: 0.1 });
      
    const forceTimer = setTimeout(() => {
      setHidden(true);
      document.documentElement.style.overflow = '';
    }, 5500);
    
    const onClick = () => tl.progress(1);
    splash.addEventListener('click', onClick);
    
    return () => {
      clearTimeout(forceTimer);
      splash.removeEventListener('click', onClick);
      tl.kill();
      document.documentElement.style.overflow = '';
    };
  }, []);

  if (hidden) return null;

  return (
    <div className="splash" id="splash" ref={splashRef}>
      <div className="splashGlow"></div>
      <div className="splashInner">
        <div className="splashLogoWrap">
          <img src="/images/extracted_1.webp" alt="ZOWL" className="splashLogo" />
        </div>
        <p className="splashWelcome" data-i18n="splashWelcome">Bienvenido a</p>
        <h1 className="splashBrand">ZOWL<span>.</span></h1>
        <p className="splashSub" data-i18n="splashSub">Diseño web sin plantillas</p>
        <div className="splashBar"><div className="splashBarFill"></div></div>
      </div>
    </div>
  );
}
