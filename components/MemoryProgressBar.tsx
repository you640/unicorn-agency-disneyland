import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

// Define a type for the non-standard performance.memory API for TypeScript
interface PerformanceMemory {
  jsHeapSizeLimit: number;
  totalJSHeapSize: number;
  usedJSHeapSize: number;
}

const useMemoryInfo = () => {
  const [memoryInfo, setMemoryInfo] = useState({ usage: 0, isSupported: false });

  useEffect(() => {
    // The performance.memory API is non-standard and only available in Chromium-based browsers.
    const performanceWithMemory = performance as unknown as { memory?: PerformanceMemory };
    if (!performanceWithMemory.memory) {
      setMemoryInfo({ usage: 0, isSupported: false });
      return;
    }

    setMemoryInfo(prev => ({ ...prev, isSupported: true }));

    const intervalId = setInterval(() => {
      const memory = performanceWithMemory.memory as PerformanceMemory;
      const usagePercentage = (memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100;
      setMemoryInfo(prev => ({ ...prev, usage: usagePercentage }));
    }, 1000); // Poll every second

    return () => clearInterval(intervalId);
  }, []);

  return memoryInfo;
};

const MemoryProgressBar: React.FC = () => {
    const { t } = useLanguage();
    const { usage, isSupported } = useMemoryInfo();

    if (!isSupported) {
        return null; // Don't render if the API is not available
    }

    const progressPercentage = Math.max(0, Math.min(100, usage));
    
    let barColor = 'bg-[var(--c-charcoal)]';
    if (progressPercentage > 75) {
        barColor = 'bg-red-500';
    } else if (progressPercentage > 50) {
        barColor = 'bg-[var(--c-gold)]';
    }

    return (
        <div className="group relative">
            <div className="flex justify-between items-center mb-1 text-xs font-mono">
                <span className="font-bold">{t('memoryUsage')}</span>
                <span>{progressPercentage.toFixed(1)}%</span>
            </div>
            <div className="w-full bg-[var(--c-near-black)]/10 h-2 border border-[var(--c-near-black)]/20 overflow-hidden">
                <div 
                    className={`h-full transition-all duration-500 ease-in-out ${barColor}`}
                    style={{ width: `${progressPercentage}%` }}
                ></div>
            </div>
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max px-2 py-1 bg-[var(--c-near-black)] text-white text-xs rounded-md
                          opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                {t('memoryTooltip')}
                <svg className="absolute text-[var(--c-near-black)] h-2 w-full left-0 top-full" x="0px" y="0px" viewBox="0 0 255 255">
                    <polygon className="fill-current" points="0,0 127.5,127.5 255,0"/>
                </svg>
            </div>
        </div>
    );
};

export default MemoryProgressBar;