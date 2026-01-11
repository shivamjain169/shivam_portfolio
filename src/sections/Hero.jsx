import { motion } from 'framer-motion';
import { Github, Linkedin, FileDown, ChevronDown } from 'lucide-react';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { profile } from '../data/profile';
import Button from '../components/Button';
import Badge from '../components/Badge';

const Hero = () => {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0.01 : 0.2,
        delayChildren: prefersReducedMotion ? 0.01 : 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.01 : 0.6,
        ease: 'easeOut'
      }
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

      <div className="container-custom relative z-10 pt-20">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Greeting */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              Welcome to my portfolio
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-7xl font-semibold tracking-tight mb-6 leading-tight"
          >
            {profile.name}
            <br />
            <span className="gradient-text">
              {profile.title}
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl lg:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            {profile.headline}
          </motion.p>

          {/* Tech Stack */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base text-slate-400 mb-12 max-w-2xl mx-auto"
          >
            {profile.subheadline}
          </motion.p>

          {/* Impact Highlights */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {profile.impactHighlights.map((highlight, index) => (
              <Badge key={index} variant="gradient">
                {highlight}
              </Badge>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button
              size="lg"
              onClick={scrollToProjects}
            >
              View Projects
            </Button>
            <Button
              variant="secondary"
              size="lg"
              href={profile.resumeUrl}
              icon={FileDown}
            >
              Download Resume
            </Button>
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                href={profile.github}
                icon={Github}
                aria-label="GitHub"
              />
              <Button
                variant="ghost"
                href={profile.linkedin}
                icon={Linkedin}
                aria-label="LinkedIn"
              />
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center"
          >
            <motion.button
              onClick={scrollToProjects}
              className="flex flex-col items-center gap-2 text-slate-400 hover:text-primary transition-colors focus-ring rounded-lg p-2"
              animate={!prefersReducedMotion ? {
                y: [0, 10, 0]
              } : {}}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              aria-label="Scroll to projects"
            >
              <span className="text-sm">Explore my work</span>
              <ChevronDown size={24} />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
