import {StructureBuilder} from 'sanity/structure'

// Icons for categories
const icons = {
  page: () => '📄',
  content: () => '✏️',
  settings: () => '⚙️',
  appearance: () => '🎨',
}

export const deskStructure = (S: StructureBuilder) =>
  S.list()
    .title('Gestion du Site Aurora')
    .items([
      // === PARAMÈTRES DU SITE (LOGOS) ===
      S.listItem()
        .title('🏢 Paramètres du Site')
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
            .title('Logos & Paramètres')
        ),

      // === PARAMÈTRES SAISONNIERS ===
      S.listItem()
        .title('🎄 Effets Saisonniers')
        .child(
          S.document()
            .schemaType('seasonalSettings')
            .documentId('seasonalSettings')
            .title('Neige & Décorations de Noël')
        ),

      S.divider(),

      // === CONTENU PRINCIPAL ===
      S.listItem()
        .title('📝 Contenu du Site')
        .child(
          S.list()
            .title('Contenu du Site')
            .items([
              // Hero Section
              S.listItem()
                .title('🏠 Section Hero')
                .child(
                  S.document()
                    .schemaType('heroSection')
                    .documentId('heroSection')
                    .title('Section Hero')
                ),
              
              // Navigation
              S.listItem()
                .title('🧭 Navigation')
                .child(
                  S.document()
                    .schemaType('navigation')
                    .documentId('navigation')
                    .title('Navigation')
                ),
              
              // Announcement Banner
              S.listItem()
                .title('📢 Bannière d\'Annonce')
                .child(
                  S.document()
                    .schemaType('announcementBanner')
                    .documentId('announcementBanner')
                    .title('Bannière d\'Annonce')
                ),
              
              // Contact Info
              S.listItem()
                .title('📞 Informations de Contact')
                .child(
                  S.document()
                    .schemaType('contactInfo')
                    .documentId('contactInfo')
                    .title('Informations de Contact')
                ),
            ])
        ),

      S.divider(),

      // === PAGES DU SITE ===
      S.listItem()
        .title('📄 Pages du Site')
        .child(
          S.list()
            .title('Pages du Site')
            .items([
              // Page Univers
              S.listItem()
                .title('🌍 Page Univers')
                .child(
                  S.document()
                    .schemaType('pageUnivers')
                    .documentId('pageUnivers')
                    .title('Page Univers')
                ),
              
              // Page Méthode
              S.listItem()
                .title('🔧 Page Méthode')
                .child(
                  S.document()
                    .schemaType('pageMethode')
                    .documentId('pageMethode')
                    .title('Page Méthode')
                ),
              
              // Page Âme
              S.listItem()
                .title('💜 Page Âme')
                .child(
                  S.document()
                    .schemaType('pageAme')
                    .documentId('pageAme')
                    .title('Page Âme')
                ),
              
              // Page Réseau
              S.listItem()
                .title('🌐 Page Réseau')
                .child(
                  S.document()
                    .schemaType('pageReseau')
                    .documentId('pageReseau')
                    .title('Page Réseau')
                ),
            ])
        ),

      S.divider(),

      // === COLLECTIONS ===
      S.listItem()
        .title('📚 Collections')
        .child(
          S.list()
            .title('Collections')
            .items([
              // Stats
              S.listItem()
                .title('📊 Statistiques')
                .schemaType('stat')
                .child(S.documentTypeList('stat').title('Statistiques')),
              
              // Testimonials
              S.listItem()
                .title('💬 Témoignages')
                .schemaType('testimonial')
                .child(S.documentTypeList('testimonial').title('Témoignages')),
              
              // Methods
              S.listItem()
                .title('🔧 Méthodes Aurora')
                .schemaType('method')
                .child(S.documentTypeList('method').title('Méthodes Aurora')),
              
              // Blog Posts
              S.listItem()
                .title('📰 Articles de Blog')
                .schemaType('blogPost')
                .child(S.documentTypeList('blogPost').title('Articles de Blog')),
              
              // Partner Logos
              S.listItem()
                .title('🤝 Logos Partenaires')
                .child(
                  S.document()
                    .schemaType('partnerLogos')
                    .documentId('partnerLogos')
                    .title('Logos Partenaires')
                ),
            ])
        ),

      S.divider(),

      // === PARAMÈTRES DES SECTIONS ===
      S.listItem()
        .title('⚙️ Paramètres des Sections')
        .child(
          S.list()
            .title('Paramètres des Sections')
            .items([
              // Section visibility
              S.listItem()
                .title('👁️ Affichage des Sections')
                .child(
                  S.document()
                    .schemaType('sectionSettings')
                    .documentId('sectionSettings')
                    .title('Affichage des Sections')
                ),
              
              S.divider(),
              
              // Testimonials Section Settings
              S.listItem()
                .title('💬 Section Témoignages')
                .child(
                  S.document()
                    .schemaType('testimonialsSectionSettings')
                    .documentId('testimonialsSectionSettings')
                    .title('Paramètres Section Témoignages')
                ),
              
              // Features Section Settings
              S.listItem()
                .title('📰 Section Blog')
                .child(
                  S.document()
                    .schemaType('featuresSectionSettings')
                    .documentId('featuresSectionSettings')
                    .title('Paramètres Section Blog')
                ),
              
              // Guide Section Settings
              S.listItem()
                .title('🔧 Section Méthodes')
                .child(
                  S.document()
                    .schemaType('guideSectionSettings')
                    .documentId('guideSectionSettings')
                    .title('Paramètres Section Méthodes')
                ),
              
              // Stats Section Settings
              S.listItem()
                .title('📊 Section Statistiques')
                .child(
                  S.document()
                    .schemaType('statsSectionSettings')
                    .documentId('statsSectionSettings')
                    .title('Paramètres Section Statistiques')
                ),
            ])
        ),

      S.divider(),

      // === APPARENCE ===
      S.listItem()
        .title('🎨 Apparence')
        .child(
          S.list()
            .title('Apparence')
            .items([
              // Global Colors
              S.listItem()
                .title('🌈 Couleurs Globales')
                .child(
                  S.document()
                    .schemaType('colorSettings')
                    .documentId('colorSettings')
                    .title('Couleurs Globales')
                ),
              
              // Section Colors
              S.listItem()
                .title('🎭 Couleurs par Section')
                .schemaType('sectionColors')
                .child(S.documentTypeList('sectionColors').title('Couleurs par Section')),
            ])
        ),
    ])
