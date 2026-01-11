import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { profile } from '../data/profile';

const Footer = () => {
  const prefersReducedMotion = useReducedMotion();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth'
    });
  };

  return (
    <footer className="relative bg-slate-950 border-t border-slate-800/50">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-3">
              Shivam Jain
            </h3>
            <p className="text-slate-400 text-sm">
              Full-Stack Developer specializing in real-time, high-throughput systems
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-slate-200 font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-slate-400 hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-slate-200 font-semibold mb-3">Connect</h4>
            <div className="flex gap-3">
              <motion.a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-slate-800/50 text-slate-300 hover:text-primary transition-colors focus-ring"
                whileHover={!prefersReducedMotion ? { scale: 1.1, y: -2 } : {}}
                aria-label="GitHub"
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-slate-800/50 text-slate-300 hover:text-primary transition-colors focus-ring"
                whileHover={!prefersReducedMotion ? { scale: 1.1, y: -2 } : {}}
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href={`mailto:${profile.email}`}
                className="p-3 rounded-lg bg-slate-800/50 text-slate-300 hover:text-primary transition-colors focus-ring"
                whileHover={!prefersReducedMotion ? { scale: 1.1, y: -2 } : {}}
                aria-label="Email"
              >
                <Mail size={20} />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm text-center sm:text-left">
            © {currentYear} Shivam Jain. Built with React + Tailwind + Framer Motion
          </p>

          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            className="p-3 rounded-lg bg-slate-800/50 text-slate-300 hover:text-primary transition-colors focus-ring"
            whileHover={!prefersReducedMotion ? { scale: 1.1, y: -2 } : {}}
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
