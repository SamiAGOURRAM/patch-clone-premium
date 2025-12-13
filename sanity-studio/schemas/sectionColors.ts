import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'sectionColors',
  title: 'Couleurs par Section',
  type: 'document',
  fields: [
    defineField({
      name: 'sectionName',
      title: 'Nom de la Section',
      type: 'string',
      description: 'Identifiant de la section (ex: "hero", "stats", "testimonials")',
      options: {
        list: [
          {title: 'Hero Section', value: 'hero'},
          {title: 'Stats Section', value: 'stats'},
          {title: 'Testimonials Section', value: 'testimonials'},
          {title: 'Guide Section (Methods)', value: 'guide'},
          {title: 'Video Section', value: 'video'},
          {title: 'Features Section (Blog)', value: 'features'},
          {title: 'CTA Section', value: 'cta'},
          {title: 'Footer', value: 'footer'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Couleur de Fond (HSL)',
      type: 'string',
      description: 'Format: "30 43% 97%" ou laisser vide pour utiliser la couleur par défaut',
      placeholder: '30 43% 97%',
    }),
    defineField({
      name: 'textColor',
      title: 'Couleur du Texte Principal (HSL)',
      type: 'string',
      description: 'Couleur du texte dans cette section',
      placeholder: '214 59% 20%',
    }),
    defineField({
      name: 'headingColor',
      title: 'Couleur des Titres (HSL)',
      type: 'string',
      description: 'Couleur des titres (h1, h2, h3) dans cette section',
      placeholder: '214 59% 20%',
    }),
    defineField({
      name: 'buttonBackgroundColor',
      title: 'Couleur des Boutons - Fond (HSL)',
      type: 'string',
      description: 'Couleur de fond des boutons dans cette section',
      placeholder: '32 40% 38%',
    }),
    defineField({
      name: 'buttonTextColor',
      title: 'Couleur des Boutons - Texte (HSL)',
      type: 'string',
      description: 'Couleur du texte des boutons dans cette section',
      placeholder: '0 0% 100%',
    }),
    defineField({
      name: 'linkColor',
      title: 'Couleur des Liens (HSL)',
      type: 'string',
      description: 'Couleur des liens dans cette section',
      placeholder: '32 40% 38%',
    }),
    defineField({
      name: 'accentColor',
      title: 'Couleur d\'Accent (HSL)',
      type: 'string',
      description: 'Couleur d\'accent pour les éléments spéciaux dans cette section',
      placeholder: '43 51% 62%',
    }),
  ],
  preview: {
    select: {
      sectionName: 'sectionName',
      backgroundColor: 'backgroundColor',
    },
    prepare({sectionName, backgroundColor}) {
      const sectionNames: Record<string, string> = {
        hero: 'Hero Section',
        stats: 'Stats Section',
        testimonials: 'Testimonials Section',
        guide: 'Guide Section',
        video: 'Video Section',
        features: 'Features Section',
        cta: 'CTA Section',
        footer: 'Footer',
      };
      return {
        title: sectionNames[sectionName] || sectionName,
        subtitle: backgroundColor ? `Fond: ${backgroundColor}` : 'Couleurs par défaut',
      }
    },
  },
})

