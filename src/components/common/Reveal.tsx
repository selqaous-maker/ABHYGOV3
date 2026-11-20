import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  yOffset?: number;
  className?: string;
}

const EASE_CURVE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const Reveal: React.FC<RevealProps> = ({
  children,
  delay = 0,
  yOffset = 12,
  className = '',
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.36, delay, ease: EASE_CURVE }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
