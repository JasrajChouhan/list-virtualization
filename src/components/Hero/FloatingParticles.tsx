import { motion } from 'framer-motion';

export function FloatingParticles() {
  return (
    <div className="absolute inset-0 z-0">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-2 w-2 rounded-full bg-blue-500/30 dark:bg-blue-400/30"
          animate={{
            x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
            y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
          }}
          transition={{
            duration: Math.random() * 10 + 5,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      ))}
    </div>
  );
}
