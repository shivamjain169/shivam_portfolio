import { motion } from 'framer-motion';
import { useReducedMotion } from '../hooks/useReducedMotion';

const Card = ({
  children,
  className = '',
  hover = true,
  gradient = false,
  ...props
}) => {
  const prefersReducedMotion = useReducedMotion();

  const baseClasses = `
    glass rounded-xl p-6 transition-all duration-300
    ${gradient ? 'bg-gradient-to-br from-slate-900/50 to-slate-800/30' : ''}
    ${hover ? 'glass-hover cursor-pointer' : ''}
    ${className}
  `;

  const MotionDiv = prefersReducedMotion ? 'div' : motion.div;

  const animationProps = !prefersReducedMotion && hover ? {
    whileHover: {
      y: -8,
      boxShadow: '0 20px 40px -12px rgba(6, 182, 212, 0.15)'
    },
    transition: { duration: 0.3 }
  } : {};

  return (
    <MotionDiv
      className={baseClasses}
      {...animationProps}
      {...props}
    >
      {children}
    </MotionDiv>
  );
};

export default Card;
