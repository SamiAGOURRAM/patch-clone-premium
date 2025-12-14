import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'g5k024mq',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN || 'skNWK43vJcngBpriLR5EIVFz9XEU4GjLAkFGbTtTCLSIgWY68UHwNBaEZQfSMiiAwFZsaqHrIkZJqUh0N1xjcZoLOm48hy625rYqRvvQ2QPQS5zzeB91ajw0jQW7D4DAlFz5AmOiwm2OLT5ALjtXAvC9X5NyBN7Vz8ao90mOMcigV4xbYUMq',
  useCdn: false,
});

async function cleanupDuplicates() {
  console.log('🧹 Cleaning up duplicate section colors...\n');

  // IDs of old brown-colored entries to delete
  const oldIdsToDelete = [
    'WT7SDeRmv2DMm1JEE4yups',  // old guide (brown)
    'WT7SDeRmv2DMm1JEE4yv10',  // old cta (brown)
  ];

  for (const id of oldIdsToDelete) {
    try {
      await client.delete(id);
      console.log(`✅ Deleted old entry: ${id}`);
    } catch (error) {
      console.error(`❌ Error deleting ${id}:`, error.message);
    }
  }

  console.log('\n🎉 Cleanup complete! Refresh your browser to see the changes.');
}

cleanupDuplicates();
