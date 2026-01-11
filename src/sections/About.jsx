import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Zap, Database, Eye } from 'lucide-react';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { profile } from '../data/profile';
import Section from '../components/Section';
import Card from '../components/Card';

const highlights = [
  {
    icon: Code2,
    title: 'End-to-End Delivery',
    description: 'Full-stack development from architecture to deployment'
  },
  {
    icon: Zap,
    title: 'Performance Expert',
    description: '35-50% improvements in CPU, database, and frontend metrics'
  },
  {
    icon: Database,
    title: 'Real-Time Systems',
    description: 'WebSocket pipelines and microservices architecture'
  },
  {
    icon: Eye,
    title: 'Observability Advocate',
    description: 'Robust logging, monitoring, and analytics implementation'
  }
];

const About = () => {
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
      id="about"
      title="About Me"
      subtitle="Building scalable systems with measurable impact"
    >
      <div ref={ref} className="max-w-4xl mx-auto">
        {/* Main Description */}
        <motion.div
          className="mb-12 space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {profile.about.map((paragraph, index) => (
            <motion.p key={index} variants={itemVariants}>
              {paragraph}
            </motion.p>
          ))}
        </motion.div>

        {/* Highlights Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card hover gradient>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <Icon size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-slate-100 mb-2">
                        {highlight.title}
                      </h3>
                      <p className="text-slate-400 text-sm">
                        {highlight.description}
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

export default About;
