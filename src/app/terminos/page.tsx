import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Términos y Condiciones',
  description: 'Términos y condiciones de uso de los servicios de ZOWL Web Design. Conoce las condiciones de contratación, propiedad intelectual y pagos.',
  alternates: {
    canonical: 'https://zowlwebdesign.com/terminos',
  },
  robots: { index: false, follow: false },
};

export default function Terminos() {
  return (
    <main className="legalPage" style={{ padding: '120px 5%', maxWidth: '800px', margin: '0 auto', color: 'var(--ink)' }}>
      <Link href="/" style={{ color: 'var(--fire)', textDecoration: 'none', marginBottom: '40px', display: 'inline-block' }}>
        ← Volver al inicio
      </Link>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#fff' }}>Términos y Condiciones</h1>
      <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.8' }}>
        Al acceder y utilizar los servicios de ZOWL Web Design, aceptas los siguientes términos y condiciones.
        Nuestros servicios de diseño y desarrollo web se realizan bajo contrato y acuerdo mutuo entre las partes.
      </p>
      <h2 style={{ fontSize: '1.5rem', margin: '30px 0 15px', color: '#fff' }}>Propiedad Intelectual</h2>
      <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.8' }}>
        Todo el código, diseño y activos generados durante el desarrollo del proyecto son propiedad del cliente
        una vez que se ha completado el pago total de los servicios acordados. ZOWL Web Design se reserva el
        derecho de mostrar el trabajo en su portafolio, a menos que se acuerde lo contrario (NDA).
      </p>
      <h2 style={{ fontSize: '1.5rem', margin: '30px 0 15px', color: '#fff' }}>Condiciones de Pago</h2>
      <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.8' }}>
        Generalmente requerimos un anticipo antes de comenzar cualquier proyecto y el saldo restante
        al momento de la entrega final. Los montos específicos y las fases de pago se establecerán
        en la cotización aprobada.
      </p>
      <p style={{ marginTop: '50px', color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>
        Última actualización: Septiembre de 2026
      </p>
    </main>
  );
}
