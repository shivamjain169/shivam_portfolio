import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { skills } from '../data/skills';
import Section from '../components/Section';
import Badge from '../components/Badge';

const Skills = () => {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0.01 : 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: prefersReducedMotion ? 0.01 : 0.4
      }
    }
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.01 : 0.5
      }
    }
  };

  return (
    <Section
      id="skills"
      title="Skills & Technologies"
      subtitle="Technologies I work with to build scalable solutions"
    >
      <div ref={ref} className="max-w-5xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {Object.entries(skills).map(([key, category]) => (
            <motion.div
              key={key}
              className="glass rounded-xl p-6"
              variants={categoryVariants}
            >
              <h3 className="text-xl font-semibold text-slate-100 mb-4">
                {category.title}
              </h3>
              <motion.div
                className="flex flex-wrap gap-2"
                variants={containerVariants}
              >
                {category.items.map((skill, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <Badge
                      variant={skill.level === 'expert' ? 'primary' : 'default'}
                      className="text-sm"
                    >
                      {skill.name}
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};

export default Skills;
