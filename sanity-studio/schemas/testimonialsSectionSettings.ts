import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'testimonialsSectionSettings',
  title: 'Section Témoignages - Paramètres',
  type: 'document',
  fields: [
    defineField({
      name: 'badgeText',
      title: 'Texte du Badge',
      type: 'string',
      description: 'Petit texte au-dessus du titre (ex: "Climate\'s rising stars")',
      initialValue: "Climate's rising stars",
    }),
    defineField({
      name: 'sectionTitle',
      title: 'Titre de la Section',
      type: 'text',
      rows: 2,
      description: 'Titre principal de la section témoignages',
      initialValue: 'Meet the climate leaders who trust Patch to help them navigate carbon markets',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'buttonText',
      title: 'Texte du Bouton',
      type: 'string',
      description: 'Texte du bouton à droite du titre',
      initialValue: 'Meet our customers',
    }),
    defineField({
      name: 'buttonLink',
      title: 'Lien du Bouton',
      type: 'string',
      description: 'URL ou ancre pour le bouton (ex: "/customers" ou "#customers")',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Section Témoignages - Paramètres',
        subtitle: 'Titre, badge et bouton de la section',
      }
    },
  },
})
