import React, { useState, useEffect } from 'react';
// Importación de componentes principales del portafolio
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';
import Footer from './components/Footer';

/**
 * Componente principal de la aplicación - App
 * 
 * Estructura profesional del portafolio ADSO:
 * Hero → About → Skills → Projects → Hobbies → Contact
 * 
 * Enfoque profesional con secciones esenciales
 * para una experiencia de usuario completa y personal.
 * 
 * @component
 * @returns {JSX.Element} Aplicación completa del portafolio
 */
function App() {
  // Estado para controlar la carga inicial
  const [loading, setLoading] = useState(true);

  // Efecto para simular tiempo de carga
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  // Renderizado condicional: loader o contenido principal
  if (loading) {
    return <Loader />;
  }

  // Estructura profesional del portafolio
  return (
    <div className="App">
      {/* Navegación */}
      <Navbar />
      
      {/* Sección principal de presentación */}
      <Hero />
      
      {/* Sección sobre mí (breve y personal) */}
      <About />
      
      {/* Habilidades técnicas organizadas */}
      <Skills />
      
      {/* Proyectos destacados (máximo 3) */}
      <Projects />
      
      {/* Intereses y pasatiempos personales */}
      <Hobbies />
      
      {/* Contacto profesional */}
      <Contact />
      
      {/* Pie de página */}
      <Footer />
    </div>
  );
}

export default App;