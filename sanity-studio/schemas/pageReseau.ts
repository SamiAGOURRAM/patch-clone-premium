import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'pageReseau',
  title: 'Page Réseau',
  type: 'document',
  fields: [
    defineField({
      name: 'heroTitle',
      title: 'Titre principal',
      type: 'string',
      initialValue: 'Notre Réseau',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Sous-titre',
      type: 'text',
      rows: 2,
      initialValue: "Un écosystème de partenaires d'excellence pour répondre à tous vos enjeux de transformation.",
    }),
    defineField({
      name: 'networkStats',
      title: 'Statistiques du réseau',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'value',
              title: 'Valeur',
              type: 'string',
              description: 'Ex: 100+, 15+, 50+',
            }),
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
            }),
            defineField({
              name: 'icon',
              title: 'Icône',
              type: 'string',
              options: {
                list: [
                  { title: 'Handshake (Partenaires)', value: 'Handshake' },
                  { title: 'MapPin (Localisation)', value: 'MapPin' },
                  { title: 'Users (Équipe)', value: 'Users' },
                  { title: 'Building (Structure)', value: 'Building' },
                  { title: 'Star', value: 'Star' },
                  { title: 'Target', value: 'Target' },
                ],
              },
            }),
          ],
          preview: {
            select: {
              title: 'label',
              subtitle: 'value',
            },
          },
        },
      ],
    }),
    defineField({
      name: 'partnerTypesTitle',
      title: 'Titre section partenaires',
      type: 'string',
      initialValue: 'Nos partenaires',
    }),
    defineField({
      name: 'partnerTypesSubtitle',
      title: 'Sous-titre section partenaires',
      type: 'string',
      initialValue: 'Un réseau diversifié pour couvrir l\'ensemble de vos besoins',
    }),
    defineField({
      name: 'partnerTypes',
      title: 'Types de partenaires',
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
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 2,
            }),
            defineField({
              name: 'count',
              title: 'Nombre',
              type: 'string',
              description: 'Ex: 40+, 35+',
            }),
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'count',
            },
          },
        },
      ],
    }),
    defineField({
      name: 'regionsTitle',
      title: 'Titre section régions',
      type: 'string',
      initialValue: 'Présence géographique',
    }),
    defineField({
      name: 'regionsSubtitle',
      title: 'Sous-titre section régions',
      type: 'string',
      initialValue: 'Un maillage territorial pour vous accompagner au plus près',
    }),
    defineField({
      name: 'regions',
      title: 'Régions',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'joinCtaTitle',
      title: 'CTA Rejoindre - Titre',
      type: 'string',
      initialValue: 'Rejoignez notre réseau',
    }),
    defineField({
      name: 'joinCtaSubtitle',
      title: 'CTA Rejoindre - Sous-titre',
      type: 'text',
      rows: 2,
      initialValue: "Vous êtes consultant, cabinet ou expert ? Rejoignez un réseau d'excellence.",
    }),
    defineField({
      name: 'joinCtaButtonText',
      title: 'CTA Rejoindre - Texte bouton partenaire',
      type: 'string',
      initialValue: 'Devenir partenaire',
    }),
    defineField({
      name: 'contactButtonText',
      title: 'CTA - Texte bouton contact',
      type: 'string',
      initialValue: 'Nous contacter',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Page Réseau',
        subtitle: 'Configuration de la page Réseau',
      };
    },
  },
});
