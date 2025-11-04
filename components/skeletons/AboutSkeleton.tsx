import React from 'react';

const AboutSkeleton: React.FC = () => {
    return (
        <section className="py-16 bg-[var(--c-surface-1)] -mx-4 px-4 sm:-mx-6 sm:px-6 animate-pulse">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <div className="h-8 w-3/4 max-w-md mx-auto bg-[var(--c-midnight-teal)]/10 rounded"></div>
                    <div className="mt-4 h-4 w-full max-w-2xl mx-auto bg-[var(--c-midnight-teal)]/10 rounded"></div>
                    <div className="mt-2 h-4 w-5/6 max-w-2xl mx-auto bg-[var(--c-midnight-teal)]/10 rounded"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                    {/* Story & Team Skeleton */}
                    <div className="lg:col-span-3 space-y-10">
                        <div>
                            <div className="h-6 w-1/3 bg-[var(--c-midnight-teal)]/10 mb-4 rounded"></div>
                            <div className="space-y-2">
                                <div className="h-4 bg-[var(--c-midnight-teal)]/10 rounded"></div>
                                <div className="h-4 bg-[var(--c-midnight-teal)]/10 rounded"></div>
                                <div className="h-4 w-5/6 bg-[var(--c-midnight-teal)]/10 rounded"></div>
                            </div>
                        </div>
                        <div>
                            <div className="h-6 w-1/4 bg-[var(--c-midnight-teal)]/10 mb-4 rounded"></div>
                            <div className="h-28 bg-[var(--c-midnight-teal)]/5 border border-[var(--c-midnight-teal)]/10 p-6 rounded"></div>
                        </div>
                    </div>

                    {/* Values Skeleton */}
                    <div className="lg:col-span-2">
                        <div className="h-6 w-1/2 bg-[var(--c-midnight-teal)]/10 mb-4 rounded"></div>
                        <div className="space-y-6">
                            {[...Array(3)].map((_, i) => (
                                <div key={i} className="h-24 bg-[var(--c-midnight-teal)]/5 border border-[var(--c-midnight-teal)]/10 p-6 rounded"></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSkeleton;