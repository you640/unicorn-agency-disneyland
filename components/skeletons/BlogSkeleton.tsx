
import React from 'react';
import SkeletonCard from './SkeletonCard';

const BlogSkeleton: React.FC = () => (
  <section className="py-16 bg-[var(--c-surface-1)] -mx-4 px-4 sm:-mx-6 sm:px-6">
    <div className="container mx-auto">
      <div className="h-8 w-48 mx-auto bg-[var(--c-midnight-teal)]/10 mb-10 animate-pulse rounded"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        <SkeletonCard variant="content" />
        <SkeletonCard variant="content" />
        <SkeletonCard variant="content" />
      </div>
    </div>
  </section>
);

export default BlogSkeleton;
