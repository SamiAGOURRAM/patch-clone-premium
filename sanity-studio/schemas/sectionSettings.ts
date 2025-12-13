import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'sectionSettings',
  title: 'Paramètres des Sections',
  type: 'document',
  fields: [
    defineField({
      name: 'heroEnabled',
      title: 'Afficher Hero Section',
      type: 'boolean',
      description: 'Afficher ou masquer la section Hero',
      initialValue: true,
    }),
    defineField({
      name: 'statsEnabled',
      title: 'Afficher Stats Section',
      type: 'boolean',
      description: 'Afficher ou masquer la section Statistiques',
      initialValue: true,
    }),
    defineField({
      name: 'testimonialsEnabled',
      title: 'Afficher Testimonials Section',
      type: 'boolean',
      description: 'Afficher ou masquer la section Témoignages',
      initialValue: true,
    }),
    defineField({
      name: 'guideEnabled',
      title: 'Afficher Guide Section (Methods)',
      type: 'boolean',
      description: 'Afficher ou masquer la section Méthodes',
      initialValue: true,
    }),
    defineField({
      name: 'videoEnabled',
      title: 'Afficher Video Section',
      type: 'boolean',
      description: 'Afficher ou masquer la section Vidéo',
      initialValue: true,
    }),
    defineField({
      name: 'featuresEnabled',
      title: 'Afficher Features Section (Blog)',
      type: 'boolean',
      description: 'Afficher ou masquer la section Blog/Features',
      initialValue: true,
    }),
    defineField({
      name: 'ctaEnabled',
      title: 'Afficher CTA Section',
      type: 'boolean',
      description: 'Afficher ou masquer la section CTA',
      initialValue: true,
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Paramètres des Sections',
        subtitle: 'Contrôler l\'affichage des sections',
      }
    },
  },
})

