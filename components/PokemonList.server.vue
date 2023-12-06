<script setup>
</script>

<template>
  <ul class="max-w-md flex flex-wrap justify-center gap-4 p-4 m-3">
    <li v-for="pokemon of pokemons" :key="pokemon.id" class="flex flex-col items-center justify-center border bg-white border-gray-400 dark:bg-gray-700 dark:border-gray-500 p-3">
      <NuxtImg
        width="96"
        height="96"
        :alt="pokemon.name"
        :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`"
      />
      {{ pokemon.name }}
    </li>
  </ul>
</template>