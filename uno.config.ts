import { defineConfig, presetUno, presetAttributify, transformerVariantGroup } from "unocss";

export default defineConfig({
  presets: [
    presetUno({
      dark: "media",
    }),
    presetAttributify()
  ],
  transformers: [transformerVariantGroup()],
});
