import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container glass-card">
        
        <div className="contact-info">
          <h2>{t('sectionContact')}</h2>
          <p className="contact-subtitle">
            Estamos aquí para atenderle. Contáctenos para agendar una cita o ante cualquier consulta.
          </p>

          <div className="info-list">
            <div className="info-item">
              <div className="info-icon"><MapPin size={24} /></div>
              <div className="info-content">
                <h3>Dirección</h3>
                <p>{t('contactAddress')}</p>
                <a href="#" className="link-action">Ver en Mapa</a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon"><Phone size={24} /></div>
              <div className="info-content">
                <h3>{t('contactPhone')}</h3>
                <p>(061) 510 248</p>
                <p>+595 972 572 290</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon"><Clock size={24} /></div>
              <div className="info-content">
                <h3>Horarios de Atención</h3>
                <p><strong>Urgencias:</strong> 24 horas</p>
                <p><strong>Especialidades:</strong> Consultar disponibilidad</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon"><Mail size={24} /></div>
              <div className="info-content">
                <h3>Email y Redes</h3>
                <p>{t('contactEmail')}: info@clinicamedicacde.com</p>
                <div className="social-links">
                  <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
                  <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <div className="glass-panel form-panel">
            <h3>Envíenos un mensaje</h3>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="name">Nombre Completo</label>
                <input type="text" id="name" placeholder="Ej. Juan Pérez" />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Teléfono</label>
                <input type="tel" id="phone" placeholder="Ej. +595 9..." />
              </div>
              <div className="form-group">
                <label htmlFor="message">Mensaje o Consulta</label>
                <textarea id="message" rows="4" placeholder="¿En qué podemos ayudarle?"></textarea>
              </div>
              <button type="submit" className="btn-primary w-full">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
