/**
 * Componente Skills - Sección de habilidades del portafolio
 * 
 * Muestra las habilidades técnicas del desarrollador
 * organizadas en un diseño bento box limpio y moderno.
 * 
 * @component
 * @returns {JSX.Element} Sección de habilidades con diseño bento box
 */
const Skills = () => {
  // Array de objetos que define las habilidades del desarrollador
  const skills = [
    {
      icon: "💻",
      title: "Desarrollo Frontend",
      description: "React, JavaScript, HTML5, CSS3",
      size: "large"
    },
    {
      icon: "⚙️",
      title: "Desarrollo Backend",
      description: "Node.js, APIs REST, Bases de datos",
      size: "medium"
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      description: "Figma, Diseño de interfaces",
      size: "medium"
    },
    {
      icon: "📊",
      title: "Análisis de Requerimientos",
      description: "Documentación técnica, UML",
      size: "small"
    },
    {
      icon: "🖼️",
      title: "Diseño Gráfico",
      description: "Photoshop, Illustrator",
      size: "small"
    },
    {
      icon: "🔧",
      title: "Herramientas",
      description: "Git, GitHub, VS Code",
      size: "small"
    }
  ];

  return (
    // Sección principal con fondo limpio
    <section id="skills" className="py-20 bg-gradient-to-b from-white to-oatmilk-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header de la sección */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-oatmilk-900">
            Habilidades Destacadas
          </h2>
          <p className="text-oatmilk-600 text-lg">
            Tecnologías y herramientas que domino
          </p>
        </div>
        
        {/* Grid bento box */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`group bg-white/80 backdrop-blur-sm border border-oatmilk-200 rounded-2xl p-6 hover:bg-white hover:shadow-xl hover:shadow-oatmilk-200/50 hover:-translate-y-1 transition-all duration-300 ${
                skill.size === 'large' ? 'md:col-span-2 md:row-span-2' :
                skill.size === 'medium' ? 'md:col-span-2' :
                'col-span-1'
              }`}
            >
              {/* Icono */}
              <div className={`${
                skill.size === 'large' ? 'w-20 h-20 text-3xl mb-6' : 
                skill.size === 'medium' ? 'w-16 h-16 text-2xl mb-4' : 
                'w-12 h-12 text-xl mb-4'
              } bg-oatmilk-100 rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
                {skill.icon}
              </div>
              
              {/* Contenido */}
              <div className="text-center">
                <h3 className={`font-bold text-oatmilk-900 mb-2 ${
                  skill.size === 'large' ? 'text-xl' : 
                  skill.size === 'medium' ? 'text-lg' : 
                  'text-base'
                }`}>
                  {skill.title}
                </h3>
                <p className={`text-oatmilk-600 ${
                  skill.size === 'large' ? 'text-base' : 'text-sm'
                }`}>
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;