// components/ShootingStars.tsx
import { JSX, useEffect, useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ShootingStars = () => {
  const { isDark } = useTheme();
  const [stars, setStars] = useState<JSX.Element[]>([]);

  useEffect(() => {
    if (!isDark) return;

    const createStar = () => {
      const style = {
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
        fontSize: `${Math.random() * 3 + 2}px`
      };
      
      return (
        <div
          key={Math.random()}
          className="absolute text-white animate-shooting-star"
          style={style}
        >
          ★
        </div>
      );
    };

    const interval = setInterval(() => {
      setStars(prev => [...prev.slice(-20), createStar()]);
    }, 1000);

    return () => clearInterval(interval);
  }, [isDark]);

  if (!isDark) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {stars}
    </div>
  );
};

export default ShootingStars;