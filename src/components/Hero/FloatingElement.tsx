import React from 'react';
import { motion } from 'framer-motion';

const FloatingElement: React.FC = () => {
  return (
    <motion.div
      className="absolute top-24 right-8 z-10 hidden sm:block"
      animate={{
        y: [0, -10, 0],
        rotate: [0, 5, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <div className="w-16 h-16 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-white rounded-lg opacity-20 blur-xl" />
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-black to-white rounded-lg"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </motion.div>
  );
};

export default FloatingElement;
