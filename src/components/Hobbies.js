import React from 'react';
import './css/Hobbies.css';

/**
 * Hobbies Section - Profesional ADSO
 * 
 * Identidad mantenida:
 * - Muestra personalidad de forma profesional
 * - Iconos simples y limpios
 * - Diseño consistente con el resto del portafolio
 */
const Hobbies = () => {
  // Pasatiempos e intereses personales - Aficiones reales de Cristian
  const hobbies = [
    {
      name: "Escuchar Música",
      icon: "fas fa-headphones",
      description: "Música en inglés y español, diversos géneros que inspiran creatividad"
    },
    {
      name: "Practicar Inglés",
      icon: "fas fa-language",
      description: "Mejorar constantemente mi nivel de inglés hablado y escrito"
    },
    {
      name: "Hacer Ejercicio",
      icon: "fas fa-dumbbell",
      description: "Mantenerme activo y saludable con rutinas de ejercicio regulares"
    },
    {
      name: "Diseñar",
      icon: "fas fa-palette",
      description: "Explorar la creatividad visual y el diseño gráfico"
    },
    {
      name: "Bailar",
      icon: "fas fa-music",
      description: "Expresión corporal y diversión a través del baile"
    },
    {
      name: "Jugar Voleibol",
      icon: "fas fa-running",
      description: "Mi deporte favorito para mantenerme activo y socializar"
    }
  ];

  return (
    <section id="hobbies" className="hobbies-professional">
      <div className="hobbies-container">
        <div className="hobbies-content">
          
          {/* Título profesional */}
          <h2 className="hobbies-title">Aficiones Favoritas</h2>
          
          {/* Descripción breve */}
          <p className="hobbies-description">
            Las actividades que más disfruto en mi tiempo libre y que enriquecen mi vida personal
          </p>

          {/* Grid de hobbies */}
          <div className="hobbies-grid">
            {hobbies.map((hobby, index) => (
              <div key={index} className="hobby-card">
                <div className="hobby-icon">
                  <i className={hobby.icon}></i>
                </div>
                <h3 className="hobby-name">{hobby.name}</h3>
                <p className="hobby-description">{hobby.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;