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

        {/* Grid de Upgrades */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {upgrades.map((item, index) => (
            <div 
              key={index} 
              className="group p-8 bg-primario border border-secondario rounded-3xl hover:bg-secondario transition-all duration-300 hover:-translate-y-2"
            >
              <div className="border-secondario border-2 w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform hover:border-secondario">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-white text-xs leading-relaxed group-hover:text-primario transition-colors">
                {item.desc}
              </p>
            </div>
          ))}

          {/* Tarjeta Especial: Upgrade Mundialista */}
          {/*<div className="lg:col-span-2 p-8 bg-linear-to-br from-green-600 to-green-900 rounded-3xl flex flex-col justify-between relative overflow-hidden group">
            <Trophy className="absolute -right-4 -bottom-4 w-48 h-48 text-black/20 group-hover:scale-110 transition-transform duration-700" />
            <div className="relative z-10">
              <span className="bg-black/20 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Premium Upgrade</span>
              <h3 className="text-3xl font-black mt-4 uppercase">Upgrade a Fase Final</h3>
              <p className="text-white/80 mt-2 max-w-xs text-sm">
                O extiende la experiencia a todo el mundial con productos OFICIALES y futbolito humano.
              </p>
            </div>
            <button className="relative z-10 mt-8 w-fit px-6 py-3 bg-white text-black font-black text-xs uppercase tracking-widest rounded-full hover:bg-yellow-400 transition-colors">
              Solicitar Info
            </button>
          </div>*/}
        </div>

      </div>
    </Reveal>

    </section>
  );
}