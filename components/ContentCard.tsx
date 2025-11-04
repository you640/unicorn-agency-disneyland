import React from 'react';

export interface ContentCardProps {
  title: string;
  description: string;
  category: string;
  ariaLabel: string;
}

const BaseContentCard: React.FC<ContentCardProps> = ({ title, description, category, ariaLabel }) => {
  
  return (
    <div
      className="block bg-[var(--c-surface-1)] border-2 border-[var(--c-near-black)] p-5 sm:p-6 group
                 transition-all duration-300 ease-in-out 
                 shadow-[2px_2px_0px_var(--c-near-black)]
                 hover:-translate-x-2 hover:-translate-y-2 
                 hover:shadow-[10px_10px_0px_var(--c-charcoal)]
                 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-[var(--c-gold)]/80"
      aria-label={ariaLabel}
      tabIndex={0}
    >
      <p className="text-sm font-bold text-[var(--c-charcoal)] mb-2 tracking-widest transition-colors duration-300 group-hover:text-[var(--c-gold)]">{category}</p>
      <h4 className="text-xl font-bold mb-3">{title}</h4>
      <p className="text-[var(--c-near-black)] opacity-80">{description}</p>
    </div>
  );
};

export const ContentCard = React.memo(BaseContentCard);