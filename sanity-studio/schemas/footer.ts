import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'footer',
  title: 'Pied de Page',
  type: 'document',
  fields: [
    defineField({
      name: 'logoText',
      title: 'Texte du Logo',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'linkCategories',
      title: 'Catégories de Liens',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Titre de la Catégorie',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'links',
              title: 'Liens',
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
                      title: 'Lien URL',
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
              title: 'title',
            },
          },
        },
      ],
    }),
    defineField({
      name: 'copyright',
      title: 'Texte de Copyright',
      type: 'string',
      description: 'Ex: "© 2025 Aurora. All rights reserved."',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Liens Réseaux Sociaux',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'platform',
              title: 'Plateforme',
              type: 'string',
              options: {
                list: [
                  {title: 'Twitter', value: 'Twitter'},
                  {title: 'LinkedIn', value: 'LinkedIn'},
                  {title: 'GitHub', value: 'GitHub'},
                  {title: 'Instagram', value: 'Instagram'},
                  {title: 'Facebook', value: 'Facebook'},
                ],
              },
            },
            {
              name: 'url',
              title: 'URL',
              type: 'url',
            },
          ],
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Pied de Page',
        subtitle: 'Configuration du footer',
      }
    },
  },
})
