import withNuxt from "./.nuxt/eslint.config.mjs";
import unocss from "@unocss/eslint-config/flat";
import prettier from "eslint-plugin-prettier/recommended";

export default withNuxt(
  // @ts-expect-error
  unocss,
  prettier,
);
