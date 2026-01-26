import React from 'react';
import './css/Skills.css';

/**
 * Skills Section - Profesional ADSO
 * 
 * Identidad mantenida:
 * - Iconos simples (Font Awesome)
 * - Poco texto
 * - Buena separación visual
 * - Enfoque profesional
 */
const Skills = () => {
  // Habilidades técnicas esenciales
  const skills = [
    { name: "React", icon: "fab fa-react", category: "Frontend" },
    { name: "Node.js", icon: "fab fa-node-js", category: "Backend" },
    { name: "JavaScript", icon: "fab fa-js-square", category: "Lenguaje" },
    { name: "HTML5", icon: "fab fa-html5", category: "Frontend" },
    { name: "CSS3", icon: "fab fa-css3-alt", category: "Frontend" },
    { name: "Git", icon: "fab fa-git-alt", category: "Herramientas" },
    { name: "MongoDB", icon: "fas fa-database", category: "Base de Datos" },
    { name: "Express", icon: "fas fa-server", category: "Backend" }
  ];

  return (
    <section id="skills" className="skills-professional">
      <div className="skills-container">
        <div className="skills-content">
          
          {/* Título profesional */}
          <h2 className="skills-title">Habilidades Técnicas</h2>
          
          {/* Descripción breve */}
          <p className="skills-description">
            Tecnologías y herramientas que domino para el desarrollo full-stack
          </p>

          {/* Grid de habilidades */}
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-icon">
                  <i className={skill.icon}></i>
                </div>
                <h3 className="skill-name">{skill.name}</h3>
                <p className="skill-category">{skill.category}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;