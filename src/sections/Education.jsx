import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap } from 'lucide-react';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { education } from '../data/experience';
import Section from '../components/Section';
import Card from '../components/Card';

const Education = () => {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0.01 : 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: prefersReducedMotion ? 0.01 : 0.5
      }
    }
  };

  return (
    <Section
      id="education"
      title="Education"
      subtitle="Strong foundation in computer science and engineering"
    >
      <div ref={ref} className="max-w-3xl mx-auto">
        <motion.div
          className="space-y-6"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {education.map((edu, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card hover={false} gradient>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <GraduationCap size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-slate-100 mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-primary font-medium mb-1">
                      {edu.institution}
                    </p>
                    <p className="text-slate-400 text-sm mb-2">
                      {edu.duration} • Grade: {edu.grade}
                    </p>
                    {edu.description && (
                      <p className="text-slate-300 text-sm">
                        {edu.description}
                      </p>
                    )}
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

export default Education;
