/**
 * Componente Skills - Sección de habilidades del portafolio
 * 
 * Muestra las habilidades técnicas del desarrollador
 * con un diseño moderno de tarjetas con bordes inferiores brillantes.
 * 
 * @component
 * @returns {JSX.Element} Sección de habilidades con tarjetas modernas
 */
const Skills = () => {
  // Array de objetos que define las habilidades del desarrollador
  const skills = [
    {
      icon: "💻",
      title: "Desarrollo Frontend",
      description: "Creo interfaces modernas y responsivas con React, JavaScript, HTML5 y CSS3. Experiencia en frameworks modernos y mejores prácticas de desarrollo.",
      borderGradient: "from-oatmilk-400 via-oatmilk-500 to-oatmilk-600",
      iconBg: "bg-gradient-to-br from-oatmilk-400 to-oatmilk-500"
    },
    {
      icon: "⚙️", 
      title: "Desarrollo Backend",
      description: "Construyo APIs robustas y escalables usando Node.js, Express y bases de datos. Arquitectura de microservicios y sistemas distribuidos.",
      borderGradient: "from-oatmilk-500 via-oatmilk-600 to-oatmilk-700",
      iconBg: "bg-gradient-to-br from-oatmilk-500 to-oatmilk-600"
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      description: "Diseño experiencias intuitivas y atractivas usando Figma y principios de diseño centrado en el usuario. Prototipado y testing de usabilidad.",
      borderGradient: "from-oatmilk-300 via-oatmilk-400 to-oatmilk-500",
      iconBg: "bg-gradient-to-br from-oatmilk-300 to-oatmilk-400"
    },
    {
      icon: "📊",
      title: "Análisis de Datos",
      description: "Transformo datos en insights valiosos para la toma de decisiones estratégicas. Visualización de datos y business intelligence.",
      borderGradient: "from-oatmilk-600 via-oatmilk-700 to-oatmilk-800",
      iconBg: "bg-gradient-to-br from-oatmilk-600 to-oatmilk-700"
    },
    {
      icon: "🔧",
      title: "DevOps & Tools",
      description: "Optimizo flujos de trabajo con Git, CI/CD y herramientas de desarrollo modernas. Automatización y deployment continuo.",
      borderGradient: "from-oatmilk-400 via-oatmilk-600 to-oatmilk-500",
      iconBg: "bg-gradient-to-br from-oatmilk-400 to-oatmilk-600"
    },
    {
      icon: "🚀",
      title: "Innovación Tech",
      description: "Exploro constantemente nuevas tecnologías y frameworks para mantenerme actualizado. Investigación y desarrollo de soluciones innovadoras.",
      borderGradient: "from-oatmilk-500 via-oatmilk-400 to-oatmilk-600",
      iconBg: "bg-gradient-to-br from-oatmilk-500 to-oatmilk-400"
    }
  ];

  return (
    // Sección principal con fondo limpio
    <section id="skills" className="py-20 bg-gradient-to-b from-white to-oatmilk-50 relative overflow-hidden">
      {/* Efectos de fondo sutiles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-oatmilk-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-oatmilk-300/15 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header de la sección */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-oatmilk-900">
            Habilidades Destacadas
          </h2>
          <p className="text-oatmilk-600 text-lg max-w-2xl mx-auto">
            Tecnologías y herramientas que domino para crear soluciones innovadoras
          </p>
        </div>
        
        {/* Grid de habilidades */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative bg-white/90 backdrop-blur-sm border border-oatmilk-200/50 rounded-2xl p-8 hover:bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-oatmilk-400/20 overflow-hidden"
            >
              {/* Borde inferior brillante */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${skill.borderGradient} opacity-60 group-hover:opacity-100 group-hover:h-2 transition-all duration-300`}></div>
              
              {/* Icono principal centrado */}
              <div className="flex justify-center mb-6">
                <div className={`w-20 h-20 ${skill.iconBg} rounded-2xl flex items-center justify-center text-white text-3xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  {skill.icon}
                </div>
              </div>
              
              {/* Contenido centrado */}
              <div className="text-center space-y-4">
                {/* Título */}
                <h3 className="text-2xl font-bold text-oatmilk-900 group-hover:text-oatmilk-950 transition-colors duration-300">
                  {skill.title}
                </h3>
                
                {/* Descripción */}
                <p className="text-oatmilk-600 leading-relaxed group-hover:text-oatmilk-700 transition-colors duration-300">
                  {skill.description}
                </p>
              </div>
              
              {/* Efecto de brillo sutil */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-t ${skill.borderGradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
            </div>
          ))}
        </div>
        
        {/* Información adicional */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-oatmilk-200/50 shadow-lg">
            <span className="text-oatmilk-700 text-sm font-medium">
              ⚡ Cristian Contreras
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

export default Skills;