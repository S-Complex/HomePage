// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },
	future: {
		compatibilityVersion: 4
	},
	experimental: {
		componentIslands: true
	},
	css: ['~/assets/css/reset.css'],
	modules: [
		'@nuxt/image',
		'nuxt-payload-analyzer',
		'@nuxt/eslint',
		'@nuxtjs/color-mode',
		'@unocss/nuxt',
		'nuxt-umami',
		'@nuxtjs/robots'
	],
	app: {
		head: {
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1',
			title: 'Restent Ou (@gxres042)',
			meta: [
				{
					charset: 'utf-8'
				},
				{
					name: 'description',
					content: 'The profile of Restent Ou.'
				},
				{
					name: 'twitter:description',
					content: 'The profile of Restent Ou.'
				},
				{
					name: 'baidu-site-verification',
					content: 'codeva-yept7qZoUr'
				}
			],
			htmlAttrs: {
				lang: 'en'
			},
			link: [
				{
					rel: 'preconnect',
					href: 'https://library.gxres.net',
					crossorigin: ''
				},
				{
					rel: 'canonical',
					href: 'https://www.gxres.net'
				},
				{
					rel: 'icon',
					href: 'https://library.gxres.net/images/icons/favicon.webp'
				},
				{
					rel: 'apple-touch-icon',
					href: 'https://library.gxres.net/images/icons/big-favicon.webp'
				}
			]
		}
	},
	colorMode: {
		preference: 'system',
		fallback: 'light',
		classPrefix: '',
		classSuffix: '',
		storageKey: 'nuxt-color-mode'
	},
	umami: {
		host: 'https://analytics.hit.moe/',
		id: '849b04c8-22d6-49a5-99e8-e22b07e436c0',
		autoTrack: true,
		ignoreLocalhost: true,
		domains: ['www.gxres.net'],
		customEndpoint: 'script/health_check.js'
	}
});
