import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

interface HeroContentProps {
  onGetStarted: () => void;
}

export function HeroContent({ onGetStarted }: HeroContentProps) {
  return (
    <div className="z-10 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-6 text-5xl font-bold text-gray-900 dark:text-white md:text-6xl lg:text-7xl"
      >
        Welcome to <span className="text-blue-600 dark:text-blue-400">Modern React</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-8 text-lg text-gray-600 dark:text-gray-300"
      >
        Experience the power of modern web development
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Button onClick={onGetStarted}>Get Started</Button>
      </motion.div>
    </div>
  );
}
