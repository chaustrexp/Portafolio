import React from 'react';
import './css/Hero.css';

/**
 * Hero Section - Diseño Profesional ADSO
 * 
 * Identidad mantenida:
 * - Color principal: #2563eb (azul)
 * - Tipografía: Inter
 * - Estilo profesional y sobrio
 * - Enfoque tipo hoja de vida digital
 */
const Hero = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section id="hero" className="hero-professional">
      <div className="hero-container">
        <div className="hero-content">
          
          {/* Foto de perfil */}
          <div className="hero-avatar">
            <img 
              src="/img/foto de perfil mientras.jpg" 
              alt="Cristian Contreras - Desarrollador ADSO"
              className="avatar-image"
            />
          </div>

          {/* Información principal - Jerarquía clara */}
          <div className="hero-info">
            
            {/* Nombre - Máxima prioridad */}
            <h1 className="hero-name">
              Cristian Contreras
            </h1>
            
            {/* Rol Aprendiz Tecnólogo en Análisis y Desarrollo de Software - SENA - Identidad profesional */}
            <p className="hero-role">
              Aprendiz Tecnólogo en Análisis y Desarrollo de Software - SENA
            </p>
            
            {/* Descripción corta y directa */}
            <p className="hero-description">
             Desarrollador web en formación, 
             apasionado por crear soluciones digitales innovadoras y 
             comprometido con el aprendizaje continuo en tecnologías modernas.
            </p>

            {/* CTA profesional */}
            <div className="hero-actions">
              <button 
                className="btn-primary"
                onClick={() => scrollToSection('projects')}
              >
                Ver Proyectos
              </button>
              <button 
                className="btn-secondary"
                onClick={() => scrollToSection('contact')}
              >
                Contactar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;