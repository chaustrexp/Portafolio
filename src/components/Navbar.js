import React, { useState, useEffect } from 'react';

/**
 * Componente Navbar - Barra de navegación moderna del portafolio
 * 
 * Navbar con diseño moderno tipo toggle/switch y navegación suave.
 * 
 * @component
 * @returns {JSX.Element} Barra de navegación moderna
 */
const Navbar = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Secciones de navegación
  const navItems = [
    { name: 'Inicio', id: 'hero' },
    { name: 'Experiencia', id: 'experience' },
    { name: 'Habilidades', id: 'skills' },
    { name: 'Certificados', id: 'certificates' },
    { name: 'Hobbies', id: 'hobbies' },
    { name: 'Proyectos', id: 'projects' },
    { name: 'Contacto', id: 'contact' }
  ];

  // Detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navegación suave
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Navbar Desktop - Estilo moderno flotante */}
      <nav className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 hidden lg:block ${
        scrolled ? 'scale-95' : 'scale-100'
      }`}>
        <div className="bg-white/90 backdrop-blur-xl border border-oatmilk-200/50 rounded-full px-2 py-2 shadow-2xl shadow-oatmilk-400/10">
          <div className="flex items-center space-x-1 relative">
            {/* Indicador deslizante */}
            <div 
              className="absolute top-1 bottom-1 bg-gradient-to-r from-oatmilk-400 to-oatmilk-500 rounded-full transition-all duration-300 ease-out shadow-lg z-0"
              style={{
                left: `${navItems.findIndex(item => item.id === activeSection) * 110 + 4}px`,
                width: '102px'
              }}
            />
            
            {/* Items de navegación */}
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative z-10 px-4 py-2 rounded-full font-medium transition-all duration-300 text-sm whitespace-nowrap ${
                  activeSection === item.id 
                    ? 'text-white' 
                    : 'text-oatmilk-700 hover:text-oatmilk-900'
                }`}
                style={{ minWidth: '102px' }}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Navbar Mobile - Estilo hamburguesa moderna */}
      <nav className="fixed top-0 left-0 right-0 z-50 lg:hidden">
        <div className={`bg-white/95 backdrop-blur-xl border-b border-oatmilk-200/50 transition-all duration-300 ${
          scrolled ? 'shadow-xl' : 'shadow-lg'
        }`}>
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between items-center py-4">
              
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-oatmilk-400 to-oatmilk-500 rounded-xl flex items-center justify-center font-bold text-white shadow-lg">
                  CC
                </div>
                <span className="font-bold text-lg text-oatmilk-900">
                  Cristian Contreras
                </span>
              </div>

              {/* Botón hamburguesa moderno */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative w-10 h-10 bg-oatmilk-100 rounded-xl flex items-center justify-center hover:bg-oatmilk-200 transition-all duration-300 shadow-md"
              >
                <div className="w-5 h-5 flex flex-col justify-center items-center">
                  <span className={`w-4 h-0.5 bg-oatmilk-700 transition-all duration-300 ${
                    isOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1'
                  }`}></span>
                  <span className={`w-4 h-0.5 bg-oatmilk-700 transition-all duration-300 ${
                    isOpen ? 'opacity-0' : 'opacity-100'
                  }`}></span>
                  <span className={`w-4 h-0.5 bg-oatmilk-700 transition-all duration-300 ${
                    isOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1'
                  }`}></span>
                </div>
              </button>
            </div>

            {/* Menú móvil desplegable */}
            <div className={`overflow-hidden transition-all duration-300 ${
              isOpen ? 'max-h-96 pb-4' : 'max-h-0'
            }`}>
              <div className="space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                      activeSection === item.id
                        ? 'bg-gradient-to-r from-oatmilk-400 to-oatmilk-500 text-white shadow-lg'
                        : 'text-oatmilk-700 hover:bg-oatmilk-100'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Navbar Tablet - Barra inferior */}
      <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 hidden md:block lg:hidden">
        <div className="bg-white/95 backdrop-blur-xl border border-oatmilk-200/50 rounded-full px-3 py-2 shadow-2xl shadow-oatmilk-400/10">
          <div className="flex items-center space-x-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-2 rounded-full font-medium transition-all duration-300 text-xs ${
                  activeSection === item.id 
                    ? 'bg-gradient-to-r from-oatmilk-400 to-oatmilk-500 text-white shadow-lg' 
                    : 'text-oatmilk-600 hover:text-oatmilk-900 hover:bg-oatmilk-100'
                }`}
                title={item.name}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;