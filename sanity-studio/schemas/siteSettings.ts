import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Paramètres du Site',
  type: 'document',
  fields: [
    defineField({
      name: 'siteName',
      title: 'Nom du Site',
      type: 'string',
      description: 'Le nom de votre entreprise (ex: Aurora)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'headerLogo',
      title: 'Logo Header (Navigation)',
      type: 'image',
      description: 'Logo affiché dans la barre de navigation. Recommandé: format PNG transparent, 200x60px max.',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'footerLogo',
      title: 'Logo Footer (Pied de page)',
      type: 'image',
      description: 'Logo affiché dans le pied de page. Peut être identique au logo header ou différent.',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'footerTagline',
      title: 'Slogan Footer',
      type: 'string',
      description: 'Court texte sous le logo du footer (ex: "À l\'aube des connexions durables")',
    }),
    defineField({
      name: 'copyright',
      title: 'Texte Copyright',
      type: 'string',
      description: 'Ex: "© 2025 Aurora. Tous droits réservés."',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Réseaux Sociaux',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'platform',
              title: 'Plateforme',
              type: 'string',
              options: {
                list: [
                  { title: 'LinkedIn', value: 'linkedin' },
                  { title: 'Instagram', value: 'instagram' },
                  { title: 'Twitter/X', value: 'twitter' },
                  { title: 'Facebook', value: 'facebook' },
                  { title: 'YouTube', value: 'youtube' },
                ],
              },
            },
            {
              name: 'url',
              title: 'URL',
              type: 'url',
            },
          ],
          preview: {
            select: {
              title: 'platform',
              subtitle: 'url',
            },
          },
        },
      ],
    }),
    defineField({
      name: 'contactEmail',
      title: 'Email de Contact',
      type: 'string',
    }),
    defineField({
      name: 'contactPhone',
      title: 'Téléphone',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'siteName',
      media: 'headerLogo',
    },
    prepare({ title, media }) {
      return {
        title: title || 'Paramètres du Site',
        subtitle: 'Logos et informations générales',
        media,
      }
    },
  },
})
