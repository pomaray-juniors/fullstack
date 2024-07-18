  // components/ThemeSwitcher.tsx
  import { Button } from '@nextui-org/button';
  import { useTheme } from 'next-themes';
  import { useEffect, useState } from 'react';

  export const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      setMounted(true);
    }, []);

    if (!mounted) {
      return null;
    }

    return (
      <div>
        The current theme is: {theme}
        <Button
          onClick={() => setTheme('light')}
          className={theme === 'light' ? 'hidden' : 'block'}
        >
          Light Mode
        </Button>
        <Button
          onClick={() => setTheme('dark')}
          className={theme === 'dark' ? 'hidden' : 'block'}
        >
          Dark Mode
        </Button>
        <style jsx>{`
          button {
            margin: 5px;
            padding: 10px;
          }
          .active {
            font-weight: bold;
            color: white;
            background-color: black;
          }
        `}</style>
      </div>
    );
  };
