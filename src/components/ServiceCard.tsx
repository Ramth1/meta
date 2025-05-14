// components/ServiceCard.tsx
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Service } from '../data/services';

const ServiceCard: React.FC<Service> = ({ 
  title, 
  description, 
  detailedDescription, 
  icon 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [waves, setWaves] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const cardRef = useRef<HTMLDivElement>(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const waveId = useRef(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || isExpanded) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setMousePosition({ x, y });
    
    // Add new wave
    setWaves(waves => [...waves.slice(-2), { id: waveId.current++, x, y }]);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.02 },
    tap: { scale: 0.98 }
  };

  const waveVariants = {
    initial: { scale: 0, opacity: 0.6 },
    animate: { scale: 2, opacity: 0 },
    exit: { opacity: 0 }
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      whileHover="hover"
      whileTap="tap"
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg cursor-pointer h-[400px] flex flex-col relative overflow-hidden"
      onMouseMove={handleMouseMove}
      onClick={() => setIsExpanded(!isExpanded)}
      role="button"
      tabIndex={0}
      aria-expanded={isExpanded}
    >
      <div 
        ref={cardRef}
        className="flex-grow overflow-hidden flex flex-col items-center relative"
      >
        {/* Wave Effect */}
        <AnimatePresence>
          {!isExpanded && waves.map(wave => (
            <motion.div
              key={wave.id}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={waveVariants}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute w-16 h-16 bg-blue-200 dark:bg-blue-400 rounded-full pointer-events-none"
              style={{
                left: wave.x - 32,
                top: wave.y - 32,
              }}
            />
          ))}
        </AnimatePresence>

        {/* Service Icon */}
        <motion.div 
          className="text-4xl mb-4 w-full flex justify-center"
          animate={{
            scale: isExpanded ? 0.9 : 1,
            rotate: isExpanded ? 180 : 0
          }}
        >
          {icon}
        </motion.div>

        {/* Content */}
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 text-center">
          {title}
        </h3>

        <div className="relative w-full flex-1">
          <div className={`transition-all duration-300 ${isExpanded ? 'max-h-[300px]' : 'max-h-[140px]'}`}>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              {description}
            </p>

            <motion.div
              className="pt-4 border-t border-gray-200 dark:border-gray-700 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: isExpanded ? 1 : 0 }}
            >
              <p className="text-gray-600 dark:text-gray-300">
                {detailedDescription}
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Subtle Show More Indicator */}
      <motion.div
        className="text-blue-600 dark:text-blue-400 font-medium text-center"
        animate={{ 
          opacity: isExpanded ? 0 : 0.8,
          y: isExpanded ? 10 : 0
        }}
      >
        {isExpanded ? 'Show Less' : 'Show More'}
      </motion.div>
    </motion.div>
  );
};

export default ServiceCard;