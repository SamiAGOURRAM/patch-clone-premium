# 🚨 URGENT: Fix CORS Configuration

## The Problem
Your website can't fetch data from Sanity because CORS (Cross-Origin Resource Sharing) isn't configured. This is a security feature that needs to be set up.

## ✅ Quick Fix (2 minutes)

### Step 1: Go to Sanity Manage
1. Open: **https://manage.sanity.io**
2. Log in if needed
3. Select your project: **g5k024mq**

### Step 2: Configure CORS
1. Click **"Settings"** (gear icon in left sidebar)
2. Click **"API"** in the settings menu
3. Scroll down to **"CORS origins"** section
4. Click **"Add CORS origin"** button

### Step 3: Add Your Localhost URL
In the form that appears:
- **Origin:** `http://localhost:8080`
- **Allow credentials:** ✅ Check this box (important!)
- Click **"Save"**

### Step 4: Wait & Refresh
1. Wait 10-30 seconds for changes to propagate
2. Go back to your website: http://localhost:8080
3. **Hard refresh:** Press `Ctrl+F5` (Windows) or `Cmd+Shift+R` (Mac)
4. Errors should be gone! ✨

## 📸 Visual Guide

**Path:** Settings → API → CORS origins → Add CORS origin

**What to enter:**
```
Origin: http://localhost:8080
Allow credentials: ✓ (checked)
```

## ⚠️ Important Notes

- **Allow credentials** must be checked for this to work
- Changes take a few seconds to apply
- You may need to hard refresh your browser (Ctrl+F5)
- If you deploy to production, add your production URL too

## 🎯 After Fixing CORS

Once CORS is configured:
1. ✅ Your website will fetch data from Sanity
2. ✅ Changes in Sanity will appear on your site
3. ✅ No more 403/Forbidden errors
4. ✅ Everything will work!

---

**This is the ONLY thing blocking your setup right now!** Once CORS is configured, everything will work perfectly.

