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
    // Sección principal con fondo oscuro moderno
    <section id="skills" className="py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Efectos de fondo mejorados */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        {/* Gradientes animados */}
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-oatmilk-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-oatmilk-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header de la sección mejorado */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-oatmilk-500/10 border border-oatmilk-400/30 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-oatmilk-400 rounded-full animate-pulse"></div>
            <span className="text-oatmilk-300 text-sm font-medium">Expertise</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
            Habilidades Destacadas
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Tecnologías y herramientas que domino para crear soluciones innovadoras
          </p>
        </div>
        
        {/* Grid de habilidades mejorado */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-oatmilk-500/20 overflow-hidden"
            >
              {/* Borde superior con gradiente animado */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${skill.borderGradient} opacity-0 group-hover:opacity-100 transition-all duration-500`}></div>
              
              {/* Icono principal con efecto flotante */}
              <div className="flex justify-center mb-6">
                <div className={`relative w-20 h-20 ${skill.iconBg} rounded-2xl flex items-center justify-center text-white text-3xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 animate-float`}>
                  {skill.icon}
                  {/* Resplandor del icono */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${skill.borderGradient} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`}></div>
                </div>
              </div>
              
              {/* Contenido centrado */}
              <div className="text-center space-y-4">
                {/* Título */}
                <h3 className="text-2xl font-bold text-white group-hover:text-oatmilk-300 transition-colors duration-300">
                  {skill.title}
                </h3>
                
                {/* Descripción */}
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {skill.description}
                </p>
              </div>
              
              {/* Efecto de brillo en hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-t ${skill.borderGradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}></div>
              
              {/* Borde inferior con gradiente */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${skill.borderGradient} opacity-60 group-hover:opacity-100 group-hover:h-2 transition-all duration-500`}></div>
            </div>
          ))}
        </div>
        
        {/* CTA mejorado */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center gap-4 bg-white/5 backdrop-blur-md rounded-2xl px-8 py-4 border border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-oatmilk-400 to-oatmilk-500 flex items-center justify-center text-xl">
                ⚡
              </div>
              <span className="text-white font-semibold">
                Siempre aprendiendo y mejorando
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;