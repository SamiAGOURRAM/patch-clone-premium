import { createClient } from '@sanity/client';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

// Load .env from project root (parent of scripts folder)
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({ path: resolve(__dirname, '..', '.env') });

const client = createClient({
  projectId: process.env.VITE_SANITY_PROJECT_ID || 'g5k024mq',
  dataset: process.env.VITE_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

// Page Univers content
const pageUnivers = {
  _id: 'pageUnivers',
  _type: 'pageUnivers',
  heroTitle: 'Nos Univers',
  heroSubtitle: "Quatre domaines d'expertise complémentaires pour accompagner votre transformation à 360°.",
  universes: [
    {
      _key: 'univ-1',
      title: 'Espace',
      subtitle: 'Architecture & Aménagement',
      description: "Conception et aménagement d'espaces de travail innovants qui favorisent la collaboration, le bien-être et la productivité de vos équipes.",
      icon: 'Building2',
      colorFrom: 'primary',
      colorTo: 'secondary',
      features: ["Design d'espaces collaboratifs", "Aménagement de bureaux", "Espaces de coworking", "Showrooms et espaces d'exposition"],
    },
    {
      _key: 'univ-2',
      title: 'Expérience',
      subtitle: 'Transformation Digitale',
      description: "Accompagnement dans votre transformation digitale pour créer des expériences client et collaborateur exceptionnelles.",
      icon: 'Briefcase',
      colorFrom: 'secondary',
      colorTo: 'tertiary',
      features: ['Parcours client digital', 'Outils collaboratifs', 'Formation digitale', 'Innovation technologique'],
    },
    {
      _key: 'univ-3',
      title: 'Structure',
      subtitle: 'Organisation & Stratégie',
      description: "Optimisation de votre structure organisationnelle pour une performance durable et une agilité accrue.",
      icon: 'Users',
      colorFrom: 'tertiary',
      colorTo: 'success',
      features: ["Réorganisation d'équipes", 'Processus et workflows', "Gouvernance d'entreprise", 'Gestion du changement'],
    },
    {
      _key: 'univ-4',
      title: 'Image',
      subtitle: 'Branding & Communication',
      description: "Construction et valorisation de votre image de marque pour une communication impactante et cohérente.",
      icon: 'Image',
      colorFrom: 'success',
      colorTo: 'primary',
      features: ['Identité visuelle', 'Stratégie de marque', 'Communication corporate', 'Présence digitale'],
    },
  ],
  ctaTitle: 'Prêt à transformer votre entreprise ?',
  ctaSubtitle: 'Nos experts vous accompagnent dans tous vos projets de transformation.',
  ctaButtonText: 'Nous contacter',
};

// Page Méthode content
const pageMethode = {
  _id: 'pageMethode',
  _type: 'pageMethode',
  heroTitle: 'Méthode AURORA',
  heroSubtitle: 'Une approche structurée en 5 étapes pour accompagner votre transformation avec excellence.',
  methodSteps: [
    {
      _key: 'step-1',
      number: '01',
      title: 'Observer',
      subtitle: 'Analyse & Diagnostic',
      description: 'Nous commençons par une observation approfondie de votre environnement, vos processus et vos équipes pour comprendre les enjeux réels de votre transformation.',
      icon: 'Eye',
      details: ['Audit organisationnel complet', 'Analyse des processus existants', 'Entretiens avec les parties prenantes', 'Benchmark sectoriel'],
    },
    {
      _key: 'step-2',
      number: '02',
      title: 'Orienter',
      subtitle: 'Vision & Stratégie',
      description: 'Nous définissons ensemble une vision claire et une stratégie adaptée à vos objectifs, en tenant compte de vos contraintes et opportunités.',
      icon: 'Compass',
      details: ['Définition de la vision cible', 'Élaboration de la feuille de route', 'Priorisation des chantiers', 'Indicateurs de performance'],
    },
    {
      _key: 'step-3',
      number: '03',
      title: 'Structurer',
      subtitle: 'Organisation & Planification',
      description: 'Nous structurons votre projet de transformation avec une méthodologie éprouvée et des outils adaptés pour garantir son succès.',
      icon: 'Layers',
      details: ['Architecture de projet', 'Gouvernance et rôles', 'Planning détaillé', 'Gestion des risques'],
    },
    {
      _key: 'step-4',
      number: '04',
      title: 'Accompagner',
      subtitle: 'Mise en œuvre & Support',
      description: 'Nous vous accompagnons tout au long de la mise en œuvre, avec un support constant et une adaptation continue aux défis rencontrés.',
      icon: 'HeartHandshake',
      details: ['Pilotage opérationnel', 'Formation des équipes', 'Conduite du changement', 'Support et coaching'],
    },
    {
      _key: 'step-5',
      number: '05',
      title: 'Préserver',
      subtitle: 'Pérennisation & Amélioration',
      description: 'Nous veillons à ancrer les transformations dans la durée et à mettre en place les mécanismes d\'amélioration continue.',
      icon: 'Shield',
      details: ['Transfert de compétences', 'Documentation des processus', 'Suivi post-projet', 'Amélioration continue'],
    },
  ],
  ctaTitle: 'Découvrez notre méthode en action',
  ctaSubtitle: 'Prenez rendez-vous pour une présentation personnalisée de notre approche.',
  ctaButtonText: 'Planifier un échange',
};

// Page Âme content
const pageAme = {
  _id: 'pageAme',
  _type: 'pageAme',
  heroTitle: "L'Âme Aurora",
  heroSubtitle: "Découvrez qui nous sommes, d'où nous venons et ce qui nous anime au quotidien.",
  manifeste: {
    title: 'Notre Manifeste',
    subtitle: 'Ce en quoi nous croyons',
    content: `Nous croyons que chaque entreprise porte en elle le potentiel d'une transformation profonde et durable.

Chez Aurora, nous ne sommes pas de simples consultants – nous sommes des partenaires de votre réussite, engagés à vos côtés à chaque étape de votre évolution.

Notre conviction : la transformation n'est pas une destination, mais un voyage continu vers l'excellence. Elle doit être humaine, progressive et respectueuse de l'ADN de chaque organisation.

Nous refusons les solutions toutes faites. Chaque projet est unique, chaque entreprise mérite une approche sur-mesure qui tient compte de son histoire, de sa culture et de ses ambitions.`,
    highlights: [
      "L'humain au cœur de chaque transformation",
      "L'excellence comme standard, pas comme exception",
      "L'innovation au service de la durabilité",
      "Le partenariat plutôt que la prestation",
    ],
  },
  origines: {
    title: 'Nos Origines',
    subtitle: "D'où nous venons",
    content: `Aurora est née d'une conviction partagée par ses fondateurs : les entreprises méritent un accompagnement différent, plus humain et plus engagé.

Après des années passées dans de grands cabinets de conseil, nous avons voulu créer une structure à taille humaine, capable d'offrir l'excellence des grandes enseignes avec l'agilité et la proximité d'un partenaire de confiance.

Depuis notre création, nous avons accompagné plus de 50 entreprises dans leur transformation, des startups innovantes aux grands groupes industriels.

Notre croissance s'est construite sur une seule promesse : des résultats concrets et mesurables pour chacun de nos clients.`,
    milestones: [
      { _key: 'ms-1', year: '2018', event: "Création d'Aurora" },
      { _key: 'ms-2', year: '2019', event: '10ème projet de transformation' },
      { _key: 'ms-3', year: '2021', event: 'Expansion nationale' },
      { _key: 'ms-4', year: '2023', event: '50+ entreprises accompagnées' },
      { _key: 'ms-5', year: '2024', event: 'Lancement du réseau de partenaires' },
    ],
  },
  valeurs: {
    title: 'Nos Valeurs',
    subtitle: 'Ce qui nous guide',
    content: 'Nos valeurs ne sont pas des mots sur un mur – elles guident chacune de nos décisions et chacune de nos interactions.',
    values: [
      { _key: 'val-1', name: 'Excellence', description: 'Nous visons l\'excellence dans tout ce que nous faisons, sans compromis sur la qualité.' },
      { _key: 'val-2', name: 'Intégrité', description: 'Nous agissons avec honnêteté et transparence, même quand c\'est difficile.' },
      { _key: 'val-3', name: 'Engagement', description: 'Nous nous engageons pleinement aux côtés de nos clients, leur succès est notre succès.' },
      { _key: 'val-4', name: 'Innovation', description: 'Nous cherchons constamment de nouvelles approches pour mieux servir nos clients.' },
      { _key: 'val-5', name: 'Humanité', description: 'Nous plaçons l\'humain au cœur de chaque transformation, car ce sont les hommes qui font les entreprises.' },
    ],
  },
  ctaTitle: 'Envie de nous rejoindre ?',
  ctaSubtitle: 'Nous recherchons des talents qui partagent nos valeurs.',
  ctaButtonText: 'Nous contacter',
};

// Page Réseau content
const pageReseau = {
  _id: 'pageReseau',
  _type: 'pageReseau',
  heroTitle: 'Notre Réseau',
  heroSubtitle: "Un écosystème de partenaires d'excellence pour répondre à tous vos enjeux de transformation.",
  networkStats: [
    { _key: 'stat-1', value: '100+', label: 'Partenaires', icon: 'Handshake' },
    { _key: 'stat-2', value: '15+', label: 'Villes & régions', icon: 'MapPin' },
    { _key: 'stat-3', value: '50+', label: 'Experts', icon: 'Users' },
    { _key: 'stat-4', value: '4', label: "Pôles d'expertise", icon: 'Building' },
  ],
  partnerTypesTitle: 'Nos partenaires',
  partnerTypesSubtitle: "Un réseau diversifié pour couvrir l'ensemble de vos besoins",
  partnerTypes: [
    { _key: 'pt-1', title: 'Cabinets partenaires', description: 'Des cabinets de conseil spécialisés qui partagent notre vision et nos standards de qualité.', count: '40+' },
    { _key: 'pt-2', title: 'Experts indépendants', description: 'Des consultants seniors avec une expertise pointue dans leur domaine.', count: '35+' },
    { _key: 'pt-3', title: 'Partenaires technologiques', description: 'Des éditeurs et intégrateurs de solutions pour accompagner vos transformations digitales.', count: '15+' },
    { _key: 'pt-4', title: 'Partenaires académiques', description: 'Des écoles et universités pour la recherche et la formation.', count: '10+' },
  ],
  regionsTitle: 'Présence géographique',
  regionsSubtitle: 'Un maillage territorial pour vous accompagner au plus près',
  regions: [
    'Paris & Île-de-France',
    'Lyon & Auvergne-Rhône-Alpes',
    'Marseille & PACA',
    'Bordeaux & Nouvelle-Aquitaine',
    'Nantes & Pays de la Loire',
    'Lille & Hauts-de-France',
    'Toulouse & Occitanie',
    'Strasbourg & Grand Est',
  ],
  joinCtaTitle: 'Rejoignez notre réseau',
  joinCtaSubtitle: "Vous êtes consultant, cabinet ou expert ? Rejoignez un réseau d'excellence.",
  joinCtaButtonText: 'Devenir partenaire',
  contactButtonText: 'Nous contacter',
};

// Site Settings content (logos, copyright, social links)
const siteSettings = {
  _id: 'siteSettings',
  _type: 'siteSettings',
  siteName: 'Aurora',
  footerTagline: "À l'aube des connexions durables",
  copyright: '© 2025 Aurora. Tous droits réservés.',
  socialLinks: [
    { _key: 'social-1', platform: 'linkedin', url: 'https://linkedin.com' },
  ],
  contactEmail: 'contact@aurora.fr',
  contactPhone: '+33 1 23 45 67 89',
};

async function seedPages() {
  console.log('🌱 Seeding page content to Sanity...\n');

  const pages = [
    { name: 'Page Univers', data: pageUnivers },
    { name: 'Page Méthode', data: pageMethode },
    { name: 'Page Âme', data: pageAme },
    { name: 'Page Réseau', data: pageReseau },
    { name: 'Paramètres du Site', data: siteSettings },
  ];

  for (const page of pages) {
    try {
      const result = await client.createOrReplace(page.data);
      console.log(`✅ ${page.name} created/updated: ${result._id}`);
    } catch (error) {
      console.error(`❌ Error creating ${page.name}:`, error.message);
    }
  }

  console.log('\n🎉 Page seeding complete!');
  console.log('\n📝 You can now edit these pages in Sanity Studio under "📄 Pages du Site"');
  console.log('📝 Edit logos in "🏢 Paramètres du Site"');
}

seedPages();
