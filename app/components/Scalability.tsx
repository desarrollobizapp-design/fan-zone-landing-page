import React from 'react';
import { Reveal } from "./Reveal";
import { 
  Beer, 
  Orbit, 
  Users, 
  Cpu, 
  Gamepad2, 
  Target, 
  Zap, 
  Star 
} from 'lucide-react';

export default function Escalabilidad() {
  const upgrades = [
    { icon: <Beer />, title: "Bar Personalizado", desc: "Media luna de domo exclusiva." },
    { icon: <Orbit />, title: "Domo Inmersivo", desc: "Experiencia 360° sensorial." },
    { icon: <Star />, title: "Talento Pro", desc: "Artistas nacionales e internacionales." },
    { icon: <Cpu />, title: "Portero Robótico", desc: "Tecnología de última generación." },
    { icon: <Gamepad2 />, title: "Zona Gamer", desc: "Múltiples consolas y torneos." },
    { icon: <Target />, title: "Cancha 3x3", desc: "Torneos relámpago en el sitio." },
    { icon: <Zap />, title: "Fuegos Artificiales", desc: "Show pirotécnico de clausura." },
    { icon: <Users />, title: "Convivencias", desc: "Meet & Greet con jugadores." },
  ]; 

  return (
    <section className="border py-16 md:py-24 bg-terciario overflow-hidden">
      <Reveal>
        <div id='escalabilidad' className="container mx-auto px-6">
          
          {/* Cabecera de Sección */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
            <div className="text-center md:text-left">
              <span className="text-primario font-black tracking-[0.3em] uppercase text-[10px] md:text-xs">
                Potencia tu evento
              </span>
              <h2 className="text-secondario text-4xl md:text-7xl font-black tracking-tighter uppercase mt-2 leading-none">
                Escalabilidad
              </h2>
            </div>
            <p className="max-w-md text-primario text-sm md:text-base leading-relaxed border-l-4 border-secondario pl-6">
              Llevamos la experiencia al siguiente nivel. Módulos adaptables según la magnitud de tu plaza y audiencia.
            </p>
          </div>

          {/* Grid de Upgrades - 2 columnas simétricas en móvil */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            {upgrades.map((item, index) => (
              <div 
                key={index} 
                className="group p-4 md:p-8 bg-primario border border-secondario rounded-2xl md:rounded-3xl hover:bg-secondario transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center min-h-[160px] md:min-h-[220px] justify-center"
              >
                {/* Contenedor de Icono */}
                <div className="border-secondario border-2 w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white/5 flex items-center justify-center mb-3 md:mb-6 group-hover:scale-110 transition-transform group-hover:border-primario">
                  {React.cloneElement(item.icon as React.ReactElement<any>, { 
                    className: "w-5 h-5 md:w-7 md:h-7 text-white group-hover:text-primario transition-colors" 
                  })}
                </div>

                {/* Textos */}
                <h3 className="text-xs md:text-lg font-bold mb-1 md:mb-2 text-white group-hover:text-primario transition-colors leading-tight">
                  {item.title}
                </h3>
                <p className="text-white/80 text-[9px] md:text-xs leading-tight md:leading-relaxed group-hover:text-primario transition-colors px-1">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </Reveal>
    </section>
  );
}