import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Footer from './components/Footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ZONA FEST | La Experiencia de Fútbol Definitiva",
  description: "Transformamos plazas públicas en estadios épicos. Conoce nuestros modelos de negocio para municipios.",
  openGraph: {
    title: "ZONA FEST | La Experiencia de Fútbol Definitiva",
    description: "Transformamos plazas públicas en estadios épicos. Conoce nuestros modelos de negocio para municipios.",
    url: "https://www.zonafest.com.mx",
    siteName: "Zona Fest",
    images: [
      {
        url: "https://dbdzlutmtlpbiern.public.blob.vercel-storage.com/zonaFestDia.jpeg",
        width: 1200,
        height: 630,
        alt: "Evento Zona Fest de día",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

      <Footer/>

      </body>
    </html>
  );
}