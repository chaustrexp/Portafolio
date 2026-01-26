import React from 'react';

/**
 * Componente Certificates - Sección de certificados del portafolio
 * 
 * Muestra los certificados y reconocimientos obtenidos por el desarrollador
 * con un diseño moderno de grid oscuro inspirado en recursos de diseño.
 * 
 * @component
 * @returns {JSX.Element} Sección de certificados con grid moderno
 */
const Certificates = () => {
  const certificates = [
    {
      title: "Aprendiz Digital",
      institution: "SENA",
      description: "Certificación en competencias digitales y tecnológicas para el desarrollo profesional en la era digital.",
      link: "/Certificados/Aprendiz Digital.pdf",
      icon: "💡",
      iconBg: "bg-gradient-to-br from-oatmilk-300 to-oatmilk-400",
      category: "Competencias Digitales"
    },
    {
      title: "Certificado Diplomado",
      institution: "SENA",
      description: "Diplomado especializado del SENA en desarrollo de competencias técnicas y profesionales avanzadas.",
      link: "/Certificados/Certificado Dimplomado.pdf",
      icon: "🎓",
      iconBg: "bg-gradient-to-br from-oatmilk-400 to-oatmilk-500",
      category: "Diplomado Técnico"
    },
    {
      title: "Certificado SENA - Formación",
      institution: "SENA",
      description: "Certificación oficial del Servicio Nacional de Aprendizaje en programas de formación técnica.",
      link: "/Certificados/9527003364512CC1092529985C.pdf",
      icon: "📜",
      iconBg: "bg-gradient-to-br from-oatmilk-500 to-oatmilk-600",
      category: "Formación Técnica"
    },
    {
      title: "Certificado SENA - Complementario",
      institution: "SENA",
      description: "Certificación complementaria en desarrollo y tecnología aplicada del SENA.",
      link: "/Certificados/9537003270648CC1092529985C (1).pdf",
      icon: "📋",
      iconBg: "bg-gradient-to-br from-oatmilk-300 to-oatmilk-400",
      category: "Desarrollo"
    },
    {
      title: "Corrección de Actividad #2",
      institution: "Institución Académica",
      description: "Certificado de corrección y validación de actividad académica especializada.",
      link: "/Certificados/Correción de la Actividad #2.pdf",
      icon: "✅",
      iconBg: "bg-gradient-to-br from-green-400 to-green-500",
      category: "Validación Académica"
    },
    {
      title: "Hackathon Cúcuta",
      institution: "Hackathon Cúcuta",
      description: "Certificado de participación y reconocimiento en hackathon, demostrando habilidades de innovación y trabajo en equipo.",
      link: "/Certificados/Hackathon Cúcuta.pdf",
      icon: "🏆",
      iconBg: "bg-gradient-to-br from-yellow-400 to-orange-500",
      category: "Reconocimiento"
    },
    {
      title: "Coursera - Especialización I",
      institution: "Coursera",
      description: "Certificación especializada en tecnología y desarrollo profesional continuo.",
      link: "/Certificados/Coursera CMVOKWEXN4O4.pdf",
      icon: "💻",
      iconBg: "bg-gradient-to-br from-blue-400 to-blue-500",
      category: "Educación Online"
    },
    {
      title: "Coursera - Desarrollo de Software",
      institution: "Coursera",
      description: "Formación continua en desarrollo de software y mejores prácticas de programación.",
      link: "/Certificados/Coursera F088NGNMV12V.pdf",
      icon: "⚡",
      iconBg: "bg-gradient-to-br from-purple-400 to-purple-500",
      category: "Programación"
    },
    {
      title: "Coursera - Competencias Técnicas",
      institution: "Coursera",
      description: "Certificación en competencias técnicas y habilidades profesionales avanzadas.",
      link: "/Certificados/Coursera M9K1X04R7838.pdf",
      icon: "🔧",
      iconBg: "bg-gradient-to-br from-indigo-400 to-indigo-500",
      category: "Habilidades Técnicas"
    },
    {
      title: "Coursera - Tecnología Avanzada",
      institution: "Coursera",
      description: "Habilidades avanzadas en tecnología moderna y frameworks de desarrollo.",
      link: "/Certificados/Coursera R3FL0E2CHEMF.pdf",
      icon: "🚀",
      iconBg: "bg-gradient-to-br from-red-400 to-red-500",
      category: "Tecnología"
    },
    {
      title: "Coursera - Especialización II",
      institution: "Coursera",
      description: "Certificación avanzada en metodologías de desarrollo y tecnologías emergentes.",
      link: "/Certificados/Coursera RSQOY2NYXGU7.pdf",
      icon: "🎯",
      iconBg: "bg-gradient-to-br from-teal-400 to-teal-500",
      category: "Metodologías"
    },
    {
      title: "Coursera - Desarrollo Web",
      institution: "Coursera",
      description: "Certificación especializada en desarrollo web moderno y tecnologías frontend/backend.",
      link: "/Certificados/Coursera VSKM2WXTXXWE.pdf",
      icon: "🌐",
      iconBg: "bg-gradient-to-br from-cyan-400 to-cyan-500",
      category: "Desarrollo Web"
    },
    {
      title: "Coursera - Programación Avanzada",
      institution: "Coursera",
      description: "Certificación en programación avanzada y arquitectura de software.",
      link: "/Certificados/Coursera WHU7R1YAGM09.pdf",
      icon: "💎",
      iconBg: "bg-gradient-to-br from-pink-400 to-pink-500",
      category: "Programación Avanzada"
    }
  ];

  return (
    <section id="certificates" className="py-20 relative overflow-hidden" style={{background: 'rgba(23, 23, 24, 0.85)', backdropFilter: 'blur(20px)'}}>
      {/* Fondo simplificado */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Solo un gradiente sutil */}
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-oatmilk-500/2 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      
      {/* Contenedor principal */}
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header de la sección */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            Mis Certificados
          </h2>
          <p className="text-oatmilk-300 text-lg max-w-2xl mx-auto">
            Certificaciones y reconocimientos que validan mi formación profesional
          </p>
        </div>
        
        {/* Grid de certificados */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="group relative bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-oatmilk-500/20"
            >
              {/* Icono principal */}
              <div className="mb-6">
                <div className={`w-16 h-16 ${cert.iconBg} rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  {cert.icon}
                </div>
              </div>
              
              {/* Contenido */}
              <div className="space-y-4">
                {/* Título */}
                <h3 className="text-xl font-bold text-white group-hover:text-oatmilk-300 transition-colors duration-300 leading-tight">
                  {cert.title}
                </h3>
                
                {/* Institución */}
                <p className="text-oatmilk-300 font-semibold text-sm">
                  {cert.institution}
                </p>
                
                {/* Categoría */}
                <div className="inline-block">
                  <span className="bg-oatmilk-500/20 text-oatmilk-200 px-3 py-1 rounded-full text-xs font-medium border border-oatmilk-500/30">
                    {cert.category}
                  </span>
                </div>
                
                {/* Descripción */}
                <p className="text-oatmilk-400 text-sm leading-relaxed group-hover:text-oatmilk-300 transition-colors duration-300">
                  {cert.description}
                </p>
                
                {/* Botón de acción */}
                <div className="pt-2">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-oatmilk-500 to-oatmilk-600 text-white px-4 py-2 rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group-hover:scale-105"
                  >
                    <span>Ver Certificado</span>
                    <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
              
              {/* Efecto de brillo en hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-oatmilk-200/20 to-oatmilk-300/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
        
        {/* Información adicional */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 shadow-lg">
            <span className="text-white text-sm font-medium">
              🌟 Cristian Contreras
            </span>
            <div className="w-1 h-1 bg-oatmilk-400 rounded-full"></div>
            <span className="text-oatmilk-300 text-sm">
              Desarrollador Full-Stack Certificado
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;