import React from 'react';
import './css/Loader.css';

/**
 * Componente Loader - Pantalla de carga inicial del portafolio
 * 
 * Muestra una animación de carga moderna y elegante mientras
 * se inicializa el portafolio con efectos visuales avanzados.
 * Adaptado al sistema de temas oscuro/claro.
 * 
 * @component
 * @returns {JSX.Element} Pantalla de carga con animaciones
 */
const Loader = () => {
  return (
    <div className="loader-container">
      
      {/* Efectos de fondo animados */}
      <div className="loader-background">
        {/* Círculos decorativos flotantes */}
        <div className="loader-circle loader-circle-1"></div>
        <div className="loader-circle loader-circle-2"></div>
        <div className="loader-circle loader-circle-3"></div>
        
        {/* Partículas flotantes mejoradas */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="loader-particle"
            style={{
              left: `${10 + (i * 7)}%`,
              top: `${20 + (i * 5)}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${3 + (i % 3)}s`
            }}
          />
        ))}
      </div>

      {/* Contenido principal del loader */}
      <div className="loader-content">
        
        {/* Logo principal con efectos avanzados */}
        <div className="loader-logo-container">
          {/* Círculo de fondo con gradiente */}
          <div className="loader-logo-glow"></div>
          
          {/* Iniciales con diseño moderno */}
          <div className="loader-logo">
            <span className="loader-initials">CC</span>
          </div>
          
          {/* Anillos decorativos */}
          <div className="loader-ring loader-ring-outer"></div>
          <div className="loader-ring loader-ring-inner"></div>
        </div>
        
        {/* Nombre con animación de escritura */}
        <div className="loader-text-container">
          <h1 className="loader-name">
            Cristian Contreras
          </h1>
          <p className="loader-title">
            Desarrollador de Software
          </p>
        </div>
        
        {/* Barra de progreso moderna */}
        <div className="loader-progress-container">
          <div className="loader-progress-track">
            <div className="loader-progress-bar"></div>
          </div>
        </div>
        
        {/* Texto de carga */}
        <div className="loader-status">
          Cargando experiencias increíbles...
        </div>
        
        {/* Puntos de carga animados */}
        <div className="loader-dots">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="loader-dot"
              style={{animationDelay: `${i * 0.2}s`}}
            />
          ))}
        </div>
      </div>
      
      {/* Efecto de resplandor en las esquinas */}
      <div className="loader-corner-glow loader-corner-glow-top"></div>
      <div className="loader-corner-glow loader-corner-glow-bottom"></div>
    </div>
  );
};

export default Loader;