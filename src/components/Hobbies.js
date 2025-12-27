import React from 'react';

/**
 * Componente Hobbies - Sección de hobbies e intereses del portafolio
 * 
 * Muestra los hobbies e intereses personales del desarrollador
 * con un diseño moderno de tarjetas numeradas y coloridas.
 * 
 * @component
 * @returns {JSX.Element} Sección de hobbies con tarjetas numeradas
 */
const Hobbies = () => {
  const hobbies = [
    {
      number: "01",
      title: "Escuchar Música",
      description: "Música en inglés y español, géneros variados que inspiran creatividad y concentración.",
      icon: "🎵",
      bgColor: "bg-gradient-to-br from-oatmilk-100 to-oatmilk-200",
      numberColor: "text-oatmilk-600",
      iconBg: "bg-oatmilk-500"
    },
    {
      number: "02", 
      title: "Practicar Inglés",
      description: "Mejora continua del idioma a través de cursos y práctica conversacional.",
      icon: "📖",
      bgColor: "bg-gradient-to-br from-oatmilk-50 to-oatmilk-150",
      numberColor: "text-oatmilk-700",
      iconBg: "bg-oatmilk-600"
    },
    {
      number: "03",
      title: "Jugar Voleibol", 
      description: "Deporte favorito que practico regularmente para mantenerme activo y saludable.",
      icon: "🏐",
      bgColor: "bg-gradient-to-br from-oatmilk-150 to-oatmilk-250",
      numberColor: "text-oatmilk-800",
      iconBg: "bg-oatmilk-700"
    },
    {
      number: "04",
      title: "Hacer Ejercicio",
      description: "Actividad física regular para mantener salud, energía y bienestar general.",
      icon: "💪",
      bgColor: "bg-gradient-to-br from-oatmilk-200 to-oatmilk-300", 
      numberColor: "text-oatmilk-800",
      iconBg: "bg-oatmilk-600"
    },
    {
      number: "05",
      title: "Diseñar",
      description: "Expresión creativa a través del diseño gráfico y desarrollo de interfaces.",
      icon: "✨",
      bgColor: "bg-gradient-to-br from-oatmilk-100 to-oatmilk-250",
      numberColor: "text-oatmilk-700",
      iconBg: "bg-oatmilk-500"
    },
    {
      number: "06",
      title: "Ver Series",
      description: "Entretenimiento y cultura audiovisual que amplía perspectivas y creatividad.",
      icon: "🎬",
      bgColor: "bg-gradient-to-br from-oatmilk-150 to-oatmilk-200",
      numberColor: "text-oatmilk-600", 
      iconBg: "bg-oatmilk-700"
    },
    {
      number: "07",
      title: "Bailar",
      description: "Expresión corporal y diversión que aporta alegría y liberación creativa.",
      icon: "💃",
      bgColor: "bg-gradient-to-br from-oatmilk-50 to-oatmilk-200",
      numberColor: "text-oatmilk-800",
      iconBg: "bg-oatmilk-600"
    },
    {
      number: "08",
      title: "Aprender Tech",
      description: "Exploración constante de nuevas tecnologías y tendencias en desarrollo.",
      icon: "💻",
      bgColor: "bg-gradient-to-br from-oatmilk-200 to-oatmilk-350",
      numberColor: "text-oatmilk-900",
      iconBg: "bg-oatmilk-800"
    }
  ];

  return (
    <section id="hobbies" className="py-20 bg-gradient-to-b from-white to-oatmilk-50 relative overflow-hidden">
      {/* Líneas decorativas de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute top-0 left-0 w-full h-full opacity-5" viewBox="0 0 1000 1000">
          <path d="M100,200 Q300,100 500,200 T900,200" stroke="currentColor" strokeWidth="2" fill="none" className="text-oatmilk-600"/>
          <path d="M50,400 Q250,300 450,400 T850,400" stroke="currentColor" strokeWidth="2" fill="none" className="text-oatmilk-500"/>
          <path d="M150,600 Q350,500 550,600 T950,600" stroke="currentColor" strokeWidth="2" fill="none" className="text-oatmilk-700"/>
          <path d="M0,800 Q200,700 400,800 T800,800" stroke="currentColor" strokeWidth="2" fill="none" className="text-oatmilk-400"/>
        </svg>
      </div>
      
      {/* Contenedor principal */}
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header de la sección */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-oatmilk-900">
            Mis Hobbies
          </h2>
          <p className="text-oatmilk-600 text-lg max-w-2xl mx-auto">
            Actividades e intereses que enriquecen mi vida personal y profesional
          </p>
        </div>
        
        {/* Grid de tarjetas numeradas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hobbies.map((hobby, index) => (
            <div
              key={index}
              className={`group relative ${hobby.bgColor} rounded-3xl p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-white/50 backdrop-blur-sm`}
            >
              {/* Número grande */}
              <div className={`text-6xl font-black ${hobby.numberColor} mb-4 opacity-80`}>
                {hobby.number}
              </div>
              
              {/* Icono flotante */}
              <div className="absolute top-4 right-4">
                <div className={`w-12 h-12 ${hobby.iconBg} rounded-2xl flex items-center justify-center text-white text-xl shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                  {hobby.icon}
                </div>
              </div>
              
              {/* Contenido */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-oatmilk-900 mb-3 group-hover:text-oatmilk-950 transition-colors duration-300">
                  {hobby.title}
                </h3>
                
                <p className="text-oatmilk-700 text-sm leading-relaxed group-hover:text-oatmilk-800 transition-colors duration-300">
                  {hobby.description}
                </p>
              </div>
              
              {/* Efecto de brillo en hover */}
              <div className="absolute inset-0 rounded-3xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              
              {/* Círculo decorativo */}
              <div className={`absolute -top-2 -right-2 w-8 h-8 ${hobby.iconBg} rounded-full opacity-60 group-hover:scale-125 transition-transform duration-300`}></div>
            </div>
          ))}
        </div>
        
        {/* Información adicional */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-oatmilk-200/50">
            <span className="text-oatmilk-600 text-sm font-medium">
              🌟 Cristian Contreras
            </span>
            <div className="w-1 h-1 bg-oatmilk-400 rounded-full"></div>
            <span className="text-oatmilk-600 text-sm">
              Desarrollador Full-Stack
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;