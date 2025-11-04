import React, { useMemo } from 'react';
import { ContentCard, ContentCardProps } from './ContentCard'; // Changed from ShowcaseCard
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useLanguage } from '../contexts/LanguageContext';

const getShowcaseData = (t: (key: any) => string): Omit<ContentCardProps, 'ariaLabel'>[] => [ // Using ContentCardProps
  {
    title: t('showcaseCard1Title'),
    description: t('showcaseCard1Desc'),
    category: t('showcaseCard1Cat'),
  },
  {
    title: t('showcaseCard2Title'),
    description: t('showcaseCard2Desc'),
    category: t('showcaseCard2Cat'),
  },
  {
    title: t('showcaseCard3Title'),
    description: t('showcaseCard3Desc'),
    category: t('showcaseCard3Cat'),
  }
];

const Showcase: React.FC = () => {
    const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });
    const { t } = useLanguage();
    
    const showcaseData = useMemo(() => getShowcaseData(t), [t]);

  return (
    <section ref={ref} id="showcase" className={`py-12 md:py-16 transition-all duration-700 ease-out ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <h2 id="showcase-heading" className="text-3xl md:text-4xl font-bold text-center mb-10">{t('showcaseHeading')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {showcaseData.map((item, index) => (
          <ContentCard 
            key={index} 
            {...item}
            ariaLabel={t('readMoreAria', { title: item.title })}
          />
        ))}
      </div>
    </section>
  );
};

export default Showcase;