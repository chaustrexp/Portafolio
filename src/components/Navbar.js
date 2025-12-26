import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      scrolled ? 'shadow-2xl' : 'shadow-lg'
    }`}>
      <div className="bg-oatmilk-100/95 backdrop-blur-xl border-b-2 border-oatmilk-900/20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo y marca */}
            <div className="flex items-center space-x-3 cursor-pointer hover:translate-x-1 transition-transform duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-oatmilk-100 to-oatmilk-200 rounded-xl flex items-center justify-center font-bold text-xl text-oatmilk-900 shadow-lg hover:rotate-6 hover:scale-105 transition-all duration-300">
                CC
              </div>
              <span className="font-semibold text-lg text-oatmilk-900 tracking-wide">
                Cristian Contreras
              </span>
            </div>

            {/* Menú desktop */}
            <ul className="hidden md:flex space-x-1">
              {[
                { name: 'Inicio', id: 'hero' },
                { name: 'Experiencia', id: 'experience' },
                { name: 'Habilidades', id: 'skills' },
                { name: 'Certificados', id: 'certificates' },
                { name: 'Hobbies', id: 'hobbies' },
                { name: 'Proyectos', id: 'projects' },
                { name: 'Contacto', id: 'contact' }
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-oatmilk-900 font-medium px-4 py-2 rounded-lg transition-all duration-300 hover:bg-oatmilk-200/50 hover:text-oatmilk-900 relative group"
                  >
                    {item.name}
                    <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-oatmilk-400 to-oatmilk-500 transition-all duration-300 group-hover:w-full"></span>
                  </button>
                </li>
              ))}
            </ul>

            {/* Botón hamburguesa */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden flex flex-col space-y-1 p-2 border-2 border-black/30 rounded-lg hover:bg-black/10 hover:border-black transition-all duration-300"
            >
              <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </button>
          </div>

          {/* Menú móvil */}
          <div className={`md:hidden transition-all duration-300 overflow-hidden ${
            isOpen ? 'max-h-96 pb-4' : 'max-h-0'
          }`}>
            <ul className="space-y-2">
              {[
                { name: 'Inicio', id: 'hero' },
                { name: 'Experiencia', id: 'experience' },
                { name: 'Habilidades', id: 'skills' },
                { name: 'Certificados', id: 'certificates' },
                { name: 'Hobbies', id: 'hobbies' },
                { name: 'Proyectos', id: 'projects' },
                { name: 'Contacto', id: 'contact' }
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="w-full text-left text-oatmilk-900 font-medium px-4 py-3 rounded-lg transition-all duration-300 hover:bg-oatmilk-200/50 hover:pl-6 border-b border-oatmilk-900/10"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;