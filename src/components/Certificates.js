import React from 'react';

/**
 * Componente Certificates - Sección de certificados del portafolio
 * 
 * Muestra los certificados y reconocimientos obtenidos por el desarrollador
 * 
 * @component
 * @returns {JSX.Element} Sección de certificados con tarjetas interactivas
 */
const Certificates = () => {
  const certificates = [
    {
      icon: "📜",
      title: "Certificado SENA",
      institution: "SENA",
      description: "Certificación oficial del Servicio Nacional de Aprendizaje en programas de formación técnica y tecnológica.",
      link: "/Certificados/9527003364512CC1092529985C.pdf",
      category: "Formación Técnica",
      year: "2025",
      size: "large" // Tarjeta grande
    },
    {
      icon: "🏆",
      title: "Hackathon Cúcuta 2025",
      institution: "Hackathon Cúcuta",
      description: "Certificado de ganador de la Hackathon Cúcuta 2025, reconociendo habilidades de innovación y trabajo en equipo.",
      link: "/Certificados/Hackathon Cúcuta.pdf",
      category: "Reconocimiento",
      year: "2025",
      size: "large" // Tarjeta grande
    },
    {
      icon: "🎓",
      title: "Curso Coursera",
      institution: "Coursera",
      description: "Certificación especializada en tecnología y desarrollo profesional.",
      link: "/Certificados/Coursera CMVOKWEXN4O4.pdf",
      category: "Educación Online",
      year: "2025",
      size: "small"
    },
    {
      icon: "🎓",
      title: "Curso Coursera",
      institution: "Coursera",
      description: "Formación continua en desarrollo de software.",
      link: "/Certificados/Coursera F088NGNMV12V.pdf",
      category: "Educación Online",
      year: "2025",
      size: "small"
    },
    {
      icon: "🎓",
      title: "Curso Coursera",
      institution: "Coursera",
      description: "Competencias técnicas y habilidades profesionales.",
      link: "/Certificados/Coursera M9K1X04R7838.pdf",
      category: "Educación Online",
      year: "2025",
      size: "small"
    },
    {
      icon: "🎓",
      title: "Curso Coursera",
      institution: "Coursera",
      description: "Habilidades avanzadas en tecnología y programación.",
      link: "/Certificados/Coursera R3FL0E2CHEMF.pdf",
      category: "Educación Online",
      year: "2025",
      size: "small"
    },
    {
      icon: "📜",
      title: "Certificado SENA",
      institution: "SENA",
      description: "Certificación complementaria en desarrollo y tecnología.",
      link: "/Certificados/9537003270648CC1092529985C (1).pdf",
      category: "Formación Técnica",
      year: "2025",
      size: "medium"
    },
    {
      icon: "🎓",
      title: "Cursos Coursera",
      institution: "Coursera",
      description: "Múltiples certificaciones en desarrollo y tecnología.",
      link: "/Certificados/Coursera RSQOY2NYXGU7.pdf",
      category: "Educación Online",
      year: "2025",
      size: "medium"
    }
  ];

  return (
    <section id="certificates" className="py-20 bg-gradient-to-b from-white to-oatmilk-50 relative overflow-hidden">
      {/* Efectos de fondo decorativos */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-oatmilk-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-oatmilk-300/20 rounded-full blur-3xl"></div>
      </div>
      
      {/* Contenedor principal */}
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header de la sección */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-oatmilk-900 to-oatmilk-700 bg-clip-text text-transparent">
            Certificados
          </h2>
          <p className="text-oatmilk-600 text-lg max-w-2xl mx-auto">
            Certificaciones y reconocimientos que validan mi formación y competencias profesionales
          </p>
        </div>
        
        {/* Grid tipo bento box */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className={`group relative bg-white/80 backdrop-blur-sm border border-oatmilk-200/50 rounded-3xl hover:bg-white/95 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-oatmilk-400/15 overflow-hidden ${
                cert.size === 'large' ? 'md:col-span-2 md:row-span-2' :
                cert.size === 'medium' ? 'md:col-span-2' :
                'col-span-1'
              }`}
            >
              {/* Borde animado */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-oatmilk-400/20 via-oatmilk-300/20 to-oatmilk-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
              <div className="absolute inset-[1px] rounded-3xl bg-white/90 group-hover:bg-white/95 transition-colors duration-500"></div>
              
              {/* Badge de año */}
              <div className="absolute top-4 right-4 z-20">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold shadow-lg ${
                  cert.category === 'Reconocimiento' ? 'bg-yellow-100 text-yellow-700' :
                  cert.category === 'Formación Técnica' ? 'bg-blue-100 text-blue-700' :
                  'bg-green-100 text-green-700'
                }`}>
                  {cert.year}
                </span>
              </div>
              
              {/* Contenido de la tarjeta */}
              <div className={`relative z-10 p-6 h-full flex flex-col ${
                cert.size === 'large' ? 'justify-center text-center' : 'justify-between'
              }`}>
                
                {/* Icono principal */}
                <div className={`${cert.size === 'large' ? 'mb-8' : 'mb-4'}`}>
                  <div className={`${
                    cert.size === 'large' ? 'w-24 h-24 text-4xl' : 
                    cert.size === 'medium' ? 'w-20 h-20 text-3xl' : 
                    'w-16 h-16 text-2xl'
                  } bg-gradient-to-br from-oatmilk-100 to-oatmilk-200 rounded-2xl flex items-center justify-center mx-auto shadow-md group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300`}>
                    {cert.icon}
                  </div>
                </div>
                
                {/* Contenido principal */}
                <div className="flex-1">
                  {/* Título */}
                  <h3 className={`font-bold text-oatmilk-900 mb-2 group-hover:text-black transition-colors duration-300 ${
                    cert.size === 'large' ? 'text-2xl' : 
                    cert.size === 'medium' ? 'text-xl' : 
                    'text-lg'
                  }`}>
                    {cert.title}
                  </h3>
                  
                  {/* Institución */}
                  <h4 className={`text-oatmilk-600 font-semibold mb-3 ${
                    cert.size === 'large' ? 'text-lg' : 'text-sm'
                  }`}>
                    {cert.institution}
                  </h4>
                  
                  {/* Categoría */}
                  <div className="mb-4">
                    <span className="bg-oatmilk-100 text-oatmilk-700 px-3 py-1 rounded-full text-xs font-medium border border-oatmilk-200">
                      {cert.category}
                    </span>
                  </div>
                  
                  {/* Descripción */}
                  <p className={`text-oatmilk-700 leading-relaxed mb-6 ${
                    cert.size === 'large' ? 'text-base' : 'text-sm'
                  }`}>
                    {cert.description}
                  </p>
                </div>
                
                {/* Botón de acción */}
                <div className="mt-auto">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 bg-gradient-to-r from-oatmilk-400 to-oatmilk-500 text-white px-4 py-2 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group-hover:scale-105 relative overflow-hidden ${
                      cert.size === 'large' ? 'text-base px-6 py-3' : 'text-sm'
                    }`}
                  >
                    <span className="relative z-10">Ver Certificado</span>
                    <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;