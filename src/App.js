import React, { useState, useEffect } from 'react';
// Importación de todos los componentes del portafolio
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Hobbies from './components/Hobbies';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

/**
 * Componente principal de la aplicación - App
 * 
 * Este es el componente raíz que orquesta toda la aplicación del portafolio.
 * Maneja el estado de carga inicial y renderiza todos los componentes en orden.
 * 
 * Características:
 * - Pantalla de carga inicial con temporizador
 * - Renderizado condicional basado en el estado de carga
 * - Estructura de página única (SPA) con todas las secciones
 * - Orden lógico de componentes para una experiencia de usuario fluida
 * 
 * @component
 * @returns {JSX.Element} Aplicación completa del portafolio
 */
function App() {
  // Estado para controlar si la aplicación está en proceso de carga inicial
  const [loading, setLoading] = useState(true);

  // Efecto para simular tiempo de carga y mostrar el loader épico
  useEffect(() => {
    // Temporizador que simula la carga de recursos y datos
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // 2.5 segundos de pantalla de carga

    // Cleanup function para limpiar el temporizador si el componente se desmonta
    return () => clearTimeout(timer);
  }, []); // Array de dependencias vacío = solo se ejecuta una vez al montar

  // Renderizado condicional: muestra loader o contenido principal
  if (loading) {
    return <Loader />;
  }

  // Renderizado del contenido principal del portafolio
  return (
    <div className="App">
      {/* Barra de navegación fija en la parte superior */}
      <Navbar />
      
      {/* Sección principal de presentación personal */}
      <Hero />
      
      {/* Sección de experiencia laboral y formación */}
      <Experience />
      
      {/* Sección de habilidades técnicas y profesionales */}
      <Skills />
      
      {/* Sección de certificados y logros académicos */}
      <Certificates />
      
      {/* Sección de hobbies e intereses personales */}
      <Hobbies />
      
      {/* Sección de proyectos destacados */}
      <Projects />
      
      {/* Sección de contacto con formulario y redes sociales */}
      <Contact />
      
      {/* Pie de página con información de copyright */}
      <Footer />
    </div>
  );
}

export default App;