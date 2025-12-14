import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'g5k024mq',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN || 'skNWK43vJcngBpriLR5EIVFz9XEU4GjLAkFGbTtTCLSIgWY68UHwNBaEZQfSMiiAwFZsaqHrIkZJqUh0N1xjcZoLOm48hy625rYqRvvQ2QPQS5zzeB91ajw0jQW7D4DAlFz5AmOiwm2OLT5ALjtXAvC9X5NyBN7Vz8ao90mOMcigV4xbYUMq',
  useCdn: false,
});

async function fixAnnouncementBanner() {
  console.log('🔧 Fixing announcement banner...\n');

  // First get the old document
  const oldBanner = await client.fetch('*[_type == "announcementBanner" && _id != "announcementBanner"][0]');
  
  if (oldBanner) {
    console.log('Found old banner with ID:', oldBanner._id);
    
    // Create new banner with fixed ID using the old banner's data
    const newBanner = {
      _id: 'announcementBanner',
      _type: 'announcementBanner',
      enabled: oldBanner.enabled,
      badgeText: oldBanner.badgeText,
      message: oldBanner.message,
      linkText: oldBanner.linkText,
      linkUrl: oldBanner.linkUrl,
      backgroundColor: oldBanner.backgroundColor,
      textColor: oldBanner.textColor,
      badgeBackgroundColor: oldBanner.badgeBackgroundColor,
      badgeTextColor: oldBanner.badgeTextColor,
    };

    try {
      await client.createOrReplace(newBanner);
      console.log('✅ Created banner with fixed ID: announcementBanner');
      
      // Delete the old one
      await client.delete(oldBanner._id);
      console.log('✅ Deleted old banner:', oldBanner._id);
    } catch (error) {
      console.error('❌ Error:', error.message);
    }
  } else {
    console.log('No old banner found. Checking for correct one...');
    const correctBanner = await client.fetch('*[_type == "announcementBanner" && _id == "announcementBanner"][0]');
    if (correctBanner) {
      console.log('✅ Banner with correct ID already exists');
    } else {
      console.log('Creating new banner with correct ID...');
      await client.createOrReplace({
        _id: 'announcementBanner',
        _type: 'announcementBanner',
        enabled: true,
        badgeText: 'NEW',
        message: 'Bienvenue sur notre nouveau site!',
        linkText: 'En savoir plus',
        linkUrl: '#',
        backgroundColor: '220 45% 18%',
        textColor: '0 0% 100%',
        badgeBackgroundColor: '30 43% 97%',
        badgeTextColor: '214 59% 20%',
      });
      console.log('✅ Created new banner');
    }
  }

  console.log('\n🎉 Done! The banner should now update correctly from Sanity.');
}

fixAnnouncementBanner();
