import React from 'react';
import './css/Loader.css';

/**
 * Componente Loader - Pantalla de carga inicial del portafolio
 * 
 * Muestra una animación de carga moderna y elegante mientras
 * se inicializa el portafolio con efectos visuales avanzados.
 * 
 * @component
 * @returns {JSX.Element} Pantalla de carga con animaciones
 */
const Loader = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-oatmilk-50 via-white to-oatmilk-100 flex flex-col justify-center items-center z-50 overflow-hidden">
      
      {/* Efectos de fondo animados */}
      <div className="absolute inset-0">
        {/* Círculos decorativos flotantes */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-oatmilk-200/30 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-oatmilk-300/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-oatmilk-400/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Partículas flotantes mejoradas */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-oatmilk-400 rounded-full opacity-0 animate-float"
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
      <div className="relative text-center z-10">
        
        {/* Logo principal con efectos avanzados */}
        <div className="relative mb-8">
          {/* Círculo de fondo con gradiente */}
          <div className="absolute inset-0 w-32 h-32 mx-auto bg-gradient-to-br from-oatmilk-400/20 to-oatmilk-600/20 rounded-full blur-xl animate-pulse"></div>
          
          {/* Iniciales con diseño moderno */}
          <div className="relative w-32 h-32 mx-auto bg-gradient-to-br from-oatmilk-100 to-oatmilk-200 rounded-2xl flex items-center justify-center shadow-2xl border border-oatmilk-300/30 animate-bounce-gentle">
            <span className="text-5xl font-black bg-gradient-to-r from-oatmilk-800 to-oatmilk-600 bg-clip-text text-transparent">
              CC
            </span>
          </div>
          
          {/* Anillos decorativos */}
          <div className="absolute inset-0 w-32 h-32 mx-auto border-2 border-oatmilk-400/30 rounded-2xl animate-spin-slow"></div>
          <div className="absolute inset-2 w-28 h-28 mx-auto border border-oatmilk-300/20 rounded-xl animate-spin-reverse"></div>
        </div>
        
        {/* Nombre con animación de escritura */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-oatmilk-900 animate-fade-in-up mb-2">
            Cristian Contreras
          </h1>
          <p className="text-oatmilk-600 text-lg animate-fade-in-up" style={{animationDelay: '0.5s'}}>
            Desarrollador Full-Stack
          </p>
        </div>
        
        {/* Barra de progreso moderna */}
        <div className="w-64 mx-auto mb-6">
          <div className="h-1 bg-oatmilk-200 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-oatmilk-400 to-oatmilk-600 rounded-full animate-loading-bar"></div>
          </div>
        </div>
        
        {/* Texto de carga */}
        <div className="text-oatmilk-500 text-sm animate-pulse">
          Cargando experiencias increíbles...
        </div>
        
        {/* Puntos de carga animados */}
        <div className="flex justify-center space-x-2 mt-4">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-oatmilk-400 rounded-full animate-bounce"
              style={{animationDelay: `${i * 0.2}s`}}
            />
          ))}
        </div>
      </div>
      
      {/* Efecto de resplandor en las esquinas */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-oatmilk-400/10 to-transparent rounded-full blur-2xl"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-oatmilk-300/10 to-transparent rounded-full blur-3xl"></div>
    </div>
  );
};

export default Loader;