import React from 'react';

/**
 * Componente Hobbies - Sección de hobbies e intereses del portafolio
 * 
 * Muestra los hobbies e intereses personales del desarrollador
 * 
 * @component
 * @returns {JSX.Element} Sección de hobbies con tarjetas interactivas
 */
const Hobbies = () => {
  const hobbies = [
    {
      icon: "🎵",
      title: "Escuchar Música",
      description: "Música en inglés y español, géneros variados que inspiran creatividad y concentración en el trabajo.",
      category: "Arte",
      intensity: "Diario",
      size: "large"
    },
    {
      icon: "📖",
      title: "Practicar Inglés",
      description: "Mejora continua del idioma a través de cursos, práctica conversacional y consumo de contenido en inglés.",
      category: "Educación",
      intensity: "Frecuente",
      size: "large"
    },
    {
      icon: "🏐",
      title: "Jugar Voleibol",
      description: "Deporte favorito que practico regularmente.",
      category: "Deporte",
      intensity: "Semanal",
      size: "medium"
    },
    {
      icon: "💪",
      title: "Hacer Ejercicio",
      description: "Actividad física regular para mantener salud y energía.",
      category: "Deporte",
      intensity: "Frecuente",
      size: "medium"
    },
    {
      icon: "🎬",
      title: "Ver Series y Películas",
      description: "Entretenimiento y cultura audiovisual.",
      category: "Entretenimiento",
      intensity: "Frecuente",
      size: "small"
    },
    {
      icon: "✨",
      title: "Diseñar",
      description: "Expresión creativa a través del diseño.",
      category: "Arte",
      intensity: "Frecuente",
      size: "small"
    },
    {
      icon: "💃",
      title: "Bailar",
      description: "Expresión corporal y diversión.",
      category: "Arte",
      intensity: "Ocasional",
      size: "small"
    }
  ];

  return (
    <section id="hobbies" className="py-20 bg-gradient-to-b from-oatmilk-50 to-white relative overflow-hidden">
      {/* Efectos de fondo decorativos */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-oatmilk-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-oatmilk-300/20 rounded-full blur-3xl"></div>
      </div>
      
      {/* Contenedor principal */}
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header de la sección */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-oatmilk-900 to-oatmilk-700 bg-clip-text text-transparent">
            Hobbies
          </h2>
          <p className="text-oatmilk-600 text-lg max-w-2xl mx-auto">
            Actividades e intereses que enriquecen mi vida personal y profesional
          </p>
        </div>
        
        {/* Grid tipo bento box */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
          {hobbies.map((hobby, index) => (
            <div
              key={index}
              className={`group relative bg-white/70 backdrop-blur-sm border border-oatmilk-200/50 rounded-3xl hover:bg-white/90 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-oatmilk-400/15 overflow-hidden ${
                hobby.size === 'large' ? 'md:col-span-2 md:row-span-2' :
                hobby.size === 'medium' ? 'md:col-span-2' :
                'col-span-1'
              }`}
            >
              {/* Borde animado */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-oatmilk-400/20 via-oatmilk-300/20 to-oatmilk-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
              <div className="absolute inset-[1px] rounded-3xl bg-white/90 group-hover:bg-white/95 transition-colors duration-500"></div>
              
              {/* Badge de intensidad */}
              <div className="absolute top-4 right-4 z-20">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold shadow-lg ${
                  hobby.intensity === 'Diario' ? 'bg-green-100 text-green-700' :
                  hobby.intensity === 'Frecuente' ? 'bg-blue-100 text-blue-700' :
                  hobby.intensity === 'Semanal' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-gray-100 text-gray-700'
                }`}>
                  {hobby.intensity}
                </span>
              </div>
              
              {/* Contenido de la tarjeta */}
              <div className={`relative z-10 p-6 h-full flex flex-col ${
                hobby.size === 'large' ? 'justify-center text-center' : 'justify-between'
              }`}>
                
                {/* Icono principal */}
                <div className={`${hobby.size === 'large' ? 'mb-8' : 'mb-4'}`}>
                  <div className={`${
                    hobby.size === 'large' ? 'w-24 h-24 text-4xl' : 
                    hobby.size === 'medium' ? 'w-20 h-20 text-3xl' : 
                    'w-16 h-16 text-2xl'
                  } bg-gradient-to-br from-oatmilk-100 to-oatmilk-200 rounded-2xl flex items-center justify-center mx-auto shadow-md group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}>
                    {hobby.icon}
                  </div>
                </div>
                
                {/* Contenido principal */}
                <div className="flex-1">
                  {/* Título */}
                  <h3 className={`font-bold text-oatmilk-900 mb-2 group-hover:text-black transition-colors duration-300 ${
                    hobby.size === 'large' ? 'text-2xl' : 
                    hobby.size === 'medium' ? 'text-xl' : 
                    'text-lg'
                  }`}>
                    {hobby.title}
                  </h3>
                  
                  {/* Categoría */}
                  <div className="mb-4">
                    <span className="bg-oatmilk-100 text-oatmilk-600 px-3 py-1 rounded-full text-xs font-medium border border-oatmilk-200">
                      {hobby.category}
                    </span>
                  </div>
                  
                  {/* Descripción */}
                  <p className={`text-oatmilk-700 leading-relaxed ${
                    hobby.size === 'large' ? 'text-base' : 'text-sm'
                  }`}>
                    {hobby.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;