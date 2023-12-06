<script setup>
import { sql } from '@vercel/postgres'

const { limit } = defineProps({
  limit: {
    type: Number,
    default: 12
  }
})

const { rows: pokemons } = await sql`SELECT * FROM pokemon ORDER BY RANDOM() LIMIT ${limit}`
</script>

<template>
  <ul class="max-w-md flex flex-wrap justify-center gap-4 p-4">
    <li v-for="pokemon of pokemons" :key="pokemon.id" class="flex flex-col items-center justify-center border bg-white border-gray-400 dark:bg-gray-700 dark:border-gray-500 p-3">
      <NuxtImg
        width="96"
        height="96"
        :alt="pokemon.name"
        :src="`/pokemon/${pokemon.id}.png`"
      />
      {{ pokemon.name }}
    </li>
  </ul>
</template>