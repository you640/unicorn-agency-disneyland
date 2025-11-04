import React from 'react';

const GametusyDetailsSkeleton: React.FC = () => {
    return (
        <section className="py-16 bg-[var(--c-surface-1)] -mx-4 px-4 sm:-mx-6 sm:px-6">
            <div className="container mx-auto animate-pulse">
                <div className="h-8 w-3/4 max-w-md mx-auto bg-[var(--c-midnight-teal)]/10 mb-10 rounded"></div>
                
                <div className="max-w-3xl mx-auto">
                    <div className="mb-6 flex justify-center border-b-2 border-[var(--c-midnight-teal)]/10">
                        <div className="h-12 w-28 bg-[var(--c-midnight-teal)]/10 mx-2 rounded-t"></div>
                        <div className="h-12 w-36 bg-[var(--c-midnight-teal)]/10 mx-2 rounded-t"></div>
                        <div className="h-12 w-32 bg-[var(--c-midnight-teal)]/10 mx-2 rounded-t"></div>
                    </div>
                    <div className="p-4 space-y-3">
                         <div className="h-4 w-full bg-[var(--c-midnight-teal)]/10 rounded"></div>
                         <div className="h-4 w-5/6 mx-auto bg-[var(--c-midnight-teal)]/10 rounded"></div>
                         <div className="h-4 w-full bg-[var(--c-midnight-teal)]/10 rounded"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GametusyDetailsSkeleton;