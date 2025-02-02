import { defineConfig, presetUno, transformerVariantGroup } from "unocss";

export default defineConfig({
  presets: [
    presetUno({
      dark: "media",
    }),
  ],
  transformers: [transformerVariantGroup()],
});
