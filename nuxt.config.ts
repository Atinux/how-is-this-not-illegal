export default defineNuxtConfig({
  devtools: { enabled: true },
  experimental: {
    componentIslands: true
  },
  modules: [
    '@nuxt/image',
    '@nuxtjs/google-fonts',
    '@nuxtjs/tailwindcss'
  ],
  googleFonts: {
    display: 'swap',
    download: true,
    families: {
      Inter: [400, 500, 700]
    }
  },
  image: {
    domains: ['raw.githubusercontent.com']
  }
})
