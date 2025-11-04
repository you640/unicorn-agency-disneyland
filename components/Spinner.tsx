import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Spinner: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div className="flex justify-center items-center py-20">
      <div
        className="w-16 h-16 border-4 border-t-4 border-[var(--c-near-black)] border-t-[var(--c-gold)] rounded-full animate-spin"
        role="status"
      >
        <span className="sr-only">{t('loading')}</span>
      </div>
    </div>
  );
};

export default Spinner;