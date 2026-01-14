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
    // Sección principal con fondo oscuro moderno
    <section id="experience" className="py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Efectos de fondo mejorados */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        {/* Gradientes animados */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-oatmilk-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] bg-oatmilk-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header de la sección mejorado */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-oatmilk-500/10 border border-oatmilk-400/30 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-oatmilk-400 rounded-full animate-pulse"></div>
            <span className="text-oatmilk-300 text-sm font-medium">Trayectoria</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
            Experiencia Laboral
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Mi trayectoria profesional en desarrollo de software y tecnología
          </p>
        </div>
        
        {/* Grid de experiencias mejorado */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-oatmilk-500/20 overflow-hidden"
            >
              {/* Borde superior con gradiente animado */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${exp.borderGradient} opacity-0 group-hover:opacity-100 transition-all duration-500`}></div>
              
              {/* Badge de institución mejorado */}
              <div className="absolute top-4 right-4">
                <span className="bg-oatmilk-500/20 text-oatmilk-300 px-3 py-1 rounded-full text-xs font-bold border border-oatmilk-500/30 backdrop-blur-sm">
                  {exp.institution}
                </span>
              </div>
              
              {/* Icono principal con efecto flotante */}
              <div className="flex justify-center mb-6">
                <div className={`relative w-20 h-20 ${exp.iconBg} rounded-2xl flex items-center justify-center text-white text-3xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 animate-float`}>
                  {exp.icon}
                  {/* Resplandor del icono */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${exp.borderGradient} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`}></div>
                </div>
              </div>
              
              {/* Contenido centrado */}
              <div className="text-center space-y-4">
                {/* Título */}
                <h3 className="text-2xl font-bold text-white group-hover:text-oatmilk-300 transition-colors duration-300">
                  {exp.title}
                </h3>
                
                {/* Subtítulo */}
                <h4 className="text-gray-400 font-semibold group-hover:text-gray-300 transition-colors duration-300">
                  {exp.company}
                </h4>
                
                {/* Descripción */}
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {exp.description}
                </p>
                
                {/* Skills tags mejorados */}
                <div className="flex flex-wrap gap-2 justify-center pt-4">
                  {exp.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="bg-oatmilk-500/10 text-oatmilk-300 px-3 py-1 rounded-lg text-xs font-medium border border-oatmilk-500/20 hover:bg-oatmilk-500/20 hover:border-oatmilk-500/40 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Efecto de brillo en hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-t ${exp.borderGradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}></div>
              
              {/* Borde inferior con gradiente */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${exp.borderGradient} opacity-60 group-hover:opacity-100 group-hover:h-2 transition-all duration-500`}></div>
            </div>
          ))}
        </div>
        
        {/* CTA mejorado */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center gap-4 bg-white/5 backdrop-blur-md rounded-2xl px-8 py-4 border border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-oatmilk-400 to-oatmilk-500 flex items-center justify-center text-xl">
                💼
              </div>
              <div className="text-left">
                <div className="text-white font-semibold">Tecnólogo ADSO</div>
                <div className="text-gray-400 text-sm">SENA - Servicio Nacional de Aprendizaje</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;