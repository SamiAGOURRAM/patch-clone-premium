import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'g5k024mq',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
});

async function checkBanner() {
  const banner = await client.fetch('*[_type == "announcementBanner"][0]');
  console.log('Announcement Banner in Sanity:');
  console.log(JSON.stringify(banner, null, 2));
}

checkBanner();
