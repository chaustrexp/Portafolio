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
      // Sistema de colores "Elegant" - Paleta profesional de Cristian Contreras
      // Paleta principal - Grises profesionales y elegantes
      colors: {
        'elegant': {
          50: '#FFFFFF',   // Blanco Puro - Fondos principales
          100: '#F5F5F5',  // Gris muy claro - Fondos secundarios
          200: '#E0E0E0',  // Gris claro intermedio - Bordes suaves
          300: '#C0C0C0',  // Gris Claro - Elementos deshabilitados
          400: '#A0A0A0',  // Gris intermedio - Texto secundario
          500: '#8C8C8C',  // Gris Medio - Iconos y detalles
          600: '#707070',  // Gris medio-oscuro - Texto principal
          700: '#424242',  // Gris Carbón - Títulos importantes
          800: '#2A2A2A',  // Gris muy oscuro - Texto destacado
          900: '#000000',  // Negro Intenso - Máximo contraste
        },
        // Paleta secundaria - Azules Slate para acentos
        'primary': {
          50: '#f8fafc',   // Fondos muy claros
          100: '#f1f5f9',  // Fondos claros
          200: '#e2e8f0',  // Bordes suaves
          300: '#cbd5e1',  // Elementos deshabilitados
          400: '#94a3b8',  // Texto secundario
          500: '#64748b',  // Color base
          600: '#475569',  // Hover states
          700: '#334155',  // Elementos activos
          800: '#1e293b',  // Texto oscuro
          900: '#0f172a',  // Máximo contraste
        },
        // Colores de apoyo
        'secondary': {
          500: '#6b7280', // Texto neutro
          600: '#4b5563', // Texto más oscuro
        },
        'accent': {
          500: '#374151', // Acentos especiales
        }
      },
      // Tipografía profesional
      fontFamily: {
        'inter': ['Inter', 'system-ui', 'sans-serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
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