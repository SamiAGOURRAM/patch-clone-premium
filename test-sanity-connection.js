// Quick test to verify Sanity connection
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'g5k024mq',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
});

console.log('Testing Sanity connection...');
console.log('Project ID: g5k024mq');
console.log('Dataset: production');

// Test query
client.fetch('*[_type == "heroSection"][0]').then((data) => {
  if (data) {
    console.log('✅ Connection successful!');
    console.log('Hero content found:', data.mainTitle || 'No title');
  } else {
    console.log('⚠️  Connected but no hero content found. Create content in Sanity Studio.');
  }
}).catch((error) => {
  console.error('❌ Connection failed:', error.message);
  console.log('\nPossible issues:');
  console.log('1. Check CORS settings in manage.sanity.io');
  console.log('2. Verify project ID is correct');
  console.log('3. Make sure dataset "production" exists');
});

