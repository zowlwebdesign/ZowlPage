'use client';
import React, { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<string | null>(null);

  // Fallback for local development or custom handling, 
  // though Netlify Forms usually handles the post natively if action is provided.
  // Using a custom fetch allows us to prevent page reload.
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const myForm = e.currentTarget;
    const formData = new FormData(myForm);

    setStatus('sending');

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData as any).toString()
    })
      .then(() => setStatus('success'))
      .catch((error) => setStatus('error'));
  };

  return (
    <div className="contactFormWrapper">
      <form
        name="contacto"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        className="contactForm"
      >
        <input type="hidden" name="form-name" value="contacto" />
        <p style={{ display: 'none' }}>
          <label>No llenes esto si eres humano: <input name="bot-field" /></label>
        </p>

        <div className="formGroup">
          <label htmlFor="name">Nombre / Empresa</label>
          <input type="text" id="name" name="name" required placeholder="Ej. Juan Pérez" />
        </div>

        <div className="formRow">
          <div className="formGroup">
            <label htmlFor="email">Correo Electrónico</label>
            <input type="email" id="email" name="email" required placeholder="tu@correo.com" />
          </div>
          <div className="formGroup">
            <label htmlFor="phone">Teléfono (Opcional)</label>
            <input type="tel" id="phone" name="phone" placeholder="+57 300 000 0000" />
          </div>
        </div>

        <div className="formGroup">
          <label htmlFor="message">¿De qué trata tu proyecto?</label>
          <textarea id="message" name="message" rows={4} required placeholder="Cuéntanos un poco sobre lo que necesitas..."></textarea>
        </div>

        <button type="submit" className="sc2Cta formSubmit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Enviando...' : 'Enviar Mensaje'}
          {status !== 'sending' && (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          )}
        </button>

        {status === 'success' && (
          <div className="formMsg success">¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.</div>
        )}
        {status === 'error' && (
          <div className="formMsg error">Hubo un error al enviar el mensaje. Intenta enviarnos un correo directamente.</div>
        )}
      </form>
    </div>
  );
}
