/**
 * Punto de entrada principal de la aplicación React
 * 
 * Este archivo inicializa la aplicación React y la monta en el DOM.
 * Utiliza React 18 con createRoot para el nuevo sistema de renderizado concurrente.
 * 
 * Características:
 * - React.StrictMode para detección de problemas en desarrollo
 * - Importación de estilos globales de Tailwind CSS
 * - Renderizado en el elemento root del HTML
 * 
 * @fileoverview Configuración inicial y renderizado de la aplicación
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Estilos globales de Tailwind CSS y personalizados
import App from './App'; // Componente principal de la aplicación

// Crear root usando la nueva API de React 18 para renderizado concurrente
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderizar la aplicación con StrictMode para mejores prácticas de desarrollo
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);