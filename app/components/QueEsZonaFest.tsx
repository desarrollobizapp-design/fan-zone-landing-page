import React from 'react';

export default function QueEsZonaFest() {
  return (
    <section className="py-24 bg-zinc-950 text-white overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Encabezado de la sección */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-4">
            ¿Qué es <span className="text-green-500">Zona Fest</span>?
          </h2>
          <div className="h-1 w-20 bg-green-500"></div>
        </div>

        {/* Contenido en Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Columna de Texto */}
          <div className="space-y-8">
            <div className="group">
              <h3 className="text-2xl font-bold text-green-400 mb-2">Modelo Integral</h3>
              <p className="text-gray-400 leading-relaxed">
                Diseñamos una solución 360° que abarca desde el montaje técnico hasta la gestión de audiencias. 
                No solo ponemos una pantalla, creamos un ecosistema mundialista.
              </p>
            </div>

            <div className="group">
              <h3 className="text-2xl font-bold text-green-400 mb-2">Operación Centralizada</h3>
              <p className="text-gray-400 leading-relaxed">
                Coordinamos cada detalle de la producción, sonido y logística desde un solo mando operativo, 
                garantizando que la ejecución sea impecable en cada partido.
              </p>
            </div>

            {/* Punto clave para Gobiernos */}
            <div className="p-6 bg-white/5 border-l-4 border-yellow-400 rounded-r-xl">
              <h3 className="text-xl font-black mb-2 uppercase italic text-yellow-400">Un solo responsable</h3>
              <p className="text-gray-300 text-sm">
                Simplificamos la administración pública: BIZ se encarga de la relación con proveedores y la ejecución técnica. 
                Menos burocracia, más resultados.
              </p>
            </div>

            <div className="group">
              <h3 className="text-2xl font-bold text-green-400 mb-2">El estadio en tu municipio</h3>
              <p className="text-gray-400 leading-relaxed">
                Llevamos la atmósfera de los mejores estadios del mundo a las plazas públicas de forma 
                <span className="text-white font-semibold"> segura y organizada</span>.
              </p>
            </div>
          </div>

          {/* Columna de Imágenes con efecto de profundidad */}
          <div className="relative">
            {/* Imagen principal (Noche) */}
            <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
              <img 
                src="https://dbdzlutmtlpbiern.public.blob.vercel-storage.com/zonaFestNoche.jpeg" 
                alt="Evento Zona Fest de noche" 
                className="w-full h-80 object-cover"
              />
            </div>
            
            {/* Imagen secundaria (Día) - Oculta en móviles pequeños para mejor UX */}
            <div className="absolute -bottom-10 -left-10 z-20 w-2/3 rounded-2xl overflow-hidden border border-white/10 shadow-2xl hidden md:block transform hover:translate-y-2.5 transition-transform duration-500">
              <img 
                src="https://dbdzlutmtlpbiern.public.blob.vercel-storage.com/zonaFestDia.jpeg" 
                alt="Evento Zona Fest de día" 
                className="w-full h-80 object-cover"
              />
            </div>

            {/* Efecto de resplandor verde de fondo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-green-500/10 blur-[100px] -z-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
}