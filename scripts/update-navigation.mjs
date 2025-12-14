import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'g5k024mq',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN || 'skNWK43vJcngBpriLR5EIVFz9XEU4GjLAkFGbTtTCLSIgWY68UHwNBaEZQfSMiiAwFZsaqHrIkZJqUh0N1xjcZoLOm48hy625rYqRvvQ2QPQS5zzeB91ajw0jQW7D4DAlFz5AmOiwm2OLT5ALjtXAvC9X5NyBN7Vz8ao90mOMcigV4xbYUMq',
  useCdn: false,
});

async function updateNavigation() {
  console.log('🧭 Updating navigation with new page links...\n');

  const navigation = {
    _id: 'navigation',
    _type: 'navigation',
    logoText: 'AURORA',
    menuItems: [
      {
        _key: 'univers',
        _type: 'menuItem',
        label: 'Nos Univers',
        href: '/univers',
        subItems: [
          { _key: 'espace', _type: 'subMenuItem', label: 'Espace', href: '/univers#espace' },
          { _key: 'experience', _type: 'subMenuItem', label: 'Expérience', href: '/univers#experience' },
          { _key: 'structure', _type: 'subMenuItem', label: 'Structure', href: '/univers#structure' },
          { _key: 'image', _type: 'subMenuItem', label: 'Image', href: '/univers#image' },
        ],
      },
      {
        _key: 'methode',
        _type: 'menuItem',
        label: 'Méthode AURORA',
        href: '/methode',
        subItems: [
          { _key: 'observer', _type: 'subMenuItem', label: 'Observer', href: '/methode#observer' },
          { _key: 'orienter', _type: 'subMenuItem', label: 'Orienter', href: '/methode#orienter' },
          { _key: 'structurer', _type: 'subMenuItem', label: 'Structurer', href: '/methode#structurer' },
          { _key: 'accompagner', _type: 'subMenuItem', label: 'Accompagner', href: '/methode#accompagner' },
          { _key: 'preserver', _type: 'subMenuItem', label: 'Préserver', href: '/methode#preserver' },
        ],
      },
      {
        _key: 'reseau',
        _type: 'menuItem',
        label: 'Réseau',
        href: '/reseau',
      },
      {
        _key: 'ame',
        _type: 'menuItem',
        label: "L'Âme",
        href: '/ame',
        subItems: [
          { _key: 'manifeste', _type: 'subMenuItem', label: 'Manifeste', href: '/ame#manifeste' },
          { _key: 'origines', _type: 'subMenuItem', label: 'Origines', href: '/ame#origines' },
          { _key: 'valeurs', _type: 'subMenuItem', label: 'Valeurs', href: '/ame#valeurs' },
        ],
      },
      {
        _key: 'blog',
        _type: 'menuItem',
        label: 'Les Connexions Durables',
        href: '/blog',
      },
    ],
    ctaButtonText: 'Nous contacter',
  };

  try {
    await client.createOrReplace(navigation);
    console.log('✅ Navigation updated with new page links!');
  } catch (error) {
    console.error('❌ Error updating navigation:', error.message);
  }
}

updateNavigation();
