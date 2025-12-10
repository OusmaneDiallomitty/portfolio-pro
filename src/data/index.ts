import type { Project, Experience, NavLink } from '../types';

// ============================================
// MODIFIE TES INFOS ICI
// ============================================

export const personalInfo = {
  name: 'Ousmane Diallo',
  title: 'Développeur Web & Mobile',
  location: 'Conakry, Guinée',
  email: 'ousmanedmitty@gmail.com',
  phone: '+224 626 13 26 14',
  cvFr: '/cv-fr.pdf',
  cvEn: '/cv-en.pdf',
};

export const socialLinks = {
  github: 'https://github.com/OusmaneDiallomitty',
  linkedin: 'https://www.linkedin.com/in/ousmane-diallo-188306343/',
  twitter: '',
};

// ============================================

export const navLinks: NavLink[] = [
  { label: 'Accueil', href: '#hero' },
  { label: 'À propos', href: '#about' },
  { label: 'Compétences', href: '#skills' },
  { label: 'Projets', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const skills = {
  frontend: [
    { name: 'HTML/CSS', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 85 },
    { name: 'Next.js', level: 75 },
  ],
  backend: [
    { name: 'Node.js', level: 75 },
    { name: 'Express', level: 70 },
    { name: 'PostgreSQL', level: 70 },
    { name: 'MongoDB', level: 65 },
  ],
  cms: [
    { name: 'WordPress', level: 80 },
  ],
  tools: [
    { name: 'Git', level: 80 },
    { name: 'VS Code', level: 90 },
    { name: 'IA / Vibecoding', level: 85 },
    { name: 'Figma', level: 70 },
  ],
};

export const projects: Project[] = [
  {
    id: 1,
    title: 'PP-EIB — Pointage de Présence',
    description: 'Application web de suivi de présence pour l\'école Elhadj Ibrahima Barry. Permet le suivi en temps réel des élèves, facilite la gestion administrative et offre aux parents un accès aux présences de leurs enfants.',
    image: '/projet-pointage.png',
    tags: ['React', 'Tailwind', 'Node.js', 'PostgreSQL'],
    github: 'https://github.com/OusmaneDiallomitty/soutenance',
  },
  {
    id: 2,
    title: 'Vente de Billets en Ligne',
    description: 'Application web de vente et d\'achat de billets en ligne. Permet aux utilisateurs de parcourir, acheter et gérer leurs billets pour différents événements.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop',
    tags: ['React', 'TypeScript', 'Tailwind', 'Node.js', 'MongoDB'],
    github: 'https://github.com/OusmaneDiallomitty/Projet-ticket',
  },
  {
    id: 3,
    title: 'App Épargne & Transfert',
    description: 'Application mobile d\'épargne et de transfert d\'argent entre utilisateurs. Interface intuitive pensée pour faciliter la gestion financière au quotidien. Projet en cours de développement.',
    image: '/projet-epargne.png',
    tags: ['React Native', 'TypeScript', 'Next.js', 'PostgreSQL', 'Redis', 'Prisma'],
    github: 'https://github.com/OusmaneDiallomitty',
  },
];

export const experiences: Experience[] = [
  {
    id: 1,
    title: 'Développeur Web & Mobile',
    company: 'Freelance / Projets personnels',
    period: '2024 - Présent',
    description: 'Développement d\'applications web et mobiles. Spécialisé en React, Next.js et Node.js.',
  },
];
