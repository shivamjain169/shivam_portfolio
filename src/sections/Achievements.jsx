import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Trophy, Award, Medal, GraduationCap, Flag } from 'lucide-react';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { achievements } from '../data/experience';
import Section from '../components/Section';
import Card from '../components/Card';

const iconMap = {
  Trophy,
  Award,
  Medal,
  GraduationCap,
  Flag
};

const Achievements = () => {
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
    hidden: { opacity: 0, y: 30 },
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
      id="achievements"
      title="Achievements"
      subtitle="Recognition for innovation and excellence"
    >
      <div ref={ref} className="max-w-4xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {achievements.map((achievement, index) => {
            const Icon = iconMap[achievement.icon] || Trophy;
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card hover gradient>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 text-primary">
                      <Icon size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-slate-100 mb-1">
                        {achievement.title}
                      </h3>
                      <p className="text-primary text-sm font-medium mb-2">
                        {achievement.organization}
                      </p>
                      <p className="text-slate-400 text-sm">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </Section>
  );
};

export default Achievements;
