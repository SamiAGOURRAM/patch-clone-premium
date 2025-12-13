# 🔧 Fix for Deploy Error

## The Issue
The error is caused by Node.js version incompatibility (you have v22.1.0, need v22.12+).

## Solution 1: Try Again with Simple Hostname

Run the deploy command again:
```bash
npx sanity@latest deploy
```

When asked for hostname, use:
- `aurora` (simple, no special characters)
- OR `g5k024mq` (your project ID)

**Avoid:** underscores, spaces, special characters

## Solution 2: Use Sanity Manage (Easier!)

Instead of deploying via CLI, you can set the hostname in the web interface:

1. Go to: https://manage.sanity.io
2. Select your project: **g5k024mq**
3. Go to: **Settings → Studio → Hostname**
4. Set hostname to: `aurora`
5. Then deploy from there

## Solution 3: Upgrade Node.js (If Possible)

If you can upgrade Node.js:
- Current: v22.1.0
- Needed: v22.12.0 or higher
- OR: v20.19.0 to v21.x

## Quick Try Now

Just run deploy again and use a simple name:
```bash
npx sanity@latest deploy
```

Enter: `aurora` (just the word, no underscores)

