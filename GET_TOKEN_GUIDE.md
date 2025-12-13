# 🔑 Get Sanity API Token - Quick Guide

## Step 1: Get Your Token

1. **Go to:** https://manage.sanity.io
2. **Select your project:** g5k024mq
3. **Navigate to:** Settings → API → Tokens
4. **Click:** "Add API token"
5. **Fill in:**
   - Name: `Color Seeder` (or any name you like)
   - Permissions: Select **"Editor"** (needs write access)
6. **Click:** "Generate"
7. **Copy the token** (you'll only see it once!)

## Step 2: Run the Script

### PowerShell (Windows):
```powershell
$env:SANITY_API_TOKEN="your_token_here"
node scripts/seed-colors-with-token.mjs
```

### Command Prompt (Windows):
```cmd
set SANITY_API_TOKEN=your_token_here
node scripts/seed-colors-with-token.mjs
```

### Bash (Mac/Linux):
```bash
SANITY_API_TOKEN=your_token_here node scripts/seed-colors-with-token.mjs
```

## Step 3: Publish in Sanity Studio

After running the script:
1. Go to Sanity Studio: https://auroraa.sanity.studio
2. Open "Paramètres de Couleurs"
3. You'll see the document (it will be in draft mode)
4. Click **"Publish"** to make it live

## ✅ That's It!

Your colors will be automatically added and you can start managing them from Sanity!

---

**Note:** Keep your token secure! Don't commit it to git.

