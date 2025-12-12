import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contactInfo',
  title: 'Informations de Contact',
  type: 'document',
  fields: [
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'phone',
      title: 'Téléphone',
      type: 'string',
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram (username)',
      type: 'string',
      description: 'Nom d\'utilisateur Instagram sans @',
    }),
    defineField({
      name: 'twitter',
      title: 'X/Twitter (username)',
      type: 'string',
      description: 'Nom d\'utilisateur Twitter sans @',
    }),
    defineField({
      name: 'linkedin',
      title: 'LinkedIn (URL complète)',
      type: 'url',
    }),
    defineField({
      name: 'calComLink',
      title: 'Lien Cal.com',
      type: 'string',
      description: 'Identifiant Cal.com pour la prise de RDV (ex: "med-agourram-otzwlb")',
    }),
    defineField({
      name: 'ctaTitle',
      title: 'Titre Section CTA',
      type: 'string',
      description: 'Titre de la section d\'appel à l\'action',
    }),
    defineField({
      name: 'ctaSubtitle',
      title: 'Sous-titre Section CTA',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'email',
    },
    prepare(selection) {
      return {
        title: 'Informations de Contact',
        subtitle: selection.title,
      }
    },
  },
})
