import React from 'react';
import { Reveal } from "./Reveal";

export default function VideoExperience() {
  return (
    <section className="py-24 bg-terciario">
      <div className="container mx-auto px-6">
        
        <Reveal>
            {/* Reducimos el ancho máximo para que el video no se estire y pixele */}
            <div id="video-experience" className="max-w-4xl mx-auto">
            
            <div className="mb-10 flex items-center justify-between border-b border-accent/10 pb-4">
                <h2 className="text-4xl font-black text-primario tracking-tighter uppercase italic">
                Vívelo en <span className="text-secondario">Grande</span>
                </h2>
                <span className="text-[12px] font-bold text-secondario tracking-widest uppercase">
                ZONA FEST
                </span>
            </div>

            <div className="relative group">
                {/* Contenedor con Aspect Ratio Nativo */}
                <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-black shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    // Usamos 'object-contain' para asegurar que NO se corte nada
                    // y 'w-full h-full' para que llene el contenedor proporcionalmente
                    className="w-full h-full object-contain"
                >
                    <source 
                    src="https://dbdzlutmtlpbiern.public.blob.vercel-storage.com/ZonaFestHorizontal_Converted.mp4" 
                    type="video/mp4" 
                    />
                </video>

                {/* Capa de cristal sutil sobre el video para unificar el color */}
                <div className="absolute inset-0 bg-secondary/5 pointer-events-none"></div>
                </div>

                {/* Elementos decorativos externos para dar impacto sin tocar el video */}
                <div className="absolute -z-10 -top-6 -left-6 w-24 h-24 bg-secondary/10 blur-3xl rounded-full"></div>
                <div className="absolute -z-10 -bottom-6 -right-6 w-24 h-24 bg-secondary/10 blur-3xl rounded-full"></div>
            </div>

            <div className="mt-8">
                <p className="text-primario text-xs leading-relaxed text-center italic">
                "Nuestra infraestructura se adapta a la visibilidad total, garantizando que cada ángulo del partido sea capturado con precisión técnica."
                </p>
            </div>

            </div>
        </Reveal>

      </div>
    </section>
  );
}