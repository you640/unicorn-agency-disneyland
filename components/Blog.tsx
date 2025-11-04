import React, { useMemo } from 'react';
import { ContentCard, ContentCardProps } from './ContentCard';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useLanguage } from '../contexts/LanguageContext';

const getBlogData = (t: typeof useLanguage extends () => { t: infer T } ? T : never): Omit<ContentCardProps, 'ariaLabel'>[] => [
  {
    title: t('visionCard1Title'),
    description: t('visionCard1Desc'),
    category: t('visionCard1Cat'),
  },
  {
    title: t('visionCard2Title'),
    description: t('visionCard2Desc'),
    category: t('visionCard2Cat'),
  },
  {
    title: t('visionCard3Title'),
    description: t('visionCard3Desc'),
    category: t('visionCard3Cat'),
  }
];

const Blog: React.FC = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });
  const { t } = useLanguage();

  const blogData = useMemo(() => getBlogData(t), [t]);

  return (
    <section ref={ref} id="vision" className={`py-12 md:py-16 bg-[var(--c-surface-1)] -mx-4 px-4 sm:-mx-6 sm:px-6 transition-all duration-700 ease-out ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="container mx-auto">
        <h2 id="vision-heading" className="text-3xl md:text-4xl font-bold text-center mb-10">{t('visionHeading')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {blogData.map((post, index) => (
            <ContentCard 
              key={index} 
              {...post} 
              ariaLabel={t('readMoreAria', { title: post.title })}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;