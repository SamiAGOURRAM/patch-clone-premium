import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'g5k024mq',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
});

async function checkMethods() {
  const methods = await client.fetch('*[_type == "method"]');
  console.log('Methods in Sanity:');
  console.log(JSON.stringify(methods, null, 2));
}

checkMethods();
