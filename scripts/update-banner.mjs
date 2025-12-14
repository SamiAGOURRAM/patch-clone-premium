import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'g5k024mq',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN || 'skNWK43vJcngBpriLR5EIVFz9XEU4GjLAkFGbTtTCLSIgWY68UHwNBaEZQfSMiiAwFZsaqHrIkZJqUh0N1xjcZoLOm48hy625rYqRvvQ2QPQS5zzeB91ajw0jQW7D4DAlFz5AmOiwm2OLT5ALjtXAvC9X5NyBN7Vz8ao90mOMcigV4xbYUMq',
  useCdn: false,
});

async function updateBanner() {
  console.log('🔧 Updating announcement banner with proper defaults...\n');

  await client.createOrReplace({
    _id: 'announcementBanner',
    _type: 'announcementBanner',
    enabled: true,
    badgeText: 'NEW',
    message: 'visite',
    linkText: 'En savoir plus',
    linkUrl: '#',
    backgroundColor: '220 45% 18%',
    textColor: '0 0% 100%',
    badgeBackgroundColor: '30 43% 97%',
    badgeTextColor: '214 59% 20%',
  });

  console.log('✅ Banner updated!');

  // Verify
  const banner = await client.fetch('*[_id == "announcementBanner"][0]');
  console.log('\nCurrent banner:');
  console.log(JSON.stringify(banner, null, 2));
}

updateBanner();
