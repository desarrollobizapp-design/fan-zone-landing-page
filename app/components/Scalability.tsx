import React from 'react';
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
    { icon: <Beer className="text-yellow-400 fill-yellow-400/10" />, title: "Bar Personalizado", desc: "Media luna de domo exclusiva." },
    { icon: <Orbit className="text-blue-400 fill-blue-400/10" />, title: "Domo Inmersivo", desc: "Experiencia 360° sensorial." },
    { icon: <Star className="text-purple-400 fill-purple-400/10" />, title: "Talento Pro", desc: "Artistas nacionales e internacionales." },
    { icon: <Cpu className="text-green-500 fill-green-500/10" />, title: "Portero Robótico", desc: "Tecnología de última generación." },
    { icon: <Gamepad2 className="text-pink-500 fill-pink-500/10" />, title: "Zona Gamer", desc: "Múltiples consolas y torneos." },
    { icon: <Target className="text-orange-500 fill-orange-500/10" />, title: "Cancha 3x3", desc: "Torneos relámpago en el sitio." },
    { icon: <Zap className="text-yellow-500 fill-yellow-500/10" />, title: "Fuegos Artificiales", desc: "Show pirotécnico de clausura." },
    { icon: <Users className="text-indigo-400 fill-indigo-400/10" />, title: "Convivencias", desc: "Meet & Greet con jugadores." },
  ];

  return (
    <section className="py-24 text-white">
      <div className="container mx-auto px-6">
        
        {/* Cabecera de Sección */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-black font-black tracking-[0.3em] uppercase text-xs">Potencia tu evento</span>
            <h2 className="text-green-500 text-5xl md:text-7xl font-black tracking-tighter uppercase mt-2">
              Escalabilidad {/*<span className="text-black/50 text-4xl md:text-6xl">BIZ</span>*/}
            </h2>
          </div>
          <p className="max-w-md text-black text-sm leading-relaxed border-l-4 border-green-500 pl-6">
            Lleva la experiencia al siguiente nivel. Módulos adaptables según la magnitud de tu plaza y audiencia.
          </p>
        </div>

        {/* Grid de Upgrades */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {upgrades.map((item, index) => (
            <div 
              key={index} 
              className="group p-8 bg-zinc-900 border border-white/5 rounded-3xl hover:bg-zinc-800 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="border-gray-700 border-2 w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed group-hover:text-gray-300 transition-colors">
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
    </section>
  );
}