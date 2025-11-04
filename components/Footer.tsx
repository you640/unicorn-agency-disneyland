import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import MemoryProgressBar from './MemoryProgressBar';

// SVG Icons
const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.901 1.144h3.083l-7.986 9.231 9.479 12.625h-7.925l-5.021-6.692-6.421 6.692h-3.084l8.471-8.835-9.471-9.231h7.925l4.582 6.096 6.002-6.096zm-1.503 18.005h2.463l-6.26-8.293-6.19 8.293h-2.463l7.46-9.914-7.23-7.901h6.589l4.54 4.962 5.34-4.962h-6.736l-4.14 4.52z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07c1.17.055 1.805.249 2.227.411.562.217.96.477 1.382.899s.682.82.899 1.382c.162.422.355 1.057.41 2.227.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.055 1.17-.249 1.805-.411 2.227-.217.562-.477.96-.899 1.382s-.82.682-1.382.899c-.422.162-1.057.355-2.227.41-.74.036-1.096.06-2.288.06h-.103c-1.192 0-1.548-.024-2.288-.06-1.17-.055-1.805-.249-2.227-.411-.562-.217-.96-.477-1.382-.899s-.682-.82-.899-1.382c-.162-.422-.355-1.057-.411-2.227-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.055-1.17.249-1.805.411-2.227.217-.562.477-.96.899-1.382s.82-.682 1.382-.899c.422-.162 1.057-.355 2.227-.41C8.416 2.175 8.796 2.163 12 2.163zm0 2.163c3.197 0 3.56.01 4.823.067-1.05.05-1.448.204-1.74.316-.407.149-.668.324-.91.567-.242.242-.417.503-.566.91-.112.292-.266.69-.316 1.74-.056 1.263-.067 1.626-.067 4.823s.01 3.56.067 4.823c.05 1.05.204 1.448.316 1.74.149.407.324.668.567.91s.503.417.91.566c.292.112.69.266 1.74.316 1.263.056 1.626.067 4.823.067s3.56-.01 4.823-.067c1.05-.05 1.448-.204 1.74-.316.407-.149.668-.324.91-.567.242-.242.417.503.566-.91.112-.292.266-.69.316-1.74.056-1.263.067-1.626.067-4.823s-.01-3.56-.067-4.823c-.05-1.05-.204-1.448-.316-1.74-.149-.407-.324-.668-.567-.91s-.503-.417-.91-.566c-.292-.112-.69-.266-1.74-.316-1.263-.056-1.626-.067-4.823-.067zm0 1.942c2.652 0 4.805 2.153 4.805 4.805s-2.153 4.805-4.805 4.805-4.805-2.153-4.805-4.805 2.153-4.805 4.805-4.805zm0 2.163c-1.46 0-2.642 1.182-2.642 2.642s1.182 2.642 2.642 2.642 2.642-1.182 2.642-2.642-1.182-2.642-2.642-2.642zm6.268-3.23c0-.498-.404-.902-.902-.902s-.902.404-.902.902.404.902.902.902.902-.404.902-.902z"/>
  </svg>
);

interface SocialLink {
  nameKey: 'socialLinkedIn' | 'socialX' | 'socialInstagram'; // Explicitly define type for nameKey
  url: string;
  icon: React.ReactNode;
}

const socialLinks: SocialLink[] = [
  { nameKey: 'socialLinkedIn', url: 'https://www.linkedin.com/company/unicornagency', icon: <LinkedInIcon /> },
  { nameKey: 'socialX', url: 'https://x.com/unicornagency', icon: <XIcon /> },
  { nameKey: 'socialInstagram', url: 'https://www.instagram.com/unicornagency', icon: <InstagramIcon /> },
];

const Footer: React.FC = () => {
  const { t, language } = useLanguage();
  const lastUpdatedDate = new Date().toLocaleDateString(language === 'sk' ? 'sk-SK' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <footer className="no-print py-8 bg-[var(--c-surface-1)] border-t-2 border-[var(--c-near-black)]/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-[var(--c-near-black)]/80">
        <div className="max-w-xs mx-auto mb-6">
          <MemoryProgressBar />
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center items-center gap-4 mb-6">
          {socialLinks.map(link => (
            <a
              key={link.nameKey}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--c-near-black)] hover:text-[var(--c-gold)] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--c-gold)] rounded-full"
              aria-label={t(link.nameKey)}
            >
              {link.icon}
            </a>
          ))}
        </div>

        <p className="mb-2">{t('footerText')}</p>
        <p className="text-sm opacity-75">{t('lastUpdated', { date: lastUpdatedDate })}</p>
      </div>
    </footer>
  );
};

export default Footer;