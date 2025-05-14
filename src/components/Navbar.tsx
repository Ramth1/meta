import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { useState } from 'react';
import { WiDaySunny, WiMoonWaxingCrescent3 } from 'react-icons/wi';

export const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold text-blue-600 dark:text-blue-400"
          >
            <div className='flex flex-row gap-2'>
              <img src='https://www.metalogic.com.np/metalogo.png' className='w-10  h-10'/>
              Metalogic
            </div>

          </motion.h1>

          <div className="hidden md:flex items-center gap-6">
            <motion.a
              whileHover={{ scale: 1.05 }}
              className="nav-link"
              href="#services"
            >
              Services
            </motion.a>
          </div>

          <div className="flex items-center gap-4">
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle theme"
            >
              {isDark ? <WiMoonWaxingCrescent3 size={20} color='white'/> : <WiDaySunny size={20} />}
            </motion.button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
            >
              ☰
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden"
            >
              <div className="px-4 py-2 space-y-4">
                <a href="#services" className="block nav-link">
                  Services
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};