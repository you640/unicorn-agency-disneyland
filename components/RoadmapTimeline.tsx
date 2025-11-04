import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useLanguage } from '../contexts/LanguageContext';

interface TimelineItemProps {
  quarter: string;
  title: string;
  description: string;
  isLast?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ quarter, title, description, isLast = false }) => {
    const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.5 });
    
    return (
        <div ref={ref} className={`relative pl-8 sm:pl-32 py-6 transition-all duration-500 ease-out ${isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
            {/* Vertical line for all screen sizes */}
            <div className={`absolute left-2.5 sm:left-28 top-0 h-full w-0.5 ${isLast ? '' : 'bg-[var(--c-near-black)]/20'}`} aria-hidden="true"></div>
            
            {/* Dot/Marker */}
            <div className="absolute left-0 sm:left-[6.5rem] top-7 w-5 h-5 bg-[var(--c-gold)] border-4 box-content border-[var(--c-charcoal)] rounded-full" aria-hidden="true"></div>

            {/* Content */}
            <div className="flex flex-col items-start">
                {/* Time */}
                <time className="mb-2 text-xs font-bold uppercase w-auto px-2 h-6 inline-flex items-center justify-center text-[var(--c-near-black)] bg-[var(--c-surface-1)] border-2 border-[var(--c-near-black)]">
                    {quarter}
                </time>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-[var(--c-near-black)] mb-2">{title}</h3>
                
                {/* Description */}
                <p className="text-[var(--c-near-black)] opacity-80">{description}</p>
            </div>
        </div>
    );
};


const RoadmapTimeline: React.FC = () => {
    const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });
    const { t } = useLanguage();

    const roadmapData = [
        { quarter: 'Q4 2024', title: t('roadmapQ1Title'), description: t('roadmapQ1Desc') },
        { quarter: 'Q2 2025', title: t('roadmapQ2Title'), description: t('roadmapQ2Desc') },
        { quarter: '2026', title: t('roadmapQ3Title'), description: t('roadmapQ3Desc') },
        { quarter: '2026+', title: t('roadmapQ4Title'), description: t('roadmapQ4Desc') },
    ];

    return (
        <section ref={ref} id="roadmap" className={`py-12 md:py-16 transition-all duration-700 ease-out ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="container mx-auto">
                <h2 id="roadmap-heading" className="text-3xl md:text-4xl font-bold text-center mb-12">{t('roadmapHeading')}</h2>
                <div className="max-w-2xl mx-auto">
                    {roadmapData.map((item, index) => (
                        <TimelineItem key={index} {...item} isLast={index === roadmapData.length - 1} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RoadmapTimeline;