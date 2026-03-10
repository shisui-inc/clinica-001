import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Footer.css';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="modern-footer">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="logo-icon">🏥</span>
            <span className="logo-text">{t('clinicName')}</span>
          </div>
          <p className="footer-desc">
            Cuidado médico moderno, empático y de excelencia.
          </p>
        </div>
        
        <div className="footer-links">
          <h4>{t('navServices')}</h4>
          <a href="#services">{t('urgency24h')}</a>
          <a href="#services">{t('lab24h')}</a>
          <a href="#specialties">{t('navSpecialties')}</a>
        </div>

        <div className="footer-links">
          <h4>{t('navContact')}</h4>
          <p>{t('contactPhone')}: (061) 510 248</p>
          <p>+595 972 572 290</p>
          <p>{t('contactEmail')}</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>{t('footerText')}</p>
      </div>
    </footer>
  );
};

export default Footer;
