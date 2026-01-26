import React, { useState } from 'react';
import './css/Contact.css';

/**
 * Contact Section - Profesional ADSO
 * 
 * Identidad mantenida:
 * - Sección sencilla
 * - Iconos o botones claros
 * - Estilo profesional y sobrio
 */
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de envío aquí
    console.log('Form submitted:', formData);
  };

  // Métodos de contacto profesionales
  const contactMethods = [
    {
      icon: "fas fa-envelope",
      label: "Email",
      value: "cristianchaustre90@gmail.com",
      link: "mailto:cristianchaustre90@gmail.com"
    },
    {
      icon: "fab fa-linkedin",
      label: "LinkedIn",
      value: "Cristian Contreras",
      link: "https://www.linkedin.com/in/cristian-contreras-9a4999343"
    },
    {
      icon: "fab fa-github",
      label: "GitHub",
      value: "@chaustrexp",
      link: "https://github.com/chaustrexp"
    }
  ];

  return (
    <section id="contact" className="contact-professional">
      <div className="contact-container">
        <div className="contact-content">
          
          {/* Título profesional */}
          <h2 className="contact-title">Contacto</h2>
          
          {/* Descripción profesional */}
          <p className="contact-description">
            ¿Tienes un proyecto en mente? Me encantaría conocer más sobre tu idea 
            y cómo puedo ayudarte a hacerla realidad.
          </p>

          <div className="contact-layout">
            
            {/* Métodos de contacto */}
            <div className="contact-methods">
              <h3 className="methods-title">Información de contacto</h3>
              
              <div className="methods-list">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-method"
                  >
                    <div className="method-icon">
                      <i className={method.icon}></i>
                    </div>
                    <div className="method-info">
                      <span className="method-label">{method.label}</span>
                      <span className="method-value">{method.value}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Formulario profesional */}
            <div className="contact-form-section">
              <h3 className="form-title">Envíame un mensaje</h3>
              
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Nombre completo</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Tu nombre"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Correo electrónico</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="tu@email.com"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Mensaje</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="form-textarea"
                    placeholder="Cuéntame sobre tu proyecto..."
                    rows="5"
                    required
                  />
                </div>
                
                <button type="submit" className="form-submit">
                  <i className="fas fa-paper-plane"></i>
                  Enviar mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;