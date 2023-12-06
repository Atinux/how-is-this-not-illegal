<script setup lang="ts">
import type { PokemonList } from './app/components'

useServerSeoMeta({
  title: 'How is this not illegal?',
  description: 'Querying Postgres directly from your components',
})
// {
//   openGraph: {
//     title: 'How is this not illegal?',
//     description: 'Querying Postgres directly from your components',
//     url: 'https://howisthisnotillegal.vercel.app',
//     siteName: 'How is this not illegal?',
//   },
//   twitter: {
//     card: 'summary_large_image',
//     site: '@rauchg',
//     creator: '@rauchg',
//   },
// }

</script>

<template>
  <Html lang="en" />
  <main class="flex min-h-screen flex-col items-center flex-start px-6 pt-6">
    <h1 class="text-3xl font-bold mb-3">
      How is this not illegal?
    </h1>
    <p class="text-center">
      This page renders
      <code class="py-0.5 px-1 text-sm rounded-md border border-gray-300 bg-gray-100 dark:bg-[#444] dark:border-[#666]">
        SELECT * FROM pokemon ORDER BY RANDOM() LIMIT 12
      </code>
      from the edge, for every request.
    </p>
    <p class="mt-2 text-center">
      What's best, the data fetching is defined directly within the
      component tree thanks to Nuxt Server Components.
      <a
        href="https://twitter.com/dan_abramov/status/1341217154566402050"
        target="_blank"
        class="underline"
      >
        Legally
      </a>
      . (
      <a
        class="underline"
        target="_blank"
        href="https://github.com/Atinux/how-is-this-not-illegal"
      >
        Source
      </a>
      )
    </p>
    <PokemonList />
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