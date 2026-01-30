import React from 'react';
import { Facebook, Instagram, MessageCircle, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = "https://wa.me/5214272134002?text=Hola%20BIZ!%20Me%20interesa%20conocer%20más%20sobre%20ZONA%20FEST.";

  return (
    <footer className="bg-primario text-white pt-16 md:pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Columna 1: Branding con Logo */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <img 
              src="/ZonaFestLogo_SinFondo.png" 
              alt="Logo Zona Fest" 
              className="w-28 md:w-40 h-auto mb-2 drop-shadow-2xl" 
            />
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs text-center md:text-left">
              Llevando la infraestructura deportiva de élite a cada rincón de México. Transformamos espacios públicos en experiencias mundiales.
            </p>
            <div className="flex justify-center md:justify-start gap-4 pt-2">
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-secondario hover:text-primario transition-all">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-secondario hover:text-primario transition-all">
                <Facebook size={20} />
              </a>
              <a href="https://tiktok.com/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-secondario hover:text-primario transition-all">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div className="text-center md:text-left">
            <h4 className="font-bold uppercase tracking-widest text-xs text-secondario mb-6">Navegación</h4>
            <ul className="space-y-4 text-sm text-gray-400 font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#video-experience" className="hover:text-white transition-colors">Experiencia</a></li>
              <li><a href="#info-seccion" className="hover:text-white transition-colors">Solución</a></li>
              <li><a href="#que-es-zonafest" className="hover:text-white transition-colors">¿Qué es Zona Fest?</a></li>
              <li><a href="#paquetes" className="hover:text-white transition-colors">Modelos</a></li>
            </ul>
          </div>

          {/* Columna 3: Información de Contacto */}
          <div className="text-center md:text-left">
            <h4 className="font-bold uppercase tracking-widest text-xs text-secondario mb-6">Contacto Directo</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex flex-col md:flex-row items-center gap-3">
                <div className="p-2 bg-white/5 rounded-lg text-secondario">
                  <Mail size={16} />
                </div>
                contacto@biz.com
              </li>
            </ul>
          </div>

          {/* Columna 4: CTA Card */}
          <div className="p-6 md:p-8 bg-white/5 rounded-3xl border border-white/10 text-center md:text-left shadow-2xl">
            <h4 className="font-black text-sm uppercase mb-2 tracking-tight text-white">¡Únete a la fiesta!</h4>
            <p className="text-[10px] text-secondario uppercase font-bold mb-6 tracking-widest">Cotiza tu municipio hoy</p>
            
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-secondario hover:bg-white text-primario font-black py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-sm uppercase italic"
            >
              Cotizar Ahora
            </a>
          </div>

        </div>

        {/* Línea final */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] md:text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] text-center">
          <p>© {currentYear} BIZ ENTERTAINMENT - MÉXICO.</p>
          <div className="flex gap-8 text-secondario/50">
            <span>Infraestructura de Élite</span>
          </div>
        </div>
      </div>
    </footer>
  );
}