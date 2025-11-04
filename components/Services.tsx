import React, { useMemo } from 'react';
import { ContentCard, ContentCardProps } from './ContentCard';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useLanguage } from '../contexts/LanguageContext';

const getServicesData = (t: (key: any) => string): Omit<ContentCardProps, 'ariaLabel'>[] => [
  {
    title: t('agencyCard1Title'),
    description: t('agencyCard1Desc'),
    category: t('agencyCard1Cat'),
  },
  {
    title: t('agencyCard2Title'),
    description: t('agencyCard2Desc'),
    category: t('agencyCard2Cat'),
  },
  {
    title: t('agencyCard3Title'),
    description: t('agencyCard3Desc'),
    category: t('agencyCard3Cat'),
  }
];

const Services: React.FC = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });
  const { t } = useLanguage();
  
  const servicesData = useMemo(() => getServicesData(t), [t]);

  return (
    <section ref={ref} id="agency" className={`py-12 md:py-16 transition-all duration-700 ease-out ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <h2 id="agency-heading" className="text-3xl md:text-4xl font-bold text-center mb-10">{t('agencyHeading')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {servicesData.map((service, index) => (
          <ContentCard 
            key={index} 
            {...service} 
            ariaLabel={t('readMoreAria', { title: service.title })}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;