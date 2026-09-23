'use client';
import React, { useEffect } from 'react';
import type { Service } from '@/data/services';

interface ServiceModalProps {
  service: Service | null;
  onClose: () => void;
}

export default function ServiceModal({ service, onClose }: ServiceModalProps) {
  useEffect(() => {
    if (service) {
      document.body.style.overflow = 'hidden';
      document.documentElement.classList.add('modal-open');
    } else {
      document.body.style.overflow = '';
      document.documentElement.classList.remove('modal-open');
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.classList.remove('modal-open');
    };
  }, [service]);

  if (!service) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className="modalBg on" onClick={handleBackdropClick} style={{ zIndex: 9999 }}>
      <div className="modalBox">
        <button className="modalX" aria-label="Cerrar" onClick={onClose}>✕</button>

        <div className="mTitle">{service.name}</div>
        <div className="mSub">{service.label}</div>

        <div className="mBody" dangerouslySetInnerHTML={{ __html: service.body }} />

        <div className="mIncludes">
          <h4>¿Qué incluye?</h4>
          <div className="mTagList">
            {service.bullets.map((item, i) => (
              <span key={i} className="mTag">✓ {item}</span>
            ))}
          </div>
        </div>

        {service.why && (
          <div className="mWhy" style={{ marginTop: '30px' }}>
            <span className="mBlockLbl">¿Por qué necesitas esto?</span>
            <p className="mBody" style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: 1.85 }}>{service.why}</p>
          </div>
        )}

        {service.who && (
          <div className="mWho" style={{ marginTop: '30px' }}>
            <span className="mBlockLbl">¿Para quién es ideal?</span>
            <p className="mBody" style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: 1.85 }}>{service.who}</p>
          </div>
        )}

        <div className="mCtaRow">
          <a href="https://wa.me/573112332539" target="_blank" rel="noreferrer" className="mCtaBtn">
            Cotizar este servicio →
          </a>
          
        </div>
      </div>
    </div>
  );
}
