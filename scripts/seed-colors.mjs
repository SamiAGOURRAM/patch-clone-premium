// Script to seed default colors into Sanity
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'g5k024mq',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN, // Optional: only needed if you have private dataset
});

// Default colors from your CSS (index.css)
const defaultColors = {
  _type: 'colorSettings',
  primary: '32 40% 38%', // Bronze sophistiqué
  primaryForeground: '0 0% 100%',
  secondary: '220 45% 18%', // Navy profond
  secondaryForeground: '0 0% 100%',
  tertiary: '340 35% 28%', // Bordeaux élégant
  tertiaryForeground: '0 0% 100%',
  success: '158 60% 22%', // Émeraude profond
  successForeground: '0 0% 100%',
  accent: '0 0% 20%', // Charcoal premium
  accentForeground: '0 0% 100%',
  background: '30 43% 97%', // Crème
  foreground: '214 59% 20%',
};

async function seedColors() {
  try {
    console.log('🌱 Seeding color settings to Sanity...');
    
    // Check if color settings already exist
    const existing = await client.fetch('*[_type == "colorSettings"][0]');
    
    if (existing) {
      console.log('⚠️  Color settings already exist. Updating...');
      const updated = await client
        .patch(existing._id)
        .set(defaultColors)
        .commit();
      console.log('✅ Color settings updated!');
      console.log('📝 Document ID:', updated._id);
    } else {
      console.log('✨ Creating new color settings...');
      const created = await client.create(defaultColors);
      console.log('✅ Color settings created!');
      console.log('📝 Document ID:', created._id);
    }
    
    console.log('\n🎨 Colors seeded successfully!');
    console.log('💡 Go to Sanity Studio and publish the color settings document.');
    
  } catch (error) {
    console.error('❌ Error seeding colors:', error.message);
    if (error.message.includes('token')) {
      console.log('\n💡 Tip: If you get a token error, you can manually add colors in Sanity Studio.');
    }
    process.exit(1);
  }
}

seedColors();

