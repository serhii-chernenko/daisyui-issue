export default defineNuxtConfig({
  extends: ['@demo/integration-cloudflare', '@demo/ui'],
  modules: ['@nuxt/eslint'],
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      itemsLimit: 5,
    },
  },
  compatibilityDate: '2025-01-27',
  nitro: {
    cloudflare: {
      wrangler: {
        kv_namespaces: [
          {
            binding: 'KV',
            id: process.env.KV_ID ?? 'SET_IN_ENV',
          },
        ],
      },
    },
  },
})
