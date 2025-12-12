import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'partnerLogos',
  title: 'Logos Partenaires',
  type: 'document',
  fields: [
    defineField({
      name: 'logos',
      title: 'Noms des Partenaires',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Liste des noms de partenaires affichés',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Logos Partenaires',
        subtitle: 'Liste des partenaires',
      }
    },
  },
})
