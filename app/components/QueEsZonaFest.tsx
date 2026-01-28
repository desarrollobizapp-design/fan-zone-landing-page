import React from 'react';
import { DefaultDeserializer } from 'v8';
import { Reveal } from "./Reveal";

export default function QueEsZonaFest() {
  return (
    <section className="py-24 bg-terciario text-primario overflow-hidden">

    <Reveal>
      <div className="container mx-auto px-6">
        {/* Encabezado */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-4">
            ¿ Qué es <span className="text-secondario">Zona Fest</span> ?
          </h2>
          <div className="h-1.5 w-24 bg-secondario rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Columna de Texto */}
          <div className="space-y-10">
            <div className="p-8 group border-l-6 bg-green-100 rounded-2xl border-white/5 pl-6 hover:border-secondario transition-colors">
              <h3 className="text-2xl font-bold text-secondario mb-2">Modelo Integral</h3>
              <p className="text-primario leading-relaxed">
                Diseñamos una solución 360° que abarca desde el montaje técnico hasta la gestión de audiencias. 
                No solo ponemos una pantalla, creamos un ecosistema mundialista.
              </p>
            </div>

            <div className="p-8 group border-l-6 bg-green-100 rounded-2xl border-white/5 pl-6 hover:border-secondario transition-colors">
              <h3 className="text-2xl font-bold text-secondario mb-2">Operación Centralizada</h3>
              <p className="text-primario leading-relaxed">
                Coordinamos cada detalle de la producción, sonido y logística desde un solo mando operativo, 
                garantizando que la ejecución sea impecable en cada partido.
              </p>
            </div>

            <div className="p-8 border-l-6 hover:border-yellow-500 bg-linear-to-br bg-yellow-100 from-white/5 to-transparent border border-white/10 rounded-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 blur-3xl group-hover:bg-yellow-400/20 transition-all"></div>
              <h3 className="text-xl font-black mb-2 uppercase italic text-yellow-400">Un solo responsable</h3>
              <p className="text-primario text-sm leading-relaxed">
                Simplificamos la administración pública: <span className="text-yellow-700 font-bold">BIZ</span> se encarga de la relación con proveedores y la ejecución técnica. 
                Menos burocracia, más resultados.
              </p>
            </div>

            <div className="p-8 group border-l-6 bg-green-100 rounded-2xl border-white/5 pl-6 hover:border-secondario transition-colors">
              <h3 className="text-2xl font-bold text-secondario mb-2">El estadio en tu municipio</h3>
              <p className="text-primario leading-relaxed">
                Llevamos la atmósfera de los mejores estadios del mundo a las plazas públicas de forma 
                <span className="text-primario font-semibold italic"> segura y organizada</span>.
              </p>
            </div>
          </div>

          {/* Columna de Imágenes con Composición de Impacto */}
          <div className="relative perspective-1000">
            {/* Imagen principal (Noche) - Inclinada y con sombra fuerte */}
            <div className="relative z-20 rounded-3xl overflow-hidden border-2 border-primario shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform -rotate-3 hover:rotate-0 transition-all duration-700">
              <img 
                src="https://dbdzlutmtlpbiern.public.blob.vercel-storage.com/zonaFestNoche.jpeg" 
                alt="Evento Zona Fest de noche" 
                className="w-full h-112.5 object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-zinc-950/60 to-transparent"></div>
            </div>
            
            {/* Imagen secundaria (Día) - Posición flotante agresiva */}
            <div className="absolute -bottom-12 -right-6 z-30 w-2/3 rounded-3xl overflow-hidden border-2 border-primario shadow-2xl hidden md:block transform rotate-6 hover:rotate-0 transition-all duration-700 hover:scale-105">
              <img 
                src="https://dbdzlutmtlpbiern.public.blob.vercel-storage.com/zonaFestDia.jpeg" 
                alt="Evento Zona Fest de día" 
                className="w-full h-64 object-cover"
              />
            </div>

            {/* Decoración de fondo: Glows de BIZ */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-green-500/20 blur-[120px] rounded-full animate-pulse"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-green-600/10 blur-[120px] rounded-full"></div>
          </div>

        </div>
      </div>
    </Reveal>

    </section>
  );
}