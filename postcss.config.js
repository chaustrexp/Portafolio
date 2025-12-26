/**
 * Configuración de PostCSS para el procesamiento de CSS
 * 
 * PostCSS es una herramienta para transformar CSS con plugins de JavaScript.
 * Esta configuración integra Tailwind CSS y Autoprefixer para optimizar
 * el CSS del proyecto.
 * 
 * Plugins incluidos:
 * - tailwindcss: Procesa las utilidades y componentes de Tailwind CSS
 * - autoprefixer: Añade prefijos de navegador automáticamente para compatibilidad
 * 
 * @fileoverview Configuración de PostCSS para procesamiento de estilos
 */
module.exports = {
  plugins: {
    tailwindcss: {},    // Plugin de Tailwind CSS para generar utilidades
    autoprefixer: {},   // Plugin para añadir prefijos de navegador automáticamente
  },
}