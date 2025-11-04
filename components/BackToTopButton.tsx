import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`no-print fixed bottom-6 right-6 z-50 p-3 border-2 border-[var(--c-near-black)]
                  bg-[var(--c-gold)] text-[var(--c-near-black)] 
                  transition-all duration-300 ease-in-out
                  focus:outline-none focus:ring-4 focus:ring-[var(--c-gold)]/50
                  transform hover:-translate-y-1 hover:-translate-x-1
                  shadow-[3px_3px_0px_var(--c-near-black)]
                  hover:shadow-[7px_7px_0px_var(--c-charcoal)]
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
      aria-label={t('backToTop')}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
};

export default BackToTopButton;