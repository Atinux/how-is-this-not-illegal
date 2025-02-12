module.exports = {
  root: true,
  extends: [
    '@nuxt/eslint-config'
  ],
  rules: {
    // Global
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
    'quote-props': ['error', 'as-needed'],
    // Vue
    'vue/multi-word-component-names': 0,
    'vue/no-v-html': 0,
    'vue/max-attributes-per-line': ['error', { singleline: { max: 5 } }]
  }
}
