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
