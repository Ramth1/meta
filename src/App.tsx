import { motion } from 'framer-motion';
import { ThemeProvider } from './contexts/ThemeContext';
import { Navbar } from './components/Navbar';
import Footer from './components/Footer';
import { services } from './data/services';
import  ServiceCard  from './components/ServiceCard';
import ShootingStars from './components/ShootingStars';
import GalaxyBackground from './components/GalaxyBackground';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
         <ShootingStars />
         <GalaxyBackground />
        <main className="flex-grow gradient-animate bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-8"
            >
              Our Services
            </motion.h2>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {services.map((service) => (
                <ServiceCard key={service.id} {...service} />
              ))}
            </motion.div>
          </div>
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}