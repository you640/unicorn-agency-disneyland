import React, { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useLanguage } from '../contexts/LanguageContext';

type Tab = 'how' | 'tiers' | 'impact';

const GametusyDetails: React.FC = () => {
    const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });
    const { t } = useLanguage();
    const [activeTab, setActiveTab] = useState<Tab>('how');

    const tabs: { id: Tab; label: string; content: string }[] = [
        { id: 'how', label: t('gametusyTab1'), content: t('gametusyTab1Content') },
        { id: 'tiers', label: t('gametusyTab2'), content: t('gametusyTab2Content') },
        { id: 'impact', label: t('gametusyTab3'), content: t('gametusyTab3Content') },
    ];

    const activeContent = tabs.find(tab => tab.id === activeTab)?.content;

    return (
        <section ref={ref} id="gametusy" className={`py-12 md:py-16 bg-[var(--c-surface-1)] -mx-4 px-4 sm:-mx-6 sm:px-6 transition-all duration-700 ease-out ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="container mx-auto">
                <div className="text-center mb-10">
                    <h2 id="gametusy-heading" className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--c-charcoal)] to-[var(--c-gold)]">
                        {t('gametusyHeading')}
                    </h2>
                </div>

                <div className="max-w-3xl mx-auto">
                    <div className="mb-6 flex flex-wrap justify-center border-b-2 border-[var(--c-near-black)]/20">
                        {tabs.map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                role="tab"
                                aria-selected={activeTab === tab.id}
                                aria-controls={`tabpanel-${tab.id}`}
                                className={`px-3 sm:px-4 py-3 text-base sm:text-lg font-bold transition-all duration-300 border-b-4 rounded-t-md
                                            focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[var(--c-gold)]
                                            ${activeTab === tab.id
                                                ? 'border-[var(--c-charcoal)] text-[var(--c-near-black)]'
                                                : 'border-transparent text-[var(--c-near-black)]/60 hover:text-[var(--c-near-black)]'
                                            }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    <div
                        id={`tabpanel-${activeTab}`}
                        role="tabpanel"
                        aria-labelledby={`tab-${activeTab}`}
                        className="p-4 text-center text-lg text-[var(--c-near-black)] opacity-90"
                    >
                        <p>{activeContent}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GametusyDetails;