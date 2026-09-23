'use client';
import React, { useEffect } from 'react';
import type { ProcessStep } from '@/data/process';

interface ModalProps {
  step: ProcessStep | null;
  onClose: () => void;
}

export default function Modal({ step, onClose }: ModalProps) {
  useEffect(() => {
    if (step) {
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
  }, [step]);

  if (!step) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div id="modal" className="modalBg on" onClick={handleBackdropClick}>
      <div className="modalBox">
        <button className="modalX" id="mX" aria-label="Cerrar" onClick={onClose}>✕</button>

        <div id="mTitle" className="mTitle">{step.title}</div>
        <div id="mSub"   className="mSub">{step.sub}</div>

        <div
          id="mBody"
          className="mBody"
          dangerouslySetInnerHTML={{ __html: step.body }}
        />

        <div id="mInc" className="mIncludes">
          <h4>¿Qué incluye?</h4>
          <div className="mTagList">
            {step.includes.map((item, i) => (
              <span key={i} className="mTag">✓ {item}</span>
            ))}
          </div>
        </div>

        <div id="mWhy" className="mWhy">
          <span className="mBlockLbl">¿Por qué importa?</span>
          <p className="mBody" style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: 1.85 }}>{step.why}</p>
        </div>

        <div id="mWho" className="mWho">
          <span className="mBlockLbl">¿Para quién?</span>
          <p className="mBody" style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: 1.85 }}>{step.who}</p>
        </div>
      </div>
    </div>
  );
}
