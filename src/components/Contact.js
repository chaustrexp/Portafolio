import React, { useState } from 'react';

/**
 * Componente Contact - Sección de contacto del portafolio
 * 
 * Proporciona un formulario funcional de contacto y enlaces a redes sociales.
 * Incluye validación de formulario, integración con Formspree para envío de emails,
 * y una interfaz de usuario moderna con efectos visuales.
 * 
 * Características:
 * - Formulario de contacto con validación
 * - Integración con Formspree para envío de emails
 * - Enlaces a redes sociales con gradientes personalizados
 * - Diseño responsive con efectos hover
 * - Manejo de estados de carga y error
 * 
 * @component
 * @returns {JSX.Element} Sección de contacto con formulario y redes sociales
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
   * Actualiza el estado formData cuando el usuario escribe en los inputs
   * 
   * @param {Event} e - Evento del input que cambió
   */
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  /**
   * Maneja el envío del formulario de contacto
   * Valida los campos, envía los datos a Formspree y maneja la respuesta
   * 
   * @param {Event} e - Evento de submit del formulario
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
      className: 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/chaustrexp',
      className: 'bg-gradient-to-r from-gray-800 to-black hover:from-black hover:to-gray-900'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/_cristiqqn?igsh=eDFzcTdrY21kamx4',
      className: 'bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:from-pink-600 hover:via-red-600 hover:to-yellow-600'
    },
    {
      name: 'Discord',
      url: 'https://discordapp.com/users/764648979648479233',
      className: 'bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700'
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/qr/Z3ZM26CNMCFOC1',
      className: 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700'
    }
  ];

  return (
    // Sección principal con fondo claro
    <section id="contact" className="py-20 bg-gradient-to-b from-oatmilk-100 to-oatmilk-200">
      <div className="max-w-6xl mx-auto px-4">
        {/* Título de la sección usando clase CSS personalizada */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-oatmilk-900 to-oatmilk-700 bg-clip-text text-transparent">
          Contacto
        </h2>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Formulario de contacto */}
          <div className="lg:col-span-2">
            <div className="bg-white/80 backdrop-blur-sm border border-oatmilk-300/30 p-8 rounded-2xl shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="nombre" className="block text-black font-semibold mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-oatmilk-900/20 rounded-xl bg-white/80 text-oatmilk-900 font-poppins transition-all duration-300 focus:outline-none focus:border-oatmilk-900 focus:bg-white/95 focus:shadow-lg focus:-translate-y-1 backdrop-blur-sm"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-black font-semibold mb-2">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-oatmilk-900/20 rounded-xl bg-white/80 text-oatmilk-900 font-poppins transition-all duration-300 focus:outline-none focus:border-oatmilk-900 focus:bg-white/95 focus:shadow-lg focus:-translate-y-1 backdrop-blur-sm"
                  />
                </div>

                <div>
                  <label htmlFor="mensaje" className="block text-black font-semibold mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    rows="5"
                    required
                    className="w-full px-4 py-3 border-2 border-oatmilk-900/20 rounded-xl bg-white/80 text-oatmilk-900 font-poppins transition-all duration-300 focus:outline-none focus:border-oatmilk-900 focus:bg-white/95 focus:shadow-lg focus:-translate-y-1 backdrop-blur-sm resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-oatmilk-400 to-oatmilk-500 text-oatmilk-900 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-oatmilk-400/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                </button>
              </form>
            </div>
          </div>

          {/* Enlaces sociales */}
          <div className="lg:col-span-1">
            <div className="bg-white/80 backdrop-blur-sm border border-oatmilk-300/30 p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-black mb-8 text-center">
                Conéctate conmigo
              </h3>
              
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center py-4 px-6 rounded-xl text-white font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-105 relative overflow-hidden group ${social.className}`}
                  >
                    <span className="relative z-10">{social.name}</span>
                    <div className="absolute inset-0 bg-gradient-radial from-white/20 to-transparent scale-0 group-hover:scale-100 transition-transform duration-600 rounded-full"></div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;