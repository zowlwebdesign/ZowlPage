import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zowlwebdesign.com"),
  title: {
    default: "ZOWL Web Design — Agencia de Diseño Web 100% a Medida en Bogotá, Colombia",
    template: "%s | ZOWL Web Design",
  },
  description: "Agencia de diseño web y desarrollo a medida en Bogotá, Colombia. Sitios web, e-commerce, apps y branding creados desde cero, sin plantillas. Presencias digitales que venden 24/7.",
  keywords: [
    "diseño web Bogotá",
    "diseño web Colombia",
    "desarrollo web a medida",
    "páginas web profesionales",
    "agencia diseño web Colombia",
    "tiendas online Colombia",
    "e-commerce Colombia",
    "branding digital",
    "diseño web sin plantillas",
    "ZOWL Web Design",
    "Carlos Ovalle",
  ],
  authors: [{ name: "Carlos Andrés Ovalle Marín", url: "https://zowlwebdesign.com" }],
  creator: "ZOWL Web Design",
  publisher: "ZOWL Web Design",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://zowlwebdesign.com",
  },
  openGraph: {
    type: "website",
    siteName: "ZOWL Web Design",
    locale: "es_CO",
    title: "ZOWL Web Design — Diseño Web sin Plantillas, Hecho para Convertir",
    description: "Diseño y desarrollo web 100% a medida. Sin plantillas, sin atajos. Páginas web, e-commerce, apps y branding que impactan y venden.",
    url: "https://zowlwebdesign.com",
    images: [
      {
        url: "/images/extracted_3.webp",
        width: 512,
        height: 512,
        alt: "ZOWL Web Design — Agencia de Diseño Web en Bogotá",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZOWL Web Design — Diseño Web sin Plantillas, Hecho para Convertir",
    description: "Diseño y desarrollo web 100% a medida en Bogotá, Colombia. Páginas web, e-commerce, apps y branding que convierten.",
    images: ["/images/extracted_3.webp"],
  },
  icons: {
    icon: "/images/extracted_3.webp",
    shortcut: "/images/extracted_3.webp",
    apple: "/images/extracted_3.webp",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" data-theme="dark" className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${inter.variable}`}>
      <body>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
