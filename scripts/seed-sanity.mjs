// Script pour peupler Sanity avec le contenu initial d'Aurora
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'g5k024mq',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_TOKEN, // Token d'écriture requis
});

// ===== SECTION HERO =====
const heroSection = {
  _type: 'heroSection',
  _id: 'heroSection',
  mainTitle: "À l'aube",
  subTitle: 'des connexions',
  accentText: 'durables',
  accompanyText: 'AURORA vous accompagne pour',
  rotatingValues: [
    'Comprendre votre vision',
    'Relier les expertises',
    'Construire l\'excellence',
    'Préserver la cohérence',
  ],
  ctaButtonText: 'Découvrir AURORA en vidéo',
};

// ===== STATISTIQUES =====
const stats = [
  {
    _type: 'stat',
    _id: 'stat-1',
    value: '50+',
    label: 'Projets réalisés',
    colorFrom: 'success',
    colorTo: 'primary',
    order: 1,
  },
  {
    _type: 'stat',
    _id: 'stat-2',
    value: '4',
    label: "Univers d'expertise",
    colorFrom: 'primary',
    colorTo: 'tertiary',
    order: 2,
  },
  {
    _type: 'stat',
    _id: 'stat-3',
    value: '100+',
    label: 'Partenaires du réseau',
    colorFrom: 'tertiary',
    colorTo: 'secondary',
    order: 3,
  },
  {
    _type: 'stat',
    _id: 'stat-4',
    value: '15+',
    label: 'Villes & régions',
    colorFrom: 'secondary',
    colorTo: 'success',
    order: 4,
  },
];

// ===== INFORMATIONS DE CONTACT =====
const contactInfo = {
  _type: 'contactInfo',
  _id: 'contactInfo',
  email: 'contact@aurora-consulting.fr',
  phone: '+33 1 23 45 67 89',
  instagram: 'aurora_consulting',
  twitter: 'aurora_consult',
  linkedin: 'https://linkedin.com/company/aurora-consulting',
  calComLink: 'med-agourram-otzwlb',
  ctaTitle: 'Prêt à faire la différence ?',
  ctaSubtitle: 'Rejoignez les entreprises qui construisent des connexions durables',
};

// ===== TÉMOIGNAGES =====
const testimonials = [
  {
    _type: 'testimonial',
    _id: 'testimonial-1',
    company: 'BAIN & COMPANY',
    quote: "Il est essentiel de trouver un partenaire avec une expertise profonde, comme Aurora, en qui vous pouvez avoir confiance pour sourcer et valider des projets de haute intégrité.",
    personName: 'Sam Israelit',
    personTitle: 'Partner and Chief Sustainability Officer',
    order: 1,
  },
  {
    _type: 'testimonial',
    _id: 'testimonial-2',
    company: 'IFS',
    quote: "Avec le soutien d'Aurora, nous avons opté pour un contrat pluriannuel, offrant une certitude aux développeurs de projets et à notre entreprise.",
    personName: 'Sophie Graham',
    personTitle: 'Chief Sustainability Officer',
    order: 2,
  },
  {
    _type: 'testimonial',
    _id: 'testimonial-3',
    company: 'CHANGE CLIMATE',
    quote: "Aurora a joué un rôle déterminant pour nous aider à naviguer dans les marchés complexes et à trouver les bons projets pour nos objectifs de durabilité.",
    personName: 'Michael Chen',
    personTitle: 'Director of Climate Strategy',
    order: 3,
  },
];

// ===== MÉTHODES AURORA =====
const methods = [
  {
    _type: 'method',
    _id: 'method-1',
    title: 'Méthode Conseil',
    description: 'Accompagnement stratégique pour définir et aligner vos objectifs avec une vision durable et cohérente.',
    color: 'primary',
    order: 1,
  },
  {
    _type: 'method',
    _id: 'method-2',
    title: 'Méthode Formation',
    description: "Développement des compétences et transmission des savoirs pour renforcer l'expertise de vos équipes.",
    color: 'secondary',
    order: 2,
  },
  {
    _type: 'method',
    _id: 'method-3',
    title: 'Méthode Intégration',
    description: 'Mise en œuvre harmonieuse de solutions adaptées à votre environnement et vos processus existants.',
    color: 'tertiary',
    order: 3,
  },
  {
    _type: 'method',
    _id: 'method-4',
    title: 'Méthode Optimisation',
    description: 'Amélioration continue de vos performances et processus pour maximiser votre efficacité opérationnelle.',
    color: 'success',
    order: 4,
  },
  {
    _type: 'method',
    _id: 'method-5',
    title: 'Méthode Accompagnement',
    description: 'Suivi personnalisé et support continu pour garantir la pérennité de vos transformations.',
    color: 'accent',
    order: 5,
  },
];

// ===== ARTICLES BLOG =====
const blogPosts = [
  {
    _type: 'blogPost',
    _id: 'blog-1',
    title: '25,000+ projets',
    subtitle: 'Comment Aurora centralise le marché du conseil',
    category: 'COMPANY UPDATES',
    description: "Le marché du conseil de demain : Comment Aurora crée de la clarté dans la complexité",
    publishedAt: new Date().toISOString(),
    order: 1,
  },
  {
    _type: 'blogPost',
    _id: 'blog-2',
    title: 'Standards Corporate',
    subtitle: 'Net-Zero Standard 2.0',
    category: 'AURORA PERSPECTIVES',
    description: "Standards Corporate Net-Zero 2.0 : Ce qui change et pourquoi c'est important",
    publishedAt: new Date().toISOString(),
    order: 2,
  },
  {
    _type: 'blogPost',
    _id: 'blog-3',
    title: 'Confiance et sécurité',
    subtitle: "Notre philosophie sur l'intégrité",
    category: 'COMPANY UPDATES',
    description: "L'approche Aurora en matière de confiance et de sécurité",
    publishedAt: new Date().toISOString(),
    order: 3,
  },
];

