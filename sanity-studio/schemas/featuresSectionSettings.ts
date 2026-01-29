import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'featuresSectionSettings',
  title: 'Section Blog/Features - Paramètres',
  type: 'document',
  fields: [
    defineField({
      name: 'sectionTitle',
      title: 'Titre de la Section',
      type: 'string',
      description: 'Titre principal de la section blog (ex: "The Aurora blog")',
      initialValue: 'The Aurora blog',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sectionSubtitle',
      title: 'Sous-titre de la Section',
      type: 'text',
      rows: 3,
      description: 'Description courte sous le titre principal',
    }),
    defineField({
      name: 'features',
      title: 'Caractéristiques',
      type: 'array',
      description: 'Liste des caractéristiques/points forts à afficher',
      of: [
        {
          type: 'object',
          name: 'feature',
          title: 'Caractéristique',
          fields: [
            {
              name: 'title',
              title: 'Titre',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 2,
            },
            {
              name: 'icon',
              title: 'Icône',
              type: 'string',
              description: 'Nom de l\'icône Lucide (ex: Users, Handshake, Target)',
              options: {
                list: [
                  {title: 'Users', value: 'Users'},
                  {title: 'Handshake', value: 'Handshake'},
                  {title: 'Target', value: 'Target'},
                  {title: 'Heart', value: 'Heart'},
                  {title: 'Star', value: 'Star'},
                  {title: 'Lightbulb', value: 'Lightbulb'},
                  {title: 'Shield', value: 'Shield'},
                  {title: 'Zap', value: 'Zap'},
                ],
              },
            },
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'description',
            },
          },
        },
      ],
    }),
    defineField({
      name: 'viewMoreText',
      title: 'Texte "Voir Plus"',
      type: 'string',
      description: 'Texte du lien en haut à droite',
      initialValue: 'See more articles',
    }),
    defineField({
      name: 'viewMoreLink',
      title: 'Lien "Voir Plus"',
      type: 'string',
      description: 'URL vers la page blog complète (ex: "/blog")',
    }),
    defineField({
      name: 'ctaButtonText',
      title: 'Texte du Bouton CTA',
      type: 'string',
      description: 'Texte du bouton en bas de la section',
      initialValue: 'Explore the platform',
    }),
    defineField({
      name: 'ctaButtonLink',
      title: 'Lien du Bouton CTA',
      type: 'string',
      description: 'URL pour le bouton CTA',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Section Blog/Features - Paramètres',
        subtitle: 'Titre et boutons de la section blog',
      }
    },
  },
})
