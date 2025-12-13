# 🎨 Color Management Guide

## ✅ Colors Are Now Manageable from Sanity!

You can now change your website colors directly from Sanity Studio without touching code!

## 🎯 How to Use

### Step 1: Access Color Settings in Sanity

1. Go to your Sanity Studio: **https://auroraa.sanity.studio**
2. Look for **"Paramètres de Couleurs"** in the content list
3. Click on it (or create a new one if it doesn't exist)

### Step 2: Edit Colors

You'll see fields for all your main colors:

- **Couleur Primaire** - Primary color (buttons, highlights)
- **Couleur Secondaire** - Secondary color
- **Couleur Tertiaire** - Tertiary color
- **Couleur Succès** - Success color (green)
- **Couleur Accent** - Accent color
- **Couleur de Fond** - Background color
- **Couleur de Texte Principal** - Main text color

Each color also has a "foreground" version (text color on that background).

### Step 3: Enter HSL Values

**Format:** Enter colors in HSL format **without** the `hsl()` wrapper.

**Example:**
- ✅ Correct: `32 40% 38%`
- ❌ Wrong: `hsl(32 40% 38%)` or `#826952`

**Where to get HSL values:**
- Use any color picker tool
- Convert from hex: https://www.hexcolortool.com/
- Or use the format: `Hue Saturation% Lightness%`

### Step 4: Publish

1. Fill in the colors you want to change
2. Click **"Publish"** (top right)
3. Refresh your website
4. Colors update instantly! ✨

## 🎨 Available Colors

### Main Colors
- **Primary** - Used for buttons, links, highlights
- **Secondary** - Secondary elements
- **Tertiary** - Additional accent
- **Success** - Success messages, positive indicators
- **Accent** - Accent elements

### Base Colors
- **Background** - Main background color
- **Foreground** - Main text color

### Foreground Colors
Each main color has a corresponding foreground color for text that appears on that background.

## 💡 Tips

1. **Leave fields empty** if you don't want to change that color (it will use the default from CSS)
2. **Test colors** - Publish and check your website to see how they look
3. **Use color pickers** - Tools like https://coolors.co/ can help you choose harmonious colors
4. **HSL format** - Remember: `Hue Saturation% Lightness%` (no hsl() wrapper)

## 🔄 How It Works

1. You edit colors in Sanity Studio
2. Colors are saved to Sanity database
3. Your website fetches colors from Sanity
4. Colors are applied as CSS variables
5. Your entire site updates automatically!

## 📝 Example

**To change primary color to blue:**

1. Open "Paramètres de Couleurs" in Sanity
2. In "Couleur Primaire", enter: `220 70% 50%`
3. Click "Publish"
4. Refresh your website
5. All primary-colored elements are now blue!

## ⚠️ Important Notes

- Colors must be in HSL format: `Hue Saturation% Lightness%`
- Don't include `hsl()` wrapper
- Empty fields use default CSS colors
- Changes apply immediately after publishing

---

**Your colors are now fully manageable from Sanity!** 🎉

