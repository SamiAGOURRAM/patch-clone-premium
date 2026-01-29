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
      name: 'sectionSubtitle',
      title: 'Sous-titre de la Section',
      type: 'text',
      rows: 3,
      description: 'Description courte sous le titre principal',
    }),
    defineField({
      name: 'steps',
      title: 'Étapes / Domaines',
      type: 'array',
      description: 'Liste des étapes ou domaines d\'intervention',
      of: [
        {
          type: 'object',
          name: 'step',
          title: 'Étape',
          fields: [
            {
              name: 'number',
              title: 'Numéro',
              type: 'string',
              description: 'Numéro de l\'étape (ex: "01", "02")',
            },
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
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'number',
            },
            prepare(selection: {title?: string; subtitle?: string}) {
              return {
                title: selection.title,
                subtitle: selection.subtitle ? `Étape ${selection.subtitle}` : '',
              }
            },
          },
        },
      ],
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
