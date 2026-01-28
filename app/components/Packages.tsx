import React from 'react';
import { Check, ArrowRight, Zap, Trophy, Crown } from 'lucide-react';
import { Reveal } from "./Reveal";

const paquetes = [
  {
    nombre: "PLATA",
    icon: <Zap className="w-6 h-6 text-white" />,
    color: "bg-primario",
    caracteristicas: ["3 Días de Transmisión", "4 Activaciones | 1,000 Souvenirs", "6 Carpas Pabellón", "Escenario 15x6mts", "Pantalla LED 6x4", "Seguridad Privada"],
  },
  {
    nombre: "ORO",
    icon: <Trophy className="w-6 h-6 text-white" />,
    color: "bg-primario",
    popular: true,
    caracteristicas: ["9 Días de Transmisión", "6 Activaciones | 5,000 Souvenirs", "10 Carpas Pabellón", "Escenario 15x6mts", "Pantalla LED 6x4", "Zona Gamer (8 Consolas)", "Seguridad Privada"],
  },
  {
    nombre: "DIAMANTE",
    icon: <Crown className="w-6 h-6 text-white" />,
    color: "bg-primario",
    caracteristicas: ["9 Días + FASE FINAL", "8 Activaciones | 10,000 Souvenirs", "12 Carpas Pabellón", "Escenario XL 20x8mts", "Pantalla Gigante 9x5", "Zona Gamer + Domo Bar VIP", "Seguridad Privada", "Talento Nacional/Int"]
  }
];

const whatsappUrl = "https://wa.me/5214272134002?text=Hola%20BIZ!%20Me%20interesa%20conocer%20más%20sobre%20la%20algun%20paquete.";

export default function PaquetesBIZ() {
  return (
    <section className="py-24 bg-terciario text-primario">
      
    <Reveal>
      <div className="container mx-auto px-6">
        
        {/* Encabezado idéntico al que te funcionó */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
            NUESTROS <span className="text-secondario">MODELOS</span>
          </h2>
          <p className="text-primario max-w-xl font-bold uppercase tracking-widest text-sm">
            Infraestructura de élite {/*para eventos municipales masivos*/}.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paquetes.map((p, i) => (
            <div 
              key={i} 
              className="flex flex-col bg-white rounded-3xl border border-gray-100 shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              {/* HEADER VERDE */}
              <div className="bg-primario h-32 relative flex justify-center items-center">
                <h3 className="text-3xl font-black italic text-center mb-8 uppercase tracking-tight text-white">
                  {p.nombre}
                </h3>
                {/* Círculo del icono flotando */}
                <div className={`w-20 h-20 ${p.color} rounded-full border-4 border-secondario shadow-xl flex items-center justify-center absolute -bottom-10`}>
                  {p.icon}
                </div>
                
                {/*p.popular && (
                  <span className="absolute top-4 right-4 bg-yellow-400 text-black text-[10px] font-black px-3 py-1 rounded-full uppercase">
                    Popular
                  </span>
                )*/}
              </div>

              {/* CONTENIDO */}
              <div className="px-8 pt-16 pb-10 flex flex-col grow">

                {/* LISTA ALINEADA (El bloque se centra, el texto va a la izquierda) */}
                <div className="flex justify-center mb-10 grow">
                  <ul className="inline-block text-left space-y-4">
                    {p.caracteristicas.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-gray-600">
                        <Check className="w-5 h-5 shrink-0 text-green-600" />
                        <span className="font-medium">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* BOTÓN (Usando el estilo de View More de tu imagen) */}                
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-primario hover:bg-secondario text-white font-bold py-4 rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2"
                >
                  Cotizar
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Reveal>

    </section>
  );
}
