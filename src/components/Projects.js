import React from 'react';
import './css/Projects.css';

/**
 * Projects Section - Profesional ADSO
 * 
 * Identidad mantenida:
 * - Cards limpias
 * - Máximo 3-4 proyectos visibles
 * - Enfoque en claridad, no cantidad
 * - Estilo profesional
 */
const Projects = () => {
  // Solo los proyectos más importantes (máximo 4)
  const projects = [
    {
      title: "Banco Express",
      description: "Plataforma bancaria digital completa con funcionalidades de transferencias, consulta de saldos y panel administrativo.",
      image: "/img/Banco Express.png",
      link: "https://banco-express-qxkz.vercel.app/",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      category: "Aplicación Web"
    },
    {
      title: "BakerySoft",
      description: "Sistema de gestión integral para panaderías con control de inventario, ventas y administración completa del negocio.",
      image: "/img/PanaderiaSoft.png", 
      link: "https://bakery-manager-16yr8mwly-cristians-projects-6060941c.vercel.app/",
      technologies: ["React", "TypeScript", "Firebase", "Tailwind"],
      category: "Sistema de Gestión"
    },
    {
      title: "Mini Página",
      description: "Sitio web minimalista y responsive con diseño moderno, enfocado en la experiencia de usuario y optimización móvil.",
      image: "/img/Mini Página.png",
      link: "https://mini-pagina.vercel.app/",
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive"],
      category: "Landing Page"
    }
  ];

  const handleProjectClick = (link) => {
    window.open(link, '_blank');
  };

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
              <div 
                key={index} 
                className="project-card"
                onClick={() => handleProjectClick(project.link)}
              >
                
                {/* Imagen del proyecto */}
                <div className="project-image">
                  <img 
                    src={project.image} 
                    alt={project.title}
                  />
                  <div className="project-overlay">
                    <i className="fas fa-external-link-alt"></i>
                  </div>
                </div>

                {/* Información del proyecto */}
                <div className="project-info">
                  <div className="project-category">{project.category}</div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  {/* Tecnologías */}
                  <div className="project-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;