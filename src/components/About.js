import React from 'react';
import './css/About.css';

/**
 * About Section - Profesional ADSO
 * 
 * Identidad mantenida:
 * - Texto breve, profesional y conciso
 * - Enfoque tipo hoja de vida digital
 * - Estilo sobrio y limpio
 */
const About = () => {
  return (
    <section id="about" className="about-professional">
      <div className="about-container">
        <div className="about-content">
          
          {/* Título profesional */}
          <h2 className="about-title">Sobre mí</h2>
          
          {/* Contenido conciso y profesional */}
          <div className="about-text">
            <p className="about-description">
              Aprendiz del programa Tecnólogo en Análisis y Desarrollo de Software del SENA, 
              con sólidos conocimientos en desarrollo web frontend y backend.
              Me caracterizo por mi responsabilidad, puntualidad y capacidad de trabajo en equipo.
            </p>
            
            <p className="about-description">
              usco una oportunidad de contrato de aprendizaje donde pueda aplicar mis conocimientos técnicos, 
              contribuir al crecimiento de la empresa y busco
              continuar mi formación profesional en el desarrollo de soluciones digitales innovadoras.
            </p>
          </div>

          {/* Datos profesionales */}
          <div className="about-highlights">
            <div className="highlight-item">
              <span className="highlight-label">Formación</span>
              <span className="highlight-value">ADSO - SENA</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-label">Especialización</span>
              <span className="highlight-value">Desarrollador de Software</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-label">Ubicación</span>
              <span className="highlight-value">Cúcuta, Colombia</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;