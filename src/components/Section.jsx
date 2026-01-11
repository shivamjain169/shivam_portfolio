import { motion } from 'framer-motion';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Section = ({
  id,
  title,
  subtitle,
  children,
  className = ''
}) => {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.01 : 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section
      id={id}
      ref={ref}
      className={`section-spacing ${className}`}
    >
      <div className="container-custom">
        {(title || subtitle) && (
          <motion.div
            className="mb-12 text-center"
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeUpVariants}
          >
            {title && (
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight mb-3">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
