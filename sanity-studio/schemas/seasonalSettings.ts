import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'seasonalSettings',
  title: 'Paramètres Saisonniers',
  type: 'document',
  icon: () => '🎄',
  fields: [
    defineField({
      name: 'snowfallEnabled',
      title: '❄️ Activer la neige',
      type: 'boolean',
      description: 'Active l\'effet de chute de neige sur tout le site',
      initialValue: true,
    }),
    defineField({
      name: 'snowflakeCount',
      title: 'Nombre de flocons',
      type: 'number',
      description: 'Nombre de flocons visibles (50-500). Plus = plus intense',
      initialValue: 150,
      validation: (Rule) => Rule.min(50).max(500),
    }),
    defineField({
      name: 'snowflakeColor',
      title: 'Couleur des flocons',
      type: 'string',
      description: 'Couleur des flocons (ex: #ffffff, rgba(255,255,255,0.8))',
      initialValue: '#ffffff',
    }),
    defineField({
      name: 'snowflakeSpeed',
      title: 'Vitesse de chute',
      type: 'string',
      options: {
        list: [
          { title: 'Lente (douce)', value: 'slow' },
          { title: 'Normale', value: 'normal' },
          { title: 'Rapide (tempête)', value: 'fast' },
        ],
      },
      initialValue: 'normal',
    }),
    defineField({
      name: 'christmasBannerEnabled',
      title: '🎅 Activer bannière festive',
      type: 'boolean',
      description: 'Remplace la bannière normale par un message de Noël',
      initialValue: true,
    }),
    defineField({
      name: 'christmasBannerText',
      title: 'Message de la bannière festive',
      type: 'string',
      description: 'Le message festif à afficher',
      initialValue: '🎄 Joyeuses fêtes ! AURORA vous souhaite une merveilleuse fin d\'année ✨',
    }),
    defineField({
      name: 'christmasAccentEnabled',
      title: '🔴 Activer accents festifs',
      type: 'boolean',
      description: 'Ajoute des touches de couleurs festives (rouge/or) sur certains éléments',
      initialValue: false,
    }),
    defineField({
      name: 'seasonStartDate',
      title: 'Date de début',
      type: 'date',
      description: 'Date à partir de laquelle les effets saisonniers sont actifs',
    }),
    defineField({
      name: 'seasonEndDate',
      title: 'Date de fin',
      type: 'date',
      description: 'Date à laquelle les effets saisonniers se désactivent automatiquement',
    }),
  ],
  preview: {
    select: {
      snowEnabled: 'snowfallEnabled',
      bannerEnabled: 'christmasBannerEnabled',
    },
    prepare({ snowEnabled, bannerEnabled }) {
      const features = [];
      if (snowEnabled) features.push('❄️ Neige');
      if (bannerEnabled) features.push('🎅 Bannière');
      return {
        title: '🎄 Paramètres Saisonniers',
        subtitle: features.length > 0 ? features.join(' • ') : 'Désactivé',
      };
    },
  },
});
