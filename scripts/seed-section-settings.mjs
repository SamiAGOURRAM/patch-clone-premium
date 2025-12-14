import { createClient } from '@sanity/client';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const client = createClient({
  projectId: process.env.VITE_SANITY_PROJECT_ID || 'g5k024mq',
  dataset: process.env.VITE_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

// Section settings data to seed
const sectionSettingsData = {
  // Testimonials Section Settings
  testimonialsSectionSettings: {
    _id: 'testimonialsSectionSettings',
    _type: 'testimonialsSectionSettings',
    badgeText: "Nos partenaires de confiance",
    sectionTitle: "Découvrez les leaders qui font confiance à AURORA pour les accompagner dans leur transformation",
    buttonText: "Rencontrer nos clients",
    buttonLink: "#clients",
  },

  // Features/Blog Section Settings
  featuresSectionSettings: {
    _id: 'featuresSectionSettings',
    _type: 'featuresSectionSettings',
    sectionTitle: "Le Blog AURORA",
    viewMoreText: "Voir tous les articles",
    viewMoreLink: "/blog",
    ctaButtonText: "Découvrir la plateforme",
    ctaButtonLink: "#platform",
  },

  // Guide/Methods Section Settings
  guideSectionSettings: {
    _id: 'guideSectionSettings',
    _type: 'guideSectionSettings',
    sectionTitle: "Les Méthodes AURORA",
    buttonText: "Découvrir notre approche",
    buttonLink: "#approach",
  },

  // Stats Section Settings
  statsSectionSettings: {
    _id: 'statsSectionSettings',
    _type: 'statsSectionSettings',
    showHeader: false,
    sectionTitle: "Nos Chiffres Clés",
    sectionSubtitle: "Des résultats concrets qui témoignent de notre engagement envers l'excellence",
  },
};

async function seedSectionSettings() {
  console.log('🌱 Starting to seed section settings...\n');

  for (const [key, data] of Object.entries(sectionSettingsData)) {
    try {
      // Check if document already exists
      const existing = await client.fetch(`*[_id == $id][0]`, { id: data._id });
      
      if (existing) {
        console.log(`📝 Updating existing ${key}...`);
        await client.createOrReplace(data);
        console.log(`   ✅ Updated ${key}`);
      } else {
        console.log(`🆕 Creating ${key}...`);
        await client.create(data);
        console.log(`   ✅ Created ${key}`);
      }
    } catch (error) {
      console.error(`   ❌ Error with ${key}:`, error.message);
    }
  }

  console.log('\n✨ Section settings seeding complete!');
}

// Also ensure we have section settings for visibility toggle
async function seedMainSectionSettings() {
  console.log('\n🎛️  Checking main section visibility settings...\n');

  const mainSettings = {
    _id: 'sectionSettings',
    _type: 'sectionSettings',
    heroEnabled: true,
    statsEnabled: true,
    testimonialsEnabled: true,
    guideEnabled: true,
    videoEnabled: true,
    featuresEnabled: true,
    ctaEnabled: true,
  };

  try {
    const existing = await client.fetch(`*[_type == "sectionSettings"][0]`);
    
    if (existing) {
      console.log('📝 Main section settings already exist, skipping...');
    } else {
      console.log('🆕 Creating main section visibility settings...');
      await client.create(mainSettings);
      console.log('   ✅ Created main section settings');
    }
  } catch (error) {
    console.error('   ❌ Error:', error.message);
  }
}

// Run the seeding
async function main() {
  console.log('═══════════════════════════════════════════════════════════');
  console.log('           AURORA - Sanity Section Settings Seeder');
  console.log('═══════════════════════════════════════════════════════════\n');
  
  await seedSectionSettings();
  await seedMainSectionSettings();
  
  console.log('\n═══════════════════════════════════════════════════════════');
  console.log('                    🎉 All done!');
  console.log('═══════════════════════════════════════════════════════════');
  console.log('\nYour client can now customize these sections in Sanity Studio:');
  console.log('  • Section Témoignages - Paramètres');
  console.log('  • Section Blog/Features - Paramètres');
  console.log('  • Section Méthodes - Paramètres');
  console.log('  • Section Statistiques - Paramètres');
  console.log('  • Paramètres des Sections (show/hide sections)');
}

main().catch(console.error);
