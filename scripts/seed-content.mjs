import { createClient } from '@sanity/client';

// Client Sanity avec token d'écriture
const client = createClient({
  projectId: 'g5k024mq',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_WRITE_TOKEN, // Token avec droits d'écriture
});

// ============ HERO SECTION ============
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

// ============ STATISTIQUES ============
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

// ============ TÉMOIGNAGES ============
const testimonials = [
  {
    _type: 'testimonial',
    _id: 'testimonial-1',
    company: 'BAIN & COMPANY',
    quote: "It's important to find a partner with deep expertise, like Aurora, who you can trust to source and diligence high-integrity projects.",
    personName: 'Sam Israelit',
    personTitle: 'Partner and Chief Sustainability Officer',
    order: 1,
  },
  {
    _type: 'testimonial',
    _id: 'testimonial-2',
    company: 'IFS',
    quote: "With Aurora's support we chose a multi-year contract, providing certainty to the project developers and to our business.",
    personName: 'Sophie Graham',
    personTitle: 'Chief Sustainability Officer',
    order: 2,
  },
  {
    _type: 'testimonial',
    _id: 'testimonial-3',
    company: 'CHANGE CLIMATE',
    quote: 'Aurora has been instrumental in helping us navigate the complex markets and find the right projects for our sustainability goals.',
    personName: 'Michael Chen',
    personTitle: 'Director of Climate Strategy',
    order: 3,
  },
];

// ============ ARTICLES DE BLOG ============
const blogPosts = [
  {
    _type: 'blogPost',
    _id: 'blog-1',
    title: '25,000+ projects',
    subtitle: 'How Aurora centralizes the voluntary carbon market',
    category: 'COMPANY UPDATES',
    description: 'The carbon market of the future: How Aurora is creating clarity out of complexity',
    publishedAt: new Date().toISOString(),
    order: 1,
  },
  {
    _type: 'blogPost',
    _id: 'blog-2',
    title: 'SBTi Draft Corporate',
    subtitle: 'Net-Zero Standard 2.0',
    category: 'AURORA PERSPECTIVES',
    description: "SBTi Draft Corporate Net-Zero Standard 2.0: What's new and why it matters",
    publishedAt: new Date().toISOString(),
    order: 2,
  },
  {
    _type: 'blogPost',
    _id: 'blog-3',
    title: 'Trust and safety',
    subtitle: 'Our philosophy on integrity',
    category: 'COMPANY UPDATES',
    description: 'The Aurora approach to trust and safety',
    publishedAt: new Date().toISOString(),
    order: 3,
  },
];

// ============ MÉTHODES AURORA ============
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

