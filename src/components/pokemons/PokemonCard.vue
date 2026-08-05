
<template>
  <RouterLink
    :to="{
      name: 'pokemon-detail',
      params: { idOrName: pokemon.name }
    }"
    class="flex justify-between items-center w-full max-w-[328px]"
  >
  <article
    class="flex justify-between items-center rounded-lg w-full"
    :class="theme.card"
  >
    <div class="pl-4">
      <span class="uppercase font-semibold text-xs text-[var(--secondary-text)]">Nº{{ pokemon.id.toString().padStart(3, '0') }}</span>

      <h2 class="text-[21px] font-semibold text-[var(--primary-text)] mb-2 capitalize">{{ pokemon.name }}</h2>

      <ul class="flex gap-2 flex-wrap">
        <li
          v-for="type in pokemon.types"
          :key="type"
          class="flex items-center gap-2 px-2 py-1 mb-1 rounded-full text-[11px] text-white font-medium"
          :class="pokemonTheme[type].badge"
        >
          <img
            :src="pokemonTheme[type].icon"
            :alt="type"
            class="w-5 h-5"
          />

          <span>{{ translatePokemonType(type) }}</span>
        </li>
      </ul>
    </div>
    <div class="relative rounded-lg p-4 bg-no-repeat bg-center bg-[length:90%]" :class="theme.badge">
      <FavButton
        :pokemon="pokemon"
        class="absolute !right-[5px] top-[5px] z-20"
      />
      <div class="relative z-10 w-[94px] h-[94px]">
        <div
          v-if="!loadedPokemonImage"
          class="absolute inset-0 rounded-lg bg-gray-300 animate-pulse"
        />
        <img
          :src="pokemon.image"
          :alt="pokemon.name"
          class="relative z-10 w-[94px] transition-opacity duration-200"
          :class="loadedPokemonImage ? 'opacity-100' : 'opacity-0'"
          @load="loadedPokemonImage = true"
        />
      </div>
    </div>
  </article>
  </RouterLink> 
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import FavButton from '@/components/common/FavButton.vue'
import { pokemonTheme } from '@/constants/pokemonTheme'
import type { Pokemon } from '@/types/pokemon'
import { translatePokemonType } from '@/constants/pokemonTypes'

const loadedPokemonImage = ref(false)
const props = defineProps<{
  pokemon: Pokemon
}>()

const primaryType = computed(() => props.pokemon.types[0])
const theme = computed(() => pokemonTheme[primaryType.value as keyof typeof pokemonTheme])
</script>
