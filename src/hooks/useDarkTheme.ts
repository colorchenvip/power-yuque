import { useEffect, useState } from 'react';
import { PY_KEYS } from '@/store/key';

/**
 * DarkMode 需要的状态
 */
export const useDarkTheme = () => {
  // DarkMode 可见
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const localTheme = localStorage.getItem(PY_KEYS.theme);
    if (localTheme) {
      // @ts-ignore
      setTheme(localTheme.replace(/"/g, ''));
    }
    window.addEventListener('message', ({ data }) => {
      if (data === 'PW_SWITCH_DARK_MODE') {
        console.log(data);
        console.log(theme);
        setTheme(theme === 'light' ? 'dark' : 'light');
      }
    });
  }, [theme]);

  return { theme };
};
