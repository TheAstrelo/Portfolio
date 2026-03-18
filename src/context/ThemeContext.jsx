import { createContext, useContext, useEffect } from 'react';
import { useLocalStorage } from '../hooks';

/**
 * Theme Context
 * Demonstrates: createContext, useContext, custom hooks integration,
 * CSS custom properties manipulation, system preference detection
 */

const ThemeContext = createContext(null);

// Get system preference (only called once on initial load)
const getSystemPreference = () => {
  if (typeof window !== 'undefined') {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  return 'light';
};

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useLocalStorage('theme', getSystemPreference());

  // Apply theme to document element so CSS variables cascade properly
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const isDark = theme === 'dark';

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDark }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
