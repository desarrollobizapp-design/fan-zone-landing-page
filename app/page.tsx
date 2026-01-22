import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-green-400 selection:text-black">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        
        {/* Círculos de luz de fondo (Efecto espectacular) */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-green-400 rounded-full blur-[120px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-green-600 rounded-full blur-[120px] opacity-20"></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          {/* Badge pequeño */}
          <span className="m-auto w-fit flex justify-center items-center px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider bg-green-400/10 border border-green-400/20 rounded-full">
            Una experiencia impulsada por <span className='text-2xl text-yellow-400' > BIZ </span>
          </span>

          {/* Título Principal Impactante */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter leading-tight mb-8">
            VIVE LA PASIÓN <br />
            <span className="bg-clip-text text-transparent bg-linear-to-r from-green-400 via-green-500 to-green-400">
              COMO NUNCA
            </span>
          </h1>

          {/* Descripción */}
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-10 leading-relaxed">
            El lugar definitiva para los verdaderos fans del fútbol.
            <br />
            Una experiencia única e inolvidable.
          </p>

          {/* Botones de Acción */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-4 bg-white text-black font-bold rounded-full hover:text-white hover:bg-green-400 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto">
              Ver más
            </button>
            <button className="px-8 py-4 border border-white/20 bg-white/5 backdrop-blur-md font-bold rounded-full hover:bg-white/10 transition-all w-full sm:w-auto">
              Contactar
            </button>
          </div>
        </div>

        {/* Decoración inferior */}
      {/*  <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div> */}
      </section>
    </main>
  )
}