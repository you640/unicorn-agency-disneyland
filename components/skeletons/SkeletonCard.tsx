
import React from 'react';

interface SkeletonCardProps {
  variant?: 'content' | 'showcase';
}

const SkeletonCard: React.FC<SkeletonCardProps> = ({ variant = 'content' }) => {
  return (
    <div className="w-full bg-[var(--c-surface-1)] border-2 border-[var(--c-near-black)]/20 p-6 shadow-[2px_2px_0px_var(--c-near-black)]/10 animate-pulse overflow-hidden">
      {variant === 'showcase' && <div className="h-48 bg-[var(--c-near-black)]/10 -m-6 mb-6"></div>}
      
      {variant === 'content' && <div className="h-4 w-1/3 bg-[var(--c-near-black)]/10 mb-4 rounded"></div>}
      
      <div className="h-6 w-3/4 bg-[var(--c-near-black)]/10 mb-3 rounded"></div>
      
      <div className="space-y-2">
          <div className="h-4 bg-[var(--c-near-black)]/10 rounded"></div>
          <div className="h-4 w-5/6 bg-[var(--c-near-black)]/10 rounded"></div>
      </div>

      {variant === 'showcase' && (
        <div className="flex flex-wrap gap-2 mt-4">
            <div className="h-6 w-20 bg-[var(--c-near-black)]/10 rounded"></div>
            <div className="h-6 w-16 bg-[var(--c-near-black)]/10 rounded"></div>
            <div className="h-6 w-24 bg-[var(--c-near-black)]/10 rounded"></div>
        </div>
      )}
    </div>
  );
};

export default SkeletonCard;