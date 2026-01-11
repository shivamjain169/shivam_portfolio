import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Copy } from 'lucide-react';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { profile } from '../data/profile';
import Section from '../components/Section';
import Card from '../components/Card';
import Button from '../components/Button';

const Contact = () => {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [copied, setCopied] = useState(false);

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

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: profile.email,
      href: `mailto:${profile.email}`,
      copyable: true
    },
    {
      icon: Phone,
      label: 'Phone',
      value: profile.phone,
      href: `tel:${profile.phone}`
    },
    {
      icon: MapPin,
      label: 'Location',
      value: profile.location
    }
  ];

  return (
    <Section
      id="contact"
      title="Get In Touch"
      subtitle="Let's build something amazing together"
    >
      <div ref={ref} className="max-w-4xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-slate-100 mb-4">
                Contact Information
              </h3>
              <p className="text-slate-300 mb-6">
                Feel free to reach out for collaborations, opportunities, or just a friendly chat about technology.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card key={index} hover={false} className="p-4">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3 flex-1">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                          <Icon size={20} />
                        </div>
                        <div className="flex-1">
                          <p className="text-slate-400 text-xs mb-0.5">
                            {info.label}
                          </p>
                          {info.href ? (
                            <a
                              href={info.href}
                              className="text-slate-200 hover:text-primary transition-colors text-sm"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-slate-200 text-sm">
                              {info.value}
                            </p>
                          )}
                        </div>
                      </div>
                      {info.copyable && (
                        <motion.button
                          onClick={copyEmail}
                          className="p-2 rounded-lg hover:bg-slate-700/30 transition-colors focus-ring"
                          whileHover={!prefersReducedMotion ? { scale: 1.1 } : {}}
                          whileTap={!prefersReducedMotion ? { scale: 0.95 } : {}}
                          aria-label="Copy email"
                        >
                          {copied ? (
                            <CheckCircle size={18} className="text-accent" />
                          ) : (
                            <Copy size={18} className="text-slate-400" />
                          )}
                        </motion.button>
                      )}
                    </div>
                  </Card>
                );
              })}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <Card hover={false} gradient>
              <h3 className="text-xl font-semibold text-slate-100 mb-4">
                Send a Message
              </h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-slate-300 text-sm mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-100 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-slate-300 text-sm mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-100 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-slate-300 text-sm mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-100 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  icon={Send}
                  className="w-full"
                >
                  Send Message
                </Button>
                <p className="text-slate-400 text-xs text-center">
                  Note: This form is for demonstration. Configure with Formspree or EmailJS for functionality.
                </p>
              </form>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Contact;
