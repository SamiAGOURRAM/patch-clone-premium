// Script to seed all section settings documents
import { createClient } from '@sanity/client';

const token = process.env.SANITY_API_TOKEN;

if (!token) {
  console.error('❌ Error: SANITY_API_TOKEN environment variable is required');
  process.exit(1);
}

const client = createClient({
  projectId: 'g5k024mq',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: token,
});

// Section Settings Data
const sectionSettings = {
  testimonialsSectionSettings: {
    _id: 'testimonialsSectionSettings',
    _type: 'testimonialsSectionSettings',
    badgeText: "Nos références",
    sectionTitle: "Découvrez les leaders qui font confiance à Aurora pour les accompagner dans leur transformation",
    buttonText: "Rencontrer nos clients",
    buttonLink: "#clients",
  },
  featuresSectionSettings: {
    _id: 'featuresSectionSettings',
    _type: 'featuresSectionSettings',
    sectionTitle: "Le blog Aurora",
    viewMoreText: "Voir plus d'articles",
    viewMoreLink: "/blog",
    ctaButtonText: "Explorer la plateforme",
    ctaButtonLink: "#platform",
  },
  guideSectionSettings: {
    _id: 'guideSectionSettings',
    _type: 'guideSectionSettings',
    sectionTitle: "Les Méthodes AURORA",
    buttonText: "Découvrir notre approche",
    buttonLink: "#approach",
  },
  statsSectionSettings: {
    _id: 'statsSectionSettings',
    _type: 'statsSectionSettings',
    showHeader: false,
    sectionTitle: "Nos Chiffres Clés",
    sectionSubtitle: "Des résultats concrets qui témoignent de notre engagement",
  },
};

async function seedSectionSettings() {
  console.log('🌱 Seeding all section settings...\n');

  for (const [name, data] of Object.entries(sectionSettings)) {
    try {
      // Check if document exists
      const existing = await client.fetch(`*[_type == "${data._type}"][0]`);
      
      if (existing) {
        // Update existing document
        await client.patch(existing._id).set(data).commit();
        console.log(`✅ ${name} updated!`);
      } else {
        // Create new document
        await client.createOrReplace(data);
        console.log(`✅ ${name} created!`);
      }
    } catch (error) {
      console.error(`❌ Error with ${name}:`, error.message);
    }
  }

  console.log('\n🎉 All section settings seeded successfully!');
  console.log('💡 The documents are published and ready to use.');
  console.log('🔗 Go to Sanity Studio to customize the content for your client.');
}

seedSectionSettings();
