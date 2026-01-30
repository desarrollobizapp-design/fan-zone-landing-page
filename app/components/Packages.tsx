import React from 'react';
import { Check, Zap, Trophy, Crown } from 'lucide-react';
import { Reveal } from "./Reveal";

// Definimos los paquetes con sus iconos correspondientes
const paquetes = [
  {
    nombre: "PLATA",
    icon: <Zap />, 
    color: "bg-primario",
    caracteristicas: ["3 Días de Transmisión", "4 Activaciones | 1,000 Souvenirs", "6 Carpas Pabellón", "Escenario 15x6mts", "Pantalla LED 6x4", "Seguridad Privada"],
  },
  {
    nombre: "ORO",
    icon: <Trophy />, 
    color: "bg-primario",
    popular: true,
    caracteristicas: ["9 Días de Transmisión", "6 Activaciones | 5,000 Souvenirs", "10 Carpas Pabellón", "Escenario 15x6mts", "Pantalla LED 6x4", "Zona Gamer (8 Consolas)", "Seguridad Privada"],
  },
  {
    nombre: "DIAMANTE",
    icon: <Crown />, 
    color: "bg-primario",
    caracteristicas: ["9 Días + FASE FINAL", "8 Activaciones | 10,000 Souvenirs", "12 Carpas Pabellón", "Escenario XL 20x8mts", "Pantalla Gigante 9x5", "Zona Gamer + Domo Bar VIP", "Seguridad Privada", "Talento Nacional/Int"]
  }
];

const whatsappUrl = "https://wa.me/5214272134002?text=Hola%20BIZ!%20Me%20interesa%20conocer%20más%20sobre%20la%20algun%20paquete.";

export default function PaquetesBIZ() {
  return (
    <section className="py-16 md:py-24 bg-terciario text-primario overflow-hidden">
      
    <Reveal>
      <div id='paquetes' className="container mx-auto px-6">
        
        {/* Encabezado - Ajustado para móvil */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter mb-4 leading-tight">
            NUESTROS <span className="text-secondario">MODELOS</span>
          </h2>
          <p className="text-primario max-w-xl font-bold uppercase tracking-widest text-[10px] md:text-sm opacity-80">
            Infraestructura de élite para el proyecto BIZ.
          </p>
        </div>

        {/* Carrusel: min-w-[85%] en móvil para mostrar que hay más contenido al deslizar */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-10 scrollbar-hide">
          {paquetes.map((p, i) => (
            <div 
              key={i} 
              className="min-w-[85%] sm:min-w-[70%] md:min-w-0 flex flex-col bg-white rounded-3xl border border-gray-100 shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 snap-center"
            >
              {/* HEADER VERDE */}
              <div className="bg-primario h-28 md:h-32 relative flex justify-center items-center">
                <h3 className="text-2xl md:text-3xl font-black italic text-center mb-6 md:mb-8 uppercase tracking-tight text-white">
                  {p.nombre}
                </h3>
                {/* Solución al error de TypeScript usando 'as React.ReactElement<any>' */}
                <div className={`w-16 h-16 md:w-20 md:h-20 ${p.color} rounded-full border-4 border-secondario shadow-xl flex items-center justify-center absolute -bottom-8 md:-bottom-10`}>
                  {React.cloneElement(p.icon as React.ReactElement<any>, { 
                    className: "w-6 h-6 md:w-8 md:h-8 text-white" 
                  })}
                </div>
              </div>

              {/* CONTENIDO */}
              <div className="px-6 md:px-8 pt-12 md:pt-16 pb-8 md:pb-10 flex flex-col grow">
                <div className="flex justify-center mb-8 md:mb-10 grow">
                  <ul className="inline-block text-left space-y-3 md:space-y-4">
                    {p.caracteristicas.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-[11px] md:text-sm text-gray-600">
                        <Check className="w-4 h-4 md:w-5 md:h-5 shrink-0 text-green-600" />
                        <span className="font-medium leading-tight">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-primario hover:bg-secondario text-white font-bold py-3.5 md:py-4 rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2 text-sm md:text-base"
                >
                  Cotizar
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Indicador visual de scroll solo para móvil */}
        <div className="flex justify-center gap-2 mt-2 md:hidden">
            <div className="w-4 h-1.5 rounded-full bg-secondario"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
        </div>
      </div>
    </Reveal>

    </section>
  );
}