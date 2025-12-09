import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Heart, ArrowUp } from 'lucide-react';
import { socialLinks } from '../data';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-light" />
      <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-white/10">
          {/* Logo */}
          <a href="#hero" className="text-2xl font-bold gradient-text">
            Portfolio
          </a>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {[
              { icon: Github, href: socialLinks.github, label: 'GitHub' },
              { icon: Linkedin, href: socialLinks.linkedin, label: 'LinkedIn' },
            ].filter(link => link.href).map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-3 rounded-xl glass text-gray-400 hover:text-white hover:border-primary/50 transition-colors"
                aria-label={label}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-xl glass text-gray-400 hover:text-white hover:border-primary/50 transition-colors"
            aria-label="Retour en haut"
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>

        {/* Bottom section */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm flex items-center gap-2">
            © {currentYear} - Conçu et développé avec
            <Heart size={14} className="text-accent animate-pulse" />
            et beaucoup de
            <span className="text-2xl">☕</span>
          </p>

          <p className="text-gray-600 text-sm">
            Fait avec React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};
