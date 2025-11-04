import React, { useState, useEffect, useMemo } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import ThemeSwitcher from './ThemeSwitcher';

const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isClearingCache, setIsClearingCache] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'sk' ? 'en' : 'sk');
  };
  
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();
    window.location.hash = id;
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      e.preventDefault();

      if (!('serviceWorker' in navigator) || !navigator.serviceWorker.controller) {
          window.location.reload();
          return;
      }
      
      setIsClearingCache(true);
      
      const messageChannel = new MessageChannel();
      
      // Add a timeout to prevent getting stuck if the SW doesn't respond
      const timeoutId = setTimeout(() => {
        console.warn('Service worker response timeout. Forcing reload.');
        window.location.reload();
      }, 5000);

      messageChannel.port1.onmessage = (event) => {
          clearTimeout(timeoutId); // Clear the timeout as we received a response
          if (event.data && event.data.status === 'complete') {
              window.location.reload();
          } else {
              setIsClearingCache(false);
              window.location.reload(); // Fallback reload
          }
      };
      
      navigator.serviceWorker.controller.postMessage(
          { action: 'CLEAR_CACHE_AND_RELOAD' },
          [messageChannel.port2]
      );
  };

  const navLinks = useMemo(() => [
    { label: t('navAbout'), id: 'about-heading' },
    { label: t('navAgency'), id: 'agency-heading' },
    { label: t('navShowcase'), id: 'showcase-heading' },
    { label: t('navProjects'), id: 'projects-heading' }, // New unified projects nav link
    { label: t('navVision'), id: 'vision-heading' },
    { label: t('navRoadmap'), id: 'roadmap-heading' },
    { label: t('navGametusy'), id: 'gametusy-heading' },
    { label: t('navProject'), id: 'project-heading' },
    { label: t('navInvestors'), id: 'investors-heading' },
    { label: t('navCasting'), id: 'casting-heading' },
  ], [t]);

  const logoSrc = 'https://cloud.papihairdesign.sk/wp-content/uploads/2025/10/unicorn-logo.png';

  return (
    <header className={`no-print sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[var(--c-surface-1)]/90 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="/" onClick={handleLogoClick} className={`flex items-center group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--c-gold)] ${isClearingCache ? 'tooltip show-tooltip' : ''}`} aria-label="UNICORN Home (click to clear cache and reload)">
                {isClearingCache && <span className="tooltip-text">{t('clearingCacheTooltip')}</span>}
                <div className={`relative ${isClearingCache ? 'animate-pulse-ring' : ''}`}>
                    <img src={logoSrc} alt={t('logoAlt')} className="h-16 w-auto" />
                </div>
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map(link => (
              <a 
                key={link.id} 
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)} 
                className="font-bold text-[var(--c-near-black)] hover:text-[var(--c-charcoal)] relative transition-colors duration-200 group/link"
              >
                {link.label}
                 <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[var(--c-gold)] transform scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 ease-out"></span>
              </a>
            ))}
            <button
              onClick={toggleLanguage}
              className="px-3 py-1 font-bold text-sm border-2 border-[var(--c-near-black)] text-[var(--c-near-black)] transition-all
                         hover:bg-[var(--c-near-black)] hover:text-[var(--c-surface-1)] hover:scale-105
                         focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--c-gold)]"
              aria-label={`Switch to ${language === 'sk' ? 'English' : 'Slovak'}`}
            >
              {language.toUpperCase()}
            </button>
            <ThemeSwitcher />
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleLanguage}
              className="mr-2 p-2 font-bold text-sm border-2 border-[var(--c-near-black)] text-[var(--c-near-black)] hover:bg-[var(--c-near-black)] hover:text-[var(--c-surface-1)] transition-all"
              aria-label={`Switch to ${language === 'sk' ? 'English' : 'Slovak'}`}
            >
              {language.toUpperCase()}
            </button>
            <ThemeSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2.5 rounded-md text-[var(--c-near-black)] hover:text-[var(--c-charcoal)] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
        
        {isOpen && (
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
              {navLinks.map(link => (
                <a key={link.id} href={`#${link.id}`} onClick={(e) => handleNavClick(e, link.id)} className="block w-full py-2 font-bold text-[var(--c-near-black)] hover:text-[var(--c-charcoal)] transition-colors duration-200">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;