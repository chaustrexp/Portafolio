/**
 * Componente Hero - Sección principal de presentación del portafolio
 * 
 * Esta es la primera sección que ve el usuario, contiene:
 * - Foto de perfil profesional con borde animado
 * - Información personal y profesional
 * - Descripción detallada del desarrollador
 * - Botones de navegación a otras secciones
 * - Diseño moderno con fondo oscuro y gradientes
 * 
 * Características:
 * - Diseño completamente responsive con múltiples breakpoints
 * - Navegación suave a otras secciones
 * - Efectos hover en elementos interactivos
 * - Fondo oscuro con gradientes modernos
 * - Imagen circular con borde animado
 * 
 * @component
 * @returns {JSX.Element} Sección Hero del portafolio
 */
const Hero = () => {
  /**
   * Función para navegación suave entre secciones
   * Utiliza scrollIntoView con comportamiento suave para mejorar UX
   * 
   * @param {string} sectionId - ID de la sección a la que navegar
   */
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    // Sección principal con fondo adaptado a la paleta oatmilk
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-oatmilk-900 via-oatmilk-800 to-oatmilk-700 relative overflow-hidden pt-20">
      {/* Efectos de fondo decorativos con colores oatmilk */}
      <div className="absolute top-0 left-0 w-full h-full">
        {/* Gradiente principal con tonos oatmilk */}
        <div className="absolute inset-0 bg-gradient-to-r from-oatmilk-400/10 via-transparent to-oatmilk-300/10"></div>
        {/* Círculos decorativos */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-oatmilk-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-oatmilk-300/5 rounded-full blur-3xl"></div>
      </div>

      {/* Contenedor principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Grid layout horizontal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
          
          {/* Columna izquierda - Imagen */}
          <div className="flex justify-center lg:justify-start order-1 lg:order-1">
            <div className="relative">
              {/* Contenedor de imagen con borde animado */}
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[400px] lg:h-[400px]">
                {/* Borde animado exterior con colores oatmilk */}
                <div className="absolute inset-0 rounded-full border-4 border-dashed border-oatmilk-400 animate-spin-slow"></div>
                
                {/* Borde animado interior */}
                <div className="absolute inset-4 rounded-full border-2 border-oatmilk-300/50"></div>
                
                {/* Imagen principal */}
                <div className="absolute inset-8 rounded-full overflow-hidden border-4 border-oatmilk-200/20 shadow-2xl">
                  <img
                    src="/img/Foto de perfil actualizada.jpeg"
                    alt="Cristian Contreras"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                  {/* Overlay con gradiente oatmilk */}
                  <div className="absolute inset-0 bg-gradient-to-t from-oatmilk-900/20 to-transparent"></div>
                </div>
                
                {/* Efectos decorativos con colores oatmilk */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-oatmilk-400 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-oatmilk-300 rounded-full animate-bounce-slow"></div>
                <div className="absolute top-1/2 -right-8 w-4 h-4 bg-oatmilk-500 rounded-full animate-pulse"></div>
              </div>
              
              {/* Efecto de resplandor con colores oatmilk */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-oatmilk-400/20 to-oatmilk-300/20 blur-xl -z-10"></div>
            </div>
          </div>

          {/* Columna derecha - Contenido */}
          <div className="text-center lg:text-left space-y-8 order-2 lg:order-2">
            {/* Saludo personalizado */}
            <div className="text-oatmilk-400 text-lg sm:text-xl font-medium tracking-wide">
              Hola, soy Cristian Contreras
            </div>
            
            {/* Título principal con gradiente oatmilk */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span className="text-oatmilk-50">Diseñando Sueños,</span>
              <br />
              <span className="bg-gradient-to-r from-oatmilk-400 to-oatmilk-200 bg-clip-text text-transparent">
                Desarrollando Realidades
              </span>
            </h1>
            
            {/* Descripción */}
            <p className="text-oatmilk-200 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Soy aprendiz ADSO del SENA, enfocado en el desarrollo de aplicaciones full-stack, con especial interés en UI/UX y frontend. Me gusta combinar lógica, diseño y creatividad para construir experiencias digitales intuitivas y atractivas.
            </p>
            
            {/* Botones de acción */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              {/* Botón principal */}
              <button
                onClick={() => scrollToSection('projects')}
                className="group flex items-center justify-center gap-3 bg-oatmilk-400 hover:bg-oatmilk-300 text-oatmilk-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-oatmilk-400/25 min-w-[200px]"
              >
                <span>Ver Mis Trabajos</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              
              {/* Botón secundario */}
              <button
                onClick={() => scrollToSection('contact')}
                className="group flex items-center justify-center gap-3 border-2 border-oatmilk-400 text-oatmilk-400 hover:bg-oatmilk-400 hover:text-oatmilk-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 min-w-[200px]"
              >
                <span>Hablemos</span>
                <div className="w-3 h-3 bg-oatmilk-400 rounded-full group-hover:bg-oatmilk-900 transition-colors duration-300"></div>
              </button>
            </div>

            {/* Iconos de redes sociales modernos */}
            <div className="flex items-center gap-6 pt-6 pb-8 lg:pb-0 justify-center lg:justify-start">
              <span className="text-oatmilk-300 text-sm font-medium">Sígueme en:</span>
              <div className="flex items-center gap-4">
                {/* Instagram */}
                <a 
                  href="https://www.instagram.com/_cristiqqn?igsh=eDFzcTdrY21kamx4" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-12 h-12 bg-oatmilk-800/50 hover:bg-oatmilk-400 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg"
                >
                  <svg className="w-6 h-6 text-oatmilk-300 group-hover:text-oatmilk-900 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                {/* GitHub */}
                <a 
                  href="https://github.com/chaustrexp" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-12 h-12 bg-oatmilk-800/50 hover:bg-oatmilk-400 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg"
                >
                  <svg className="w-6 h-6 text-oatmilk-300 group-hover:text-oatmilk-900 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>

                {/* LinkedIn */}
                <a 
                  href="https://www.linkedin.com/in/cristian-contreras-9a4999343" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-12 h-12 bg-oatmilk-800/50 hover:bg-oatmilk-400 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg"
                >
                  <svg className="w-6 h-6 text-oatmilk-300 group-hover:text-oatmilk-900 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>

                {/* Facebook */}
                <a 
                  href="https://www.facebook.com/share/1C5cmDhS9J/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-12 h-12 bg-oatmilk-800/50 hover:bg-oatmilk-400 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg"
                >
                  <svg className="w-6 h-6 text-oatmilk-300 group-hover:text-oatmilk-900 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Indicador de scroll con colores oatmilk */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center lg:block hidden">
          <div className="text-oatmilk-300 text-sm mb-2">Scroll para explorar</div>
          <div className="w-6 h-10 border-2 border-oatmilk-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-oatmilk-400 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;