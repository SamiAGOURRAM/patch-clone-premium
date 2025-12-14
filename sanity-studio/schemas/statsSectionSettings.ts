import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'statsSectionSettings',
  title: 'Section Statistiques - Paramètres',
  type: 'document',
  fields: [
    defineField({
      name: 'showHeader',
      title: 'Afficher l\'en-tête',
      type: 'boolean',
      description: 'Afficher ou masquer le titre et sous-titre de la section',
      initialValue: false,
    }),
    defineField({
      name: 'sectionTitle',
      title: 'Titre de la Section',
      type: 'string',
      description: 'Titre principal (optionnel, ex: "Nos Chiffres Clés")',
    }),
    defineField({
      name: 'sectionSubtitle',
      title: 'Sous-titre de la Section',
      type: 'text',
      rows: 2,
      description: 'Description courte sous le titre (optionnel)',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Section Statistiques - Paramètres',
        subtitle: 'Titre optionnel de la section stats',
      }
    },
  },
})
