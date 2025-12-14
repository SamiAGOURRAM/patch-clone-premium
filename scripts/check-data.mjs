// Quick script to check announcement banner data
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'g5k024mq',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

async function checkData() {
  const banner = await client.fetch('*[_type == "announcementBanner"][0]');
  console.log('📢 Announcement Banner:', JSON.stringify(banner, null, 2));
  
  const testimonials = await client.fetch('*[_type == "testimonialsSectionSettings"][0]');
  console.log('\n🗣️ Testimonials Settings:', JSON.stringify(testimonials, null, 2));
  
  const features = await client.fetch('*[_type == "featuresSectionSettings"][0]');
  console.log('\n📰 Features Settings:', JSON.stringify(features, null, 2));
  
  const guide = await client.fetch('*[_type == "guideSectionSettings"][0]');
  console.log('\n📚 Guide Settings:', JSON.stringify(guide, null, 2));
  
  const stats = await client.fetch('*[_type == "statsSectionSettings"][0]');
  console.log('\n📊 Stats Settings:', JSON.stringify(stats, null, 2));
}

checkData();
