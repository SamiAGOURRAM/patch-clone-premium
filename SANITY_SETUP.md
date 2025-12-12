# 🚀 Guide de Configuration Sanity pour Aurora

Ce guide vous explique comment configurer le système de gestion de contenu (CMS) pour le site Aurora.

## 📋 Étape 1 : Créer un compte Sanity

1. Rendez-vous sur [sanity.io](https://www.sanity.io/)
2. Cliquez sur **"Get Started"**
3. Créez un compte (Google, GitHub, ou email)

## 📦 Étape 2 : Créer un projet Sanity

1. Une fois connecté, cliquez sur **"Create new project"**
2. Donnez-lui le nom **"Aurora"**
3. Choisissez le plan **Free** (suffisant pour commencer)
4. **IMPORTANT** : Notez votre **Project ID** (ex: `abc123xyz`)

## ⚙️ Étape 3 : Configurer le projet

### Dans le projet React (site web) :

1. Copiez le fichier `.env.example` vers `.env` :
   ```bash
   cp .env.example .env
   ```

2. Modifiez `.env` avec votre Project ID :
   ```
   VITE_SANITY_PROJECT_ID=votre_project_id_ici
   VITE_SANITY_DATASET=production
   ```

### Dans le Sanity Studio (dashboard admin) :

1. Ouvrez `sanity-studio/sanity.config.ts`
2. Remplacez `YOUR_PROJECT_ID` par votre Project ID :
   ```ts
   projectId: 'votre_project_id_ici',
   ```

## 🖥️ Étape 4 : Installer et lancer le Studio

```bash
# Installer les dépendances du Studio
cd sanity-studio
npm install

# Lancer le Studio en local
npm run dev
```

Le Studio sera accessible sur **http://localhost:3333**

## 📝 Étape 5 : Ajouter du contenu

Dans le Studio, vous pouvez maintenant gérer :

| Section | Description |
|---------|-------------|
| **Section Hero** | Titre principal, valeurs rotatives, image de fond |
| **Statistiques** | Les chiffres clés (50+ projets, etc.) |
| **Témoignages** | Citations et photos des clients |
| **Articles Blog** | Posts du blog Aurora |
| **Méthodes Aurora** | Les 5 méthodes avec descriptions |
| **Navigation** | Menu de navigation |
| **Pied de page** | Liens et réseaux sociaux |
| **Contact** | Email, téléphone, réseaux sociaux |

## 🌐 Étape 6 : Déployer le Studio en ligne

Pour que le client puisse accéder au Studio depuis n'importe où :

```bash
cd sanity-studio
npm run deploy
```

Sanity vous donnera une URL comme : `https://aurora.sanity.studio`

## 🔒 Étape 7 : Configurer les permissions (CORS)

1. Allez sur [manage.sanity.io](https://manage.sanity.io)
2. Sélectionnez votre projet Aurora
3. Allez dans **Settings > API > CORS origins**
4. Ajoutez les URLs autorisées :
   - `http://localhost:5173` (développement)
   - `https://votre-site-aurora.com` (production)

## 🎉 C'est prêt !

Le propriétaire du site peut maintenant :
1. Se connecter au Studio (URL Sanity)
2. Modifier n'importe quel texte, image ou contenu
3. Les changements apparaissent automatiquement sur le site

## 📞 Support

Si vous avez des questions, consultez la [documentation Sanity](https://www.sanity.io/docs).
