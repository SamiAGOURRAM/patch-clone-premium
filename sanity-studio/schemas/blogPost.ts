import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'blogPost',
  title: 'Article de Blog',
  type: 'document',
  groups: [
    { name: 'content', title: 'Contenu', default: true },
    { name: 'meta', title: 'Métadonnées' },
    { name: 'display', title: 'Affichage' },
  ],
  fields: [
    // Content Group
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
      group: 'content',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      group: 'content',
      description: 'URL unique pour l\'article (ex: mon-article)',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Sous-titre',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'description',
      title: 'Description / Extrait',
      type: 'text',
      rows: 3,
      group: 'content',
      description: 'Court résumé affiché dans les listes et aperçus',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image Principale',
      type: 'image',
      group: 'content',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'content',
      title: 'Contenu de l\'article',
      type: 'array',
      group: 'content',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'Titre H2', value: 'h2'},
            {title: 'Titre H3', value: 'h3'},
            {title: 'Titre H4', value: 'h4'},
            {title: 'Citation', value: 'blockquote'},
          ],
          marks: {
            decorators: [
              {title: 'Gras', value: 'strong'},
              {title: 'Italique', value: 'em'},
              {title: 'Souligné', value: 'underline'},
              {title: 'Code', value: 'code'},
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Lien',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                  },
                  {
                    name: 'blank',
                    type: 'boolean',
                    title: 'Ouvrir dans un nouvel onglet',
                    initialValue: true,
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Légende',
            },
            {
              name: 'alt',
              type: 'string',
              title: 'Texte alternatif',
            },
          ],
        },
      ],
    }),

    // Meta Group
    defineField({
      name: 'author',
      title: 'Auteur',
      type: 'object',
      group: 'meta',
      fields: [
        { name: 'name', type: 'string', title: 'Nom' },
        { name: 'role', type: 'string', title: 'Rôle / Poste' },
        { name: 'image', type: 'image', title: 'Photo', options: { hotspot: true } },
      ],
    }),
    defineField({
      name: 'category',
      title: 'Catégorie',
      type: 'string',
      group: 'meta',
      options: {
        list: [
          {title: 'Company Updates', value: 'COMPANY UPDATES'},
          {title: 'Aurora Perspectives', value: 'AURORA PERSPECTIVES'},
          {title: 'Actualités', value: 'ACTUALITÉS'},
          {title: 'Insights', value: 'INSIGHTS'},
          {title: 'Guides', value: 'GUIDES'},
          {title: 'Case Studies', value: 'CASE STUDIES'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      group: 'meta',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Date de Publication',
      type: 'datetime',
      group: 'meta',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'readingTime',
      title: 'Temps de Lecture (minutes)',
      type: 'number',
      group: 'meta',
      description: 'Estimation du temps de lecture',
    }),
    defineField({
      name: 'readTime',
      title: 'Temps de Lecture (texte)',
      type: 'string',
      group: 'meta',
      description: 'Temps de lecture affiché (ex: "5 min read")',
    }),

    // Display Group
    defineField({
      name: 'featured',
      title: 'Article Mis en Avant',
      type: 'boolean',
      group: 'display',
      description: 'Afficher cet article sur la page d\'accueil',
      initialValue: false,
    }),
    defineField({
      name: 'published',
      title: 'Publié',
      type: 'boolean',
      group: 'display',
      description: 'L\'article est visible sur le site',
      initialValue: true,
    }),
    defineField({
      name: 'order',
      title: 'Ordre d\'affichage (page d\'accueil)',
      type: 'number',
      group: 'display',
      description: 'Position sur la page d\'accueil (1 = premier)',
    }),
  ],
  orderings: [
    {
      title: 'Par Date (récent)',
      name: 'dateDesc',
      by: [{field: 'publishedAt', direction: 'desc'}],
    },
    {
      title: 'Par Ordre',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'image',
      featured: 'featured',
      published: 'published',
    },
    prepare(selection) {
      const { title, subtitle, media, featured, published } = selection;
      const status = [];
      if (featured) status.push('⭐ Mis en avant');
      if (!published) status.push('🚫 Brouillon');
      return {
        title,
        subtitle: status.length > 0 ? `${subtitle} | ${status.join(' ')}` : subtitle,
        media,
      };
    },
  },
})
