# ✅ Setup Verification Checklist

## Configuration Status

- ✅ **Project ID:** `g5k024mq` (configured in `.env` and `sanity-studio/sanity.config.ts`)
- ✅ **Dataset:** `production`
- ✅ **Frontend:** Configured to fetch from Sanity
- ✅ **Components:** All connected to Sanity hooks

## ⚠️ Action Required: CORS Configuration

**This is critical for the website to fetch data from Sanity!**

### Steps:

1. **Go to:** https://manage.sanity.io
2. **Select project:** g5k024mq
3. **Navigate to:** Settings → API → CORS origins
4. **Add these origins:**
   ```
   http://localhost:8080
   http://localhost:5173
   ```
5. **Click "Save"**

**Why?** Browsers block requests from your website to Sanity unless CORS is configured. This is a security feature.

## 🧪 Test Your Setup

### Option 1: Check Browser Console

1. Open your website: http://localhost:8080
2. Press `F12` to open DevTools
3. Go to "Console" tab
4. Look for:
   - ✅ No CORS errors = Good!
   - ❌ CORS errors = Need to configure CORS (see above)

### Option 2: Check Network Tab

1. Open DevTools (F12)
2. Go to "Network" tab
3. Refresh the page
4. Look for requests to `api.sanity.io`
   - ✅ Status 200 = Connected!
   - ❌ Status 0 or CORS error = Need CORS config

### Option 3: Visual Check

1. Open http://localhost:8080
2. If you see default/fallback content = Sanity not connected yet
3. After adding content in Sanity and configuring CORS, you should see your Sanity content

## 📋 Quick Test Process

1. **Configure CORS** (see above)
2. **Start Sanity Studio:**
   ```bash
   cd sanity-studio
   npm run dev
   ```
3. **Add Hero content** in Sanity Studio
4. **Publish** the content
5. **Refresh** your website
6. **See changes!** ✨

## 🎯 Expected Behavior

### Before CORS Configuration:
- Website loads with fallback/default content
- Browser console shows CORS errors
- Network tab shows failed requests to Sanity API

### After CORS Configuration:
- Website loads with Sanity content (if content exists)
- No CORS errors in console
- Network tab shows successful requests to Sanity API
- Changes in Sanity appear on website after publishing

## 🆘 Still Not Working?

1. **Verify Project ID:**
   - Check `.env` file has: `VITE_SANITY_PROJECT_ID=g5k024mq`
   - Check `sanity-studio/sanity.config.ts` has: `projectId: 'g5k024mq'`

2. **Verify CORS:**
   - Double-check you added `http://localhost:8080` (or your actual port)
   - Make sure you clicked "Save" in Sanity manage

3. **Check Content:**
   - Make sure you've created and **Published** content in Sanity
   - Drafts won't appear on the website

4. **Clear Cache:**
   - Hard refresh: `Ctrl+F5` (Windows) or `Cmd+Shift+R` (Mac)
   - React Query caches for 5 minutes, so wait a bit

5. **Check Dev Server:**
   - Make sure `npm run dev` is running
   - Check the port (should be 8080 or shown in terminal)

## 📞 Next Steps

Once CORS is configured:
1. ✅ Add content in Sanity Studio
2. ✅ Publish content
3. ✅ See changes on your website!

---

**Current Status:** ⚠️ **Waiting for CORS configuration**

After CORS is set up, everything will work! 🚀

