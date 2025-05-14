// components/GalaxyBackground.tsx
import { useTheme } from '../contexts/ThemeContext';

const GalaxyBackground = () => {
  const { isDark } = useTheme();
  const stars = Array(150).fill(null);
  const shootingStars = Array(8).fill(null);

  if (!isDark) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Static Stars */}
      {stars.map((_, i) => (
        <div
          key={`star-${i}`}
          className="absolute bg-white rounded-full animate-twinkle"
          style={{
            width: `${Math.random() * 3}px`,
            height: `${Math.random() * 3}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`
          }}
        />
      ))}

      {/* Shooting Stars */}
      {shootingStars.map((_, i) => (
        <div
          key={`shooting-${i}`}
          className="absolute h-[1px] bg-gradient-to-r from-transparent via-white to-transparent animate-shooting-star"
          style={{
            animationDelay: `${Math.random() * 15}s`,
            transform: `rotate(${Math.random() * 360}deg)`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`
          }}
        />
      ))}
    </div>
  );
};

export default GalaxyBackground;