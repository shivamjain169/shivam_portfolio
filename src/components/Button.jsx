import { motion } from 'framer-motion';
import { useReducedMotion } from '../hooks/useReducedMotion';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  icon: Icon,
  ...props
}) => {
  const prefersReducedMotion = useReducedMotion();

  const variants = {
    primary: 'bg-gradient-to-r from-primary to-primary-dark hover:from-primary-light hover:to-primary text-white shadow-lg shadow-primary/25',
    secondary: 'bg-slate-800/50 hover:bg-slate-700/50 text-slate-200 border border-slate-700/50',
    outline: 'bg-transparent hover:bg-slate-800/30 text-slate-300 border border-slate-600/50 hover:border-slate-500/50',
    ghost: 'bg-transparent hover:bg-slate-800/30 text-slate-300'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const baseClasses = `
    inline-flex items-center justify-center gap-2 rounded-lg font-medium
    transition-all duration-300 focus-ring
    ${variants[variant]}
    ${sizes[size]}
    ${className}
  `;

  const MotionComponent = prefersReducedMotion ? (href ? 'a' : 'button') : motion[href ? 'a' : 'button'];

  const animationProps = !prefersReducedMotion ? {
    whileHover: { scale: 1.05, y: -2 },
    whileTap: { scale: 0.98 },
    transition: { duration: 0.2 }
  } : {};

  if (href) {
    return (
      <MotionComponent
        href={href}
        className={baseClasses}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        {...animationProps}
        {...props}
      >
        {Icon && <Icon size={18} />}
        {children}
      </MotionComponent>
    );
  }

  return (
    <MotionComponent
      onClick={onClick}
      className={baseClasses}
      {...animationProps}
      {...props}
    >
      {Icon && <Icon size={18} />}
      {children}
    </MotionComponent>
  );
};

export default Button;
