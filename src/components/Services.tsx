'use client';
import React, { useState } from 'react';
import { services, type Service } from '@/data/services';
import ServiceModal from '@/components/ServiceModal';

export default function Services() {
  const [activeService, setActiveService] = useState<Service | null>(null);

  return (
    <section id="services" className="sec svcSection">
      <div className="secWrap">

        {/* Header */}
        <div className="svcHeader rev d1">
          <span className="svcEyebrow">Nuestros servicios</span>
          <h2 className="svcTitle">
            Lo que hacemos<br /><em>mejor que nadie</em>
          </h2>
          <p className="svcSubtitle">
            Haz clic en cualquier servicio para ver todos los detalles, qué incluye y por qué lo necesitas.
          </p>
        </div>

        {/* Grid */}
        <div className="svcGrid2">
          {services.map((s) => (
            <article key={s.num} className="svcCard2 rev" onClick={() => setActiveService(s)} style={{ cursor: 'pointer' }}>

              <div className="sc2Header">
                {/* Top row */}
                <div className="sc2Top">
                  <span className="sc2Num">{s.num}</span>
                  <div className="sc2Icon">{s.icon}</div>
                </div>

                <div className="sc2TitleWrap">
                  <div>
                    <span className="sc2Label">{s.label}</span>
                    <h3 className="sc2Name">{s.name}</h3>
                  </div>
                  <div className="sc2ToggleIcon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Removing sc2Body completely from the card since it's now in the modal */}

              {/* Hover glow */}
              <div className="sc2Glow" />
            </article>
          ))}
        </div>

      </div>
      
      <ServiceModal service={activeService} onClose={() => setActiveService(null)} />
    </section>
  );
}
