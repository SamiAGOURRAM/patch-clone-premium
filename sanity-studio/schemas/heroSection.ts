import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'heroSection',
  title: 'Section Hero',
  type: 'document',
  fields: [
    defineField({
      name: 'mainTitle',
      title: 'Titre Principal',
      type: 'string',
      description: 'Le titre principal (ex: "À l\'aube")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subTitle',
      title: 'Sous-titre',
      type: 'string',
      description: 'La deuxième ligne du titre (ex: "des connexions")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'accentText',
      title: 'Texte d\'accent',
      type: 'string',
      description: 'Texte mis en valeur (ex: "durables")',
    }),
    defineField({
      name: 'accompanyText',
      title: 'Texte d\'accompagnement',
      type: 'string',
      description: 'Texte avant les valeurs rotatives (ex: "AURORA vous accompagne pour")',
    }),
    defineField({
      name: 'rotatingValues',
      title: 'Valeurs Rotatives',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Les valeurs qui défilent en boucle',
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'ctaButtonText',
      title: 'Texte du Bouton CTA',
      type: 'string',
      description: 'Le texte du bouton principal',
    }),
    defineField({
      name: 'heroImage',
      title: 'Image de Fond',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'mainTitle',
      subtitle: 'subTitle',
    },
    prepare(selection) {
      return {
        title: 'Section Hero',
        subtitle: `${selection.title} ${selection.subtitle}`,
      }
    },
  },
})
