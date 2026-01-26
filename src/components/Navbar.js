import React, { useState, useEffect } from 'react';
import './css/Navbar.css';

/**
 * Navbar - Diseño Profesional ADSO con Theme Toggle
 * 
 * Identidad mantenida:
 * - Color principal: #2563eb (azul)
 * - Tipografía: Inter
 * - Estilo limpio y profesional
 * - Soporte para tema oscuro
 */
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    // Verificar tema guardado en localStorage
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkTheme(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Detectar sección activa
      const sections = ['hero', 'about', 'skills', 'projects', 'hobbies', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
    
    if (newTheme) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  // Navegación profesional
  const navItems = [
    { id: 'hero', label: 'Inicio' },
    { id: 'about', label: 'Sobre mí' },
    { id: 'skills', label: 'Habilidades' },
    { id: 'projects', label: 'Proyectos' },
    { id: 'hobbies', label: 'Pasatiempos' },
    { id: 'contact', label: 'Contacto' }
  ];

  return (
    <>
      <nav className={`navbar-professional ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          
          {/* Brand profesional con foto de perfil */}
          <div className="navbar-brand" onClick={() => scrollToSection('hero')}>
            <div className="brand-avatar">
              <img 
                src="/img/foto de perfil mientras.jpg" 
                alt="Cristian Contreras"
                className="brand-avatar-image"
              />
            </div>
            <div className="brand-info">
              <span className="brand-name">Cristian Contreras</span>
              <span className="brand-title">ADSO Developer</span>
            </div>
          </div>

          {/* Navegación desktop */}
          <div className="navbar-nav">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </button>
            ))}
            
            {/* Theme Toggle */}
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={isDarkTheme ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'}
              title={isDarkTheme ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'}
            >
              {isDarkTheme ? '☀️' : '🌙'}
            </button>
          </div>

          {/* Botón móvil */}
          <button
            className={`mobile-toggle ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Menú móvil */}
        <div className={`mobile-nav ${isMobileMenuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </button>
          ))}
          
          {/* Theme Toggle Mobile */}
          <button
            className="mobile-theme-toggle"
            onClick={toggleTheme}
            aria-label={isDarkTheme ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'}
          >
            {isDarkTheme ? '☀️ Tema Claro' : '🌙 Tema Oscuro'}
          </button>
        </div>
      </nav>

      {/* Overlay móvil */}
      {isMobileMenuOpen && (
        <div 
          className="mobile-overlay"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;