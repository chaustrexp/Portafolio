import React from 'react';

/**
 * Componente Experience - Sección de experiencia laboral del portafolio
 * 
 * Muestra las diferentes áreas de especialización y experiencia profesional
 * del desarrollador, organizadas en tarjetas interactivas con efectos visuales.
 * 
 * @component
 * @returns {JSX.Element} Sección de experiencia laboral
 */
const Experience = () => {
  // Array de objetos que contiene la información de experiencia profesional
  // Cada objeto representa una especialización o área de trabajo
  const experiences = [
    {
      title: "Análisis de Requerimientos de Software",
      company: "Tecnólogo ADSO",
      institution: "SENA",
      description: "Análisis y documentación de requerimientos funcionales y no funcionales de software. Participación en la definición de arquitecturas de soluciones tecnológicas, aplicando metodologías ágiles y mejores prácticas de ingeniería de software.",
      icon: "📋",
      skills: ["Análisis", "Documentación", "Metodologías Ágiles"]
    },
    {
      title: "Desarrollo Full-Stack",
      company: "Tecnólogo ADSO", 
      institution: "SENA",
      description: "Desarrollo de aplicaciones web completas con enfoque full-stack, participando activamente en el desarrollo tanto del frontend como del backend. Implementación de soluciones tecnológicas integrales que conectan la lógica del negocio con interfaces de usuario intuitivas.",
      icon: "💻",
      skills: ["Frontend", "Backend", "APIs"]
    },
    {
      title: "Especialización Frontend & UI/UX",
      company: "Tecnólogo ADSO",
      institution: "SENA", 
      description: "Especialización en desarrollo frontend y diseño de interfaces de usuario (UI/UX). Creación de experiencias visuales atractivas combinando programación con diseño gráfico, incluyendo desarrollo de posters, afiches y branding para proyectos tecnológicos.",
      icon: "🎨",
      skills: ["UI/UX", "Diseño", "Frontend"]
    }
  ];

  return (
    // Sección principal con ID para navegación y gradiente de fondo claro
    <section id="experience" className="py-20 bg-gradient-to-b from-oatmilk-50 to-white relative overflow-hidden">
      {/* Efectos de fondo decorativos */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-oatmilk-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-oatmilk-300/20 rounded-full blur-3xl"></div>
      </div>

      {/* Contenedor principal con ancho máximo y centrado */}
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header de la sección */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-oatmilk-900 to-oatmilk-700 bg-clip-text text-transparent">
            Experiencia Laboral
          </h2>
          <p className="text-oatmilk-600 text-lg max-w-2xl mx-auto">
            Mi trayectoria profesional en desarrollo de software y tecnología
          </p>
        </div>
        
        {/* Grid responsive mejorado */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Mapeo de cada experiencia para crear tarjetas individuales */}
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative bg-white/70 backdrop-blur-sm border border-oatmilk-200/50 p-8 rounded-3xl hover:bg-white/90 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-oatmilk-400/15"
            >
              {/* Borde animado */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-oatmilk-400/20 via-oatmilk-300/20 to-oatmilk-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
              <div className="absolute inset-[1px] rounded-3xl bg-white/90 group-hover:bg-white/95 transition-colors duration-500"></div>
              
              {/* Contenido de la tarjeta */}
              <div className="relative z-10">
                {/* Icono y badge de institución */}
                <div className="flex justify-between items-start mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-oatmilk-400 to-oatmilk-500 rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {exp.icon}
                  </div>
                  <span className="bg-gradient-to-r from-oatmilk-400 to-oatmilk-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md">
                    {exp.institution}
                  </span>
                </div>
                
                {/* Título del puesto */}
                <h3 className="text-xl font-bold text-oatmilk-900 mb-2 group-hover:text-black transition-colors duration-300">
                  {exp.title}
                </h3>
                
                {/* Subtítulo con el programa */}
                <h4 className="text-oatmilk-600 font-semibold mb-4">
                  {exp.company}
                </h4>
                
                {/* Descripción */}
                <p className="text-oatmilk-700 leading-relaxed mb-6 text-sm">
                  {exp.description}
                </p>
                
                {/* Skills tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="bg-oatmilk-100 text-oatmilk-700 px-3 py-1 rounded-full text-xs font-medium border border-oatmilk-200 group-hover:bg-oatmilk-200 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;