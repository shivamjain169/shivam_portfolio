import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award } from 'lucide-react';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { certifications } from '../data/experience';
import Section from '../components/Section';
import Card from '../components/Card';

const Certifications = () => {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0.01 : 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: prefersReducedMotion ? 0.01 : 0.5
      }
    }
  };

  return (
    <Section
      id="certifications"
      title="Certifications"
      subtitle="Validated expertise in cloud and data technologies"
    >
      <div ref={ref} className="max-w-3xl mx-auto">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {certifications.map((cert, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card hover gradient>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent/10 text-accent">
                    <Award size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-100 mb-1">
                      {cert.name}
                    </h3>
                    <p className="text-primary text-sm font-medium mb-1">
                      {cert.code}
                    </p>
                    <p className="text-slate-400 text-sm">
                      {cert.issuer} • {cert.date}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};

export default Certifications;
