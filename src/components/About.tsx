import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Smartphone, Rocket, Zap, Coffee, Heart } from 'lucide-react';
import { personalInfo } from '../data';

const stats = [
  { value: '1+', label: 'Année d\'expérience' },
  { value: '7+', label: 'Projets réalisés' },
  { value: '100%', label: 'Motivation' },
];

const features = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Code lisible, maintenable et bien structuré.',
    color: 'from-primary to-purple-400',
  },
  {
    icon: Smartphone,
    title: 'Responsive',
    description: 'Sites et apps adaptés à tous les écrans.',
    color: 'from-secondary to-cyan-400',
  },
  {
    icon: Rocket,
    title: 'Performance',
    description: 'Applications rapides et optimisées.',
    color: 'from-accent to-pink-400',
  },
  {
    icon: Zap,
    title: 'Moderne',
    description: 'Technologies actuelles et bonnes pratiques.',
    color: 'from-yellow-500 to-orange-400',
  },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-dark-light" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px]" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-2 rounded-full glass text-primary text-sm font-medium mb-4"
            >
              À propos
            </motion.span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Passionné par le{' '}
              <span className="gradient-text">développement</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Je crée des expériences digitales modernes et performantes.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-16">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center p-6 rounded-2xl glass card-hover"
              >
                <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  Je suis <span className="text-white font-semibold">{personalInfo.name}</span>, 
                  développeur web et mobile basé à <span className="text-primary">{personalInfo.location}</span>.
                </p>
                <p>
                  Avec 1 an d'expérience, je me spécialise dans la création d'applications 
                  avec <span className="text-secondary">React</span>, <span className="text-secondary">Next.js</span> et 
                  <span className="text-secondary"> Node.js</span>. Je maîtrise aussi WordPress pour des projets plus rapides.
                </p>
                <p>
                  J'utilise l'IA comme outil pour accélérer mon développement (vibecoding), 
                  tout en <span className="text-white">vérifiant et comprenant chaque ligne de code</span> que je produis.
                </p>
                <p className="flex items-center gap-2 text-gray-400">
                  <Coffee size={18} className="text-primary" />
                  Toujours en apprentissage
                  <Heart size={18} className="text-accent" />
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                <motion.a
                  href={personalInfo.cvFr}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-xl hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] transition-shadow"
                >
                  CV Français
                </motion.a>
                <motion.a
                  href={personalInfo.cvEn}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-6 py-3 glass text-white font-medium rounded-xl hover:bg-white/10 transition-all"
                >
                  CV English
                </motion.a>
              </div>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="group p-6 rounded-2xl glass card-hover"
                >
                  <div className={`w-12 h-12 mb-4 rounded-xl bg-gradient-to-br ${feature.color} p-0.5`}>
                    <div className="w-full h-full rounded-xl bg-dark-light flex items-center justify-center">
                      <feature.icon size={20} className="text-white" />
                    </div>
                  </div>
                  <h3 className="text-white font-semibold mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
