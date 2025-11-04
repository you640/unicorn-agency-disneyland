import React from 'react';

const ProjectDeepDiveSkeleton: React.FC = () => {
    return (
        <section className="py-16 animate-pulse">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <div className="h-8 w-3/4 max-w-lg mx-auto bg-[var(--c-near-black)]/10 rounded"></div>
                    <div className="mt-4 h-4 w-48 mx-auto bg-[var(--c-near-black)]/10 rounded"></div>
                </div>

                <div className="max-w-3xl mx-auto space-y-16">
                    {/* Section Skeleton */}
                    <div>
                        <div className="h-7 w-1/2 bg-[var(--c-near-black)]/10 mb-4 rounded"></div>
                        <div className="space-y-2 mb-6">
                            <div className="h-4 bg-[var(--c-near-black)]/10 rounded"></div>
                            <div className="h-4 w-5/6 bg-[var(--c-near-black)]/10 rounded"></div>
                        </div>
                        <div className="space-y-3">
                            <div className="h-5 w-3/4 bg-[var(--c-near-black)]/10 rounded"></div>
                            <div className="h-5 w-4/5 bg-[var(--c-near-black)]/10 rounded"></div>
                        </div>
                    </div>

                    {/* Section with Cards Skeleton */}
                    <div>
                        <div className="h-7 w-2/5 bg-[var(--c-near-black)]/10 mb-4 rounded"></div>
                        <div className="space-y-2 mb-6">
                            <div className="h-4 bg-[var(--c-near-black)]/10 rounded"></div>
                            <div className="h-4 w-5/6 bg-[var(--c-near-black)]/10 rounded"></div>
                        </div>
                        <div className="grid grid-cols-1 gap-6">
                            <div className="h-28 bg-[var(--c-surface-1)] border-2 border-[var(--c-near-black)]/10 p-6 shadow-sm"></div>
                            <div className="h-28 bg-[var(--c-surface-1)] border-2 border-[var(--c-near-black)]/10 p-6 shadow-sm"></div>
                            <div className="h-28 bg-[var(--c-surface-1)] border-2 border-[var(--c-near-black)]/10 p-6 shadow-sm"></div>
                        </div>
                    </div>

                    {/* Final Section Skeleton */}
                    <div>
                        <div className="h-7 w-1/3 bg-[var(--c-near-black)]/10 mb-4 rounded"></div>
                        <div className="space-y-2">
                            <div className="h-4 bg-[var(--c-near-black)]/10 rounded"></div>
                            <div className="h-4 w-full bg-[var(--c-near-black)]/10 rounded"></div>
                            <div className="h-4 w-5/6 bg-[var(--c-near-black)]/10 rounded"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectDeepDiveSkeleton;
