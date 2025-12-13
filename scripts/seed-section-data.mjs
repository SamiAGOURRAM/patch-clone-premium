// Script to seed announcement banner and section colors with defaults
import { createClient } from '@sanity/client';

const token = process.env.SANITY_API_TOKEN;

if (!token) {
  console.error('❌ Error: SANITY_API_TOKEN environment variable is required');
  console.log('\n💡 Run: $env:SANITY_API_TOKEN="your_token"; node scripts/seed-section-data.mjs');
  process.exit(1);
}

const client = createClient({
  projectId: 'g5k024mq',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: token,
});

// Default announcement banner
const defaultAnnouncementBanner = {
  _type: 'announcementBanner',
  enabled: true,
  badgeText: 'NEW',
  message: 'New guide to carbon credit procurement featuring leaders from Bain & Company, Docusign, Etsy, and Nokia',
  linkText: 'Read it here',
  linkUrl: '#',
  backgroundColor: '220 45% 18%', // Dark blue
  textColor: '0 0% 100%', // White
  badgeBackgroundColor: '30 43% 97%', // Light cream
  badgeTextColor: '214 59% 20%', // Dark blue
};

// Default section colors
const defaultSectionColors = [
  {
    _type: 'sectionColors',
    sectionName: 'guide',
    backgroundColor: '15 30% 15%', // Dark blue-gray (#0F1C2E equivalent)
    textColor: '30 43% 97%', // Light cream
    headingColor: '30 43% 97%', // Light cream
    buttonBackgroundColor: '30 43% 97%', // Light cream
    buttonTextColor: '214 59% 20%', // Dark blue
  },
  {
    _type: 'sectionColors',
    sectionName: 'cta',
    backgroundColor: '15 30% 15%', // Dark blue-gray (#0F1C2E equivalent)
    textColor: '30 43% 97%', // Light cream
    headingColor: '30 43% 97%', // Light cream
    buttonBackgroundColor: '30 43% 97%', // Light cream
    buttonTextColor: '214 59% 20%', // Dark blue
  },
];

// Default section settings (all enabled)
const defaultSectionSettings = {
  _type: 'sectionSettings',
  heroEnabled: true,
  statsEnabled: true,
  testimonialsEnabled: true,
  guideEnabled: true,
  videoEnabled: true,
  featuresEnabled: true,
  ctaEnabled: true,
};

async function seedData() {
  try {
    console.log('🌱 Seeding section data to Sanity...\n');
    
    // Seed announcement banner
    const existingBanner = await client.fetch('*[_type == "announcementBanner"][0]');
    if (existingBanner) {
      console.log('⚠️  Announcement banner exists. Updating...');
      await client.patch(existingBanner._id).set(defaultAnnouncementBanner).commit();
      console.log('✅ Announcement banner updated!');
    } else {
      console.log('✨ Creating announcement banner...');
      await client.create(defaultAnnouncementBanner);
      console.log('✅ Announcement banner created!');
    }

    // Seed section colors
    for (const sectionColor of defaultSectionColors) {
      const existing = await client.fetch(`*[_type == "sectionColors" && sectionName == "${sectionColor.sectionName}"][0]`);
      if (existing) {
        console.log(`⚠️  Section colors for "${sectionColor.sectionName}" exist. Updating...`);
        await client.patch(existing._id).set(sectionColor).commit();
        console.log(`✅ Section colors for "${sectionColor.sectionName}" updated!`);
      } else {
        console.log(`✨ Creating section colors for "${sectionColor.sectionName}"...`);
        await client.create(sectionColor);
        console.log(`✅ Section colors for "${sectionColor.sectionName}" created!`);
      }
    }

    // Seed section settings
    const existingSettings = await client.fetch('*[_type == "sectionSettings"][0]');
    if (existingSettings) {
      console.log('⚠️  Section settings exist. Updating...');
      await client.patch(existingSettings._id).set(defaultSectionSettings).commit();
      console.log('✅ Section settings updated!');
    } else {
      console.log('✨ Creating section settings...');
      await client.create(defaultSectionSettings);
      console.log('✅ Section settings created!');
    }
    
    console.log('\n🎨 All section data seeded successfully!');
    console.log('💡 Go to Sanity Studio and publish the documents.');
    
  } catch (error) {
    console.error('❌ Error seeding data:', error.message);
    process.exit(1);
  }
}

seedData();