// ===== NAVIGATION =====
const navigation = {
  _type: 'navigation',
  _id: 'navigation',
  logoText: 'AURORA',
  menuItems: [
    {
      _key: 'menu-1',
      label: 'Nos Univers',
      subItems: [
        { _key: 'sub-1-1', label: 'Espace', href: '#espace' },
        { _key: 'sub-1-2', label: 'Expérience', href: '#experience' },
        { _key: 'sub-1-3', label: 'Structure', href: '#structure' },
        { _key: 'sub-1-4', label: 'Image', href: '#image' },
      ],
    },
    {
      _key: 'menu-2',
      label: 'Méthode AURORA',
      subItems: [
        { _key: 'sub-2-1', label: 'Observer', href: '#observer' },
        { _key: 'sub-2-2', label: 'Orienter', href: '#orienter' },
        { _key: 'sub-2-3', label: 'Structurer', href: '#structurer' },
        { _key: 'sub-2-4', label: 'Accompagner', href: '#accompagner' },
        { _key: 'sub-2-5', label: 'Préserver', href: '#preserver' },
      ],
    },
    {
      _key: 'menu-3',
      label: 'Réseau',
      href: '#network',
    },
    {
      _key: 'menu-4',
      label: "L'Âme",
      subItems: [
        { _key: 'sub-4-1', label: 'Manifeste', href: '#manifeste' },
        { _key: 'sub-4-2', label: 'Origines', href: '#origines' },
        { _key: 'sub-4-3', label: 'Valeurs', href: '#valeurs' },
      ],
    },
    {
      _key: 'menu-5',
      label: 'Les Connexions Durables',
      href: '#magazine',
    },
  ],
  ctaButtonText: 'Nous contacter',
};

// ===== PIED DE PAGE =====
const footer = {
  _type: 'footer',
  _id: 'footer',
  logoText: 'Aurora',
  description: 'Accélérer les solutions durables pour un avenir meilleur.',
  linkCategories: [
    {
      _key: 'cat-1',
      title: 'Produit',
      links: [
        { _key: 'link-1-1', label: 'Conseil', href: '#conseil' },
        { _key: 'link-1-2', label: 'Plateforme', href: '#plateforme' },
        { _key: 'link-1-3', label: 'API', href: '#api' },
        { _key: 'link-1-4', label: 'Tarifs', href: '#tarifs' },
      ],
    },
    {
      _key: 'cat-2',
      title: 'Entreprise',
      links: [
        { _key: 'link-2-1', label: 'À propos', href: '#about' },
        { _key: 'link-2-2', label: 'Équipe', href: '#team' },
        { _key: 'link-2-3', label: 'Carrières', href: '#careers' },
        { _key: 'link-2-4', label: 'Contact', href: '#contact' },
      ],
    },
    {
      _key: 'cat-3',
      title: 'Ressources',
      links: [
        { _key: 'link-3-1', label: 'Blog', href: '#blog' },
        { _key: 'link-3-2', label: 'Documentation', href: '#docs' },
        { _key: 'link-3-3', label: 'Rapports', href: '#reports' },
        { _key: 'link-3-4', label: 'Aide', href: '#help' },
      ],
    },
    {
      _key: 'cat-4',
      title: 'Légal',
      links: [
        { _key: 'link-4-1', label: 'Confidentialité', href: '#privacy' },
        { _key: 'link-4-2', label: 'Conditions', href: '#terms' },
        { _key: 'link-4-3', label: 'Sécurité', href: '#security' },
        { _key: 'link-4-4', label: 'Conformité', href: '#compliance' },
      ],
    },
  ],
  copyright: '© 2025 Aurora. Tous droits réservés.',
  socialLinks: [
    { _key: 'social-1', platform: 'Twitter', url: 'https://twitter.com/aurora' },
    { _key: 'social-2', platform: 'LinkedIn', url: 'https://linkedin.com/company/aurora' },
    { _key: 'social-3', platform: 'Instagram', url: 'https://instagram.com/aurora' },
  ],
};

// ===== LOGOS PARTENAIRES =====
const partnerLogos = {
  _type: 'partnerLogos',
  _id: 'partnerLogos',
  logos: [
    'MIRAKI',
    'STARLING BANK',
    'AVIVA',
    'IFS',
    'CHANGE CLIMATE',
    'AUTODESK',
    'IEQT',
    'BAIN & COMPANY',
  ],
};

// ===== FONCTION PRINCIPALE =====
async function seedContent() {
  console.log('🚀 Début du peuplement de Sanity...\n');

  const allDocuments = [
    heroSection,
    ...stats,
    contactInfo,
    ...testimonials,
    ...methods,
    ...blogPosts,
    navigation,
    footer,
    partnerLogos,
  ];

  for (const doc of allDocuments) {
    try {
      await client.createOrReplace(doc);
      console.log(`✅ Créé: ${doc._type} (${doc._id})`);
    } catch (error) {
      console.error(`❌ Erreur pour ${doc._type}:`, error.message);
    }
  }

  console.log('\n🎉 Peuplement terminé !');
  console.log('Rafraîchissez votre site pour voir les changements.');
}

seedContent();
