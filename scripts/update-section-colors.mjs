import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'g5k024mq',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN || 'skNWK43vJcngBpriLR5EIVFz9XEU4GjLAkFGbTtTCLSIgWY68UHwNBaEZQfSMiiAwFZsaqHrIkZJqUh0N1xjcZoLOm48hy625rYqRvvQ2QPQS5zzeB91ajw0jQW7D4DAlFz5AmOiwm2OLT5ALjtXAvC9X5NyBN7Vz8ao90mOMcigV4xbYUMq',
  useCdn: false,
});

async function updateSectionColors() {
  console.log('🎨 Updating section colors via Sanity...\n');

  // Color definitions
  const darkBlueHSL = '213 50% 12%'; // HSL value for dark blue (#0F1C2E)
  const lightTextHSL = '40 33% 96%'; // HSL value for cream/white text
  const mutedBgHSL = '30 30% 90%'; // Same warm beige as testimonials bg-muted
  const darkTextHSL = '213 50% 12%'; // Dark text for light backgrounds

  // Section colors to create/update
  const sectionColors = [
    {
      _id: 'sectionColors-guide',
      _type: 'sectionColors',
      sectionName: 'guide',
      backgroundColor: darkBlueHSL,
      textColor: lightTextHSL,
      headingColor: lightTextHSL,
      buttonBackgroundColor: lightTextHSL,
      buttonTextColor: darkBlueHSL,
    },
    {
      _id: 'sectionColors-stats',
      _type: 'sectionColors',
      sectionName: 'stats',
      backgroundColor: mutedBgHSL,
      textColor: darkTextHSL,
      headingColor: darkTextHSL,
    },
    {
      _id: 'sectionColors-cta',
      _type: 'sectionColors',
      sectionName: 'cta',
      backgroundColor: darkBlueHSL,
      textColor: lightTextHSL,
      headingColor: lightTextHSL,
      buttonBackgroundColor: lightTextHSL,
      buttonTextColor: darkBlueHSL,
    },
  ];

  for (const colors of sectionColors) {
    try {
      await client.createOrReplace(colors);
      console.log(`✅ Updated colors for section: ${colors.sectionName}`);
    } catch (error) {
      console.error(`❌ Error updating ${colors.sectionName}:`, error.message);
    }
  }

  console.log('\n🎉 Section colors updated! Refresh your browser to see changes.');
}

updateSectionColors();
