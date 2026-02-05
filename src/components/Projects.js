import './css/Projects.css';

/**
 * Projects Section - Profesional ADSO
 * 
 * Diseño personalizado con:
 * - Iconos circulares de colores
 * - Lista de características con checkmarks
 * - Badges de tecnologías
 * - Enlaces externos
 */
const Projects = () => {
  // Proyectos destacados con características
  const projects = [
    {
      title: "Banco Express",
      description: "Plataforma bancaria digital completa con funcionalidades de transferencias, consulta de saldos y panel administrativo.",
      link: "https://banco-express-qxkz.vercel.app/",
      icon: "fa-building-columns",
      iconColor: "#3B82F6", // Azul
      features: [
        "Sistema de autenticación seguro",
        "Transferencias en tiempo real",
        "Panel administrativo completo",
        "Historial de transacciones"
      ],
      technologies: ["React", "JavaScript", "CSS", "Vercel"]
    },
    {
      title: "BakerySoft",
      description: "Sistema de gestión integral para panaderías con control de inventario, ventas y administración completa del negocio.",
      link: "https://bakery-manager-16yr8mwly-cristians-projects-6060941c.vercel.app/",
      icon: "fa-bread-slice",
      iconColor: "#F59E0B", // Naranja
      features: [
        "Control de inventario en tiempo real",
        "Gestión de ventas y facturación",
        "Reportes y estadísticas",
        "Panel administrativo intuitivo"
      ],
      technologies: ["React", "TypeScript", "Firebase", "Vercel"]
    },
    {
      title: "Mini Página",
      description: "Sitio web minimalista y responsive con diseño moderno, enfocado en la experiencia de usuario y optimización móvil.",
      link: "https://mini-pagina.vercel.app/",
      icon: "fa-window-maximize",
      iconColor: "#10B981", // Verde
      features: [
        "Diseño responsive y adaptable",
        "Optimización para móviles",
        "Carga rápida y eficiente",
        "Interfaz minimalista"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "Vercel"]
    },
    {
      title: "Portafolio Web Personal",
      description: "Portafolio profesional desarrollado con React, diseño moderno con tema oscuro/claro y secciones interactivas.",
      link: "https://github.com/chaustrexp/Portafolio",
      icon: "fa-user-tie",
      iconColor: "#8B5CF6", // Púrpura
      features: [
        "Tema oscuro/claro dinámico",
        "Diseño responsive profesional",
        "Secciones interactivas",
        "Optimizado para rendimiento"
      ],
      technologies: ["React", "CSS", "JavaScript", "GitHub"]
    }
  ];

  return (
    <section id="projects" className="projects-professional">
      <div className="projects-container">
        <div className="projects-content">
          
          {/* Título profesional */}
          <h2 className="projects-title">Proyectos Destacados</h2>
          
          {/* Descripción breve */}
          <p className="projects-description">
            Algunos de mis trabajos más representativos como desarrollador ADSO
          </p>

          {/* Grid de proyectos */}
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                
                {/* Icono circular de color */}
                <div className="project-icon" style={{ backgroundColor: project.iconColor }}>
                  <i className={`fas ${project.icon}`}></i>
                </div>

                {/* Título con enlace externo */}
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-external-link"
                    aria-label={`Ver proyecto ${project.title}`}
                  >
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>

                {/* Descripción */}
                <p className="project-description">{project.description}</p>

                {/* Lista de características con checkmarks */}
                <ul className="project-features">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="feature-item">
                      <i className="fas fa-check-circle"></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Badges de tecnologías */}
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Enlace para ver el proyecto */}
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Haz clic para ver el proyecto
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;