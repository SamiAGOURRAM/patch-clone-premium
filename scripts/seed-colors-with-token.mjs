// Script to seed default colors into Sanity
// Run with: SANITY_API_TOKEN=your_token node scripts/seed-colors-with-token.mjs
import { createClient } from '@sanity/client';

const token = process.env.SANITY_API_TOKEN;

if (!token) {
  console.error('❌ Error: SANITY_API_TOKEN environment variable is required');
  console.log('\n📝 How to get a token:');
  console.log('1. Go to https://manage.sanity.io');
  console.log('2. Select your project (g5k024mq)');
  console.log('3. Go to Settings → API → Tokens');
  console.log('4. Click "Add API token"');
  console.log('5. Name it "Color Seeder"');
  console.log('6. Select "Editor" permissions');
  console.log('7. Copy the token');
  console.log('\n💡 Then run:');
  console.log('   $env:SANITY_API_TOKEN="your_token_here"; node scripts/seed-colors-with-token.mjs');
  console.log('   (PowerShell)');
  console.log('\n   OR');
  console.log('   SANITY_API_TOKEN=your_token_here node scripts/seed-colors-with-token.mjs');
  console.log('   (Bash/CMD)');
  process.exit(1);
}

const client = createClient({
  projectId: 'g5k024mq',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: token,
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
    console.log('🌱 Seeding color settings to Sanity...\n');
    
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
    console.log('   (It will be in draft mode, you need to publish it)');
    
  } catch (error) {
    console.error('❌ Error seeding colors:', error.message);
    if (error.message.includes('token') || error.message.includes('permission')) {
      console.log('\n💡 Make sure your token has "Editor" permissions.');
    }
    process.exit(1);
  }
}

seedColors();

