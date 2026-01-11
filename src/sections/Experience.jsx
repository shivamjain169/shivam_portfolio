import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronDown, ChevronUp, Briefcase } from 'lucide-react';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { experience } from '../data/experience';
import Section from '../components/Section';
import Card from '../components/Card';

const Experience = () => {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [expandedCategories, setExpandedCategories] = useState({});

  const toggleCategory = (companyIndex, categoryIndex) => {
    const key = `${companyIndex}-${categoryIndex}`;
    setExpandedCategories(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

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
      id="experience"
      title="Work Experience"
      subtitle="Building real-time, high-performance systems at scale"
    >
      <div ref={ref} className="max-w-4xl mx-auto">
        <motion.div
          className="space-y-8"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {experience.map((exp, companyIndex) => (
            <motion.div key={companyIndex} variants={itemVariants}>
              <Card hover={false} gradient>
                {/* Company Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Briefcase size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-semibold text-slate-100 mb-1">
                      {exp.position}
                    </h3>
                    <p className="text-primary font-medium mb-1">
                      {exp.company}
                    </p>
                    <p className="text-slate-400 text-sm">
                      {exp.duration} • {exp.location}
                    </p>
                  </div>
                </div>

                {/* Achievements by Category */}
                <div className="space-y-6">
                  {exp.achievements.map((achievement, categoryIndex) => {
                    const key = `${companyIndex}-${categoryIndex}`;
                    const isExpanded = expandedCategories[key] ?? true;

                    return (
                      <div key={categoryIndex} className="border-l-2 border-primary/30 pl-4">
                        <button
                          onClick={() => toggleCategory(companyIndex, categoryIndex)}
                          className="flex items-center justify-between w-full text-left mb-3 focus-ring rounded"
                        >
                          <h4 className="text-lg font-semibold text-slate-200">
                            {achievement.category}
                          </h4>
                          {isExpanded ? (
                            <ChevronUp size={20} className="text-slate-400" />
                          ) : (
                            <ChevronDown size={20} className="text-slate-400" />
                          )}
                        </button>

                        <motion.ul
                          className="space-y-2"
                          initial={false}
                          animate={{
                            height: isExpanded ? 'auto' : 0,
                            opacity: isExpanded ? 1 : 0
                          }}
                          transition={{
                            duration: prefersReducedMotion ? 0.01 : 0.3
                          }}
                          style={{ overflow: 'hidden' }}
                        >
                          {achievement.items.map((item, itemIndex) => (
                            <li
                              key={itemIndex}
                              className="text-slate-300 text-sm sm:text-base flex items-start gap-2"
                            >
                              <span className="text-accent mt-1.5">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </motion.ul>
                      </div>
                    );
                  })}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};

export default Experience;
