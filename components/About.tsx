import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useLanguage } from '../contexts/LanguageContext';

interface ValueCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
}

const ValueCard: React.FC<ValueCardProps> = ({ title, description, icon }) => (
    <div className="bg-[var(--c-surface-1)] p-6 border-2 border-[var(--c-near-black)] shadow-[2px_2px_0px_var(--c-near-black)]">
        <div className="flex items-center mb-3">
            <div className="text-[var(--c-gold)] mr-3">{icon}</div>
            <h4 className="text-xl font-bold">{title}</h4>
        </div>
        <p className="text-[var(--c-near-black)]/80">{description}</p>
    </div>
);


const About: React.FC = () => {
    const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });
    const { t } = useLanguage();

    const values = [
        {
            title: t('aboutValue1Title'),
            description: t('aboutValue1Desc'),
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l4 4m0 0l4 4m-4-4v12m-4-4l-4 4m0 0l-4 4m4-4V5" /></svg>
        },
        {
            title: t('aboutValue2Title'),
            description: t('aboutValue2Desc'),
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
        },
        {
            title: t('aboutValue3Title'),
            description: t('aboutValue3Desc'),
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
        }
    ];

    return (
        <section ref={ref} id="about" className={`py-12 md:py-16 bg-[var(--c-surface-1)] -mx-4 px-4 sm:-mx-6 sm:px-6 transition-all duration-700 ease-out ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h2 id="about-heading" className="text-3xl md:text-4xl font-bold">{t('aboutHeading')}</h2>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-[var(--c-near-black)]/80">{t('aboutIntro')}</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
                    {/* Story & Team */}
                    <div className="lg:col-span-3 space-y-10">
                        <div>
                            <h3 className="text-2xl font-bold border-b-2 border-[var(--c-gold)] pb-2 mb-4">{t('aboutStoryTitle')}</h3>
                            <p className="text-[var(--c-near-black)]/90 text-base md:text-lg leading-relaxed">{t('aboutStoryDesc')}</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold border-b-2 border-[var(--c-gold)] pb-2 mb-4">{t('aboutTeamTitle')}</h3>
                            <div className="bg-[var(--c-surface-2)] p-6 border border-[var(--c-near-black)]/10">
                                <h4 className="text-xl font-bold">{t('aboutTeamName')}</h4>
                                <p className="text-[var(--c-gold)] font-bold mb-2">{t('aboutTeamRole')}</p>
                                <p className="text-[var(--c-near-black)]/80">{t('aboutTeamDesc')}</p>
                            </div>
                        </div>
                    </div>

                    {/* Values */}
                    <div className="lg:col-span-2">
                        <h3 className="text-2xl font-bold border-b-2 border-[var(--c-gold)] pb-2 mb-4">{t('aboutValuesTitle')}</h3>
                        <div className="space-y-6">
                            {values.map(value => (
                                <ValueCard key={value.title} {...value} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;