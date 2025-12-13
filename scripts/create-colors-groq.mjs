// Alternative: Use Sanity CLI to create colors document
// This uses your existing Sanity login
import { execSync } from 'child_process';

const colorsDocument = {
  _type: 'colorSettings',
  primary: '32 40% 38%',
  primaryForeground: '0 0% 100%',
  secondary: '220 45% 18%',
  secondaryForeground: '0 0% 100%',
  tertiary: '340 35% 28%',
  tertiaryForeground: '0 0% 100%',
  success: '158 60% 22%',
  successForeground: '0 0% 100%',
  accent: '0 0% 20%',
  accentForeground: '0 0% 100%',
  background: '30 43% 97%',
  foreground: '214 59% 20%',
};

// Create a GROQ mutation
const mutation = `*[_type == "colorSettings"][0] {
  _id,
  _rev
} | {
  "mutations": [
    {
      "createOrReplace": {
        "_id": "colorSettings",
        "_type": "colorSettings",
        "primary": "${colorsDocument.primary}",
        "primaryForeground": "${colorsDocument.primaryForeground}",
        "secondary": "${colorsDocument.secondary}",
        "secondaryForeground": "${colorsDocument.secondaryForeground}",
        "tertiary": "${colorsDocument.tertiary}",
        "tertiaryForeground": "${colorsDocument.tertiaryForeground}",
        "success": "${colorsDocument.success}",
        "successForeground": "${colorsDocument.successForeground}",
        "accent": "${colorsDocument.accent}",
        "accentForeground": "${colorsDocument.accentForeground}",
        "background": "${colorsDocument.background}",
        "foreground": "${colorsDocument.foreground}"
      }
    }
  ]
}`;

console.log('📝 Use this GROQ mutation in Sanity Vision:');
console.log('\n' + mutation);
console.log('\n💡 Or use the token method (see GET_TOKEN_GUIDE.md)');

