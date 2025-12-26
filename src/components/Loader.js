import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-oatmilk-100 to-oatmilk-200 flex flex-col justify-center items-center z-50">
      {/* Partículas flotantes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-oatmilk-900 rounded-full opacity-0 animate-float shadow-glow"
            style={{
              left: `${20 + i * 20}%`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>

      {/* Contenido del loader */}
      <div className="relative text-center">
        <div className="text-8xl font-extrabold text-oatmilk-900 animate-pulse-scale text-shadow-lg mb-8">
          CC
        </div>
        <div className="text-3xl font-semibold text-oatmilk-900 text-shadow animate-fade-in-up animate-delay-300 mb-8">
          Cristian Contreras
        </div>
        
        {/* Spinner */}
        <div className="w-16 h-16 border-4 border-oatmilk-900/20 border-t-oatmilk-900 rounded-full animate-spin mx-auto shadow-glow"></div>
      </div>
    </div>
  );
};

export default Loader;