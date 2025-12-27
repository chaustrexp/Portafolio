import React from 'react';

/**
 * Componente Projects - Sección de proyectos destacados del portafolio
 * 
 * Muestra los proyectos más importantes del desarrollador
 * con un diseño moderno y elegante adaptado para proyectos.
 * 
 * @component
 * @returns {JSX.Element} Sección de proyectos con diseño moderno
 */
const Projects = () => {
  // Array de objetos que contiene información de todos los proyectos
  const projects = [
    {
      title: "Banco Cúcuta Express",
      description: "Plataforma bancaria digital completa con funcionalidades de transferencias, consulta de saldos, historial de transacciones y panel administrativo moderno.",
      image: "/img/Captura 4.PNG",
      link: "https://chaustrexp.github.io/Banco-C-cuta-Express/",
      hasLink: true,
      icon: "🏦",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      category: "Web App",
      status: "Completado"
    },
    {
      title: "Reto Hackathon Cúcuta",
      description: "Solución innovadora desarrollada durante la Hackathon Cúcuta 2025, demostrando habilidades de trabajo en equipo y resolución de problemas.",
      image: "/img/Captura.PNG",
      link: "https://kevin101022.github.io/Reto_hackathon/",
      hasLink: true,
      icon: "🏆",
      technologies: ["Vue.js", "Firebase", "CSS3"],
      category: "Hackathon",
      status: "Ganador"
    },
    {
      title: "Portafolio Personal",
      description: "Portafolio web personal con diseño moderno y responsive, animaciones fluidas y optimización para dispositivos móviles.",
      image: "/img/Captura 3.PNG",
      link: "https://chaustrexp.github.io/Portafolio-Actualizado/",
      hasLink: true,
      icon: "💼",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      category: "Portfolio",
      status: "Completado"
    },
    {
      title: "Sistema Gestión Dantes",
      description: "Sistema completo para gestión de inventario con funcionalidades de entrada, salida, asignación de bienes y trazabilidad completa.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      link: "#",
      hasLink: false,
      icon: "📊",
      technologies: ["React", "Node.js", "MongoDB"],
      category: "Sistema",
      status: "En Desarrollo"
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
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-oatmilk-50 relative overflow-hidden">
      {/* Efectos de fondo sutiles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-oatmilk-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-oatmilk-300/15 rounded-full blur-3xl"></div>
      </div>
      
      {/* Contenedor principal */}
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header de la sección */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-oatmilk-900">
            Proyectos Destacados
          </h2>
          <p className="text-oatmilk-600 text-lg max-w-2xl mx-auto">
            Mis trabajos más representativos y soluciones innovadoras
          </p>
        </div>
        
        {/* Grid de proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white/90 backdrop-blur-sm border border-oatmilk-200/50 rounded-3xl overflow-hidden hover:bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-oatmilk-400/20 cursor-pointer"
              onClick={() => handleProjectClick(project)}
            >
              {/* Badge de estado */}
              <div className="absolute top-4 right-4 z-20">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold shadow-lg ${
                  project.status === 'Completado' ? 'bg-green-100 text-green-700' :
                  project.status === 'Ganador' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-blue-100 text-blue-700'
                }`}>
                  {project.status}
                </span>
              </div>
              
              {/* Imagen del proyecto */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {/* Overlay con icono */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-4xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {project.icon}
                  </div>
                </div>
              </div>
              
              {/* Contenido */}
              <div className="p-8">
                {/* Categoría */}
                <div className="mb-3">
                  <span className="bg-oatmilk-100 text-oatmilk-700 px-3 py-1 rounded-full text-xs font-medium border border-oatmilk-200">
                    {project.category}
                  </span>
                </div>
                
                {/* Título */}
                <h3 className="text-2xl font-bold text-oatmilk-900 mb-3 group-hover:text-oatmilk-950 transition-colors duration-300">
                  {project.title}
                </h3>
                
                {/* Descripción */}
                <p className="text-oatmilk-600 leading-relaxed mb-6 group-hover:text-oatmilk-700 transition-colors duration-300">
                  {project.description}
                </p>
                
                {/* Tecnologías */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-oatmilk-50 text-oatmilk-600 px-3 py-1 rounded-full text-sm font-medium border border-oatmilk-200 group-hover:bg-oatmilk-100 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Botón de acción */}
                {project.hasLink && (
                  <div className="flex items-center text-oatmilk-500 font-medium group-hover:text-oatmilk-600 transition-colors duration-300">
                    <span className="mr-2">Ver proyecto</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                )}
              </div>
              
              {/* Borde inferior sutil */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-oatmilk-400 via-oatmilk-500 to-oatmilk-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
        
        {/* Información adicional */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-oatmilk-200/50">
            <span className="text-oatmilk-700 text-sm font-medium">
              🚀 Cristian Contreras
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

export default Projects;