import React from 'react';
import { Reveal } from "./Reveal";

export default function QueEsZonaFest() {
  return (
    <section className="py-16 md:py-24 bg-terciario text-primario overflow-hidden">

    <Reveal>
      <div id="que-es-zonafest" className="container mx-auto px-6">
        {/* Encabezado */}
        <div className="mb-12 md:mb-20">
          <h2 className="text-3xl md:text-6xl font-black tracking-tighter uppercase mb-4">
            ¿ Qué es <span className="text-secondario">Zona Fest</span> ?
          </h2>
          <div className="h-1.5 w-20 md:w-24 bg-secondario rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Columna de Texto - Reducimos paddings en móvil */}
          <div className="space-y-6 md:space-y-10 order-2 lg:order-1">
            <div className="p-5 md:p-8 group border-l-4 md:border-l-6 bg-green-100 rounded-2xl border-white/5 pl-6 hover:border-secondario transition-colors">
              <h3 className="text-xl md:text-2xl font-bold text-secondario mb-2">Modelo Integral</h3>
              <p className="text-primario text-sm md:text-base leading-relaxed">
                Diseñamos una solución 360° que abarca desde el montaje técnico hasta la gestión de audiencias. 
                No solo ponemos una pantalla, creamos un ecosistema mundialista.
              </p>
            </div>

            <div className="p-5 md:p-8 group border-l-4 md:border-l-6 bg-green-100 rounded-2xl border-white/5 pl-6 hover:border-secondario transition-colors">
              <h3 className="text-xl md:text-2xl font-bold text-secondario mb-2">Operación Centralizada</h3>
              <p className="text-primario text-sm md:text-base leading-relaxed">
                Coordinamos cada detalle de la producción, sonido y logística desde un solo mando operativo, 
                garantizando que la ejecución sea impecable.
              </p>
            </div>

            {/* Tarjeta Destacada Amarilla */}
            <div className="p-5 md:p-8 border-l-4 md:border-l-6 hover:border-yellow-500 bg-yellow-50 border border-yellow-200 rounded-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 blur-3xl group-hover:bg-yellow-400/20 transition-all"></div>
              <h3 className="text-lg md:text-xl font-black mb-2 uppercase italic text-yellow-600">Un solo responsable</h3>
              <p className="text-primario text-xs md:text-sm leading-relaxed">
                Simplificamos la administración: <span className="text-yellow-700 font-bold">BIZ</span> se encarga de proveedores y ejecución. 
                Menos burocracia, más resultados.
              </p>
            </div>

            <div className="p-5 md:p-8 group border-l-4 md:border-l-6 bg-green-100 rounded-2xl border-white/5 pl-6 hover:border-secondario transition-colors">
              <h3 className="text-xl md:text-2xl font-bold text-secondario mb-2">El estadio en tu municipio</h3>
              <p className="text-primario text-sm md:text-base leading-relaxed">
                Llevamos la atmósfera de los mejores estadios a las plazas de forma <span className="text-primario font-semibold italic"> segura y organizada</span>.
              </p>
            </div>
          </div>

          {/* Columna de Imágenes - Ajustada para no romper el layout en móvil */}
          <div className="relative perspective-1000 order-1 lg:order-2 mb-8 lg:mb-0">
            {/* Imagen principal */}
            <div className="relative z-20 rounded-3xl overflow-hidden border-2 border-primario shadow-xl transform -rotate-2 md:-rotate-3 hover:rotate-0 transition-all duration-700">
              <img 
                src="https://dbdzlutmtlpbiern.public.blob.vercel-storage.com/zonaFestNoche.jpeg" 
                alt="Evento Zona Fest de noche" 
                className="w-full h-64 md:h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent"></div>
            </div>
            
            {/* Imagen secundaria - Solo visible en tablets y desktop para no amontonar en móvil */}
            <div className="absolute -bottom-10 -right-6 z-30 w-2/3 rounded-3xl overflow-hidden border-2 border-primario shadow-2xl hidden md:block transform rotate-6 hover:rotate-0 transition-all duration-700">
              <img 
                src="https://dbdzlutmtlpbiern.public.blob.vercel-storage.com/zonaFestDia.jpeg" 
                alt="Evento Zona Fest de día" 
                className="w-full h-64 object-cover"
              />
            </div>

            {/* Glows de fondo */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-500/20 blur-[80px] rounded-full animate-pulse"></div>
          </div>

        </div>
      </div>
    </Reveal>

    </section>
  );
}