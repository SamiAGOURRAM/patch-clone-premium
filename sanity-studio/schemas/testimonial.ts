import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'testimonial',
  title: 'Témoignage',
  type: 'document',
  fields: [
    defineField({
      name: 'company',
      title: 'Nom de l\'entreprise',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Logo de l\'entreprise',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'quote',
      title: 'Citation / Témoignage',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'personName',
      title: 'Nom de la Personne',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'personTitle',
      title: 'Poste / Fonction',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'personImage',
      title: 'Photo de la Personne',
      type: 'image',
      options: {
        hotspot: true,
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
      title: 'personName',
      subtitle: 'company',
      media: 'personImage',
    },
  },
})
