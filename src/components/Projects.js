import React from 'react';

/**
 * Componente Projects - Sección de proyectos destacados del portafolio
 * 
 * Muestra los proyectos más importantes del desarrollador
 * organizados en un diseño bento box limpio y moderno.
 * 
 * @component
 * @returns {JSX.Element} Sección de proyectos con diseño bento box
 */
const Projects = () => {
  // Array de objetos que contiene información de todos los proyectos
  const projects = [
    {
      title: "Banco Cúcuta Express",
      description: "Plataforma bancaria digital completa",
      image: "/img/Captura 4.PNG",
      link: "https://chaustrexp.github.io/Banco-C-cuta-Express/",
      hasLink: true,
      icon: "🏦",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      size: "large"
    },
    {
      title: "Reto Hackathon",
      description: "Solución ganadora Hackathon Cúcuta 2025",
      image: "/img/Captura.PNG",
      link: "https://kevin101022.github.io/Reto_hackathon/",
      hasLink: true,
      icon: "🏆",
      technologies: ["Vue.js", "Firebase"],
      size: "medium"
    },
    {
      title: "Portafolio Personal",
      description: "Portafolio web responsive y moderno",
      image: "/img/Captura 3.PNG",
      link: "https://chaustrexp.github.io/Portafolio-Actualizado/",
      hasLink: true,
      icon: "💼",
      technologies: ["HTML5", "CSS3"],
      size: "medium"
    },
    {
      title: "Sistema Gestión Dantes",
      description: "Control de inventario y trazabilidad",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      link: "#",
      hasLink: false,
      icon: "📊",
      technologies: ["React", "Node.js"],
      size: "small"
    }
  ];

  /**
   * Maneja el clic en un proyecto
   */
  const handleProjectClick = (project) => {
    if (project.hasLink) {
      window.open(project.link, '_blank');
    }
  };

  return (
    // Sección principal con fondo limpio
    <section id="projects" className="py-20 bg-gradient-to-b from-oatmilk-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header de la sección */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-oatmilk-900">
            Proyectos Destacados
          </h2>
          <p className="text-oatmilk-600 text-lg">
            Mis trabajos más representativos
          </p>
        </div>
        
        {/* Grid bento box */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group bg-white/80 backdrop-blur-sm border border-oatmilk-200 rounded-2xl overflow-hidden hover:bg-white hover:shadow-xl hover:shadow-oatmilk-200/50 hover:-translate-y-1 transition-all duration-300 cursor-pointer ${
                project.size === 'large' ? 'md:col-span-2 md:row-span-2' :
                project.size === 'medium' ? 'md:col-span-2' :
                'col-span-1'
              }`}
              onClick={() => handleProjectClick(project)}
            >
              {/* Imagen del proyecto */}
              <div className={`relative overflow-hidden ${
                project.size === 'large' ? 'h-48' : 
                project.size === 'medium' ? 'h-32' : 
                'h-24'
              }`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {/* Overlay con icono */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className={`${
                    project.size === 'large' ? 'text-4xl' : 
                    project.size === 'medium' ? 'text-3xl' : 
                    'text-2xl'
                  } transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300`}>
                    {project.icon}
                  </div>
                </div>
              </div>
              
              {/* Contenido */}
              <div className="p-4">
                <h3 className={`font-bold text-oatmilk-900 mb-2 ${
                  project.size === 'large' ? 'text-xl' : 
                  project.size === 'medium' ? 'text-lg' : 
                  'text-base'
                }`}>
                  {project.title}
                </h3>
                
                <p className={`text-oatmilk-600 mb-3 ${
                  project.size === 'large' ? 'text-base' : 'text-sm'
                }`}>
                  {project.description}
                </p>
                
                {/* Tecnologías */}
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, project.size === 'small' ? 2 : 3).map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-oatmilk-100 text-oatmilk-600 px-2 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Indicador de enlace */}
                {project.hasLink && (
                  <div className="mt-3 flex items-center text-oatmilk-500 text-sm">
                    <svg className="w-4 h-4 mr-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Ver proyecto
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;