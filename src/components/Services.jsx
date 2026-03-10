import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Clock, TestTube, HeartPulse, Stethoscope, Baby, Activity, ScanLine, Brain } from 'lucide-react';
import './Services.css';

const Services = () => {
  const { t } = useLanguage();

  const services24h = [
    { id: 'urgencias', name: t('urgency24h'), icon: <HeartPulse size={24} /> },
    { id: 'laboratorio', name: t('lab24h'), icon: <TestTube size={24} /> },
    { id: 'ecografias', name: 'Ecografías', icon: <ScanLine size={24} /> },
    { id: 'radiografia', name: 'Radiografía', icon: <ScanLine size={24} /> },
    { id: 'tomografia', name: 'Tomografía', icon: <ScanLine size={24} /> },
    { id: 'ecg', name: 'Electrocardiograma', icon: <Activity size={24} /> }
  ];

  const specialties = [
    { name: 'Clínica General', icon: <Stethoscope size={24} /> },
    { name: 'Pediatría', icon: <Baby size={24} /> },
    { name: 'Gineco-obstetricia', icon: <Activity size={24} /> },
    { name: 'Cardiología', icon: <HeartPulse size={24} /> },
    { name: 'Traumatología', icon: <Activity size={24} /> },
    { name: 'Gastroenterología', icon: <Activity size={24} /> },
    { name: 'Cirugía General', icon: <Activity size={24} /> },
    { name: 'Cirugía Laparoscópica', icon: <Activity size={24} /> },
    { name: 'Neumología Adultos', icon: <Activity size={24} /> },
    { name: 'Neumología Pediátrica', icon: <Baby size={24} /> },
    { name: 'Mastología', icon: <Activity size={24} /> },
    { name: 'Urología', icon: <Activity size={24} /> },
    { name: 'Nutrición', icon: <Activity size={24} /> },
    { name: 'Cirujano Infantil', icon: <Baby size={24} /> },
    { name: 'Cirujano Maxilofacial', icon: <Activity size={24} /> },
    { name: 'Cirujano Plástico', icon: <Activity size={24} /> },
    { name: 'Nefrología Infantil', icon: <Baby size={24} /> },
    { name: 'Neurología', icon: <Brain size={24} /> },
    { name: 'Fonoaudiología', icon: <Activity size={24} /> },
    { name: 'Psicología', icon: <Brain size={24} /> }
  ];

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        
        <div className="section-header text-center">
          <h2 className="section-title">{t('sectionServices')}</h2>
          <p className="section-subtitle">Atención continua con equipos de última generación.</p>
        </div>

        <div className="services-grid">
          {services24h.map((service) => (
            <div key={service.id} className="glass-card service-card">
              <div className="service-icon red-glow">
                {service.icon}
              </div>
              <h3>{service.name}</h3>
              <p>Disponible 24 horas</p>
            </div>
          ))}
        </div>

        <div className="section-header text-center" style={{ marginTop: '5rem' }}>
          <h2 className="section-title">{t('sectionSpecialties')}</h2>
          <p className="section-subtitle">Un equipo de especialistas dedicados a su bienestar.</p>
        </div>

        <div className="specialties-grid">
          {specialties.map((specialty, index) => (
            <div key={index} className="specialty-pill glass-panel">
              <span className="pill-icon">{specialty.icon}</span>
              <span className="pill-text">{specialty.name}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
