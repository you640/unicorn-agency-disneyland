import { useEffect, useState } from "react";

export type Theme = "light" | "dark";

export function useTheme(): [Theme, () => void] {
  const getPreferredTheme = (): Theme => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme') as Theme | null;
      if (stored === 'light' || stored === 'dark') return stored;
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
      return 'light';
    }
    return 'light';
  };

  const [theme, setTheme] = useState<Theme>(getPreferredTheme);

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Sync theme if system preference changes
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (!localStorage.getItem('theme')) {
        setTheme(mq.matches ? 'dark' : 'light');
      }
    };
    mq.addEventListener('change', handleChange);
    return () => mq.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => {
      const next = prev === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', next);
      return next;
    });
  };

  return [theme, toggleTheme];
}