// ============ NAVIGATION ============
const navigation = {
  _type: 'navigation',
  _id: 'navigation',
  logoText: 'AURORA',
  menuItems: [
    {
      _key: 'menu-1',
      label: 'Nos Univers',
      subItems: [
        { _key: 'sub-1', label: 'Espace', href: '#espace' },
        { _key: 'sub-2', label: 'Expérience', href: '#experience' },
        { _key: 'sub-3', label: 'Structure', href: '#structure' },
        { _key: 'sub-4', label: 'Image', href: '#image' },
      ],
    },
    {
      _key: 'menu-2',
      label: 'Méthode AURORA',
      subItems: [
        { _key: 'sub-5', label: 'Observer', href: '#observer' },
        { _key: 'sub-6', label: 'Orienter', href: '#orienter' },
        { _key: 'sub-7', label: 'Structurer', href: '#structurer' },
        { _key: 'sub-8', label: 'Accompagner', href: '#accompagner' },
        { _key: 'sub-9', label: 'Préserver', href: '#preserver' },
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
        { _key: 'sub-10', label: 'Manifeste', href: '#manifeste' },
        { _key: 'sub-11', label: 'Origines', href: '#origines' },
        { _key: 'sub-12', label: 'Valeurs', href: '#valeurs' },
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

// ============ FOOTER ============
const footer = {
  _type: 'footer',
  _id: 'footer',
  logoText: 'Aurora',
  description: 'Accelerating climate solutions for a sustainable future.',
  linkCategories: [
    {
      _key: 'cat-1',
      title: 'Product',
      links: [
        { _key: 'link-1', label: 'Carbon credits', href: '#carbon' },
        { _key: 'link-2', label: 'Platform', href: '#platform' },
        { _key: 'link-3', label: 'API', href: '#api' },
        { _key: 'link-4', label: 'Pricing', href: '#pricing' },
      ],
    },
    {
      _key: 'cat-2',
      title: 'Company',
      links: [
        { _key: 'link-5', label: 'About', href: '#about' },
        { _key: 'link-6', label: 'Team', href: '#team' },
        { _key: 'link-7', label: 'Careers', href: '#careers' },
        { _key: 'link-8', label: 'Contact', href: '#contact' },
      ],
    },
    {
      _key: 'cat-3',
      title: 'Resources',
      links: [
        { _key: 'link-9', label: 'Blog', href: '#blog' },
        { _key: 'link-10', label: 'Documentation', href: '#docs' },
        { _key: 'link-11', label: 'Reports', href: '#reports' },
        { _key: 'link-12', label: 'Help center', href: '#help' },
      ],
    },
    {
      _key: 'cat-4',
      title: 'Legal',
      links: [
        { _key: 'link-13', label: 'Privacy', href: '#privacy' },
        { _key: 'link-14', label: 'Terms', href: '#terms' },
        { _key: 'link-15', label: 'Security', href: '#security' },
        { _key: 'link-16', label: 'Compliance', href: '#compliance' },
      ],
    },
  ],
  copyright: '© 2025 Aurora. All rights reserved.',
  socialLinks: [
    { _key: 'social-1', platform: 'Twitter', url: 'https://twitter.com/aurora' },
    { _key: 'social-2', platform: 'LinkedIn', url: 'https://linkedin.com/company/aurora' },
    { _key: 'social-3', platform: 'Instagram', url: 'https://instagram.com/aurora' },
  ],
};

// ============ INFORMATIONS DE CONTACT ============
const contactInfo = {
  _type: 'contactInfo',
  _id: 'contactInfo',
  email: 'contact@aurora.com',
  phone: '+33 1 23 45 67 89',
  instagram: 'aurora_official',
  twitter: 'aurora_official',
  linkedin: 'https://linkedin.com/company/aurora',
  calComLink: 'med-agourram-otzwlb',
  ctaTitle: 'Ready to make an impact?',
  ctaSubtitle: 'Join hundreds of companies rebalancing the planet',
};

// ============ LOGOS PARTENAIRES ============
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

// ============ FONCTION DE SEED ============
async function seedContent() {
  console.log('🌱 Début de l\'injection du contenu Aurora...\n');

  try {
    // Hero Section
    console.log('📝 Création de la Section Hero...');
    await client.createOrReplace(heroSection);
    console.log('   ✅ Section Hero créée\n');

    // Stats
    console.log('📊 Création des Statistiques...');
    for (const stat of stats) {
      await client.createOrReplace(stat);
      console.log(`   ✅ ${stat.value} - ${stat.label}`);
    }
    console.log('');

    // Testimonials
    console.log('💬 Création des Témoignages...');
    for (const testimonial of testimonials) {
      await client.createOrReplace(testimonial);
      console.log(`   ✅ ${testimonial.personName} - ${testimonial.company}`);
    }
    console.log('');

    // Blog Posts
    console.log('📰 Création des Articles de Blog...');
    for (const post of blogPosts) {
      await client.createOrReplace(post);
      console.log(`   ✅ ${post.title}`);
    }
    console.log('');

    // Methods
    console.log('🎯 Création des Méthodes Aurora...');
    for (const method of methods) {
      await client.createOrReplace(method);
      console.log(`   ✅ ${method.title}`);
    }
    console.log('');

    // Navigation
    console.log('🧭 Création de la Navigation...');
    await client.createOrReplace(navigation);
    console.log('   ✅ Navigation créée\n');

    // Footer
    console.log('📋 Création du Footer...');
    await client.createOrReplace(footer);
    console.log('   ✅ Footer créé\n');

    // Contact Info
    console.log('📞 Création des Informations de Contact...');
    await client.createOrReplace(contactInfo);
    console.log('   ✅ Informations de contact créées\n');

    // Partner Logos
    console.log('🏢 Création des Logos Partenaires...');
    await client.createOrReplace(partnerLogos);
    console.log('   ✅ Logos partenaires créés\n');

    console.log('🎉 ================================================');
    console.log('   TOUT LE CONTENU A ÉTÉ CRÉÉ AVEC SUCCÈS !');
    console.log('   Rafraîchissez votre site pour voir les changements.');
    console.log('================================================\n');

  } catch (error) {
    console.error('❌ Erreur lors de l\'injection:', error);
    process.exit(1);
  }
}

seedContent();
