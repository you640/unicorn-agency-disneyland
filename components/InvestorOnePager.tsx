import React from 'react';
import Button from './Button';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useLanguage } from '../contexts/LanguageContext';

const PieChart: React.FC = () => {
    const { t } = useLanguage();
    const data = [
        { percentage: 40, color: 'var(--c-charcoal)', label: t('onePagerFundsProduction') },
        { percentage: 30, color: 'var(--c-gold)', label: t('onePagerFundsMarketing') },
        { percentage: 20, color: 'var(--c-near-black)', label: t('onePagerFundsTalent') },
        { percentage: 10, color: 'rgba(30, 30, 30, 0.3)', label: t('onePagerFundsOps') },
    ];
    const radius = 80;
    const circumference = 2 * Math.PI * radius;
    let accumulatedPercentage = 0;

    return (
        <div className="flex flex-col items-center">
            <svg viewBox="0 0 200 200" className="w-40 h-40 md:w-48 md:h-48 transform -rotate-90">
                {data.map((slice, index) => {
                    const strokeDashoffset = circumference * (1 - slice.percentage / 100);
                    const rotation = accumulatedPercentage * 3.6;
                    accumulatedPercentage += slice.percentage;
                    return (
                        <circle
                            key={index}
                            r={radius}
                            cx="100"
                            cy="100"
                            fill="transparent"
                            stroke={slice.color}
                            strokeWidth="40"
                            strokeDasharray={`${circumference} ${circumference}`}
                            style={{ strokeDashoffset }}
                            transform={`rotate(${rotation} 100 100)`}
                        />
                    );
                })}
            </svg>
            <div className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm">
                {data.map((slice) => (
                    <div key={slice.label} className="flex items-center">
                        <span className="w-3 h-3 mr-2" style={{ backgroundColor: slice.color }}></span>
                        <span>{slice.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};


const InvestorOnePager: React.FC = () => {
    const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });
    const { t } = useLanguage();
    
    const handlePrint = () => {
        window.print();
    };

    return (
        <section id="investors" ref={ref} className={`py-12 md:py-16 transition-all duration-700 ease-out printable-section ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="container mx-auto">
                <div className="max-w-4xl mx-auto p-6 sm:p-8 lg:p-12 bg-[var(--c-surface-1)] border-2 border-[var(--c-near-black)] shadow-[4px_4px_0px_var(--c-near-black)]">
                    <header className="text-center mb-10">
                        <h2 id="investors-heading" className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--c-charcoal)] to-[var(--c-gold)] mb-2">{t('investorsHeading')}</h2>
                        <p className="text-lg text-[var(--c-near-black)] opacity-80">{t('investorsSubheading')}</p>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-x-16">
                        <div className="space-y-8 md:order-last">
                            <div className="flex flex-col items-center justify-center space-y-4">
                                <h3 className="text-xl font-bold">{t('onePagerFunds')}</h3>
                                <PieChart />
                            </div>
                        </div>
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xl font-bold border-b-2 border-[var(--c-gold)] pb-2 mb-3">{t('onePagerVision')}</h3>
                                <p className="text-[var(--c-near-black)]/90">{t('onePagerVisionDesc')}</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold border-b-2 border-[var(--c-gold)] pb-2 mb-3">{t('onePagerAsk')}</h3>
                                <p className="text-4xl font-mono font-bold text-[var(--c-charcoal)]">{t('onePagerAskAmount')}</p>
                                <p className="text-lg font-bold">{t('onePagerAskEquity')}</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold border-b-2 border-[var(--c-gold)] pb-2 mb-3">{t('onePagerContact')}</h3>
                                <p className="font-bold text-lg">{t('onePagerContactName')}</p>
                                <p>{t('onePagerContactTitle')}</p>
                                <a href={`mailto:${t('onePagerContactEmail')}`} className="text-[var(--c-charcoal)] hover:underline">{t('onePagerContactEmail')}</a>
                            </div>
                        </div>
                    </div>
                     <div className="text-center mt-12 pt-8 border-t border-[var(--c-near-black)]/20 no-print">
                        <Button variant="primary" onClick={handlePrint}>
                            {t('onePagerButton')}
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InvestorOnePager;