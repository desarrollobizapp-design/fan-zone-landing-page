import React from 'react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
      
      {/* Video de fondo espectacular - Optimizado para iOS/Safari */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 z-0 w-full h-full object-cover opacity-60"
      >
        <source 
          src="https://dbdzlutmtlpbiern.public.blob.vercel-storage.com/ZonaFestHorizontal_Converted.mp4" 
          type="video/mp4" 
        />
        Tu navegador no soporta videos.
      </video>

      {/* Filtro oscuro para mantener legibilidad */}
      <div className="absolute inset-0 z-1 bg-black/40"></div>
      
      {/* Círculos de luz de fondo (Efectos de diseño BIZ) */}
      <div className="absolute z-2 top-[-10%] left-[-10%] w-[50%] h-[50%] bg-green-400 rounded-full blur-[120px] opacity-20 animate-pulse"></div>
      <div className="absolute z-2 bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-green-600 rounded-full blur-[120px] opacity-20"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        {/* Badge pequeño - Estilo BIZ */}
        <span className="m-auto w-fit flex justify-center items-center px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider bg-green-400/10 border border-green-400/20 rounded-full text-white">
          Una experiencia impulsada por <span className='ml-2 text-2xl text-yellow-400 font-bold'>BIZ</span>
        </span>

        {/* Título Principal Impactante */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter leading-tight mb-8 text-white">
          VIVE LA PASIÓN <br />
          <span className="bg-clip-text text-transparent bg-linear-to-r from-green-400 via-green-500 to-green-400">
            COMO NUNCA
          </span>
        </h1>

        {/* Descripción */}
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/90 mb-10 leading-relaxed drop-shadow-lg">
          El lugar definitivo para los verdaderos fans del fútbol.
          <br />
          Una experiencia única e inolvidable para tu municipio.
        </p>

        {/* Botones de Acción */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-8 py-4 bg-white text-black font-bold rounded-full hover:text-white hover:bg-green-400 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto">
            Ver más
          </button>
          <button className="px-8 py-4 border border-white/20 bg-white/5 backdrop-blur-md font-bold rounded-full hover:bg-white/10 transition-all w-full sm:w-auto text-white">
            Contactar
          </button>
        </div>
      </div>
    </section>
  );
}