<script setup lang="ts">
useServerSeoMeta({
  title: 'How is this not illegal?',
  description: 'Querying Postgres directly from your components',
  ogTitle: 'How is this not illegal?',
  ogDescription: 'Querying Postgres directly from your components',
  ogUrl: 'https://how-is-this-not-illegal-nuxt.vercel.app',
  twitterCard: 'summary_large_image',
  twitterSite: '@atinux'
})
const limit = useState('limit', () => 12)
</script>

<template>
  <Html lang="en" />
  <main class="flex min-h-screen text-center flex-col items-center flex-start px-6 pt-6 gap-4">
    <h1 class="text-3xl font-bold">
      How is this not illegal?
    </h1>
    <p>
      This page renders
      <code class="py-0.5 px-1 text-sm rounded-md border border-gray-300 bg-gray-100 dark:bg-[#444] dark:border-[#666]">SELECT * FROM pokemon ORDER BY RANDOM() LIMIT 12</code>
      from the edge, for every request.
    </p>
    <p>
      What's best, the data fetching is defined directly within the
      component tree thanks to <a class="underline" href="https://nuxt.com/docs/guide/directory-structure/components#server-components" target="_blank">Nuxt Server Components</a>.
      (
      <a
        class="underline"
        target="_blank"
        href="https://github.com/Atinux/how-is-this-not-illegal/blob/main/components/PokemonList.server.vue"
      >
        Source
      </a>
      )
    </p>
    <p class="text-gray-600 dark:text-gray-500 text-sm">
      Originally forked from <a href="https://twitter.com/rauchg" target="_blank" class="underline">Guillermo</a>'s <a href="https://how-is-this-not-illegal.vercel.app" class="underline" target="_blank">how-is-this-not-illegal.vercel.app</a> project.
    </p>
    <p class="mt-4 text-center">
      Limit: <input v-model="limit" type="number" class="w-10 bg-transparent">
    </p>
    <PokemonList :limit="limit" />
  </main>

  <footer class="text-xs p-5 text-center text-gray-600">
    Images courtesy of
    <a
      target="_blank"
      class="underline"
      href="https://github.com/PokeAPI/sprites/tree/master/sprites/pokemon"
    >
      PokeAPI
    </a>
    – Pokemon is © 1996-2023 Nintendo, Creatures, Inc., GAME FREAK
  </footer>
</template>

<style lang="postcss">
:root {
  --foreground-rgb: 0, 0, 0;
  --background-start-rgb: 214, 219, 220;
  --background-end-rgb: 255, 255, 255;
}

@media (prefers-color-scheme: dark) {
  :root {
    --foreground-rgb: 255, 255, 255;
    --background-start-rgb: 34, 34, 34;
    --background-end-rgb: 0, 0, 0;
  }
}

body {
  @apply font-sans;
  color: rgb(var(--foreground-rgb));
  background: linear-gradient(
      to bottom,
      transparent,
      rgb(var(--background-end-rgb))
    )
    rgb(var(--background-start-rgb));
}
</style>