import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'method',
  title: 'Méthode Aurora',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre de la Méthode',
      type: 'string',
      description: 'Ex: "Méthode Conseil"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'color',
      title: 'Couleur (CSS Variable)',
      type: 'string',
      description: 'Variable CSS de couleur (ex: "primary", "secondary")',
      options: {
        list: [
          {title: 'Primary', value: 'primary'},
          {title: 'Secondary', value: 'secondary'},
          {title: 'Tertiary', value: 'tertiary'},
          {title: 'Success', value: 'success'},
          {title: 'Accent', value: 'accent'},
        ],
      },
    }),
    defineField({
      name: 'order',
      title: 'Ordre d\'affichage',
      type: 'number',
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
      title: 'title',
      subtitle: 'description',
      media: 'image',
    },
  },
})
