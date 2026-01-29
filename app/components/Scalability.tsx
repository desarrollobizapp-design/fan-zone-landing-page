import React from 'react';
import { Reveal } from "./Reveal";

import { 
  Beer, 
  Orbit, 
  Users, 
  Trophy, 
  ShoppingBag, 
  Cpu, 
  Gamepad2, 
  Target, 
  Zap, 
  Star 
} from 'lucide-react';

export default function Escalabilidad() {
  const upgrades = [
    { icon: <Beer className="text-white fill-yellow-400/10" />, title: "Bar Personalizado", desc: "Media luna de domo exclusiva." },
    { icon: <Orbit className="text-white fill-blue-400/10" />, title: "Domo Inmersivo", desc: "Experiencia 360° sensorial." },
    { icon: <Star className="text-white fill-purple-400/10" />, title: "Talento Pro", desc: "Artistas nacionales e internacionales." },
    { icon: <Cpu className="text-white fill-green-500/10" />, title: "Portero Robótico", desc: "Tecnología de última generación." },
    { icon: <Gamepad2 className="text-white fill-pink-500/10" />, title: "Zona Gamer", desc: "Múltiples consolas y torneos." },
    { icon: <Target className="text-white fill-orange-500/10" />, title: "Cancha 3x3", desc: "Torneos relámpago en el sitio." },
    { icon: <Zap className="text-white fill-yellow-500/10" />, title: "Fuegos Artificiales", desc: "Show pirotécnico de clausura." },
    { icon: <Users className="text-white fill-indigo-400/10" />, title: "Convivencias", desc: "Meet & Greet con jugadores." },
  ];

  return (
    <section className="py-24 bg-terciario">

    <Reveal>
      <div className="container mx-auto px-6">
        
        {/* Cabecera de Sección */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-primario font-black tracking-[0.3em] uppercase text-xs">Potencia tu evento</span>
            <h2 className="text-secondario text-5xl md:text-7xl font-black tracking-tighter uppercase mt-2">
              Escalabilidad {/*<span className="text-black/50 text-4xl md:text-6xl">BIZ</span>*/}
            </h2>
          </div>
          <p className="max-w-md text-primario text-sm leading-relaxed border-l-4 border-secondario pl-6">
            Lleva la experiencia al siguiente nivel. Módulos adaptables según la magnitud de tu plaza y audiencia.
          </p>
        </div>

        {/* Grid de Upgrades - Corregido para 2 columnas en móvil */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {upgrades.map((item, index) => (
            <div 
              key={index} 
              className="group p-4 md:p-8 bg-primario border border-secondario rounded-3xl hover:bg-secondario transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center md:items-start md:text-left"
            >
              <div className="border-secondario border-2 w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform hover:border-secondario">
                {item.icon}
              </div>
              <h3 className="text-base md:text-lg font-bold mb-2 text-white group-hover:text-primario transition-colors">
                {item.title}
              </h3>
              <p className="text-white text-[10px] md:text-xs leading-relaxed group-hover:text-primario transition-colors">
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