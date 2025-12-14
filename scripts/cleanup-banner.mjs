import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'g5k024mq',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN || 'skNWK43vJcngBpriLR5EIVFz9XEU4GjLAkFGbTtTCLSIgWY68UHwNBaEZQfSMiiAwFZsaqHrIkZJqUh0N1xjcZoLOm48hy625rYqRvvQ2QPQS5zzeB91ajw0jQW7D4DAlFz5AmOiwm2OLT5ALjtXAvC9X5NyBN7Vz8ao90mOMcigV4xbYUMq',
  useCdn: false,
});

async function cleanupDuplicateBanner() {
  console.log('🧹 Cleaning up duplicate announcement banner...\n');

  // Delete the old duplicate banner with random ID
  const oldBannerId = 'Mo7ZMz1r1V9cW36tAcEP04';
  
  try {
    await client.delete(oldBannerId);
    console.log(`✅ Deleted old duplicate banner: ${oldBannerId}`);
  } catch (error) {
    console.error(`❌ Error deleting banner:`, error.message);
  }

  // Verify what's left
  const remaining = await client.fetch('*[_type == "announcementBanner"]');
  console.log('\nRemaining banners:');
  console.log(JSON.stringify(remaining, null, 2));
}

cleanupDuplicateBanner();
