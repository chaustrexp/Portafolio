import React from 'react';

/**
 * Componente Experience - Sección de experiencia laboral del portafolio
 * 
 * Muestra las diferentes áreas de especialización y experiencia profesional
 * del desarrollador con un diseño moderno de tarjetas con bordes inferiores brillantes.
 * 
 * @component
 * @returns {JSX.Element} Sección de experiencia laboral
 */
const Experience = () => {
  // Array de objetos que contiene la información de experiencia profesional
  const experiences = [
    {
      title: "Análisis de Requerimientos",
      company: "Tecnólogo ADSO",
      institution: "SENA",
      description: "Análisis y documentación de requerimientos funcionales y no funcionales de software. Participación en la definición de arquitecturas de soluciones tecnológicas aplicando metodologías ágiles.",
      icon: "📋",
      borderGradient: "from-oatmilk-400 via-oatmilk-500 to-oatmilk-600",
      iconBg: "bg-gradient-to-br from-oatmilk-400 to-oatmilk-500",
      skills: ["Análisis", "Documentación", "Metodologías Ágiles"]
    },
    {
      title: "Desarrollo Full-Stack",
      company: "Tecnólogo ADSO", 
      institution: "SENA",
      description: "Desarrollo de aplicaciones web completas con enfoque full-stack, participando activamente en el desarrollo tanto del frontend como del backend con soluciones tecnológicas integrales.",
      icon: "💻",
      borderGradient: "from-oatmilk-500 via-oatmilk-600 to-oatmilk-700",
      iconBg: "bg-gradient-to-br from-oatmilk-500 to-oatmilk-600",
      skills: ["Frontend", "Backend", "APIs"]
    },
    {
      title: "UI/UX & Frontend",
      company: "Tecnólogo ADSO",
      institution: "SENA", 
      description: "Especialización en desarrollo frontend y diseño de interfaces de usuario. Creación de experiencias visuales atractivas combinando programación con diseño gráfico y branding.",
      icon: "🎨",
      borderGradient: "from-oatmilk-300 via-oatmilk-400 to-oatmilk-500",
      iconBg: "bg-gradient-to-br from-oatmilk-300 to-oatmilk-400",
      skills: ["UI/UX", "Diseño", "Frontend"]
    }
  ];

  return (
    // Sección principal con fondo limpio
    <section id="experience" className="py-20 bg-gradient-to-b from-white to-oatmilk-50 relative overflow-hidden">
      {/* Efectos de fondo sutiles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-oatmilk-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-oatmilk-300/15 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header de la sección */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-oatmilk-900">
            Experiencia Laboral
          </h2>
          <p className="text-oatmilk-600 text-lg max-w-2xl mx-auto">
            Mi trayectoria profesional en desarrollo de software y tecnología
          </p>
        </div>
        
        {/* Grid de experiencias */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative bg-white/90 backdrop-blur-sm border border-oatmilk-200/50 rounded-2xl p-8 hover:bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-oatmilk-400/20 overflow-hidden"
            >
              {/* Borde inferior brillante */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${exp.borderGradient} opacity-60 group-hover:opacity-100 group-hover:h-2 transition-all duration-300`}></div>
              
              {/* Badge de institución */}
              <div className="absolute top-4 right-4">
                <span className="bg-oatmilk-100 text-oatmilk-700 px-3 py-1 rounded-full text-xs font-semibold border border-oatmilk-200">
                  {exp.institution}
                </span>
              </div>
              
              {/* Icono principal centrado */}
              <div className="flex justify-center mb-6">
                <div className={`w-20 h-20 ${exp.iconBg} rounded-2xl flex items-center justify-center text-white text-3xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  {exp.icon}
                </div>
              </div>
              
              {/* Contenido centrado */}
              <div className="text-center space-y-4">
                {/* Título */}
                <h3 className="text-2xl font-bold text-oatmilk-900 group-hover:text-oatmilk-950 transition-colors duration-300">
                  {exp.title}
                </h3>
                
                {/* Subtítulo */}
                <h4 className="text-oatmilk-600 font-semibold">
                  {exp.company}
                </h4>
                
                {/* Descripción */}
                <p className="text-oatmilk-600 leading-relaxed group-hover:text-oatmilk-700 transition-colors duration-300">
                  {exp.description}
                </p>
                
                {/* Skills tags */}
                <div className="flex flex-wrap gap-2 justify-center pt-4">
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
              
              {/* Efecto de brillo sutil */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-t ${exp.borderGradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
            </div>
          ))}
        </div>
        
        {/* Información adicional */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-oatmilk-200/50 shadow-lg">
            <span className="text-oatmilk-700 text-sm font-medium">
              💼 Cristian Contreras
            </span>
            <div className="w-1 h-1 bg-oatmilk-400 rounded-full"></div>
            <span className="text-oatmilk-600 text-sm">
              Tecnólogo ADSO - SENA
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;