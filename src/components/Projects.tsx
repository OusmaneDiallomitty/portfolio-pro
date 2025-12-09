import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { projects } from '../data';

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative rounded-3xl overflow-hidden card-hover"
    >
      {/* Gradient border */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent p-[1px] rounded-3xl">
        <div className="absolute inset-[1px] bg-dark-light rounded-3xl" />
      </div>

      <div className="relative">
        {/* Image container */}
        <div className="relative h-64 overflow-hidden rounded-t-3xl">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.6 }}
            loading="lazy"
          />
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-light via-dark-light/50 to-transparent" />
          
          {/* Hover overlay with links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute inset-0 bg-dark/80 backdrop-blur-sm flex items-center justify-center gap-4"
          >
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ scale: 0 }}
                animate={{ scale: isHovered ? 1 : 0 }}
                transition={{ duration: 0.2, delay: 0.1 }}
                className="p-4 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Voir sur GitHub"
              >
                <Github size={24} />
              </motion.a>
            )}
            {project.demo && (
              <motion.a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ scale: 0 }}
                animate={{ scale: isHovered ? 1 : 0 }}
                transition={{ duration: 0.2, delay: 0.2 }}
                className="p-4 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Voir la démo"
              >
                <ExternalLink size={24} />
              </motion.a>
            )}
          </motion.div>

          {/* Project number */}
          <div className="absolute top-4 left-4">
            <span className="text-6xl font-bold text-white/10">
              0{index + 1}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="relative p-6 bg-dark-light rounded-b-3xl">
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-400 mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* View more link */}
          <motion.div
            className="flex items-center gap-2 text-sm text-gray-500 group-hover:text-primary transition-colors"
            animate={{ x: isHovered ? 5 : 0 }}
          >
            <span>Voir le projet</span>
            <ArrowRight size={16} />
          </motion.div>
        </div>
      </div>
    </motion.article>
  );
};

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-light" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6" ref={ref}>
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 rounded-full glass text-accent text-sm font-medium mb-4"
          >
            Portfolio
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
          >
            Mes{' '}
            <span className="gradient-text">réalisations</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Découvrez une sélection de projets sur lesquels j'ai travaillé.
            Chaque projet est une opportunité d'apprendre et de créer.
          </motion.p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 glass text-gray-300 hover:text-white hover:border-primary/50 rounded-xl transition-all"
          >
            <Github size={20} />
            Voir plus sur GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};
