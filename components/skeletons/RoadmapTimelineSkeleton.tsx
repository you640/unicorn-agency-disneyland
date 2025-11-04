import React from 'react';

const RoadmapTimelineSkeleton: React.FC = () => (
    <section className="py-16">
        <div className="container mx-auto animate-pulse">
            <div className="h-8 w-64 mx-auto bg-[var(--c-midnight-teal)]/10 mb-12 rounded"></div>
            <div className="max-w-2xl mx-auto">
                {[...Array(4)].map((_, index) => (
                    <div key={index} className="relative pl-8 sm:pl-32 py-6">
                        <div className="flex flex-col sm:flex-row items-start mb-2">
                             <div className="w-20 h-6 mb-3 sm:mb-0 bg-[var(--c-midnight-teal)]/10 rounded-sm"></div>
                             <div className="h-6 w-3/5 sm:ml-4 bg-[var(--c-midnight-teal)]/10 rounded"></div>
                        </div>
                        <div className="space-y-2">
                            <div className="h-4 w-full bg-[var(--c-midnight-teal)]/10 rounded"></div>
                            <div className="h-4 w-5/6 bg-[var(--c-midnight-teal)]/10 rounded"></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default RoadmapTimelineSkeleton;
