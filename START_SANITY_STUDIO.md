# 🚀 How to Start Sanity Studio

## ⚠️ Disk Space Issue Detected

Your system doesn't have enough space to install Sanity Studio dependencies locally. Here are your options:

## Option 1: Use Online Sanity Studio (Easiest! ✅)

**This is the recommended solution - no installation needed!**

1. Go to: **https://manage.sanity.io**
2. Log in with your Sanity account
3. Select your project: **g5k024mq**
4. Click **"Open Studio"** button (top right)
5. You'll see the full Sanity Studio in your browser!

**Advantages:**
- ✅ No disk space needed
- ✅ No installation required
- ✅ Works immediately
- ✅ Same features as local studio

## Option 2: Use npx (Temporary Solution)

If you want to run locally without installing:

```bash
cd sanity-studio
npx sanity@latest dev
```

**Note:** This will download packages each time, but doesn't install them permanently.

## Option 3: Free Up Disk Space

If you want to install locally:

1. **Free up disk space:**
   - Delete unused files
   - Clear browser cache
   - Empty Recycle Bin
   - Uninstall unused programs
   - Use Windows Disk Cleanup

2. **Then install:**
   ```bash
   cd sanity-studio
   npm install
   npm run dev
   ```

## Option 4: Deploy Studio (Best for Production)

Deploy the studio so your client can access it online:

```bash
cd sanity-studio
npx sanity@latest deploy
```

This will give you a URL like: `https://your-project.sanity.studio`

## 🎯 Recommended: Use Online Studio

For now, **use the online Sanity Studio** at manage.sanity.io - it's the easiest and doesn't require any disk space!

### Steps:

1. **Go to:** https://manage.sanity.io
2. **Log in** (or create account if needed)
3. **Select project:** g5k024mq
4. **Click "Open Studio"**
5. **Start editing content!**

The online studio is identical to the local one - you can do everything there!

---

**Your frontend is already running and will fetch content from Sanity once you add content and configure CORS!**

