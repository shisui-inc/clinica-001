import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe, Menu, X, Phone } from 'lucide-react';
import './Header.css';

const Header = () => {
  const { t, language, toggleLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`modern-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo-section">
          <div className="logo-placeholder">
            <span className="logo-icon">🏥</span>
            <span className="logo-text">{t('clinicName')}</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <a href="#home" className="nav-link">{t('navHome')}</a>
          <a href="#services" className="nav-link">{t('navServices')}</a>
          <a href="#contact" className="nav-link">{t('navContact')}</a>
        </nav>

        <div className="header-actions">
          <button className="lang-toggle" onClick={toggleLanguage} title={`Cambiar a ${language === 'es' ? 'Português' : 'Español'}`}>
            <Globe size={18} />
            <span className="lang-text">{language === 'es' ? 'PT' : 'ES'}</span>
          </button>
          
          <a href="tel:061510248" className="btn-primary desktop-only">
            <Phone size={16} />
            <span>{t('ctaContact')}</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
        <a href="#home" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>{t('navHome')}</a>
        <a href="#services" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>{t('navServices')}</a>
        <a href="#contact" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>{t('navContact')}</a>
        <a href="tel:061510248" className="btn-primary mobile-cta">
          <Phone size={16} />
          <span>{t('ctaContact')}</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
