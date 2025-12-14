import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'g5k024mq',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
});

async function checkColors() {
  const colors = await client.fetch('*[_type == "sectionColors"]');
  console.log('Current section colors in Sanity:');
  console.log(JSON.stringify(colors, null, 2));
}

checkColors();
