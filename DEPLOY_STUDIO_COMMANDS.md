# 🚀 Commands to Deploy Sanity Studio

## Step-by-Step Commands

### 1. Navigate to the studio folder
```bash
cd sanity-studio
```

### 2. Deploy the studio
```bash
npx sanity@latest deploy
```

**What will happen:**
- It will ask you to log in (if not already logged in)
- It will ask you to confirm the project (g5k024mq)
- It will deploy your studio
- You'll get a URL like: `https://g5k024mq.sanity.studio`

### 3. Access your studio
After deployment, you'll get a URL. Open it in your browser!

---

## Alternative: If npx doesn't work

If you get errors, try installing Sanity CLI globally first:

```bash
npm install -g @sanity/cli
```

Then deploy:

```bash
cd sanity-studio
sanity deploy
```

---

## Quick One-Liner (if you're in project root)

```bash
cd sanity-studio && npx sanity@latest deploy
```

---

## After Deployment

1. **You'll get a URL** - something like `https://g5k024mq.sanity.studio`
2. **Bookmark it** - this is your content management dashboard
3. **Share it with your client** - they can log in and manage content
4. **Start adding content!**

---

## Troubleshooting

**If it asks for login:**
- Use your Sanity account credentials
- Or log in with Google/GitHub

**If it asks which project:**
- Select: `g5k024mq` (or the one that matches your project)

**If you get errors:**
- Make sure you're in the `sanity-studio` folder
- Check that `sanity.config.ts` has the correct project ID

---

**That's it! Once deployed, you'll have a permanent URL for your studio.** 🎉

