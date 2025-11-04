import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useLanguage } from '../contexts/LanguageContext';

interface InfoCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, description, icon }) => (
    <div className="bg-[var(--c-surface-1)] p-6 border-2 border-[var(--c-near-black)] shadow-[2px_2px_0px_var(--c-near-black)]">
        <div className="flex items-center mb-3">
            <div className="text-[var(--c-gold)] mr-3">{icon}</div>
            <h4 className="text-xl font-bold">{title}</h4>
        </div>
        <p className="text-[var(--c-near-black)]/80">{description}</p>
    </div>
);

const ProjectDeepDive: React.FC = () => {
    const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });
    const { t } = useLanguage();

    const agencyItems = [
        t('projectAgencyItem1'),
        t('projectAgencyItem2'),
        t('projectAgencyItem3'),
        t('projectAgencyItem4'),
    ];

    const gametusyCards = [
        { title: t('projectGametusyCard1Title'), description: t('projectGametusyCard1Desc'), icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" /></svg> },
        { title: t('projectGametusyCard2Title'), description: t('projectGametusyCard2Desc'), icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01" /></svg> },
        { title: t('projectGametusyCard3Title'), description: t('projectGametusyCard3Desc'), icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg> },
    ];
    
    const brandingItems = [
        { title: t('projectBrandingItem1Title'), description: t('projectBrandingItem1Desc') },
        { title: t('projectBrandingItem2Title'), description: t('projectBrandingItem2Desc') },
        { title: t('projectBrandingItem3Title'), description: t('projectBrandingItem3Desc') },
    ];

    return (
        <section ref={ref} id="project" className={`py-12 md:py-16 transition-all duration-700 ease-out ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h2 id="project-heading" className="text-3xl md:text-4xl font-bold">{t('projectHeading')}</h2>
                    <div className="mt-4 flex justify-center items-center gap-4 font-bold text-sm">
                        <span>{t('projectDiscover')}</span>
                        <span className="text-[var(--c-gold)]">&bull;</span>
                        <span>{t('projectForInvestors')}</span>
                    </div>
                </div>

                <div className="max-w-3xl mx-auto space-y-16">
                    {/* Agency Section */}
                    <div>
                        <h3 className="text-2xl font-bold border-b-2 border-[var(--c-gold)] pb-2 mb-4">{t('projectAgencyTitle')}</h3>
                        <p className="text-[var(--c-near-black)]/90 text-base md:text-lg leading-relaxed mb-6">{t('projectAgencyDesc')}</p>
                        <ul className="space-y-3">
                            {agencyItems.map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <svg className="h-6 w-6 text-[var(--c-gold)] mr-3 flex-shrink-0 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6-4l-6.5 6.5" /></svg>
                                    <span className="text-[var(--c-near-black)]/80 text-lg">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Gametusy Section */}
                    <div>
                        <h3 className="text-2xl font-bold border-b-2 border-[var(--c-gold)] pb-2 mb-4">{t('projectGametusyTitle')}</h3>
                        <p className="text-[var(--c-near-black)]/90 text-base md:text-lg leading-relaxed mb-6">{t('projectGametusyDesc')}</p>
                        <div className="grid grid-cols-1 gap-6">
                            {gametusyCards.map(card => <InfoCard key={card.title} {...card} />)}
                        </div>
                    </div>
                    
                    {/* Branding Section */}
                    <div>
                        <h3 className="text-2xl font-bold border-b-2 border-[var(--c-gold)] pb-2 mb-4">{t('projectBrandingTitle')}</h3>
                        <p className="text-[var(--c-near-black)]/90 text-base md:text-lg leading-relaxed mb-6">{t('projectBrandingDesc')}</p>
                        <div className="space-y-4">
                            {brandingItems.map((item, index) => (
                                <div key={index} className="bg-[var(--c-surface-1)] border-l-4 border-[var(--c-gold)] pl-4 py-2">
                                    <h4 className="font-bold text-lg">{item.title}</h4>
                                    <p className="text-[var(--c-near-black)]/80">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Future Section */}
                    <div>
                        <h3 className="text-2xl font-bold border-b-2 border-[var(--c-gold)] pb-2 mb-4">{t('projectFutureTitle')}</h3>
                        <p className="text-[var(--c-near-black)]/90 text-base md:text-lg leading-relaxed mb-6">{t('projectFutureDesc')}</p>
                        <div className="bg-gradient-to-br from-[var(--c-charcoal)] to-[var(--c-near-black)] p-6 text-[var(--c-surface-1)] border-2 border-[var(--c-gold)] shadow-[4px_4px_0px_var(--c-gold)]">
                            <h4 className="text-2xl font-bold text-[var(--c-gold)] mb-2">{t('projectWarholTitle')}</h4>
                            <p className="text-[var(--c-surface-1)]/90 leading-relaxed">{t('projectWarholDesc')}</p>
                        </div>
                    </div>
                    
                    {/* Market Potential Section */}
                    <div>
                        <h3 className="text-2xl font-bold border-b-2 border-[var(--c-gold)] pb-2 mb-4">{t('projectMarketTitle')}</h3>
                        <p className="text-[var(--c-near-black)]/90 text-base md:text-lg leading-relaxed">{t('projectMarketDesc')}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectDeepDive;
