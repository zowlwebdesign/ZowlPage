'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { projects } from '@/data/projects';

export default function Projects() {
  const stageRef = useRef<HTMLDivElement>(null);
  const wrapRef  = useRef<HTMLDivElement>(null);
  const prevRef  = useRef<HTMLButtonElement>(null);
  const nextRef  = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    const wrap  = wrapRef.current;
    if (!stage || !wrap) return;

    const cards = Array.from(wrap.querySelectorAll<HTMLElement>('.ringCard'));
    const n = cards.length;
    if (n === 0) return;

    const step = 360 / n;
    let radius = 380;
    let rotation = 0;
    let dragging = false;
    let startX = 0, startRot = 0, moved = 0;
    let lastInteraction = Date.now();
    let raf: number;

    function getRadius() {
      const w = stage!.clientWidth;
      return w < 600 ? 260 : w < 900 ? 320 : 380;
    }

    function render() {
      wrap!.style.transform = `rotateY(${rotation}deg)`;
      cards.forEach((card, i) => {
        let eff = ((i * step + rotation) % 360 + 360) % 360;
        if (eff > 180) eff -= 360;
        const a = Math.abs(eff);
        const sc = Math.max(0.72, 1 - a / 280);
        card.style.opacity   = String(Math.max(0.18, 1 - a / 145));
        card.style.zIndex    = String(Math.round(1000 - a));
        card.style.filter    = a > 60 ? `brightness(${Math.max(0.65, 1 - a / 400)})` : 'brightness(1)';
        card.style.transform = `translate(-50%,-50%) rotateY(${i * step}deg) translateZ(${radius}px) scale(${sc})`;
      });
    }

    function layout() { radius = getRadius(); render(); }
    window.addEventListener('resize', layout, { passive: true });
    layout();

    function tick() {
      if (!dragging && Date.now() - lastInteraction > 2800) { rotation += 0.04; render(); }
      raf = requestAnimationFrame(tick);
    }
    tick();

    function spin(delta: number) {
      lastInteraction = Date.now();
      gsap.to({ r: rotation }, {
        r: rotation + delta, duration: 0.55, ease: 'power3.out',
        onUpdate: function () { rotation = this.targets()[0].r; render(); }
      });
    }

    prevRef.current?.addEventListener('click', () => spin(-step));
    nextRef.current?.addEventListener('click', () => spin(step));

    const onDown = (e: PointerEvent) => { dragging = true; wrap!.classList.add('dragging'); startX = e.clientX; startRot = rotation; moved = 0; lastInteraction = Date.now(); };
    const onMove = (e: PointerEvent) => { if (!dragging) return; const dx = e.clientX - startX; moved = Math.abs(dx); rotation = startRot + dx * 0.32; render(); lastInteraction = Date.now(); };
    const onUp   = () => { dragging = false; wrap!.classList.remove('dragging'); lastInteraction = Date.now(); };

    wrap.addEventListener('pointerdown', onDown);
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup',   onUp);
    window.addEventListener('pointercancel', onUp);

    cards.forEach((c) => c.addEventListener('click', (e) => { if (moved > 6) { e.preventDefault(); e.stopPropagation(); } }, { capture: true }));

    return () => {
      window.removeEventListener('resize', layout);
      cancelAnimationFrame(raf);
      wrap.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup',   onUp);
      window.removeEventListener('pointercancel', onUp);
    };
  }, []);

  return (
    <section id="projects" className="projSection">
      {/* Header */}
      <div className="projHeader">
        <div className="projHeaderInner">
          <span className="projEyebrow">Nuestro Portafolio</span>
          <h2 className="projHeadline">
            Marcas reales<br />
            <em>resultados reales</em>
          </h2>
        </div>
        <p className="projSubline">
          Cada proyecto parte de cero: sin plantillas, sin kits genéricos.
          Haz clic en un proyecto para explorar la filosofía y el concepto
          detrás de cada marca.
        </p>
      </div>

      {/* Carousel */}
      <div className="projCarouselWrap">
        <div className="projStage" ref={stageRef}>
          <div className="ringWrap" ref={wrapRef}>
            {projects.map((p) => (
              <a
                key={p.id}
                href={`https://${p.url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="ringCard"
                data-proj={p.id}
                style={{ '--pA': p.pA, '--pB': p.pB } as React.CSSProperties}
              >
                {/* Browser chrome mock */}
                <div className="projThumb">
                  <div className="projBar">
                    <i /><i /><i />
                    <em>{p.url}</em>
                  </div>
                  <div className="projShot">
                    {p.img && (
                      <img
                        src={p.img}
                        alt={p.name}
                        loading="lazy"
                        onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                      />
                    )}
                  </div>
                </div>

                {/* Info */}
                <div className="ringInfo">
                  <span className="projCat">{p.cat}</span>
                  <h3 className="projName">{p.name}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="ringControls">
          <button className="ringBtn" aria-label="Anterior" ref={prevRef}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>
          <span className="ringHint">Arrastra o usa las flechas · haz clic para ver el caso completo</span>
          <button className="ringBtn" aria-label="Siguiente" ref={nextRef}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
