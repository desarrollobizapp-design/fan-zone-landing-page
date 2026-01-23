import React from 'react';
import { Facebook, Instagram, Twitter, MessageCircle, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 text-white pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Columna 1: Branding BIZ */}
          <div className="space-y-6">
            <h2 className="text-3xl font-black tracking-tighter">
              BIZ
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Llevando la infraestructura deportiva de élite a cada rincón de México. Transformamos espacios públicos en experiencias mundiales.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/" target="_blank" className="p-2 bg-white/5 rounded-full hover:bg-green-500 hover:text-black transition-all">
                <Instagram size={18} />
              </a>
              <a href="https://facebook.com/" target="_blank" className="p-2 bg-white/5 rounded-full hover:bg-green-500 hover:text-black transition-all">
                <Facebook size={18} />
              </a>
              <a href="https://tiktok.com/" target="_blank" className="p-2 bg-white/5 rounded-full hover:bg-green-500 hover:text-black transition-all">
                <MessageCircle size={18} /> {/* Icono representativo para TikTok */}
              </a>
            </div>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs text-green-500 mb-6">Navegación</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#modelos" className="hover:text-white transition-colors">Modelos de Negocio</a></li>
              <li><a href="#experiencia" className="hover:text-white transition-colors">¿Qué es Zona Fest?</a></li>
              <li><a href="#contacto" className="hover:text-white transition-colors">Contacto Directo</a></li>
            </ul>
          </div>

          {/* Columna 3: Información de Contacto */}
          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs text-green-500 mb-6">Contacto Directo</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-green-500" />
                contacto@biz.com
              </li>
            </ul>
          </div>

          {/* Columna 4: Newsletter / Call to Action sutil */}
          <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
            <h4 className="font-black text-sm uppercase mb-4 tracking-tight">¡Únete a la fiesta más grande del fútbol!</h4>
            <p className="text-[10px] text-gray-500 uppercase font-bold mb-4">Cotiza tu municipio hoy mismo</p>
            <button className="w-full py-3 bg-green-600 hover:bg-green-500 text-black font-black text-xs uppercase tracking-widest transition-all rounded-lg">
              Cotizar Proyecto
            </button>
          </div>

        </div>

        {/* Línea final y Copyright */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-medium text-gray-500 uppercase tracking-[0.2em]">
          <p>© {currentYear} BIZ - Todos los derechos reservados.</p>
          <div className="flex gap-8">
            {/*<a href="#" className="hover:text-white transition-colors">Aviso de Privacidad</a>*/}
            {/*<a href="#" className="hover:text-white transition-colors">Términos de Servicio</a>*/}
          </div>
        </div>
      </div>
    </footer>
  );
}