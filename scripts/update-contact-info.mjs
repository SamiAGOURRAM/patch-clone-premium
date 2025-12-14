import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'g5k024mq',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN || 'skNWK43vJcngBpriLR5EIVFz9XEU4GjLAkFGbTtTCLSIgWY68UHwNBaEZQfSMiiAwFZsaqHrIkZJqUh0N1xjcZoLOm48hy625rYqRvvQ2QPQS5zzeB91ajw0jQW7D4DAlFz5AmOiwm2OLT5ALjtXAvC9X5NyBN7Vz8ao90mOMcigV4xbYUMq',
  useCdn: false,
});

async function updateContactInfo() {
  console.log('📞 Updating contact info with all fields...\n');

  const contactInfo = {
    _id: 'contactInfo',
    _type: 'contactInfo',
    email: 'contact@aurora-consulting.fr',
    phone: '+33 1 23 45 67 89',
    address: 'Paris, France',
    instagram: '@aurora_consulting',
    twitter: '@aurora_consult',
    linkedin: 'Aurora Consulting',
    calComLink: 'med-agourram-otzwlb',
    calendlyUrl: 'https://cal.com/aurora-consulting',
    ctaTitle: 'Prêt à transformer votre entreprise ?',
    ctaSubtitle: 'Rejoignez les entreprises qui font confiance à Aurora',
  };

  try {
    await client.createOrReplace(contactInfo);
    console.log('✅ Contact info updated with all fields!');
    
    // Show what was saved
    const saved = await client.fetch('*[_id == "contactInfo"][0]');
    console.log('\nSaved contact info:');
    console.log(JSON.stringify(saved, null, 2));
  } catch (error) {
    console.error('❌ Error updating contact info:', error.message);
  }
}

updateContactInfo();
