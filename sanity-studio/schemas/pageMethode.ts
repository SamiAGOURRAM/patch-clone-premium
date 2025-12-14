import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'pageMethode',
  title: 'Page Méthode',
  type: 'document',
  fields: [
    defineField({
      name: 'heroTitle',
      title: 'Titre principal',
      type: 'string',
      initialValue: 'Méthode AURORA',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Sous-titre',
      type: 'text',
      rows: 2,
      initialValue: 'Une approche structurée en 5 étapes pour accompagner votre transformation avec excellence.',
    }),
    defineField({
      name: 'methodSteps',
      title: 'Étapes de la méthode',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'number',
              title: 'Numéro',
              type: 'string',
              description: 'Ex: 01, 02, 03...',
            }),
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
                  { title: 'Eye (Observer)', value: 'Eye' },
                  { title: 'Compass (Orienter)', value: 'Compass' },
                  { title: 'Layers (Structurer)', value: 'Layers' },
                  { title: 'HeartHandshake (Accompagner)', value: 'HeartHandshake' },
                  { title: 'Shield (Préserver)', value: 'Shield' },
                  { title: 'Target', value: 'Target' },
                  { title: 'Lightbulb', value: 'Lightbulb' },
                  { title: 'Zap', value: 'Zap' },
                ],
              },
            }),
            defineField({
              name: 'details',
              title: 'Détails',
              type: 'array',
              of: [{ type: 'string' }],
            }),
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'number',
            },
            prepare({ title, subtitle }) {
              return {
                title: title,
                subtitle: `Étape ${subtitle}`,
              };
            },
          },
        },
      ],
    }),
    defineField({
      name: 'ctaTitle',
      title: 'CTA - Titre',
      type: 'string',
      initialValue: 'Prêt à démarrer votre transformation ?',
    }),
    defineField({
      name: 'ctaSubtitle',
      title: 'CTA - Sous-titre',
      type: 'text',
      rows: 2,
      initialValue: "Découvrez comment notre méthode peut s'adapter à vos enjeux spécifiques.",
    }),
    defineField({
      name: 'ctaButtonText',
      title: 'CTA - Texte du bouton',
      type: 'string',
      initialValue: 'Planifier un échange',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Page Méthode',
        subtitle: 'Configuration de la page Méthode',
      };
    },
  },
});
