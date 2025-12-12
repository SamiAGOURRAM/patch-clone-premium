import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'stat',
  title: 'Statistique',
  type: 'document',
  fields: [
    defineField({
      name: 'value',
      title: 'Valeur',
      type: 'string',
      description: 'La valeur affichée (ex: "50+", "100+")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'label',
      title: 'Libellé',
      type: 'string',
      description: 'Le texte descriptif (ex: "Projets réalisés")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'colorFrom',
      title: 'Couleur de Début (Dégradé)',
      type: 'string',
      description: 'Classe CSS pour la couleur de début (ex: "success", "primary")',
      options: {
        list: [
          {title: 'Primary', value: 'primary'},
          {title: 'Secondary', value: 'secondary'},
          {title: 'Tertiary', value: 'tertiary'},
          {title: 'Success', value: 'success'},
        ],
      },
    }),
    defineField({
      name: 'colorTo',
      title: 'Couleur de Fin (Dégradé)',
      type: 'string',
      description: 'Classe CSS pour la couleur de fin (ex: "primary", "tertiary")',
      options: {
        list: [
          {title: 'Primary', value: 'primary'},
          {title: 'Secondary', value: 'secondary'},
          {title: 'Tertiary', value: 'tertiary'},
          {title: 'Success', value: 'success'},
        ],
      },
    }),
    defineField({
      name: 'order',
      title: 'Ordre d\'affichage',
      type: 'number',
      description: 'Position dans la liste (1, 2, 3...)',
      validation: (Rule) => Rule.required().integer().positive(),
    }),
  ],
  orderings: [
    {
      title: 'Par Ordre',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}],
    },
  ],
  preview: {
    select: {
      title: 'value',
      subtitle: 'label',
    },
  },
})
