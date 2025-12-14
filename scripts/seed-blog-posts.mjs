import { createClient } from '@sanity/client';
import 'dotenv/config';

const client = createClient({
  projectId: process.env.VITE_SANITY_PROJECT_ID || 'g5k024mq',
  dataset: process.env.VITE_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const blogPosts = [
  {
    _type: 'blogPost',
    title: "L'avenir de la transformation digitale",
    slug: { _type: 'slug', current: 'avenir-transformation-digitale' },
    subtitle: "Comment les entreprises s'adaptent au nouveau monde",
    category: 'INSIGHTS',
    description: "Découvrez les tendances clés qui façonnent la transformation digitale des entreprises en 2025 et au-delà. Un guide complet pour les dirigeants qui souhaitent anticiper les changements.",
    content: [
      {
        _type: 'block',
        _key: 'intro1',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'intro1span',
            text: "La transformation digitale n'est plus une option, c'est une nécessité. Les entreprises qui réussissent aujourd'hui sont celles qui ont su anticiper les changements et s'adapter rapidement.",
            marks: [],
          },
        ],
        markDefs: [],
      },
      {
        _type: 'block',
        _key: 'h2-1',
        style: 'h2',
        children: [
          {
            _type: 'span',
            _key: 'h2-1span',
            text: "Les piliers de la transformation",
            marks: [],
          },
        ],
        markDefs: [],
      },
      {
        _type: 'block',
        _key: 'p1',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'p1span',
            text: "Une transformation digitale réussie repose sur trois piliers fondamentaux : ",
            marks: [],
          },
          {
            _type: 'span',
            _key: 'p1span2',
            text: "la technologie, les processus et les personnes",
            marks: ['strong'],
          },
          {
            _type: 'span',
            _key: 'p1span3',
            text: ". Négliger l'un de ces aspects peut compromettre l'ensemble du projet.",
            marks: [],
          },
        ],
        markDefs: [],
      },
      {
        _type: 'block',
        _key: 'quote1',
        style: 'blockquote',
        children: [
          {
            _type: 'span',
            _key: 'quote1span',
            text: "\"La transformation digitale concerne moins la technologie que le changement de mentalité.\" - Expert Aurora",
            marks: [],
          },
        ],
        markDefs: [],
      },
      {
        _type: 'block',
        _key: 'h2-2',
        style: 'h2',
        children: [
          {
            _type: 'span',
            _key: 'h2-2span',
            text: "Notre approche chez Aurora",
            marks: [],
          },
        ],
        markDefs: [],
      },
      {
        _type: 'block',
        _key: 'p2',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'p2span',
            text: "Chez Aurora, nous accompagnons les entreprises dans leur transformation avec une méthode éprouvée qui met l'humain au centre. Notre équipe d'experts combine expertise technique et compréhension business pour créer des solutions sur mesure.",
            marks: [],
          },
        ],
        markDefs: [],
      },
    ],
    author: {
      name: 'Marie Dupont',
      role: 'Directrice de la Stratégie',
    },
    tags: ['Transformation', 'Digital', 'Stratégie', 'Innovation'],
    publishedAt: '2025-12-10T10:00:00Z',
    readingTime: 8,
    featured: true,
    published: true,
    order: 1,
  },
  {
    _type: 'blogPost',
    title: "Guide complet : Réussir son projet d'entreprise",
    slug: { _type: 'slug', current: 'guide-reussir-projet-entreprise' },
    subtitle: "Les étapes clés pour un succès durable",
    category: 'GUIDES',
    description: "Un guide pratique et détaillé pour mener à bien vos projets d'entreprise, de la conception à la réalisation. Découvrez les meilleures pratiques et les pièges à éviter.",
    content: [
      {
        _type: 'block',
        _key: 'intro2',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'intro2span',
            text: "Lancer un projet d'entreprise réussi demande une préparation minutieuse et une exécution rigoureuse. Ce guide vous accompagne étape par étape vers le succès.",
            marks: [],
          },
        ],
        markDefs: [],
      },
      {
        _type: 'block',
        _key: 'h2-3',
        style: 'h2',
        children: [
          {
            _type: 'span',
            _key: 'h2-3span',
            text: "Phase 1 : La préparation",
            marks: [],
          },
        ],
        markDefs: [],
      },
      {
        _type: 'block',
        _key: 'p3',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'p3span',
            text: "Avant de vous lancer, prenez le temps de bien définir vos objectifs, d'analyser votre marché et d'identifier vos ressources. Cette phase est cruciale pour la suite de votre projet.",
            marks: [],
          },
        ],
        markDefs: [],
      },
    ],
    author: {
      name: 'Jean Martin',
      role: 'Consultant Senior',
    },
    tags: ['Projet', 'Management', 'Entreprise', 'Méthodologie'],
    publishedAt: '2025-12-08T14:00:00Z',
    readingTime: 12,
    featured: true,
    published: true,
    order: 2,
  },
  {
    _type: 'blogPost',
    title: "Aurora accompagne 50 nouvelles entreprises",
    slug: { _type: 'slug', current: 'aurora-50-nouvelles-entreprises' },
    subtitle: "Une année record pour notre équipe",
    category: 'COMPANY UPDATES',
    description: "Retour sur une année exceptionnelle pour Aurora avec l'accompagnement de 50 nouvelles entreprises dans leur transformation. Découvrez les projets phares et nos ambitions pour l'avenir.",
    content: [
      {
        _type: 'block',
        _key: 'intro3',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'intro3span',
            text: "2024 a été une année charnière pour Aurora. Nous avons eu le privilège d'accompagner 50 nouvelles entreprises dans leur parcours de transformation, dépassant ainsi nos objectifs initiaux.",
            marks: [],
          },
        ],
        markDefs: [],
      },
      {
        _type: 'block',
        _key: 'h2-4',
        style: 'h2',
        children: [
          {
            _type: 'span',
            _key: 'h2-4span',
            text: "Des secteurs variés",
            marks: [],
          },
        ],
        markDefs: [],
      },
      {
        _type: 'block',
        _key: 'p4',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'p4span',
            text: "De la tech à l'industrie, en passant par les services, nous avons travaillé avec des entreprises de tous horizons. Cette diversité enrichit notre expertise et nous permet d'offrir des perspectives uniques à chaque client.",
            marks: [],
          },
        ],
        markDefs: [],
      },
    ],
    author: {
      name: 'Sophie Bernard',
      role: 'CEO Aurora',
    },
    tags: ['Aurora', 'Croissance', 'Clients', 'Bilan'],
    publishedAt: '2025-12-05T09:00:00Z',
    readingTime: 5,
    featured: true,
    published: true,
    order: 3,
  },
  {
    _type: 'blogPost',
    title: "Les tendances RH à suivre en 2025",
    slug: { _type: 'slug', current: 'tendances-rh-2025' },
    subtitle: "L'humain au cœur de la performance",
    category: 'AURORA PERSPECTIVES',
    description: "Quelles sont les grandes tendances qui vont façonner les ressources humaines en 2025 ? Flexibilité, bien-être, formation continue... Tour d'horizon des évolutions majeures.",
    content: [
      {
        _type: 'block',
        _key: 'intro4',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'intro4span',
            text: "Le monde du travail continue d'évoluer à grande vitesse. Les entreprises qui réussiront demain sont celles qui sauront attirer et retenir les meilleurs talents en s'adaptant à leurs attentes.",
            marks: [],
          },
        ],
        markDefs: [],
      },
    ],
    author: {
      name: 'Claire Moreau',
      role: 'DRH Aurora',
    },
    tags: ['RH', 'Tendances', 'Management', 'Bien-être'],
    publishedAt: '2025-12-01T11:00:00Z',
    readingTime: 7,
    featured: false,
    published: true,
    order: 4,
  },
  {
    _type: 'blogPost',
    title: "Étude de cas : Transformation d'un groupe industriel",
    slug: { _type: 'slug', current: 'etude-cas-transformation-industriel' },
    subtitle: "Comment nous avons accompagné leur mutation",
    category: 'CASE STUDIES',
    description: "Découvrez comment Aurora a accompagné un grand groupe industriel dans sa transformation digitale complète, de la stratégie à l'exécution sur 18 mois.",
    content: [
      {
        _type: 'block',
        _key: 'intro5',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'intro5span',
            text: "Quand ce groupe industriel nous a contactés, ils faisaient face à un défi majeur : moderniser leurs processus tout en maintenant leur activité. Voici comment nous avons relevé ce défi ensemble.",
            marks: [],
          },
        ],
        markDefs: [],
      },
    ],
    author: {
      name: 'Pierre Lefebvre',
      role: 'Directeur de Projet',
    },
    tags: ['Case Study', 'Industrie', 'Transformation', 'Digital'],
    publishedAt: '2025-11-28T16:00:00Z',
    readingTime: 10,
    featured: false,
    published: true,
    order: 5,
  },
];

async function seedBlogPosts() {
  console.log('🚀 Seeding blog posts...');

  for (const post of blogPosts) {
    try {
      // Check if post already exists by slug
      const existing = await client.fetch(
        `*[_type == "blogPost" && slug.current == $slug][0]`,
        { slug: post.slug.current }
      );

      if (existing) {
        // Update existing
        await client.patch(existing._id).set(post).commit();
        console.log(`✅ Updated: ${post.title}`);
      } else {
        // Create new
        await client.create(post);
        console.log(`✅ Created: ${post.title}`);
      }
    } catch (error) {
      console.error(`❌ Error with "${post.title}":`, error.message);
    }
  }

  console.log('\n✨ Blog posts seeding complete!');
}

seedBlogPosts();
