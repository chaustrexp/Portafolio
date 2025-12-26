/**
 * Configuración de Tailwind CSS para el portafolio
 * 
 * Este archivo define la configuración personalizada de Tailwind CSS,
 * incluyendo breakpoints, colores, animaciones y utilidades extendidas.
 * 
 * Características principales:
 * - Sistema de colores "oatmilk" personalizado (10 tonos)
 * - Breakpoints responsive incluyendo 'xs' para móviles pequeños
 * - 12 animaciones personalizadas con keyframes
 * - Efectos de sombra y blur personalizados
 * - Fuente Poppins como tipografía principal
 * 
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  // Archivos que Tailwind debe escanear para clases CSS
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    // Breakpoints personalizados para diseño responsive
    screens: {
      'xs': '475px',   // Móviles pequeños
      'sm': '640px',   // Móviles grandes
      'md': '768px',   // Tablets
      'lg': '1024px',  // Laptops
      'xl': '1280px',  // Desktops
      '2xl': '1536px', // Pantallas grandes
    },
    extend: {
      // Sistema de colores personalizado "oatmilk"
      // Paleta de 10 tonos del blanco al negro para máxima flexibilidad
      colors: {
        'oatmilk': {
          50: '#FFFFFF',   // Blanco puro - texto principal
          100: '#F5F5F5',  // Gris muy claro - texto secundario
          200: '#E5E5E5',  // Gris claro - bordes sutiles
          300: '#CCCCCC',  // Gris medio - elementos deshabilitados
          400: '#999999',  // Gris - texto terciario
          500: '#666666',  // Gris oscuro - elementos secundarios
          600: '#333333',  // Gris muy oscuro - cards elevadas
          700: '#1A1A1A',  // Negro grisáceo - cards principales
          800: '#0D0D0D',  // Negro profundo - elementos secundarios
          900: '#000000',  // Negro absoluto - fondo principal
        }
      },
      // Tipografía personalizada
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      // Animaciones personalizadas para efectos visuales avanzados
      animation: {
        'spin-slow': 'spin 3s linear infinite',              // Rotación lenta
        'pulse-scale': 'pulseScale 1.5s ease infinite',     // Pulsación con escala
        'float': 'float 3s ease-in-out infinite',           // Flotación de partículas
        'gradient-shift': 'gradientShift 3s ease infinite', // Desplazamiento de gradiente
        'epic-entrance': 'epicEntrance 1.5s ease forwards', // Entrada épica con blur
        'card-entrance': 'cardEntrance 1.2s ease forwards', // Entrada de tarjetas
        'fade-in-up': 'fadeInUp 1s ease forwards',          // Aparición desde abajo
        'bounce-slow': 'bounceSlow 2s ease-in-out infinite',// Rebote suave
        'spin-slow': 'spin 8s linear infinite',             // Rotación muy lenta para borde
      },
      // Definición de keyframes para las animaciones personalizadas
      keyframes: {
        // Animación de pulsación con cambio de escala
        pulseScale: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
        // Animación de partículas flotantes (loader)
        float: {
          '0%': { transform: 'translateY(100vh) translateX(0)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(-100px) translateX(20px)', opacity: '0' },
        },
        // Animación de desplazamiento de gradiente
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        // Entrada épica con efectos de escala, movimiento y blur
        epicEntrance: {
          '0%': { opacity: '0', transform: 'scale(0.8) translateY(50px)', filter: 'blur(20px)' },
          '50%': { transform: 'scale(1.05) translateY(-10px)', filter: 'blur(5px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)', filter: 'blur(0)' },
        },
        // Entrada suave para tarjetas
        cardEntrance: {
          '0%': { opacity: '0', transform: 'scale(0.9) translateY(50px)', filter: 'blur(10px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)', filter: 'blur(0)' },
        },
        // Aparición desde abajo
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        // Rebote suave y continuo
        bounceSlow: {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-10px)' },
          '60%': { transform: 'translateY(-5px)' },
        },
      },
      // Efectos de blur personalizados
      backdropBlur: {
        'xs': '2px',
      },
      // Sombras personalizadas para efectos visuales
      boxShadow: {
        'epic': '0 15px 50px rgba(0, 0, 0, 0.3), 0 0 30px rgba(0, 0, 0, 0.2)', // Sombra épica
        'card': '0 8px 25px rgba(0, 0, 0, 0.2), 0 0 15px rgba(0, 0, 0, 0.1)',   // Sombra de tarjeta
        'glow': '0 0 20px rgba(255, 255, 255, 0.05)',                           // Efecto de brillo
      }
    },
  },
  plugins: [], // Sin plugins adicionales por ahora
}