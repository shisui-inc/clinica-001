import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, Activity, ShieldPlus } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        
        <div className="hero-content animate-fade-in">
          <div className="hero-badge">
            <ShieldPlus size={16} />
            <span>Sanatorio Premium</span>
          </div>
          <h1 className="hero-title">
            {t('heroTitle').split(',').map((part, i) => (
              <React.Fragment key={i}>
                {part}{i === 0 ? ',' : ''}
                {i === 0 && <br />}
              </React.Fragment>
            ))}
          </h1>
          <p className="hero-subtitle">
            {t('heroSubtitle')}
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn-primary large">
              {t('ctaContact')}
            </a>
            <a href="#services" className="btn-secondary large">
              {t('ctaServices')}
              <ArrowRight size={18} />
            </a>
          </div>
        </div>

        <div className="hero-visual animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="glass-card hero-highlight-card">
            <div className="highlight-icon">
              <Activity size={32} color="var(--color-primary)" />
            </div>
            <div className="highlight-text">
              <h3>{t('urgency24h')}</h3>
              <p>Atención inmediata, en cualquier momento.</p>
            </div>
            <div className="pulse-dot"></div>
          </div>

          <img src="/edificio.png" alt="Edificio de la clínica" className="hero-image glass-panel" />
        </div>

      </div>
    </section>
  );
};

export default Hero;
