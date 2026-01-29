import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'pageAme',
  title: 'Page Âme',
  type: 'document',
  fields: [
    defineField({
      name: 'heroTitle',
      title: 'Titre principal',
      type: 'string',
      initialValue: "L'Âme Aurora",
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Sous-titre',
      type: 'text',
      rows: 2,
      initialValue: 'Découvrez qui nous sommes, d\'où nous venons et ce qui nous anime au quotidien.',
    }),
    defineField({
      name: 'manifeste',
      title: 'Notre Manifeste',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Titre',
          type: 'string',
          initialValue: 'Notre Manifeste',
        }),
        defineField({
          name: 'subtitle',
          title: 'Sous-titre',
          type: 'string',
          initialValue: 'Ce en quoi nous croyons',
        }),
        defineField({
          name: 'content',
          title: 'Contenu',
          type: 'text',
          rows: 8,
        }),
        defineField({
          name: 'highlights',
          title: 'Points clés',
          type: 'array',
          of: [{ type: 'string' }],
        }),
      ],
    }),
    defineField({
      name: 'origines',
      title: 'Nos Origines',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Titre',
          type: 'string',
          initialValue: 'Nos Origines',
        }),
        defineField({
          name: 'subtitle',
          title: 'Sous-titre',
          type: 'string',
          initialValue: 'D\'où nous venons',
        }),
        defineField({
          name: 'content',
          title: 'Contenu',
          type: 'text',
          rows: 8,
        }),
        defineField({
          name: 'milestones',
          title: 'Jalons / Timeline',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'year',
                  title: 'Année',
                  type: 'string',
                }),
                defineField({
                  name: 'event',
                  title: 'Événement',
                  type: 'string',
                }),
              ],
              preview: {
                select: {
                  title: 'event',
                  subtitle: 'year',
                },
              },
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'valeurs',
      title: 'Nos Valeurs',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Titre',
          type: 'string',
          initialValue: 'Nos Valeurs',
        }),
        defineField({
          name: 'subtitle',
          title: 'Sous-titre',
          type: 'string',
          initialValue: 'Ce qui nous guide',
        }),
        defineField({
          name: 'content',
          title: 'Introduction',
          type: 'text',
          rows: 3,
        }),
        defineField({
          name: 'values',
          title: 'Valeurs',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'name',
                  title: 'Nom',
                  type: 'string',
                }),
                defineField({
                  name: 'description',
                  title: 'Description',
                  type: 'text',
                  rows: 2,
                }),
              ],
              preview: {
                select: {
                  title: 'name',
                  subtitle: 'description',
                },
              },
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'visionTitle',
      title: 'Vision - Titre',
      type: 'string',
      initialValue: 'Notre Vision',
    }),
    defineField({
      name: 'visionSubtitle',
      title: 'Vision - Sous-titre',
      type: 'string',
      initialValue: 'Ce vers quoi nous tendons',
    }),
    defineField({
      name: 'visionContent',
      title: 'Vision - Contenu',
      type: 'text',
      rows: 6,
    }),
    defineField({
      name: 'ctaTitle',
      title: 'CTA - Titre',
      type: 'string',
      initialValue: 'Envie d\'en savoir plus ?',
    }),
    defineField({
      name: 'ctaSubtitle',
      title: 'CTA - Sous-titre',
      type: 'text',
      rows: 2,
      initialValue: 'Rencontrons-nous pour discuter de vos enjeux.',
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
        title: 'Page Âme',
        subtitle: 'Configuration de la page Âme (À propos)',
      };
    },
  },
});
