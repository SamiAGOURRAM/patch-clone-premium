import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'g5k024mq',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
});

async function checkStats() {
  const stats = await client.fetch('*[_type == "stat"]');
  console.log('Stats in Sanity:');
  console.log(JSON.stringify(stats, null, 2));
}

checkStats();
