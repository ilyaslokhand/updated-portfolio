import { useState, useEffect } from 'react';

export function useTheme() {

  const saved = localStorage.getItem('theme');
  const [theme, setTheme] = useState(saved || 'light');

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  function toggleTheme() {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }

  return { theme, toggleTheme };
}