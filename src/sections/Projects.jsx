import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, Package, FileText } from 'lucide-react';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { projects, projectCategories } from '../data/projects';
import Section from '../components/Section';
import Card from '../components/Card';
import Badge from '../components/Badge';
import Button from '../components/Button';

const Projects = () => {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category.includes(selectedCategory));

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
      id="projects"
      title="Featured Projects"
      subtitle="Building solutions that solve real problems"
    >
      <div ref={ref}>
        {/* Category Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {projectCategories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`
                px-4 py-2 rounded-lg text-sm font-medium transition-all focus-ring
                ${selectedCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50'
                }
              `}
              variants={itemVariants}
              whileHover={!prefersReducedMotion ? { scale: 1.05, y: -2 } : {}}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              layout
            >
              <Card hover gradient className="h-full flex flex-col">
                {/* Project Header */}
                <div className="mb-4">
                  {project.featured && (
                    <Badge variant="accent" className="mb-3">
                      Featured
                    </Badge>
                  )}
                  <h3 className="text-xl font-semibold text-slate-100 mb-1">
                    {project.title}
                  </h3>
                  <p className="text-primary text-sm font-medium">
                    {project.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-sm mb-4 flex-1">
                  {project.description}
                </p>

                {/* Problem & Solution */}
                <div className="space-y-3 mb-4 text-sm">
                  <div className="border-l-2 border-accent/30 pl-3">
                    <p className="text-slate-400 mb-1">Problem:</p>
                    <p className="text-slate-300">{project.problem}</p>
                  </div>
                  <div className="border-l-2 border-primary/30 pl-3">
                    <p className="text-slate-400 mb-1">Solution:</p>
                    <p className="text-slate-300">{project.solution}</p>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="default">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Outcome */}
                <div className="p-3 rounded-lg bg-accent/5 border border-accent/20 mb-4">
                  <p className="text-accent text-sm font-medium">
                    {project.outcome}
                  </p>
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-2">
                  {project.links.github && (
                    <Button
                      variant="outline"
                      size="sm"
                      href={project.links.github}
                      icon={Github}
                    >
                      Code
                    </Button>
                  )}
                  {project.links.demo && (
                    <Button
                      variant="outline"
                      size="sm"
                      href={project.links.demo}
                      icon={ExternalLink}
                    >
                      Demo
                    </Button>
                  )}
                  {project.links.npm && (
                    <Button
                      variant="outline"
                      size="sm"
                      href={project.links.npm}
                      icon={Package}
                    >
                      NPM
                    </Button>
                  )}
                  {project.links.documentation && (
                    <Button
                      variant="outline"
                      size="sm"
                      href={project.links.documentation}
                      icon={FileText}
                    >
                      Docs
                    </Button>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-slate-400">No projects found in this category.</p>
          </motion.div>
        )}
      </div>
    </Section>
  );
};

export default Projects;
