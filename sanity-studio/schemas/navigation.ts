import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  fields: [
    defineField({
      name: 'logoText',
      title: 'Texte du Logo',
      type: 'string',
      description: 'Le nom affiché (ex: "AURORA")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'menuItems',
      title: 'Éléments de Menu',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'label',
              title: 'Libellé',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'href',
              title: 'Lien (optionnel)',
              type: 'string',
            },
            {
              name: 'subItems',
              title: 'Sous-éléments',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'label',
                      title: 'Libellé',
                      type: 'string',
                      validation: (Rule) => Rule.required(),
                    },
                    {
                      name: 'href',
                      title: 'Lien',
                      type: 'string',
                      validation: (Rule) => Rule.required(),
                    },
                  ],
                },
              ],
            },
          ],
          preview: {
            select: {
              title: 'label',
            },
          },
        },
      ],
    }),
    defineField({
      name: 'ctaButtonText',
      title: 'Texte du Bouton CTA',
      type: 'string',
      description: 'Texte du bouton principal (ex: "Nous contacter")',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Navigation',
        subtitle: 'Menu principal du site',
      }
    },
  },
})
