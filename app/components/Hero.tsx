"use client";

import React from 'react';
import { Reveal } from "./Reveal";

export default function Hero() {

  const scrollToVideo = () => {
    const videoSection = document.getElementById('video-experience');
    if (videoSection) {
      videoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappUrl = "https://wa.me/5214272134002?text=Hola%20BIZ!%20Me%20interesa%20conocer%20más%20sobre%20la%20experiencia%20ZONA%20FEST.";

  return (
    // Cambiamos h-screen por min-h-screen para evitar problemas con el teclado/barras en móviles
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center bg-black py-10 md:py-0">
      
      <div className="absolute inset-0 z-1 bg-black/40"></div>
      
      <div className="absolute z-2 top-[-10%] left-[-10%] w-[50%] h-[50%] bg-secondario rounded-full blur-[120px] opacity-20 animate-pulse"></div>
      <div className="absolute z-2 bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondario rounded-full blur-[120px] opacity-20"></div>

      <Reveal>
        <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center justify-center">
          
          {/* Logo de Zona Fest - Tamaño adaptado */}
          <img 
            src="/ZonaFestLogo_SinFondo.png" 
            alt="Logo Zona Fest" 
            className="w-28 md:w-40 h-auto mb-4 drop-shadow-2xl" 
          />

          {/* Badge pequeño - Mejor padding para dedos grandes */}
          <span className="px-4 py-1.5 flex justify-center items-center text-[10px] md:text-xs font-semibold tracking-wider bg-green-400/10 border border-green-400/20 rounded-full text-white mb-6">
            Una experiencia impulsada por <span className='ml-2 text-lg md:text-xl text-yellow-400 font-bold'>BIZ</span>
          </span>

          {/* Título Principal - Ajustamos el tamaño base (text-4xl) para evitar cortes en móviles pequeños */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-tight mb-6 text-white uppercase">
            ¡VIVE LA PASIÓN <br />
            <span className="bg-clip-text text-transparent bg-linear-to-r from-primario via-secondario to-primario">
              COMO NUNCA!
            </span>
          </h1>

          {/* Descripción - Texto más compacto en móvil */}
          <p className="max-w-xl mx-auto text-sm md:text-lg text-terciario mb-8 leading-relaxed drop-shadow-lg px-4 md:px-0">
            El lugar definitivo para los verdaderos fans del fútbol.
            <br className="hidden md:block" />
            Una experiencia única para tu municipio.
          </p>

          {/* Botones de Acción - Grid de 2 columnas en móviles muy pequeños o columna completa */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-[300px] sm:max-w-none">
            <button 
              onClick={scrollToVideo}
              className="px-8 py-3 bg-terciario text-black font-bold rounded-full hover:text-terciario hover:bg-primario transition-all duration-300 transform hover:scale-105 w-full sm:w-auto">
              Ver más
            </button>
            
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-white/20 bg-white/5 backdrop-blur-md font-bold rounded-full hover:bg-white/10 transition-all w-full sm:w-auto text-white text-center"
            >
              Contactar
            </a>
          </div>
        </div>
      </Reveal>

    </section>
  );
}