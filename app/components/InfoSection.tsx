import React from 'react';
import { Reveal } from "./Reveal";
import { Clapperboard, ShieldCheck, Balloon, HandHelping } from 'lucide-react';

export default function InfoSection() {
  const servicios = [
    { 
      icon: <Clapperboard />, 
      title: "Pantallas de Gran Formato", 
      desc: "Tecnología LED de última generación para visibilidad total." 
    },
    { 
      icon: <ShieldCheck />, 
      title: "Logística y Seguridad", 
      desc: "Operación coordinada para un entorno seguro y familiar." 
    },
    { 
      icon: <Balloon />, 
      title: "Animación y Talento", 
      desc: "Activaciones en vivo y conductores profesionales." 
    },
    { 
      icon: <HandHelping />, 
      title: "Soporte Digital BIZ", 
      desc: "Gestión de audiencias y amplificación en redes sociales." 
    },
  ];

  return (
    <section id="info-seccion" className="py-16 md:py-24 bg-terciario text-black overflow-hidden">
      <Reveal>
        <div className="container mx-auto px-6">
          
          {/* Encabezado de la sección */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4 leading-tight">
              Solución Integral para tu <span className="text-secondario">Municipio</span>
            </h2>
            <p className="text-sm md:text-xl text-gray-600 max-w-3xl mx-auto font-medium">
              Llevamos la emoción de la fiesta más grande del fútbol con infraestructura de primer nivel operada por expertos.
            </p>
          </div>

          {/* Grid de Servicios - Estilo unificado con Escalabilidad */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            {servicios.map((item, index) => (
              <div 
                key={index} 
                className="group p-4 md:p-8 bg-primario border border-secondario rounded-2xl md:rounded-3xl hover:bg-secondario transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center min-h-40 md:min-h-55 justify-center"
              >
                {/* Contenedor de Icono - Estilo idéntico a Escalabilidad */}
                <div className="border-secondario border-2 w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white/5 flex items-center justify-center mb-3 md:mb-6 group-hover:scale-110 transition-transform group-hover:border-primario">
                  {React.cloneElement(item.icon as React.ReactElement<any>, { 
                    className: "w-5 h-5 md:w-7 md:h-7 text-white group-hover:text-primario transition-colors" 
                  })}
                </div>

                {/* Textos */}
                <h3 className="text-xs md:text-lg font-bold mb-1 md:mb-2 text-white group-hover:text-primario transition-colors leading-tight">
                  {item.title}
                </h3>
                {/*<p className="text-white/80 text-[9px] md:text-xs leading-tight md:leading-relaxed group-hover:text-primario transition-colors px-1">
                  {item.desc}
                </p>*/}
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}