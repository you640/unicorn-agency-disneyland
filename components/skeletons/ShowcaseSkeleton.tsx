
import React from 'react';
import SkeletonCard from './SkeletonCard';

const ShowcaseSkeleton: React.FC = () => (
  <section className="py-16">
    <div className="h-8 w-64 mx-auto bg-[var(--c-midnight-teal)]/10 mb-10 animate-pulse rounded"></div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      <SkeletonCard variant="showcase" />
      <SkeletonCard variant="showcase" />
      <SkeletonCard variant="showcase" />
    </div>
  </section>
);

export default ShowcaseSkeleton;
