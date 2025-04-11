export default defineNuxtConfig({
  extends: [
    '@demo/ui',
    '@demo/data',
  ],
  modules: ['@nuxt/eslint'],
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2025-01-27',
  nitro: {
    experimental: {
      asyncContext: true,
    },
    cloudflare: {
      wrangler: {
        name: 'daisyui-issue',
      },
    },
  },
  typescript: {
    // https://github.com/nuxt/nuxt/issues/20155
    includeWorkspace: true,
  },
  eslint: {
    checker: true,
  },
})
