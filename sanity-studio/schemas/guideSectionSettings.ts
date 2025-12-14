import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'guideSectionSettings',
  title: 'Section Méthodes - Paramètres',
  type: 'document',
  fields: [
    defineField({
      name: 'sectionTitle',
      title: 'Titre de la Section',
      type: 'string',
      description: 'Titre principal (ex: "Les Méthodes AURORA")',
      initialValue: 'Les Méthodes AURORA',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'buttonText',
      title: 'Texte du Bouton',
      type: 'string',
      description: 'Texte du bouton sous le titre',
      initialValue: 'Découvrir notre approche',
    }),
    defineField({
      name: 'buttonLink',
      title: 'Lien du Bouton',
      type: 'string',
      description: 'URL pour le bouton',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Section Méthodes - Paramètres',
        subtitle: 'Titre et bouton de la section méthodes',
      }
    },
  },
})
