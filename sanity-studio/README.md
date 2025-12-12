# Aurora - Sanity Studio

Ce dossier contient le Sanity Studio - le dashboard de gestion de contenu pour Aurora.

## Installation

```bash
cd sanity-studio
npm install
```

## Lancer le Studio en local

```bash
npm run dev
```

Le studio sera disponible sur http://localhost:3333

## Déployer le Studio

```bash
npm run deploy
```

## Configuration

1. Créez un compte sur [sanity.io](https://www.sanity.io/)
2. Créez un nouveau projet
3. Copiez le Project ID et mettez-le dans `sanity.config.ts`
4. Mettez également à jour les variables d'environnement dans le projet React principal

## Structure des contenus

- **Hero Section** : Titre principal, sous-titre, valeurs rotatives
- **Stats** : Statistiques affichées (50+ projets, etc.)
- **Testimonials** : Témoignages clients
- **Blog Posts** : Articles du blog Aurora
- **Methods** : Les méthodes Aurora
- **Navigation** : Menu de navigation
- **Footer** : Pied de page
- **Contact Info** : Informations de contact
