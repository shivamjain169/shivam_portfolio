import { motion } from 'framer-motion';
import { useReducedMotion } from '../hooks/useReducedMotion';

const Badge = ({ children, variant = 'default', className = '' }) => {
  const prefersReducedMotion = useReducedMotion();

  const variants = {
    default: 'bg-slate-800/50 border-slate-700/50 text-slate-300',
    primary: 'bg-primary/10 border-primary/30 text-primary',
    accent: 'bg-accent/10 border-accent/30 text-accent',
    gradient: 'bg-gradient-to-r from-primary/10 to-accent/10 border-primary/30 text-slate-200'
  };

  const MotionWrapper = prefersReducedMotion ? 'span' : motion.span;

  return (
    <MotionWrapper
      className={`
        inline-flex items-center px-3 py-1 rounded-full text-sm font-medium
        border backdrop-blur-sm transition-colors
        ${variants[variant]}
        ${className}
      `}
      whileHover={!prefersReducedMotion ? { scale: 1.05, y: -2 } : {}}
      transition={{ duration: 0.2 }}
    >
      {children}
    </MotionWrapper>
  );
};

export default Badge;
