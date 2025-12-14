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
      name: 'address',
      title: 'Adresse',
      type: 'string',
      description: 'Adresse physique (ex: Paris, France)',
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram (username)',
      type: 'string',
      description: 'Nom d\'utilisateur Instagram avec @',
    }),
    defineField({
      name: 'twitter',
      title: 'X/Twitter (username)',
      type: 'string',
      description: 'Nom d\'utilisateur Twitter avec @',
    }),
    defineField({
      name: 'linkedin',
      title: 'LinkedIn',
      type: 'string',
      description: 'Nom de la page LinkedIn (ex: Aurora Consulting)',
    }),
    defineField({
      name: 'calComLink',
      title: 'Lien Cal.com (ID)',
      type: 'string',
      description: 'Identifiant Cal.com pour la prise de RDV (ex: "med-agourram-otzwlb")',
    }),
    defineField({
      name: 'calendlyUrl',
      title: 'URL Calendrier (complet)',
      type: 'url',
      description: 'URL complète vers votre page de réservation (Cal.com, Calendly, etc.)',
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
