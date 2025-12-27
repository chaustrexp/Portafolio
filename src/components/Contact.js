import React, { useState } from 'react';

/**
 * Componente Contact - Sección de contacto del portafolio
 * 
 * Proporciona un formulario funcional de contacto y enlaces a redes sociales
 * con un diseño moderno y elegante.
 * 
 * @component
 * @returns {JSX.Element} Sección de contacto mejorada
 */
const Contact = () => {
  // Estado para manejar los datos del formulario de contacto
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });
  
  // Estado para controlar el indicador de envío del formulario
  const [isSubmitting, setIsSubmitting] = useState(false);

  /**
   * Maneja los cambios en los campos del formulario
   */
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  /**
   * Maneja el envío del formulario de contacto
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validación básica de campos requeridos
    if (!formData.nombre.trim() || !formData.email.trim() || !formData.mensaje.trim()) {
      alert('Por favor, completa todos los campos del formulario.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Envío de datos a Formspree para procesamiento del email
      const response = await fetch('https://formspree.io/f/mdkpqgob', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('¡Gracias por tu mensaje! Te contactaré pronto.');
        // Limpiar formulario después del envío exitoso
        setFormData({ nombre: '', email: '', mensaje: '' });
      } else {
        throw new Error('Error al enviar el mensaje');
      }
    } catch (error) {
      alert('Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo.');
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/cristian-contreras-9a4999343',
      icon: '💼',
      color: 'from-oatmilk-400 to-oatmilk-500',
      description: 'Conectemos profesionalmente'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/chaustrexp',
      icon: '💻',
      color: 'from-oatmilk-500 to-oatmilk-600',
      description: 'Revisa mis repositorios'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/_cristiqqn?igsh=eDFzcTdrY21kamx4',
      icon: '📸',
      color: 'from-oatmilk-300 to-oatmilk-400',
      description: 'Sígueme en Instagram'
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/qr/Z3ZM26CNMCFOC1',
      icon: '💬',
      color: 'from-oatmilk-600 to-oatmilk-700',
      description: 'Conversemos directamente'
    }
  ];

  return (
    // Sección principal con fondo moderno
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-oatmilk-50 relative overflow-hidden">
      {/* Efectos de fondo sutiles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-oatmilk-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-oatmilk-300/15 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header de la sección */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-oatmilk-900">
            Hablemos
          </h2>
          <p className="text-oatmilk-600 text-lg max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Me encantaría escuchar tus ideas y colaborar contigo
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Formulario de contacto mejorado */}
          <div className="order-2 lg:order-1">
            <div className="bg-white/90 backdrop-blur-sm border border-oatmilk-200/50 p-8 rounded-3xl shadow-2xl shadow-oatmilk-400/10 hover:shadow-oatmilk-400/20 transition-all duration-300">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-oatmilk-900 mb-2">
                  Envíame un mensaje
                </h3>
                <p className="text-oatmilk-600">
                  Completa el formulario y te responderé lo antes posible
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="group">
                  <label htmlFor="nombre" className="block text-oatmilk-800 font-semibold mb-2 group-focus-within:text-oatmilk-900 transition-colors duration-300">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 border-2 border-oatmilk-200 rounded-2xl bg-white/80 text-oatmilk-900 transition-all duration-300 focus:outline-none focus:border-oatmilk-500 focus:bg-white focus:shadow-lg focus:-translate-y-1 placeholder-oatmilk-400"
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div className="group">
                  <label htmlFor="email" className="block text-oatmilk-800 font-semibold mb-2 group-focus-within:text-oatmilk-900 transition-colors duration-300">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 border-2 border-oatmilk-200 rounded-2xl bg-white/80 text-oatmilk-900 transition-all duration-300 focus:outline-none focus:border-oatmilk-500 focus:bg-white focus:shadow-lg focus:-translate-y-1 placeholder-oatmilk-400"
                    placeholder="tu@email.com"
                  />
                </div>

                <div className="group">
                  <label htmlFor="mensaje" className="block text-oatmilk-800 font-semibold mb-2 group-focus-within:text-oatmilk-900 transition-colors duration-300">
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    rows="6"
                    required
                    className="w-full px-4 py-4 border-2 border-oatmilk-200 rounded-2xl bg-white/80 text-oatmilk-900 transition-all duration-300 focus:outline-none focus:border-oatmilk-500 focus:bg-white focus:shadow-lg focus:-translate-y-1 resize-none placeholder-oatmilk-400"
                    placeholder="Cuéntame sobre tu proyecto o idea..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-oatmilk-500 to-oatmilk-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-oatmilk-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <span>Enviar mensaje</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Información de contacto y redes sociales */}
          <div className="order-1 lg:order-2 space-y-8">
            {/* Información personal */}
            <div className="bg-white/90 backdrop-blur-sm border border-oatmilk-200/50 p-8 rounded-3xl shadow-2xl shadow-oatmilk-400/10">
              <div className="text-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-oatmilk-400 to-oatmilk-500 rounded-full flex items-center justify-center text-4xl mx-auto mb-4 shadow-lg">
                  👋
                </div>
                <h3 className="text-2xl font-bold text-oatmilk-900 mb-2">
                  Cristian Contreras
                </h3>
                <p className="text-oatmilk-600">
                  Desarrollador Full-Stack
                </p>
              </div>

              <div className="space-y-4 text-center">
                <div className="flex items-center justify-center gap-3 text-oatmilk-700">
                  <span className="text-xl">📍</span>
                  <span>Cúcuta, Colombia</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-oatmilk-700">
                  <span className="text-xl">⚡</span>
                  <span>Disponible para proyectos</span>
                </div>
              </div>
            </div>

            {/* Redes sociales mejoradas */}
            <div className="bg-white/90 backdrop-blur-sm border border-oatmilk-200/50 p-8 rounded-3xl shadow-2xl shadow-oatmilk-400/10">
              <h3 className="text-2xl font-bold text-oatmilk-900 mb-6 text-center">
                Sígueme en redes
              </h3>
              
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r ${social.color} text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-105`}
                  >
                    <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold">{social.name}</div>
                      <div className="text-sm opacity-90">{social.description}</div>
                    </div>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Información adicional */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-oatmilk-200/50">
            <span className="text-oatmilk-700 text-sm font-medium">
              📧 Respuesta garantizada en 24 horas
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;