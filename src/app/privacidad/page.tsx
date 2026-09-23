import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidad',
  description: 'Política de privacidad de ZOWL Web Design. Conoce cómo recopilamos, usamos y protegemos tu información personal.',
  alternates: {
    canonical: 'https://zowlwebdesign.com/privacidad',
  },
  robots: { index: false, follow: false },
};

export default function Privacidad() {
  return (
    <main className="legalPage" style={{ padding: '120px 5%', maxWidth: '800px', margin: '0 auto', color: 'var(--ink)' }}>
      <Link href="/" style={{ color: 'var(--fire)', textDecoration: 'none', marginBottom: '40px', display: 'inline-block' }}>
        ← Volver al inicio
      </Link>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#fff' }}>Política de Privacidad</h1>
      <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.8' }}>
        En ZOWL Web Design nos tomamos muy en serio la privacidad de nuestros clientes y visitantes. 
        Toda la información recopilada a través de este sitio web es utilizada exclusivamente para 
        brindar información, responder a cotizaciones y mejorar nuestros servicios.
      </p>
      <h2 style={{ fontSize: '1.5rem', margin: '30px 0 15px', color: '#fff' }}>Uso de la información</h2>
      <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.8' }}>
        No compartimos, vendemos ni distribuimos tus datos personales a terceros bajo ninguna circunstancia.
        Si te pones en contacto con nosotros, tu correo electrónico y número de teléfono se utilizarán 
        únicamente para comunicaciones relacionadas con tu proyecto.
      </p>
      <h2 style={{ fontSize: '1.5rem', margin: '30px 0 15px', color: '#fff' }}>Cookies</h2>
      <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.8' }}>
        Este sitio web puede utilizar cookies para mejorar la experiencia del usuario. Puedes 
        configurar tu navegador para rechazar todas las cookies si así lo prefieres.
      </p>
      <p style={{ marginTop: '50px', color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>
        Última actualización: Septiembre de 2026
      </p>
    </main>
  );
}
