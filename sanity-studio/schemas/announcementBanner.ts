import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'announcementBanner',
  title: 'Bannière d\'Annonce',
  type: 'document',
  fields: [
    defineField({
      name: 'enabled',
      title: 'Afficher la Bannière',
      type: 'boolean',
      description: 'Activer ou désactiver l\'affichage de la bannière',
      initialValue: false,
    }),
    defineField({
      name: 'badgeText',
      title: 'Texte du Badge',
      type: 'string',
      description: 'Texte affiché dans le badge (ex: "NEW", "HOT")',
      placeholder: 'NEW',
    }),
    defineField({
      name: 'message',
      title: 'Message Principal',
      type: 'text',
      description: 'Le message principal de la bannière',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'linkText',
      title: 'Texte du Lien',
      type: 'string',
      description: 'Texte du lien (ex: "Read it here")',
      placeholder: 'Read it here',
    }),
    defineField({
      name: 'linkUrl',
      title: 'URL du Lien',
      type: 'url',
      description: 'URL vers laquelle le lien pointe',
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Couleur de Fond (HSL)',
      type: 'string',
      description: 'Format: "220 45% 18%"',
      placeholder: '220 45% 18%',
    }),
    defineField({
      name: 'textColor',
      title: 'Couleur du Texte (HSL)',
      type: 'string',
      description: 'Format: "0 0% 100%"',
      placeholder: '0 0% 100%',
    }),
    defineField({
      name: 'badgeBackgroundColor',
      title: 'Couleur du Badge - Fond (HSL)',
      type: 'string',
      description: 'Format: "30 30% 90%"',
      placeholder: '30 30% 90%',
    }),
    defineField({
      name: 'badgeTextColor',
      title: 'Couleur du Badge - Texte (HSL)',
      type: 'string',
      description: 'Format: "214 59% 20%"',
      placeholder: '214 59% 20%',
    }),
  ],
  preview: {
    select: {
      enabled: 'enabled',
      message: 'message',
    },
    prepare({enabled, message}) {
      return {
        title: 'Bannière d\'Annonce',
        subtitle: enabled ? message : 'Désactivée',
      }
    },
  },
})

