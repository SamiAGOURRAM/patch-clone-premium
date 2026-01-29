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
    defineField({
      name: 'stats',
      title: 'Statistiques',
      type: 'array',
      description: 'Liste des statistiques à afficher dans cette section',
      of: [
        {
          type: 'object',
          name: 'statItem',
          title: 'Statistique',
          fields: [
            {
              name: 'value',
              title: 'Valeur',
              type: 'string',
              description: 'Valeur affichée (ex: "85%", "60%")',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'label',
              title: 'Libellé',
              type: 'string',
              description: 'Description de la statistique',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'suffix',
              title: 'Suffixe',
              type: 'string',
              description: 'Suffixe optionnel (ex: "+", "%")',
            },
          ],
          preview: {
            select: {
              title: 'value',
              subtitle: 'label',
            },
            prepare(selection: {title?: string; subtitle?: string}) {
              return {
                title: selection.title || 'Statistique',
                subtitle: selection.subtitle || '',
              }
            },
          },
        },
      ],
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
