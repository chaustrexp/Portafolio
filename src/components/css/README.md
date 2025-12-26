# 🎨 Componentes CSS

Esta carpeta contiene todos los estilos CSS modulares para cada componente React del portafolio.

## 📁 Estructura

```
css/
├── index.css              # Archivo principal que importa todos los estilos
├── Loader.css            # Estilos para el componente Loader
├── Navbar.css            # Estilos para el componente Navbar
├── Hero.css              # Estilos para el componente Hero
├── Experience.css        # Estilos para el componente Experience
├── Skills.css            # Estilos para el componente Skills
├── Certificates.css      # Estilos para el componente Certificates
├── Hobbies.css          # Estilos para el componente Hobbies
├── Projects.css         # Estilos para el componente Projects
├── Contact.css          # Estilos para el componente Contact
├── Footer.css           # Estilos para el componente Footer
└── README.md            # Este archivo
```

## 🚀 Uso

### Importar todos los estilos
```css
/* En tu archivo CSS principal */
@import './components/css/index.css';
```

### Importar estilos específicos
```css
/* Solo un componente específico */
@import './components/css/Navbar.css';
@import './components/css/Hero.css';
```

### En componentes React
```jsx
// Opción 1: Importar CSS específico
import './css/Navbar.css';

// Opción 2: Usar clases CSS
<nav className="navbar-container">
  <div className="navbar-content">
    {/* contenido */}
  </div>
</nav>
```

## 🎨 Paleta de Colores

Todos los componentes utilizan la paleta **Oatmilk Foam**:

```css
:root {
  --oatmilk-50: #FBFAF8;   /* Más claro */
  --oatmilk-100: #F8F4EF;  /* Principal */
  --oatmilk-200: #F5F0E8;  /* Secundario */
  --oatmilk-300: #F2E8DB;
  --oatmilk-400: #F0E6D9;  /* Acento */
  --oatmilk-500: #EDE3D6;
  --oatmilk-600: #E8DDD0;
  --oatmilk-700: #7A7673;  /* Texto terciario */
  --oatmilk-800: #5A5755;  /* Texto secundario */
  --oatmilk-900: #3D3A39;  /* Texto principal */
}
```

## 📐 Variables CSS

### Espaciado
```css
--spacing-xs: 0.5rem;    /* 8px */
--spacing-sm: 1rem;      /* 16px */
--spacing-md: 1.5rem;    /* 24px */
--spacing-lg: 2rem;      /* 32px */
--spacing-xl: 3rem;      /* 48px */
--spacing-2xl: 4rem;     /* 64px */
--spacing-3xl: 5rem;     /* 80px */
```

### Bordes
```css
--border-radius-sm: 8px;
--border-radius-md: 12px;
--border-radius-lg: 20px;
--border-radius-xl: 24px;
--border-radius-2xl: 30px;
```

### Sombras
```css
--shadow-sm: 0 2px 8px rgba(61, 58, 57, 0.1);
--shadow-md: 0 4px 16px rgba(61, 58, 57, 0.15);
--shadow-lg: 0 8px 32px rgba(61, 58, 57, 0.2);
--shadow-xl: 0 12px 48px rgba(61, 58, 57, 0.25);
--shadow-epic: 0 20px 80px rgba(38, 36, 36, 0.15);
```

### Transiciones
```css
--transition-fast: all 0.2s ease;
--transition-normal: all 0.3s ease;
--transition-slow: all 0.5s ease;
--transition-epic: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
```

## 🎭 Clases Utilitarias

### Animaciones
```css
.animate-fade-in          /* Aparición suave */
.animate-fade-in-up       /* Aparición desde abajo */
.animate-fade-in-down     /* Aparición desde arriba */
.animate-fade-in-left     /* Aparición desde izquierda */
.animate-fade-in-right    /* Aparición desde derecha */
.animate-scale-in         /* Aparición con escala */
```

### Delays
```css
.animate-delay-100        /* 0.1s */
.animate-delay-200        /* 0.2s */
.animate-delay-300        /* 0.3s */
/* ... hasta 1000ms */
```

### Componentes Base
```css
.component-container      /* Contenedor principal */
.component-card          /* Tarjeta base */
.component-section-title /* Título de sección */
.component-btn           /* Botón base */
.component-btn-primary   /* Botón primario */
.component-btn-secondary /* Botón secundario */
```

### Grids
```css
.component-grid          /* Grid base */
.component-grid-1        /* 1 columna */
.component-grid-2        /* 2 columnas */
.component-grid-3        /* 3 columnas */
.component-grid-4        /* 4 columnas */
.component-grid-auto     /* Auto-fit responsive */
```

### Efectos
```css
.component-glow          /* Efecto de brillo */
.component-particles     /* Efecto de partículas */
```

## 📱 Responsive Design

Todos los componentes incluyen breakpoints:

```css
/* Desktop first approach */
@media (max-width: 1200px) { /* Large tablets */ }
@media (max-width: 968px)  { /* Tablets */ }
@media (max-width: 768px)  { /* Small tablets */ }
@media (max-width: 640px)  { /* Large phones */ }
@media (max-width: 480px)  { /* Phones */ }
@media (max-width: 360px)  { /* Small phones */ }
```

## ✨ Características Especiales

### 1. **Animaciones Épicas**
- Loader con partículas flotantes
- Transiciones suaves con cubic-bezier
- Efectos de hover avanzados

### 2. **Efectos Visuales**
- Gradientes animados
- Sombras dinámicas
- Efectos de brillo y partículas

### 3. **Accesibilidad**
- Estados de focus visibles
- Soporte para `prefers-reduced-motion`
- Alto contraste para `prefers-contrast: high`

### 4. **Performance**
- CSS optimizado
- Transiciones hardware-accelerated
- Lazy loading de efectos

## 🔧 Personalización

### Cambiar Colores
```css
/* Sobrescribir variables */
:root {
  --oatmilk-100: #TU_COLOR;
  --oatmilk-400: #TU_ACENTO;
}
```

### Agregar Nuevas Animaciones
```css
@keyframes miAnimacion {
  0% { /* estado inicial */ }
  100% { /* estado final */ }
}

.mi-clase {
  animation: miAnimacion 1s ease;
}
```

### Crear Nuevos Componentes
```css
/* NuevoComponente.css */
.nuevo-componente {
  /* Usar variables existentes */
  background: var(--oatmilk-100);
  padding: var(--spacing-lg);
  border-radius: var(--border-radius-xl);
  box-shadow: var(--shadow-md);
  transition: var(--transition-epic);
}
```

## 🚀 Mejores Prácticas

1. **Usa variables CSS** para consistencia
2. **Prefija clases** con el nombre del componente
3. **Incluye estados hover/focus** para interactividad
4. **Añade responsive design** desde el inicio
5. **Optimiza animaciones** para performance
6. **Considera accesibilidad** en todos los estilos

## 📊 Compatibilidad

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers

## 🔄 Integración con Tailwind

Estos estilos CSS **complementan** Tailwind CSS:

- **Tailwind**: Para utilidades rápidas y layout
- **CSS Modules**: Para estilos específicos de componentes
- **Variables CSS**: Para consistencia y theming

```jsx
// Ejemplo de uso combinado
<div className="flex items-center justify-center navbar-container">
  <nav className="w-full max-w-6xl navbar-content">
    {/* Tailwind + CSS personalizado */}
  </nav>
</div>
```

---

**¡Disfruta creando interfaces hermosas con estos estilos! 🎨✨**