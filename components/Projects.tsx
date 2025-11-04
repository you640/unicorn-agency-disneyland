import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useLanguage } from '../contexts/LanguageContext';
import { ShowcaseCard, ShowcaseItemProps } from './ShowcaseCard';

const getProjectOneData = (t: (key: any) => string): Omit<ShowcaseItemProps, 'ariaLabel'> => ({
  title: t('project1Title'),
  description: t('project1Desc'),
  imageUrl: t('project1ImageUrl'),
  tags: t('project1Tags').split(','),
});

const getProjectTwoData = (t: (key: any) => string): Omit<ShowcaseItemProps, 'ariaLabel'> => ({
  title: t('project2Title'),
  description: t('project2Desc'),
  imageUrl: t('project2ImageUrl'),
  tags: t('project2Tags').split(','),
});

const getProjectThreeData = (t: (key: any) => string): Omit<ShowcaseItemProps, 'ariaLabel'> => ({
  title: t('project3Title'),
  description: t('project3Desc'),
  imageUrl: t('project3ImageUrl'),
  tags: t('project3Tags').split(','),
});

const Projects: React.FC = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });
  const { t } = useLanguage();

  const projectOneData = getProjectOneData(t);
  const projectTwoData = getProjectTwoData(t);
  const projectThreeData = getProjectThreeData(t);

  return (
    <section ref={ref} id="projects" className={`py-12 md:py-16 transition-all duration-700 ease-out ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <h2 id="projects-heading" className="text-3xl md:text-4xl font-bold text-center mb-10">{t('projectsHeading')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
        <ShowcaseCard
          {...projectOneData}
          ariaLabel={t('readMoreAria', { title: projectOneData.title })}
        />
        <ShowcaseCard
          {...projectTwoData}
          ariaLabel={t('readMoreAria', { title: projectTwoData.title })}
        />
        <ShowcaseCard
          {...projectThreeData}
          ariaLabel={t('readMoreAria', { title: projectThreeData.title })}
        />
      </div>
    </section>
  );
};

export default Projects;