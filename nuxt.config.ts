// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1.0",
      title: "Dongpu Ou - a.k.a. Restent Ou & SliverRiver",
      htmlAttrs: {
        lang: 'en'
      },
      link: [
        {
          rel: "icon",
          type: "image/webp",
          href: "https://library.gxres.net/images/icons/favicon.webp",
        },
        {
          rel: "apple-touch-icon",
          type: "image/webp",
          href: "https://library.gxres.net/images/icons/big-favicon.webp",
        },
        { rel: "canonical", href: "https://www.gxres.net" },
        {
          rel: "preconnect",
          href: "https://library.gxres.net",
          crossorigin: "",
        },
      ],
      meta: [
        {
          name: "description",
          content:
            "Personal homepage of Dongpu Ou, who also known as Restent Ou & SliverRiver.",
        },
        { name: "author", content: "Dongpu Ou" },
        {
          property: "og:title",
          content: "Dongpu Ou - a.k.a. Restent Ou & SliverRiver",
        },
        {
          property: "og:description",
          content:
            "Personal homepage of Dongpu Ou, who also known as Restent Ou & SliverRiver.",
        },
        {
          property: "og:image",
          content: "https://library.gxres.net/images/icons/big-favicon.webp",
        },
      ],
    },
  },
  css: ["~/assets/style.css"],
  future: {
    compatibilityVersion: 4,
  },
  experimental: {
    componentIslands: true,
  },
  modules: ["@nuxt/eslint", "@unocss/nuxt", "@nuxt/image"],
  vite: {
    css: {
      transformer: "lightningcss",
    },
  },
  postcss: {
    plugins: {
      cssnano: {
        preset: "advanced",
      },
    },
  },
});
