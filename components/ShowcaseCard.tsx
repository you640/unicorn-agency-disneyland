import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export interface ShowcaseItemProps {
  title: string;
  description: string;
  imageUrl?: string;
  videoUrl?: string;
  tags: string[];
  ariaLabel: string;
}

export const ShowcaseCard: React.FC<ShowcaseItemProps> = ({ title, description, imageUrl, videoUrl, tags, ariaLabel }) => {
  const { t } = useLanguage();

  return (
    <div
       className="bg-[var(--c-surface-1)] border-2 border-[var(--c-near-black)] group overflow-hidden 
                   shadow-[2px_2px_0px_var(--c-near-black)] 
                   transition-all duration-300 ease-in-out 
                   hover:-translate-x-2 hover:-translate-y-2 
                   hover:shadow-[10px_10px_0px_var(--c-charcoal)]
                   focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-[var(--c-gold)]/80"
      tabIndex={0}
      aria-label={ariaLabel}
    >
      <div className="relative bg-[var(--c-near-black)]/5">
        {videoUrl ? (
          <iframe
            src={videoUrl}
            title={t('showcaseVideoTitle', { title })}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-48"
          ></iframe>
        ) : (
          <>
            <img 
                src={imageUrl} 
                alt={t('showcaseImageAlt', { title })}
                loading="lazy"
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--c-charcoal)] to-transparent opacity-70 group-hover:opacity-80 transition-opacity"></div>
          </>
        )}
      </div>
      <div className="p-5 sm:p-6">
        <h4 className="text-xl font-bold mb-2">{title}</h4>
        <p className="text-[var(--c-near-black)] opacity-80 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
            {tags.map(tag => (
                <span key={tag} className="text-xs font-bold bg-[var(--c-surface-2)] text-[var(--c-charcoal)] px-2 py-1 border border-[var(--c-near-black)]/20">{tag}</span>
            ))}
        </div>
      </div>
    </div>
  );
};
