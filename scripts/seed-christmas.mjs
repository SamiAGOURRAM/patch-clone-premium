import { createClient } from "@sanity/client";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: resolve(__dirname, "../.env") });

const client = createClient({
  projectId: "g5k024mq",
  dataset: "production",
  useCdn: false,
  apiVersion: "2024-01-01",
  token: process.env.SANITY_API_TOKEN,
});

async function seedSeasonalSettings() {
  console.log("🎄 Setting up Christmas/Winter seasonal settings...\n");

  const seasonalSettings = {
    _id: "seasonalSettings",
    _type: "seasonalSettings",
    snowfallEnabled: true,
    snowflakeCount: 150,
    snowflakeColor: "#ffffff",
    snowflakeSpeed: "normal",
    christmasBannerEnabled: true,
    christmasBannerText: "🎄 Joyeuses fêtes ! AURORA vous souhaite une merveilleuse fin d'année ✨",
    christmasAccentEnabled: false,
    seasonStartDate: "2025-12-01",
    seasonEndDate: "2026-01-06", // Until Epiphany
  };

  try {
    await client.createOrReplace(seasonalSettings);
    console.log("✅ Seasonal settings created successfully!");
    console.log("\n🎅 Christmas effects are now ENABLED:");
    console.log("   ❄️  Snowfall: ON (150 snowflakes)");
    console.log("   🎄 Festive banner: ON");
    console.log("   📅 Active: Dec 1, 2025 - Jan 6, 2026");
    console.log("\n📝 Manage at: https://auroraa.sanity.studio");
    console.log("   Look for '🎄 Effets Saisonniers' in the menu\n");
  } catch (error) {
    console.error("❌ Error:", error.message);
  }
}

seedSeasonalSettings();
