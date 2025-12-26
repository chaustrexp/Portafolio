import React from 'react';

/**
 * Componente Footer - Pie de página del portafolio
 * 
 * Componente simple que muestra la información de copyright y derechos reservados.
 * Incluye efectos visuales decorativos y un diseño minimalista con tema claro
 * que complementa el resto del portafolio.
 * 
 * Características:
 * - Fondo claro con gradiente sutil
 * - Barra decorativa superior con efecto de brillo
 * - Información de copyright actualizada
 * - Diseño centrado y responsive
 * 
 * @component
 * @returns {JSX.Element} Pie de página con información de copyright
 */
const Footer = () => {
  return (
    // Footer con gradiente de fondo claro y borde superior decorativo
    <footer className="bg-gradient-to-t from-oatmilk-200/80 to-transparent py-16 text-center border-t-2 border-oatmilk-900/20 relative">
      {/* Barra superior decorativa con gradiente horizontal y efecto de brillo */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-oatmilk-400 to-transparent shadow-glow"></div>
      
      {/* Contenedor principal con ancho máximo y centrado */}
      <div className="max-w-6xl mx-auto px-4">
        {/* Texto de copyright con año actualizado */}
        <p className="text-oatmilk-700 text-lg">
          &copy; 2025 Cristian Contreras – Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;