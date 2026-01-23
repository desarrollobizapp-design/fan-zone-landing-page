import React from 'react';

import { Clapperboard, ShieldCheck, Balloon, HandHelping } from 'lucide-react';

export default function InfoSection() {
  return (
    <section className="py-24 bg-white text-black">
      <div className="container mx-auto px-6">
        
        {/* Encabezado de la sección */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black uppercase tracking-tighter mb-4">
            Solución Integral para su <span className="text-green-600">Municipio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Llevamos la emoción de la fiesta más grande del fútbol a las plazas públicas con una infraestructura de primer nivel, operada por expertos.
          </p>
        </div>

        {/* Grid de Servicios/Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Tarjeta 1: Pantallas */}
          <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center text-white mb-4 text-2xl shadow-lg shadow-green-600/20">              
              <Clapperboard className="w-6 h-6 text-gray-700 fill-black" />              
            </div>
            <h3 className="font-bold text-lg mb-2">Pantallas de Gran Formato</h3>
            <p className="text-gray-600 text-sm">
              {/*Tecnología LED de alto brillo visible bajo la luz del sol, ideal para plazas públicas y espacios abiertos.*/}
            </p>
          </div>

          {/* Tarjeta 2: Logística */}
          <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center text-white mb-4 text-2xl shadow-lg shadow-green-600/20">              
              <ShieldCheck className="w-6 h-6 text-gray-700 fill-black" />              
            </div>
            <h3 className="font-bold text-lg mb-2">Logística y Seguridad</h3>
            <p className="text-gray-600 text-sm">
              {/*Gestión de vallas, controles de acceso y protocolos para garantizar eventos masivos seguros y ordenados.*/}
            </p>
          </div>

          {/* Tarjeta 3: Animación */}
          <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center text-white mb-4 text-2xl shadow-lg shadow-green-600/20">
              <Balloon className="w-6 h-6 text-gray-700 fill-black" />
            </div>
            <h3 className="font-bold text-lg mb-2">Animación y Talento</h3>
            <p className="text-gray-600 text-sm">
              {/*Locutores profesionales y dinámicas interactivas diseñadas para mantener la energía al máximo durante los partidos.*/}
            </p>
          </div>

          {/* Tarjeta 4: Soporte BIZ */}
          <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center text-white mb-4 text-2xl shadow-lg shadow-green-600/20">
              <HandHelping className="w-6 h-6 text-gray-700 fill-black" />
            </div>
            <h3 className="font-bold text-lg mb-2">Soporte Digital BIZ</h3>
            <p className="text-gray-600 text-sm">
              {/*Conectividad de vanguardia, registro de asistentes y métricas detalladas de impacto social para el gobierno.*/}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}