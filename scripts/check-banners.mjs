import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'g5k024mq',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
});

async function checkBanners() {
  const banners = await client.fetch('*[_type == "announcementBanner"]');
  console.log('All announcement banners in Sanity:');
  console.log(JSON.stringify(banners, null, 2));
}

checkBanners();
