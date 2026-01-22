import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-green-400 selection:text-black">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
        
        {/* Video de fondo espectacular - Versión MP4 Optimizada */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 z-0 w-full h-full object-cover opacity-60"
        >
          <source src="https://dbdzlutmtlpbiern.public.blob.vercel-storage.com/ZonaFestHorizontal_Converted.mp4" type="video/mp4" />
          Tu navegador no soporta videos.
        </video>

        {/* Filtro oscuro para mantener legibilidad */}
        <div className="absolute inset-0 z-[1] bg-black/40"></div>
        
        {/* Círculos de luz de fondo (Mantienen tu estética) */}
        <div className="absolute z-[2] top-[-10%] left-[-10%] w-[50%] h-[50%] bg-green-400 rounded-full blur-[120px] opacity-20 animate-pulse"></div>
        <div className="absolute z-[2] bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-green-600 rounded-full blur-[120px] opacity-20"></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          {/* Badge pequeño - Estilo BIZ */}
          <span className="m-auto w-fit flex justify-center items-center px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider bg-green-400/10 border border-green-400/20 rounded-full">
            Una experiencia impulsada por <span className='ml-2 text-2xl text-yellow-400' > BIZ </span>
          </span>

          {/* Título Principal Impactante */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter leading-tight mb-8 text-white">
            VIVE LA PASIÓN <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-green-500 to-green-400">
              COMO NUNCA
            </span>
          </h1>

          {/* Descripción */}
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/90 mb-10 leading-relaxed drop-shadow-lg">
            El lugar definitivo para los verdaderos fans del fútbol.
            <br />
            Una experiencia única e inolvidable para tu municipio.
          </p>

          {/* Botones de Acción */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-4 bg-white text-black font-bold rounded-full hover:text-white hover:bg-green-400 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto">
              Ver más
            </button>
            <button className="px-8 py-4 border border-white/20 bg-white/5 backdrop-blur-md font-bold rounded-full hover:bg-white/10 transition-all w-full sm:w-auto text-white">
              Contactar
            </button>
          </div>
        </div>
      </section>

      {/* Info Section */}  
      <section className="py-24 bg-white text-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black uppercase tracking-tighter mb-4">
              Solución Integral para su <span className="text-green-600">Municipio</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Llevamos la emoción de la fiesta más grande del fútbol a las plazas públicas con una infraestructura de primer nivel, operada por expertos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Tarjeta 1 */}
            <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center text-white mb-4 text-2xl">📽️</div>
              <h3 className="font-bold text-lg mb-2">Pantallas de Gran Formato</h3>
              <p className="text-gray-600 text-sm"> Lorem ipsum dolor sit amet consectetur adipiscing elit purus nec {/*Tecnología LED de alto brillo visible bajo la luz del sol en plazas públicas.*/}</p>
            </div>

            {/* Tarjeta 2 */}
            <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center text-white mb-4 text-2xl">🛡️</div>
              <h3 className="font-bold text-lg mb-2">Logística y Seguridad</h3>
              <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet consectetur adipiscing elit purus nec {/*Gestión de vallas, accesos y protocolos para eventos masivos seguros.*/}</p>
            </div>

            {/* Tarjeta 3 */}
            <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center text-white mb-4 text-2xl">📣</div>
              <h3 className="font-bold text-lg mb-2">Animación y Talento</h3>
              <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet consectetur adipiscing elit purus nec{/*Locutores profesionales y dinámicas para mantener la energía al máximo.*/}</p>
            </div>

            {/* Tarjeta 4 */}
            <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center text-white mb-4 text-2xl">⚙️</div>
              <h3 className="font-bold text-lg mb-2">Soporte Digital BIZ</h3>
              <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet consectetur adipiscing elit purus nec{/*Conectividad, registro de asistentes y métricas de impacto para el gobierno.*/}</p>
            </div>
          </div>
        </div>
      </section>      
    </main>
  )
}