import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'g5k024mq',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN || 'skNWK43vJcngBpriLR5EIVFz9XEU4GjLAkFGbTtTCLSIgWY68UHwNBaEZQfSMiiAwFZsaqHrIkZJqUh0N1xjcZoLOm48hy625rYqRvvQ2QPQS5zzeB91ajw0jQW7D4DAlFz5AmOiwm2OLT5ALjtXAvC9X5NyBN7Vz8ao90mOMcigV4xbYUMq',
  useCdn: false,
});

// Helper to upload image from URL
async function uploadImageFromUrl(url, filename) {
  try {
    const response = await fetch(url);
    const buffer = await response.arrayBuffer();
    const imageAsset = await client.assets.upload('image', Buffer.from(buffer), {
      filename,
    });
    return {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: imageAsset._id,
      },
    };
  } catch (error) {
    console.log(`⚠️ Could not upload image: ${error.message}`);
    return null;
  }
}

async function seedMethodImages() {
  console.log('🖼️ Seeding method images...\n');

  const methodImages = [
    {
      id: 'method-1',
      imageUrl: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200',
      filename: 'method-conseil.jpg',
    },
    {
      id: 'method-2',
      imageUrl: 'https://images.pexels.com/photos/1268975/pexels-photo-1268975.jpeg?auto=compress&cs=tinysrgb&w=1200',
      filename: 'method-formation.jpg',
    },
    {
      id: 'method-3',
      imageUrl: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1200',
      filename: 'method-integration.jpg',
    },
    {
      id: 'method-4',
      imageUrl: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200',
      filename: 'method-optimisation.jpg',
    },
    {
      id: 'method-5',
      imageUrl: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200',
      filename: 'method-accompagnement.jpg',
    },
  ];

  for (const method of methodImages) {
    try {
      console.log(`📤 Uploading image for ${method.id}...`);
      const image = await uploadImageFromUrl(method.imageUrl, method.filename);
      
      if (image) {
        await client.patch(method.id).set({ image }).commit();
        console.log(`✅ Updated ${method.id} with image`);
      }
    } catch (error) {
      console.error(`❌ Error updating ${method.id}:`, error.message);
    }
  }

  console.log('\n🎉 Method images seeded!');
}

async function seedContactInfo() {
  console.log('\n📞 Seeding contact info...\n');

  const contactInfo = {
    _id: 'contactInfo',
    _type: 'contactInfo',
    email: 'contact@aurora-consulting.fr',
    phone: '+33 1 23 45 67 89',
    address: 'Paris, France',
    instagram: '@aurora_consulting',
    twitter: '@aurora_consult',
    linkedin: 'Aurora Consulting',
    calendlyUrl: 'https://cal.com/aurora-consulting',
  };

  try {
    await client.createOrReplace(contactInfo);
    console.log('✅ Contact info seeded!');
  } catch (error) {
    console.error('❌ Error seeding contact info:', error.message);
  }
}

async function main() {
  await seedMethodImages();
  await seedContactInfo();
  console.log('\n✨ All done!');
}

main();
