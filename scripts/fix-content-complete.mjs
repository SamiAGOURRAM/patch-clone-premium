import { createClient } from "@sanity/client";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import https from "https";
import http from "http";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: resolve(__dirname, "../.env") });

const client = createClient({
  projectId: "g5k024mq",
  dataset: "production",
  useCdn: false,
  apiVersion: "2024-01-01",
  token: process.env.SANITY_API_TOKEN,
});

// Function to download image and upload to Sanity
async function uploadImageFromUrl(url, filename) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith("https") ? https : http;
    
    protocol.get(url, (response) => {
      // Handle redirects
      if (response.statusCode === 301 || response.statusCode === 302) {
        uploadImageFromUrl(response.headers.location, filename)
          .then(resolve)
          .catch(reject);
        return;
      }

      const chunks = [];
      response.on("data", (chunk) => chunks.push(chunk));
      response.on("end", async () => {
        try {
          const buffer = Buffer.concat(chunks);
          const asset = await client.assets.upload("image", buffer, {
            filename: filename,
          });
          console.log(`   📷 Uploaded: ${filename}`);
          resolve(asset);
        } catch (error) {
          console.error(`   ❌ Failed to upload ${filename}:`, error.message);
          resolve(null);
        }
      });
      response.on("error", reject);
    }).on("error", reject);
  });
}

async function createOrReplace(doc) {
  try {
    await client.createOrReplace(doc);
    console.log(`✅ Created/Updated: ${doc._type} (${doc._id})`);
  } catch (error) {
    console.error(`❌ Error with ${doc._type}:`, error.message);
  }
}

async function deleteAllOfType(type) {
  try {
    const docs = await client.fetch(`*[_type == "${type}"]._id`);
    for (const id of docs) {
      await client.delete(id);
    }
    console.log(`   🗑️ Deleted ${docs.length} ${type} documents`);
  } catch (error) {
    console.error(`   ❌ Error deleting ${type}:`, error.message);
  }
}

