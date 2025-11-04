import React from 'react';
import Button from './Button';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.3 });
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    window.location.hash = id;
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };
  
  // Use a relative path for the logo to ensure it works correctly in various environments (Vercel, local dev, editor).
  const logoSrc = 'https://cloud.papihairdesign.sk/wp-content/uploads/2025/10/unicorn-logo.png';

  return (
    <section className="text-center py-12 md:py-20" aria-labelledby="hero-heading">
      <div className="flex justify-center mb-8 no-print">
        <div className="animate-float">
           <img src={logoSrc} alt={t('logoAlt')} className="w-56 md:w-80 shadow-2xl" />
        </div>
      </div>
      <div ref={ref} className={`transition-all duration-700 ease-out ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h1 id="hero-heading" className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 tracking-tighter">
          {t('heroTitle')} <span className="text-[var(--c-gold)]">{t('heroTitleSpan')}</span>
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-[var(--c-near-black)] opacity-80 mb-8">
          {t('heroSubtitle')}
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 no-print">
          <Button variant="primary" onClick={() => scrollTo('gametusy-heading')}>
            {t('heroBtnPrimary')}
          </Button>
          <Button variant="secondary" onClick={() => scrollTo('casting-heading')}>
            {t('heroBtnSecondary')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;