import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'pageUnivers',
  title: 'Page Univers',
  type: 'document',
  fields: [
    defineField({
      name: 'heroTitle',
      title: 'Titre principal',
      type: 'string',
      initialValue: 'Nos Univers',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Sous-titre',
      type: 'text',
      rows: 2,
      initialValue: "Quatre domaines d'expertise complémentaires pour accompagner votre transformation à 360°.",
    }),
    defineField({
      name: 'universes',
      title: 'Univers',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Titre',
              type: 'string',
            }),
            defineField({
              name: 'subtitle',
              title: 'Sous-titre',
              type: 'string',
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 3,
            }),
            defineField({
              name: 'icon',
              title: 'Icône',
              type: 'string',
              options: {
                list: [
                  { title: 'Building2', value: 'Building2' },
                  { title: 'Briefcase', value: 'Briefcase' },
                  { title: 'Users', value: 'Users' },
                  { title: 'Image', value: 'Image' },
                  { title: 'Lightbulb', value: 'Lightbulb' },
                  { title: 'Target', value: 'Target' },
                  { title: 'Zap', value: 'Zap' },
                  { title: 'Star', value: 'Star' },
                ],
              },
            }),
            defineField({
              name: 'colorFrom',
              title: 'Couleur dégradé (début)',
              type: 'string',
              options: {
                list: [
                  { title: 'Primary', value: 'primary' },
                  { title: 'Secondary', value: 'secondary' },
                  { title: 'Tertiary', value: 'tertiary' },
                  { title: 'Success', value: 'success' },
                ],
              },
            }),
            defineField({
              name: 'colorTo',
              title: 'Couleur dégradé (fin)',
              type: 'string',
              options: {
                list: [
                  { title: 'Primary', value: 'primary' },
                  { title: 'Secondary', value: 'secondary' },
                  { title: 'Tertiary', value: 'tertiary' },
                  { title: 'Success', value: 'success' },
                ],
              },
            }),
            defineField({
              name: 'features',
              title: 'Caractéristiques',
              type: 'array',
              of: [{ type: 'string' }],
            }),
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'subtitle',
            },
          },
        },
      ],
    }),
    defineField({
      name: 'ctaTitle',
      title: 'CTA - Titre',
      type: 'string',
      initialValue: 'Prêt à transformer votre entreprise ?',
    }),
    defineField({
      name: 'ctaSubtitle',
      title: 'CTA - Sous-titre',
      type: 'text',
      rows: 2,
      initialValue: 'Nos experts vous accompagnent dans tous vos projets de transformation.',
    }),
    defineField({
      name: 'ctaButtonText',
      title: 'CTA - Texte du bouton',
      type: 'string',
      initialValue: 'Nous contacter',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Page Univers',
        subtitle: 'Configuration de la page Univers',
      };
    },
  },
});