async function updateAllContent() {
  console.log("🌅 AURORA Content Update - Complete Fix\n");
  console.log("========================================\n");

  // ============================================
  // 1. UPLOAD PLACEHOLDER IMAGES
  // ============================================
  console.log("📷 Uploading placeholder images...\n");

  // Person placeholder images (using UI Faces style placeholders)
  const personImages = [];
  const personUrls = [
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&h=200&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face",
  ];

  for (let i = 0; i < personUrls.length; i++) {
    const asset = await uploadImageFromUrl(personUrls[i], `person-${i + 1}.jpg`);
    personImages.push(asset);
  }

  // Blog post images
  const blogImages = [];
  const blogUrls = [
    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
  ];

  for (let i = 0; i < blogUrls.length; i++) {
    const asset = await uploadImageFromUrl(blogUrls[i], `blog-${i + 1}.jpg`);
    blogImages.push(asset);
  }

  // Company logos (simple placeholder)
  const logoImages = [];
  const logoUrls = [
    "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=200&fit=crop",
    "https://images.unsplash.com/photo-1599305446868-59e861c26d5d?w=200&h=200&fit=crop",
    "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=200&h=200&fit=crop",
    "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=200&fit=crop",
  ];

  for (let i = 0; i < logoUrls.length; i++) {
    const asset = await uploadImageFromUrl(logoUrls[i], `logo-${i + 1}.jpg`);
    logoImages.push(asset);
  }

  // ============================================
  // 2. TESTIMONIALS (with correct schema)
  // ============================================
  console.log("\n💬 Updating Testimonials...");
  await deleteAllOfType("testimonial");

  const testimonials = [
    {
      _id: "testimonial-1",
      _type: "testimonial",
      company: "Maison Durable",
      quote: "Le réemploi de matériaux permet de réduire jusqu'à 75% des émissions de CO₂ d'un projet. AURORA nous a accompagnés dans cette démarche avec une expertise remarquable.",
      personName: "Marie Dupont",
      personTitle: "Directrice de Projet",
      order: 1,
      ...(logoImages[0] && { logo: { _type: "image", asset: { _type: "reference", _ref: logoImages[0]._id } } }),
      ...(personImages[0] && { personImage: { _type: "image", asset: { _type: "reference", _ref: personImages[0]._id } } }),
    },
    {
      _id: "testimonial-2",
      _type: "testimonial",
      company: "Événements Sensoriels",
      quote: "La mémoire sensorielle d'un lieu se crée en moins de trois secondes. AURORA a su créer une expérience mémorable pour notre inauguration.",
      personName: "Thomas Martin",
      personTitle: "Fondateur & CEO",
      order: 2,
      ...(logoImages[1] && { logo: { _type: "image", asset: { _type: "reference", _ref: logoImages[1]._id } } }),
      ...(personImages[1] && { personImage: { _type: "image", asset: { _type: "reference", _ref: personImages[1]._id } } }),
    },
    {
      _id: "testimonial-3",
      _type: "testimonial",
      company: "StartUp Efficace",
      quote: "Les entreprises qui structurent leur organisation gagnent en moyenne 2 jours de productivité par semaine. Grâce à AURORA, nous avons transformé notre façon de travailler.",
      personName: "Sophie Laurent",
      personTitle: "Directrice Générale",
      order: 3,
      ...(logoImages[2] && { logo: { _type: "image", asset: { _type: "reference", _ref: logoImages[2]._id } } }),
      ...(personImages[2] && { personImage: { _type: "image", asset: { _type: "reference", _ref: personImages[2]._id } } }),
    },
    {
      _id: "testimonial-4",
      _type: "testimonial",
      company: "Marque Authentique",
      quote: "Une marque qui communique clairement son 'pourquoi' fidélise jusqu'à 30% de clients en plus. AURORA nous a aidés à révéler notre vraie identité.",
      personName: "Jean-Pierre Moreau",
      personTitle: "Directeur Marketing",
      order: 4,
      ...(logoImages[3] && { logo: { _type: "image", asset: { _type: "reference", _ref: logoImages[3]._id } } }),
      ...(personImages[3] && { personImage: { _type: "image", asset: { _type: "reference", _ref: personImages[3]._id } } }),
    },
  ];

  for (const testimonial of testimonials) {
    await createOrReplace(testimonial);
  }

  // ============================================
  // 3. BLOG POSTS
  // ============================================
  console.log("\n📝 Updating Blog Posts...");
  await deleteAllOfType("blogPost");

  const blogPosts = [
    {
      _id: "blog-1",
      _type: "blogPost",
      title: "Le réemploi de matériaux : une révolution durable",
      slug: { _type: "slug", current: "reemploi-materiaux-revolution-durable" },
      subtitle: "Comment réduire l'empreinte carbone de vos projets",
      description: "Découvrez comment le réemploi de matériaux permet de réduire jusqu'à 75% des émissions de CO₂ d'un projet, tout en créant des espaces uniques et durables.",
      category: "Durabilité",
      readTime: "5 min",
      featured: true,
      publishedAt: "2025-12-01T10:00:00Z",
      content: [
        {
          _type: "block",
          _key: "b1",
          style: "normal",
          children: [{ _type: "span", _key: "s1", text: "Le réemploi de matériaux est au cœur de la démarche AURORA. Cette pratique permet non seulement de réduire l'impact environnemental des projets, mais aussi de créer des espaces authentiques avec une histoire." }],
          markDefs: [],
        },
        {
          _type: "block",
          _key: "b2",
          style: "h2",
          children: [{ _type: "span", _key: "s2", text: "Pourquoi le réemploi ?" }],
          markDefs: [],
        },
        {
          _type: "block",
          _key: "b3",
          style: "normal",
          children: [{ _type: "span", _key: "s3", text: "Chez AURORA, nous privilégions les matières vivantes, locales et à faible impact, sans jamais sacrifier l'esthétique ou le confort. Chaque projet devient ainsi une opportunité de donner une seconde vie à des matériaux de qualité." }],
          markDefs: [],
        },
      ],
      ...(blogImages[0] && { image: { _type: "image", asset: { _type: "reference", _ref: blogImages[0]._id } } }),
    },
    {
      _id: "blog-2",
      _type: "blogPost",
      title: "L'expérience sensorielle : créer des lieux mémorables",
      slug: { _type: "slug", current: "experience-sensorielle-lieux-memorables" },
      subtitle: "La science derrière les espaces qui marquent",
      description: "La mémoire sensorielle d'un lieu se crée en moins de trois secondes. Découvrez comment AURORA conçoit des expériences qui marquent durablement les visiteurs.",
      category: "Expérience",
      readTime: "4 min",
      featured: false,
      publishedAt: "2025-11-15T10:00:00Z",
      content: [
        {
          _type: "block",
          _key: "b1",
          style: "normal",
          children: [{ _type: "span", _key: "s1", text: "Une lumière, un parfum, une texture ou un son peuvent marquer durablement un visiteur. C'est pourquoi AURORA conçoit des expériences pensées pour le corps et pour l'esprit." }],
          markDefs: [],
        },
      ],
      ...(blogImages[1] && { image: { _type: "image", asset: { _type: "reference", _ref: blogImages[1]._id } } }),
    },
    {
      _id: "blog-3",
      _type: "blogPost",
      title: "Structurer pour mieux grandir",
      slug: { _type: "slug", current: "structurer-pour-mieux-grandir" },
      subtitle: "L'accompagnement des entrepreneurs par AURORA",
      description: "Les entreprises qui structurent leur organisation gagnent en moyenne 2 jours de productivité par semaine. Découvrez notre approche d'accompagnement.",
      category: "Stratégie",
      readTime: "6 min",
      featured: false,
      publishedAt: "2025-11-01T10:00:00Z",
      content: [
        {
          _type: "block",
          _key: "b1",
          style: "normal",
          children: [{ _type: "span", _key: "s1", text: "Chez AURORA, nous aidons à transformer cette efficacité en temps humain, clarté et sérénité. Notre accompagnement se concentre sur ce qui compte vraiment pour votre développement." }],
          markDefs: [],
        },
      ],
      ...(blogImages[2] && { image: { _type: "image", asset: { _type: "reference", _ref: blogImages[2]._id } } }),
    },
    {
      _id: "blog-4",
      _type: "blogPost",
      title: "Communiquer son 'pourquoi'",
      slug: { _type: "slug", current: "communiquer-son-pourquoi" },
      subtitle: "L'art de révéler votre vraie identité",
      description: "Une marque qui communique clairement son 'pourquoi' fidélise jusqu'à 30% de clients en plus. Découvrez comment AURORA révèle la vérité de ce que vous portez.",
      category: "Communication",
      readTime: "5 min",
      featured: true,
      publishedAt: "2025-10-20T10:00:00Z",
      content: [
        {
          _type: "block",
          _key: "b1",
          style: "normal",
          children: [{ _type: "span", _key: "s1", text: "Notre rôle n'est pas de fabriquer une image, mais de révéler la vérité de ce que vous portez. Chaque mot, chaque image, chaque support sert à raconter ce qui vous rend unique." }],
          markDefs: [],
        },
      ],
      ...(blogImages[3] && { image: { _type: "image", asset: { _type: "reference", _ref: blogImages[3]._id } } }),
    },
  ];

  for (const post of blogPosts) {
    await createOrReplace(post);
  }

  // ============================================
  // 4. ANNOUNCEMENT BANNER (correct schema)
  // ============================================
  console.log("\n📢 Updating Announcement Banner...");
  await createOrReplace({
    _id: "announcementBanner",
    _type: "announcementBanner",
    enabled: true,
    badgeText: "NEW",
    message: "AURORA — À l'aube des connexions durables",
    linkText: "Découvrir nos univers",
    linkUrl: "https://patch-clone-premium.vercel.app/univers",
    backgroundColor: "220 45% 18%",
    textColor: "0 0% 100%",
    badgeBackgroundColor: "30 30% 90%",
    badgeTextColor: "214 59% 20%",
  });

  // ============================================
  // 5. HERO SECTION
  // ============================================
  console.log("\n🏠 Updating Hero Section...");
  await createOrReplace({
    _id: "heroSection",
    _type: "heroSection",
    mainTitle: "À l'aube",
    subTitle: "des connexions",
    accentText: "durables",
    accompanyText: "AURORA vous accompagne pour",
    rotatingValues: [
      "relier les humains",
      "transformer les espaces",
      "créer des expériences",
      "construire du sens",
    ],
    ctaButtonText: "Découvrir nos univers",
  });

  // ============================================
  // 6. PAGE UNIVERS
  // ============================================
  console.log("\n🌍 Updating Page Univers...");
  await createOrReplace({
    _id: "pageUnivers",
    _type: "pageUnivers",
    heroTitle: "Notre Univers",
    heroSubtitle:
      "4 dimensions qui se rencontrent — L'environnement global, c'est tout ce qui relie l'espace, le message, le sens et la vie du lieu.",
    universes: [
      {
        _key: "espace",
        title: "L'Espace",
        subtitle: "Créer & Transformer",
        description:
          "C'est le socle de tout projet AURORA. Nous intervenons sur des espaces à vivre, à travailler ou à partager. Nous ne faisons pas que bâtir des lieux : nous construisons des espaces où les gens se sentent bien.",
        icon: "Building2",
        colorFrom: "primary",
        colorTo: "secondary",
        features: [
          "Travaux intérieurs et extérieurs",
          "Rénovation et second œuvre",
          "Aménagement de bureaux, commerces, copropriétés",
          "Scénographie naturelle et design sur mesure",
          "Espaces durables : matériaux sains, réemploi",
        ],
      },
      {
        _key: "experience",
        title: "L'Expérience",
        subtitle: "Faire vivre les lieux",
        description:
          "Chaque lieu a une histoire à raconter. AURORA conçoit des moments vivants, qui créent du lien. Un espace ne vit vraiment que lorsqu'il rassemble.",
        icon: "Star",
        colorFrom: "secondary",
        colorTo: "tertiary",
        features: [
          "Inaugurations, vernissages, séminaires",
          "Événements écoresponsables et sensoriels",
          "Coordination complète : logistique, scénographie",
          "Mise en valeur des partenaires",
        ],
      },
      {
        _key: "structure",
        title: "La Structure",
        subtitle: "Accompagner les entrepreneurs",
        description:
          "Derrière chaque lieu, il y a des femmes et des hommes qui le font exister. Nous aidons à bâtir non seulement des espaces, mais aussi les structures qui les font vivre.",
        icon: "Briefcase",
        colorFrom: "tertiary",
        colorTo: "success",
        features: [
          "Création d'entreprise et stratégie",
          "Optimisation de gestion et automatisation",
          "Achats responsables et partenariats durables",
          "Management humain et pilotage clair",
        ],
      },
      {
        _key: "image",
        title: "L'Image",
        subtitle: "Donner du sens",
        description:
          "Un projet n'existe vraiment que s'il est compris. Notre rôle n'est pas de fabriquer une image, mais de révéler la vérité de ce que vous portez.",
        icon: "Image",
        colorFrom: "success",
        colorTo: "primary",
        features: [
          "Storytelling et stratégie de marque",
          "Création de sites web sobres et durables",
          "Photographie, vidéo, contenu éditorial",
          "Communication interne & externe alignée",
        ],
      },
    ],
    ctaTitle: "Prêt à démarrer votre projet ?",
    ctaSubtitle:
      "AURORA agit à l'intersection de ces quatre mondes. Un chantier devient une histoire. Une histoire devient une marque.",
    ctaButtonText: "Construire un projet avec nous",
  });

  // ============================================
  // 7. PAGE MÉTHODE
  // ============================================
  console.log("\n🔧 Updating Page Méthode...");
  await createOrReplace({
    _id: "pageMethode",
    _type: "pageMethode",
    heroTitle: "La Méthode AURORA",
    heroSubtitle:
      "Nous ne cherchons pas la perfection. Nous cherchons la justesse.",
    methodSteps: [
      {
        _key: "observer",
        number: "01",
        title: "Observer",
        subtitle: "Comprendre le besoin",
        description: "Comprendre le besoin, le contexte, l'humain.",
        icon: "Eye",
        details: ["Analyse du contexte", "Compréhension des besoins humains", "Évaluation des ressources"],
      },
      {
        _key: "orienter",
        number: "02",
        title: "Orienter",
        subtitle: "Identifier les leviers",
        description: "Identifier les bons leviers, partenaires, rythmes.",
        icon: "Compass",
        details: ["Définition des priorités", "Sélection des partenaires", "Planification stratégique"],
      },
      {
        _key: "structurer",
        number: "03",
        title: "Structurer",
        subtitle: "Poser un cadre clair",
        description: "Poser un cadre clair, durable et transparent.",
        icon: "Layers",
        details: ["Mise en place du cadre", "Définition des étapes clés", "Création des outils de suivi"],
      },
      {
        _key: "accompagner",
        number: "04",
        title: "Accompagner",
        subtitle: "Coordonner et fluidifier",
        description: "Coordonner, ajuster, fluidifier.",
        icon: "HeartHandshake",
        details: ["Coordination des intervenants", "Ajustements en temps réel", "Communication continue"],
      },
      {
        _key: "preserver",
        number: "05",
        title: "Préserver",
        subtitle: "Suivre dans le temps",
        description: "Suivre dans le temps, entretenir, faire évoluer.",
        icon: "Shield",
        details: ["Suivi post-projet", "Entretien des relations", "Évolution continue"],
      },
    ],
    ctaTitle: "Un interlocuteur unique et humain",
    ctaSubtitle: "93% des clients préfèrent un interlocuteur unique pour piloter un projet complexe.",
    ctaButtonText: "Découvrir notre méthode",
  });

  // ============================================
  // 8. PAGE ÂME
  // ============================================
  console.log("\n💜 Updating Page Âme...");
  await createOrReplace({
    _id: "pageAme",
    _type: "pageAme",
    heroTitle: "L'Âme AURORA",
    heroSubtitle:
      "Une maison du lien. Un écosystème né du réel.",
    manifeste: {
      title: "Notre Philosophie",
      subtitle: "Une conviction simple",
      content:
        "AURORA est née d'une conviction simple : rien de durable ne se construit seul.\n\nUn lieu, une entreprise, une idée, un événement — tout commence par une rencontre.\n\nNous ne faisons pas tout. Mais nous savons avec qui le faire.",
      highlights: [
        "Rien de durable ne se construit seul",
        "Nous coordonnons, connectons et faisons avancer",
        "Un écosystème de confiance et de durabilité",
      ],
    },
    origines: {
      title: "L'Aube",
      subtitle: "Le sens d'AURORA",
      content:
        "Le mot « AURORA » signifie « l'aube » en latin — symbole de recommencement, de clarté et d'équilibre entre la nuit et le jour.",
      milestones: [
        { _key: "m1", year: "Observation", event: "Comprendre avant d'agir" },
        { _key: "m2", year: "Connexion", event: "Relier les bonnes personnes" },
        { _key: "m3", year: "Création", event: "Construire ensemble" },
        { _key: "m4", year: "Durabilité", event: "Préserver dans le temps" },
      ],
    },
    valeurs: {
      title: "Ce qui nous anime",
      subtitle: "Notre ADN",
      content: "AURORA, c'est une maison d'aménagement et d'événementiel ancrée dans le réel.",
      values: [
        { _key: "v1", name: "Le Lien", description: "Créer, coordonner, connecter." },
        { _key: "v2", name: "La Justesse", description: "Ce qui est juste pour chaque projet." },
        { _key: "v3", name: "La Durabilité", description: "Comprendre, relier, construire, préserver." },
        { _key: "v4", name: "L'Humain", description: "Une manière de travailler ensemble." },
      ],
    },
    visionTitle: "Le Cercle AURORA",
    visionSubtitle: "Tout est lié",
    visionContent:
      "Un chantier devient une histoire. Une histoire devient une marque. Une marque devient une expérience. Une expérience crée un nouveau lien.",
    ctaTitle: "Découvrir l'histoire d'AURORA",
    ctaSubtitle: "Entrer dans la lumière d'AURORA.",
    ctaButtonText: "Nous raconter votre projet",
  });

  // ============================================
  // 9. PAGE RÉSEAU
  // ============================================
  console.log("\n🌐 Updating Page Réseau...");
  await createOrReplace({
    _id: "pageReseau",
    _type: "pageReseau",
    heroTitle: "Le Réseau AURORA",
    heroSubtitle:
      "Un collectif de partenaires locaux et experts : artisans, architectes, décorateurs, graphistes, communicants, développeurs...",
    networkStats: [
      { _key: "s1", value: "85%", label: "Partenaires locaux", icon: "MapPin" },
      { _key: "s2", value: "100+", label: "Experts du réseau", icon: "Users" },
      { _key: "s3", value: "∞", label: "Connexions durables", icon: "Handshake" },
    ],
    partnerTypesTitle: "Notre écosystème",
    partnerTypesSubtitle: "Chaque projet est unique, chaque équipe différente.",
    partnerTypes: [
      { _key: "p1", title: "Artisans & Créateurs", description: "Menuisiers, ébénistes, ferronniers, céramistes...", count: "40+" },
      { _key: "p2", title: "Architectes & Designers", description: "Bureaux d'études, architectes d'intérieur, paysagistes...", count: "25+" },
      { _key: "p3", title: "Communicants & Créatifs", description: "Graphistes, photographes, vidéastes, développeurs...", count: "30+" },
      { _key: "p4", title: "Entrepreneurs & Stratèges", description: "Consultants, formateurs, coachs, experts métiers...", count: "20+" },
    ],
    regionsTitle: "Proximité & Confiance",
    regionsSubtitle: "85% de nos partenaires sont issus de circuits locaux.",
    regions: ["Île-de-France", "Normandie", "Bretagne", "Pays de la Loire", "Nouvelle-Aquitaine", "Occitanie"],
    joinCtaTitle: "Rejoindre le réseau AURORA",
    joinCtaSubtitle: "Le vrai savoir-faire d'AURORA, c'est de savoir où le trouver.",
    joinCtaButtonText: "Rejoindre le réseau",
    contactButtonText: "Rencontrer nos partenaires",
  });

  console.log("\n========================================");
  console.log("✅ All content updated successfully!");
  console.log("========================================\n");
  console.log("🌐 Preview: https://patch-clone-premium.vercel.app");
  console.log("📝 Sanity: https://auroraa.sanity.studio\n");
}

updateAllContent().catch(console.error);
