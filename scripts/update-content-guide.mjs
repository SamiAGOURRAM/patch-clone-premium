import { createClient } from "@sanity/client";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load .env from the root project directory
dotenv.config({ path: resolve(__dirname, "../.env") });

const client = createClient({
  projectId: "g5k024mq",
  dataset: "production",
  useCdn: false,
  apiVersion: "2024-01-01",
  token: process.env.SANITY_API_TOKEN,
});

async function createOrReplace(doc) {
  try {
    await client.createOrReplace(doc);
    console.log(`✅ Created/Updated: ${doc._type} (${doc._id})`);
  } catch (error) {
    console.error(`❌ Error with ${doc._type}:`, error.message);
  }
}

async function updateAllContent() {
  console.log("🌅 AURORA Content Update - Guide 2025\n");
  console.log("=====================================\n");

  // ============================================
  // 1. HERO SECTION
  // ============================================
  console.log("📝 Updating Hero Section...");
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
  // 2. PAGE UNIVERS - 4 Dimensions
  // ============================================
  console.log("🌍 Updating Page Univers...");
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
          "C'est le socle de tout projet AURORA. Nous intervenons sur des espaces à vivre, à travailler ou à partager, du plus simple au plus ambitieux. Nous ne faisons pas que bâtir des lieux : nous construisons des espaces où les gens se sentent bien, parce qu'ils ont été pensés autour d'eux.",
        icon: "Building2",
        colorFrom: "primary",
        colorTo: "secondary",
        features: [
          "Travaux intérieurs et extérieurs",
          "Rénovation et second œuvre",
          "Aménagement de bureaux, commerces, copropriétés, maisons",
          "Scénographie naturelle et design sur mesure",
          "Espaces durables : matériaux sains, réemploi, confort thermique",
        ],
      },
      {
        _key: "experience",
        title: "L'Expérience",
        subtitle: "Faire vivre les lieux",
        description:
          "Chaque lieu a une histoire à raconter. AURORA conçoit des moments vivants, qui créent du lien et valorisent le travail accompli. Un espace ne vit vraiment que lorsqu'il rassemble. Nous créons ces moments qui donnent une âme aux lieux.",
        icon: "Star",
        colorFrom: "secondary",
        colorTo: "tertiary",
        features: [
          "Inaugurations, vernissages, séminaires, expositions",
          "Événements écoresponsables et sensoriels",
          "Coordination complète : logistique, scénographie, communication",
          "Mise en valeur des partenaires et des savoir-faire",
        ],
      },
      {
        _key: "structure",
        title: "La Structure",
        subtitle: "Accompagner les entrepreneurs & dirigeants",
        description:
          "Derrière chaque lieu, il y a des femmes et des hommes qui le font exister. Nous accompagnons les créateurs, dirigeants et structures à bâtir un modèle solide et durable. Nous aidons à bâtir non seulement des espaces, mais aussi les structures qui les font vivre.",
        icon: "Briefcase",
        colorFrom: "tertiary",
        colorTo: "success",
        features: [
          "Création d'entreprise et stratégie de développement",
          "Optimisation de gestion et automatisation",
          "Achats responsables et partenariats durables",
          "Management humain et pilotage clair",
        ],
      },
      {
        _key: "image",
        title: "L'Image",
        subtitle: "Donner du sens à la manière de se montrer",
        description:
          "Un projet n'existe vraiment que s'il est compris. Nous aidons à le traduire dans une image juste, humaine et inspirante. Notre rôle n'est pas de fabriquer une image, mais de révéler la vérité de ce que vous portez.",
        icon: "Image",
        colorFrom: "success",
        colorTo: "primary",
        features: [
          "Storytelling, stratégie de marque et charte graphique",
          "Création de sites web, vitrines ou e-commerce sobres et durables",
          "Photographie, vidéo, contenu éditorial",
          "Communication interne & externe alignée",
        ],
      },
    ],
    ctaTitle: "Prêt à démarrer votre projet ?",
    ctaSubtitle:
      "AURORA agit à l'intersection de ces quatre mondes. Chaque projet commence souvent par un besoin concret, puis se déploie naturellement vers les autres dimensions.",
    ctaButtonText: "Construire un projet global avec nous",
  });

  // ============================================
  // 3. PAGE MÉTHODE - 5 Étapes
  // ============================================
  console.log("🔧 Updating Page Méthode...");
  await createOrReplace({
    _id: "pageMethode",
    _type: "pageMethode",
    heroTitle: "La Méthode AURORA",
    heroSubtitle:
      "Nous ne cherchons pas la perfection. Nous cherchons la justesse. 93% des clients préfèrent un interlocuteur unique pour piloter un projet complexe.",
    methodSteps: [
      {
        _key: "observer",
        number: "01",
        title: "Observer",
        subtitle: "Comprendre le besoin",
        description:
          "Comprendre le besoin, le contexte, l'humain. Nous commençons toujours par écouter et observer avant d'agir.",
        icon: "Eye",
        details: [
          "Analyse du contexte et des enjeux",
          "Compréhension des besoins humains",
          "Évaluation des ressources existantes",
        ],
      },
      {
        _key: "orienter",
        number: "02",
        title: "Orienter",
        subtitle: "Identifier les leviers",
        description:
          "Identifier les bons leviers, partenaires, rythmes. Nous traçons la route la plus juste pour votre projet.",
        icon: "Compass",
        details: [
          "Définition des priorités",
          "Sélection des partenaires adaptés",
          "Planification stratégique",
        ],
      },
      {
        _key: "structurer",
        number: "03",
        title: "Structurer",
        subtitle: "Poser un cadre clair",
        description:
          "Poser un cadre clair, durable et transparent. Nous organisons chaque élément pour garantir la fluidité.",
        icon: "Layers",
        details: [
          "Mise en place du cadre de travail",
          "Définition des étapes clés",
          "Création des outils de suivi",
        ],
      },
      {
        _key: "accompagner",
        number: "04",
        title: "Accompagner",
        subtitle: "Coordonner et fluidifier",
        description:
          "Coordonner, ajuster, fluidifier. Nous restons à vos côtés tout au long du projet pour garantir sa réussite.",
        icon: "HeartHandshake",
        details: [
          "Coordination des intervenants",
          "Ajustements en temps réel",
          "Communication continue",
        ],
      },
      {
        _key: "preserver",
        number: "05",
        title: "Préserver",
        subtitle: "Suivre dans le temps",
        description:
          "Suivre dans le temps, entretenir, faire évoluer. Nous pensons chaque projet dans la durée.",
        icon: "Shield",
        details: [
          "Suivi post-projet",
          "Entretien des relations",
          "Évolution continue",
        ],
      },
    ],
    ctaTitle: "Travailler avec un interlocuteur unique et humain",
    ctaSubtitle:
      "AURORA centralise, coordonne et simplifie pour que chaque étape soit claire et fluide.",
    ctaButtonText: "Découvrir notre méthode pas à pas",
  });

  // ============================================
  // 4. PAGE ÂME
  // ============================================
  console.log("💜 Updating Page Âme...");
  await createOrReplace({
    _id: "pageAme",
    _type: "pageAme",
    heroTitle: "L'Âme AURORA",
    heroSubtitle:
      "AURORA, c'est une maison du lien. Un écosystème né du réel : celui des artisans, des créateurs, des entrepreneurs, des lieux qu'on touche et des gens qu'on rencontre.",
    manifeste: {
      title: "Notre Philosophie",
      subtitle: "Une conviction simple",
      content:
        "AURORA est née d'une conviction simple : rien de durable ne se construit seul. Un lieu, une entreprise, une idée, un événement — tout commence par une rencontre. Et c'est de ces rencontres que naît notre mission : faire grandir les projets qui ont du sens, en réunissant les bonnes personnes, au bon moment.\n\nNous ne faisons pas tout. Mais nous savons avec qui le faire.\n\nAURORA, c'est une maison du lien, où se croisent artisans, architectes, designers, communicants, entrepreneurs, créateurs et rêveurs. Tous différents, tous animés par une même exigence : faire les choses bien, et avec du sens.",
      highlights: [
        "Rien de durable ne se construit seul",
        "Nous coordonnons, connectons et faisons avancer",
        "Un écosystème de confiance et de durabilité",
        "82% des projets échouent faute de coordination claire",
      ],
    },
    origines: {
      title: "L'Aube",
      subtitle: "Le sens d'AURORA",
      content:
        "Le mot « AURORA » signifie « l'aube » en latin — symbole de recommencement, de clarté et d'équilibre entre la nuit et le jour. C'est cette lumière, à la fois douce et forte, qui guide chacun de nos projets.\n\nC'est une structure souple, humaine, vivante, faite pour durer et évoluer avec ceux qui la font vivre.\n\nLe sens d'AURORA, c'est la rencontre. Et de cette rencontre, tout devient possible.",
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
      content:
        "AURORA, c'est une maison d'aménagement et d'événementiel ancrée dans le réel, un réseau de partenaires et de savoir-faire locaux, une structure humaine et durable qui relie les métiers.",
      values: [
        {
          _key: "v1",
          name: "Le Lien",
          description:
            "Créer, coordonner, connecter, et faire émerger des projets qui ont du sens.",
        },
        {
          _key: "v2",
          name: "La Justesse",
          description:
            "Nous ne cherchons pas la perfection, nous cherchons ce qui est juste pour chaque projet.",
        },
        {
          _key: "v3",
          name: "La Durabilité",
          description:
            "Comprendre, relier, construire, préserver — une vision globale du lieu, de la marque et de l'humain.",
        },
        {
          _key: "v4",
          name: "L'Humain",
          description:
            "Ce n'est pas une entreprise, c'est une manière de travailler, de relier et de faire ensemble.",
        },
      ],
    },
    visionTitle: "Une vision globale",
    visionSubtitle: "Le Cercle AURORA",
    visionContent:
      "Un chantier devient une histoire. Une histoire devient une marque. Une marque devient une expérience. Une expérience crée un nouveau lien.\n\nTout est lié — et c'est ce lien que nous faisons vivre.\n\nPlus de 60% des projets réussis sont ceux qui intègrent une approche globale dès la conception. En reliant dès le départ espace, expérience, stratégie et image, AURORA construit des projets cohérents et durables dans le temps.",
    ctaTitle: "Découvrir l'histoire d'AURORA",
    ctaSubtitle:
      "Rencontrer ceux qui la font vivre et entrer dans la lumière d'AURORA.",
    ctaButtonText: "Nous raconter votre projet",
  });

  // ============================================
  // 5. PAGE RÉSEAU
  // ============================================
  console.log("🌐 Updating Page Réseau...");
  await createOrReplace({
    _id: "pageReseau",
    _type: "pageReseau",
    heroTitle: "Le Réseau AURORA",
    heroSubtitle:
      "Nous travaillons avec un collectif de partenaires locaux et experts spécifiques : artisans, bureaux d'études, architectes, décorateurs, graphistes, communicants, développeurs, producteurs, traiteurs, musiciens, paysagistes…",
    networkStats: [
      {
        _key: "s1",
        value: "85%",
        label: "Partenaires locaux",
        icon: "MapPin",
      },
      {
        _key: "s2",
        value: "100+",
        label: "Experts du réseau",
        icon: "Users",
      },
      {
        _key: "s3",
        value: "∞",
        label: "Connexions durables",
        icon: "Handshake",
      },
    ],
    partnerTypesTitle: "Notre écosystème",
    partnerTypesSubtitle:
      "Chaque projet est unique, chaque équipe différente. Notre rôle : choisir, coordonner et orchestrer.",
    partnerTypes: [
      {
        _key: "p1",
        title: "Artisans & Créateurs",
        description:
          "Menuisiers, ébénistes, ferronniers, tapissiers, céramistes — les mains qui donnent forme aux idées.",
        count: "40+",
      },
      {
        _key: "p2",
        title: "Architectes & Designers",
        description:
          "Bureaux d'études, architectes d'intérieur, scénographes, paysagistes — les visions qui structurent.",
        count: "25+",
      },
      {
        _key: "p3",
        title: "Communicants & Créatifs",
        description:
          "Graphistes, photographes, vidéastes, rédacteurs, développeurs web — les voix qui racontent.",
        count: "30+",
      },
      {
        _key: "p4",
        title: "Entrepreneurs & Stratèges",
        description:
          "Consultants, formateurs, coachs, experts métiers — les esprits qui accompagnent.",
        count: "20+",
      },
    ],
    regionsTitle: "Proximité & Confiance",
    regionsSubtitle:
      "Plus de 85% des partenaires AURORA sont issus de circuits locaux. Cette proximité garantit la réactivité, la confiance et la qualité humaine dans chaque mission.",
    regions: [
      "Île-de-France",
      "Normandie",
      "Bretagne",
      "Pays de la Loire",
      "Nouvelle-Aquitaine",
      "Occitanie",
    ],
    joinCtaTitle: "Rejoindre le réseau AURORA",
    joinCtaSubtitle:
      "Le vrai savoir-faire d'AURORA, c'est de savoir où le trouver. Vous êtes artisan, créateur ou expert ? Rejoignez notre écosystème de confiance.",
    joinCtaButtonText: "Rejoindre le réseau",
    contactButtonText: "Rencontrer nos partenaires",
  });

  // ============================================
  // 6. FEATURES SECTION (Philosophy)
  // ============================================
  console.log("✨ Updating Features Section...");
  await createOrReplace({
    _id: "featuresSectionSettings",
    _type: "featuresSectionSettings",
    sectionTitle: "Notre Philosophie",
    sectionSubtitle:
      "Nous ne faisons pas tout. Mais nous savons avec qui le faire. AURORA, c'est une maison du lien, où se croisent artisans, architectes, designers, communicants, entrepreneurs, créateurs et rêveurs.",
    features: [
      {
        _key: "f1",
        title: "L'art de relier",
        description:
          "L'art de relier les humains, les savoirs et les lieux. Rien de durable ne se construit seul.",
        icon: "Users",
      },
      {
        _key: "f2",
        title: "Un écosystème de confiance",
        description:
          "Nous coordonnons, connectons et faisons avancer. Ce que nous construisons, c'est un écosystème de confiance et de durabilité.",
        icon: "Handshake",
      },
      {
        _key: "f3",
        title: "82% des projets",
        description:
          "82% des projets échouent faute de coordination claire entre les intervenants. Chez AURORA, notre force, c'est justement de créer du lien.",
        icon: "Target",
      },
    ],
  });

  // ============================================
  // 7. STATS SECTION
  // ============================================
  console.log("📊 Updating Stats Section...");
  await createOrReplace({
    _id: "statsSectionSettings",
    _type: "statsSectionSettings",
    sectionTitle: "AURORA en chiffres",
    sectionSubtitle: "Des résultats concrets, une approche qui fait ses preuves",
    stats: [
      {
        _key: "st1",
        value: "85%",
        label: "Partenaires locaux",
        suffix: "",
      },
      {
        _key: "st2",
        value: "60%",
        label: "Projets réussis avec approche globale",
        suffix: "+",
      },
      {
        _key: "st3",
        value: "75%",
        label: "Réduction CO₂ par réemploi",
        suffix: "",
      },
      {
        _key: "st4",
        value: "93%",
        label: "Clients préfèrent un interlocuteur unique",
        suffix: "",
      },
    ],
  });

  // ============================================
  // 8. GUIDE SECTION (Method Overview)
  // ============================================
  console.log("📖 Updating Guide Section...");
  await createOrReplace({
    _id: "guideSectionSettings",
    _type: "guideSectionSettings",
    sectionTitle: "Une approche globale",
    sectionSubtitle:
      "AURORA agit à l'intersection de quatre mondes. Un chantier devient une histoire. Une histoire devient une marque. Une marque devient une expérience. Une expérience crée un nouveau lien.",
    steps: [
      {
        _key: "g1",
        number: "01",
        title: "L'Espace",
        description: "Travaux, aménagements, rénovation, design et végétalisation",
      },
      {
        _key: "g2",
        number: "02",
        title: "L'Expérience",
        description: "Événementiel, rencontres, valorisation et activation",
      },
      {
        _key: "g3",
        number: "03",
        title: "La Structure",
        description: "Stratégie, organisation, croissance, achats, gestion",
      },
      {
        _key: "g4",
        number: "04",
        title: "L'Image",
        description: "Communication, digital, identité et cohérence",
      },
    ],
  });

  // ============================================
  // 9. TESTIMONIALS (Savoir-vous)
  // ============================================
  console.log("💬 Updating Testimonials...");
  
  // Delete existing testimonials first
  const existingTestimonials = await client.fetch(`*[_type == "testimonial"]._id`);
  for (const id of existingTestimonials) {
    await client.delete(id);
  }

  const testimonials = [
    {
      _id: "testimonial-1",
      _type: "testimonial",
      content:
        "Le réemploi de matériaux permet de réduire jusqu'à 75% des émissions de CO₂ d'un projet. Chez AURORA, nous privilégions les matières vivantes, locales et à faible impact.",
      author: "L'Espace",
      role: "Créer & Transformer",
      rating: 5,
    },
    {
      _id: "testimonial-2",
      _type: "testimonial",
      content:
        "La mémoire sensorielle d'un lieu se crée en moins de trois secondes. Une lumière, un parfum, une texture ou un son peuvent marquer durablement un visiteur.",
      author: "L'Expérience",
      role: "Faire vivre les lieux",
      rating: 5,
    },
    {
      _id: "testimonial-3",
      _type: "testimonial",
      content:
        "Les entreprises qui structurent leur organisation gagnent en moyenne 2 jours de productivité par semaine. Nous aidons à transformer cette efficacité en temps humain.",
      author: "La Structure",
      role: "Accompagner les entrepreneurs",
      rating: 5,
    },
    {
      _id: "testimonial-4",
      _type: "testimonial",
      content:
        "Une marque qui communique clairement son 'pourquoi' fidélise jusqu'à 30% de clients en plus. Chaque mot, chaque image sert à raconter ce qui vous rend unique.",
      author: "L'Image",
      role: "Donner du sens",
      rating: 5,
    },
  ];

  for (const testimonial of testimonials) {
    await createOrReplace(testimonial);
  }

  // ============================================
  // 10. ANNOUNCEMENT BANNER
  // ============================================
  console.log("📢 Updating Announcement Banner...");
  await createOrReplace({
    _id: "announcementBanner",
    _type: "announcementBanner",
    enabled: true,
    text: "🌅 AURORA — À l'aube des connexions durables",
    link: "/univers",
    linkText: "Découvrir nos univers",
    backgroundColor: "#1a1a2e",
    textColor: "#ffffff",
  });

  console.log("\n=====================================");
  console.log("✅ All content updated successfully!");
  console.log("=====================================\n");
  console.log("🌐 Preview your changes at: https://patch-clone-premium.vercel.app");
  console.log("📝 Edit content at: https://auroraa.sanity.studio\n");
}

updateAllContent().catch(console.error);
