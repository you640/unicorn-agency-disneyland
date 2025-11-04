import React from 'react';

const InvestorOnePagerSkeleton: React.FC = () => (
  <section className="py-16">
    <div className="container mx-auto">
      <div className="max-w-4xl mx-auto p-8 lg:p-12 bg-[var(--c-surface-1)] border-2 border-[var(--c-near-black)]/20 shadow-[4px_4px_0px_var(--c-near-black)]/10 animate-pulse">
        {/* Header Skeleton */}
        <div className="h-8 w-3/4 bg-[var(--c-near-black)]/10 mb-2 rounded"></div>
        <div className="h-6 w-1/2 bg-[var(--c-near-black)]/10 mb-10 rounded"></div>
        
        {/* Content Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-8">
            {/* Section 1 */}
            <div>
              <div className="h-5 w-1/3 bg-[var(--c-near-black)]/10 mb-3 rounded"></div>
              <div className="space-y-2">
                <div className="h-4 w-full bg-[var(--c-near-black)]/10 rounded"></div>
                <div className="h-4 w-5/6 bg-[var(--c-near-black)]/10 rounded"></div>
              </div>
            </div>
            {/* Section 2 */}
            <div>
              <div className="h-5 w-1/4 bg-[var(--c-near-black)]/10 mb-3 rounded"></div>
              <div className="h-10 w-1/2 bg-[var(--c-near-black)]/10 rounded"></div>
            </div>
             {/* Section 3 */}
            <div>
              <div className="h-5 w-1/3 bg-[var(--c-near-black)]/10 mb-3 rounded"></div>
              <div className="space-y-2">
                <div className="h-4 w-full bg-[var(--c-near-black)]/10 rounded"></div>
                <div className="h-4 w-5/6 bg-[var(--c-near-black)]/10 rounded"></div>
              </div>
            </div>
          </div>
          {/* Chart Skeleton */}
          <div className="flex flex-col items-center justify-center">
             <div className="h-5 w-1/2 bg-[var(--c-near-black)]/10 mb-4 rounded"></div>
             <div className="w-48 h-48 bg-[var(--c-near-black)]/10 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default InvestorOnePagerSkeleton;