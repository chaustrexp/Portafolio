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
      title: "Banco Express Cúcuta",
      description: "Plataforma bancaria digital moderna y completa con funcionalidades avanzadas de transferencias, consulta de saldos, historial de transacciones y panel administrativo intuitivo.",
      image: "/img/Banco Express.png",
      link: "https://banco-express-qxkz.vercel.app/",
      hasLink: true,
      icon: "🏦",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      category: "Web App",
      status: "Completado"
    },
    {
      title: "Mini Página",
      description: "Sitio web minimalista y elegante con diseño moderno, enfocado en la experiencia de usuario y optimización para dispositivos móviles.",
      image: "/img/Mini Página.png",
      link: "https://mini-pagina.vercel.app/",
      hasLink: true,
      icon: "🌐",
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive"],
      category: "Landing Page",
      status: "Completado"
    },
    {
      title: "BakerySoft",
      description: "Sistema de gestión integral para panaderías con control de inventario, ventas, productos y administración completa del negocio.",
      image: "/img/PanaderiaSoft.png",
      link: "https://bakery-manager-16yr8mwly-cristians-projects-6060941c.vercel.app/",
      hasLink: true,
      icon: "🥖",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
      category: "Sistema de Gestión",
      status: "Completado"
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
    // Sección principal con fondo oscuro moderno
    <section id="projects" className="py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Efectos de fondo mejorados */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        {/* Gradientes animados */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-oatmilk-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-oatmilk-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
      </div>
      
      {/* Contenedor principal */}
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header de la sección mejorado */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-oatmilk-500/10 border border-oatmilk-400/30 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-oatmilk-400 rounded-full animate-pulse"></div>
            <span className="text-oatmilk-300 text-sm font-medium">Portfolio</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
            Proyectos Destacados
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Soluciones innovadoras que combinan diseño y funcionalidad
          </p>
        </div>
        
        {/* Grid de proyectos mejorado */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-oatmilk-500/20 cursor-pointer"
              onClick={() => handleProjectClick(project)}
            >
              {/* Badge de estado mejorado */}
              <div className="absolute top-4 right-4 z-20">
                <span className={`px-3 py-1.5 rounded-full text-xs font-bold backdrop-blur-md ${
                  project.status === 'Completado' ? 'bg-green-500/20 text-green-300 border border-green-500/30' :
                  project.status === 'Ganador' ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30' :
                  'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                }`}>
                  {project.status}
                </span>
              </div>
              
              {/* Imagen del proyecto con efectos */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Overlay con gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                {/* Icono flotante */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="text-6xl transform scale-0 group-hover:scale-100 transition-transform duration-500 filter drop-shadow-2xl">
                    {project.icon}
                  </div>
                </div>
                {/* Borde superior con gradiente */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-oatmilk-400 via-oatmilk-500 to-oatmilk-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Contenido mejorado */}
              <div className="p-6">
                {/* Categoría con icono */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-oatmilk-400 rounded-full"></div>
                  <span className="text-oatmilk-400 text-xs font-bold uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>
                
                {/* Título */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-oatmilk-300 transition-colors duration-300">
                  {project.title}
                </h3>
                
                {/* Descripción */}
                <p className="text-gray-400 leading-relaxed mb-6 line-clamp-3 group-hover:text-gray-300 transition-colors duration-300">
                  {project.description}
                </p>
                
                {/* Tecnologías con diseño moderno */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-oatmilk-500/10 text-oatmilk-300 px-3 py-1 rounded-lg text-xs font-medium border border-oatmilk-500/20 hover:bg-oatmilk-500/20 hover:border-oatmilk-500/40 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Botón de acción mejorado */}
                {project.hasLink && (
                  <div className="flex items-center gap-2 text-oatmilk-400 font-semibold group-hover:text-oatmilk-300 transition-colors duration-300">
                    <span className="text-sm">Ver Proyecto</span>
                    <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                )}
              </div>
              
              {/* Borde inferior con gradiente animado */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-oatmilk-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            ))}
        </div>
        
        {/* CTA mejorado */}
        <div className="text-center mt-20">
          <div className="inline-flex flex-col items-center gap-4 bg-white/5 backdrop-blur-md rounded-2xl px-8 py-6 border border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-oatmilk-400 to-oatmilk-500 flex items-center justify-center text-2xl">
                🚀
              </div>
              <div className="text-left">
                <div className="text-white font-bold text-lg">¿Tienes un proyecto en mente?</div>
                <div className="text-gray-400 text-sm">Trabajemos juntos para hacerlo realidad</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;