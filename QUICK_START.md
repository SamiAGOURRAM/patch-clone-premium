# 🚀 Quick Start - See Your Changes Live!

Your project is configured with Project ID: **g5k024mq**

## ✅ What's Already Done

1. ✅ `.env` file created with your project ID
2. ✅ Sanity Studio configured with project ID `g5k024mq`
3. ✅ All components connected to Sanity
4. ✅ Frontend dev server starting...

## 🎯 Next Steps to See Changes

### Step 1: Configure CORS (Important!)

Your frontend needs permission to fetch data from Sanity:

1. Go to **[manage.sanity.io](https://manage.sanity.io)**
2. Select your project (g5k024mq)
3. Go to **Settings → API → CORS origins**
4. Click **"Add CORS origin"**
5. Add these URLs:
   - `http://localhost:8080` (for development)
   - `http://localhost:5173` (Vite default, if different)
   - Your production URL (when you deploy)

6. Click **"Save"**

### Step 2: Start Sanity Studio

Open a **new terminal** and run:

```bash
cd sanity-studio
npm install  # If not already installed
npm run dev
```

The Studio will open at: **http://localhost:3333**

**Note:** If you get a disk space error, you can:
- Clear some disk space, OR
- Use the online Sanity Studio at: **https://g5k024mq.api.sanity.io/manage**

### Step 3: Add Some Content

1. Open Sanity Studio (http://localhost:3333 or online)
2. Log in with your Sanity account
3. Create your first content:

   **Hero Section:**
   - Click "Section Hero" → "Create new"
   - Fill in:
     - Titre Principal: "À l'aube"
     - Sous-titre: "des connexions"
     - Texte d'accent: "durables"
     - Texte d'accompagnement: "AURORA vous accompagne pour"
     - Valeurs Rotatives: Click "+" to add:
       - "Comprendre votre vision"
       - "Relier les expertises"
       - "Construire l'excellence"
     - Texte du Bouton CTA: "Découvrir AURORA en vidéo"
   - Click **"Publish"**

   **Navigation:**
   - Click "Navigation" → "Create new"
   - Fill in:
     - Texte du Logo: "AURORA"
     - Éléments de Menu: Add menu items
     - Texte du Bouton CTA: "Nous contacter"
   - Click **"Publish"**

### Step 4: View Your Website

1. Your frontend should be running at: **http://localhost:8080**
2. Open it in your browser
3. You should see your content from Sanity!

## 🔄 How to See Changes

1. **Edit content** in Sanity Studio
2. Click **"Publish"** in Sanity
3. **Refresh your browser** (or wait a few seconds)
4. Changes appear on your website! ✨

## 🧪 Test the Connection

Run this to test if everything is connected:

```bash
node test-sanity-connection.js
```

Or check your browser console when viewing the site - you should see data being fetched.

## 🆘 Troubleshooting

### Changes Not Appearing?

1. **Check CORS** - Make sure you added localhost URLs in Sanity settings
2. **Check Publishing** - Content must be "Published" (not just saved)
3. **Clear Cache** - Press `Ctrl+F5` (or `Cmd+Shift+R` on Mac) to hard refresh
4. **Check Console** - Open browser DevTools (F12) and check for errors

### Can't Access Sanity Studio?

- Try the online version: Go to [manage.sanity.io](https://manage.sanity.io) → Your project → "Open Studio"
- Or deploy it: `cd sanity-studio && npm run deploy`

### Frontend Not Loading?

- Check if dev server is running: `npm run dev`
- Check the port (should be 8080 or 5173)
- Check `.env` file exists and has correct Project ID

## 📝 Quick Reference

- **Frontend:** http://localhost:8080
- **Sanity Studio:** http://localhost:3333
- **Sanity Manage:** https://manage.sanity.io
- **Project ID:** g5k024mq
- **Dataset:** production

## 🎉 You're Ready!

Once CORS is configured and you've added some content, you'll see your website update in real-time as you edit in Sanity!

---

**Need help?** Check `SANITY_CLIENT_GUIDE.md` for detailed content management instructions.

