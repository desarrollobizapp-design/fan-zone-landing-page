import React from 'react';
import { Reveal } from "./Reveal";

export default function VideoExperience() {
  return (
    <section className="py-16 md:py-24 bg-terciario overflow-hidden">
      <div className="container mx-auto px-6">
        
        <Reveal>
          <div id="video-experience" className="max-w-4xl mx-auto">
            
            <div className="mb-0 md:mb-0 flex items-center justify-between pb-0">
              <h2 className="text-3xl sm:text-3xl md:text-5xl font-black text-primario tracking-tighter uppercase leading-none">
                Vívelo en <span className="text-secondario">Grande</span>
              </h2>

              <div className='flex items-center bg-primario rounded-xl p-1.5 md:p-2 ml-4 shrink-0'>
                <img 
                  src="/ZonaFestLogo_SinFondo.png" 
                  alt="Logo Zona Fest" 
                  className="w-12 md:w-24 h-auto" 
                />
              </div>
            </div>

            {/* CONTENEDOR PADRE: Aquí es donde aplicamos el padding para que la sombra no se corte */}
            <div className="relative p-4 md:p-8"> 
              
              <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-black z-10">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-contain"
                >
                    <source 
                      src="https://dbdzlutmtlpbiern.public.blob.vercel-storage.com/ZonaFestHorizontal_Converted.mp4" 
                      type="video/mp4" 
                    />
                </video>
                <div className="absolute inset-0 bg-secondary/5 pointer-events-none"></div>
              </div>

              {/* SOMBRA EXTERNA: La separamos del div con overflow-hidden */}
              <div className="absolute inset-4 md:inset-8 bg-black/40 blur-[30px] md:blur-[50px] rounded-xl -z-10"></div>
              
              {/* Círculos decorativos (ajustados para no causar scroll) */}
              <div className="hidden md:block absolute -top-2 -left-2 w-32 h-32 bg-secondario/20 blur-3xl rounded-full -z-20"></div>
            </div>

            <div className="mt-4 px-2">
              <p className="text-primario text-[10px] md:text-xs leading-relaxed text-center italic opacity-80 uppercase font-bold">
                "Nuestra infraestructura se adapta a la visibilidad total, garantizando que cada ángulo del partido sea capturado con precisión técnica."
              </p>
            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
}