<template>
  <RouterLink
    :to="{
      name: 'pokemon-detail',
      params: { idOrName: pokemon.name },
    }"
    class="flex justify-between items-center w-full max-w-[328px]"
  >
    <article
      class="flex justify-between items-center rounded-lg w-full cursor-pointer h-[102px]"
      :class="theme.card"
    >
      <div class="pl-4">
        <span
          class="uppercase font-semibold text-xs text-[var(--secondary-text)]"
          >Nº{{ pokemon.id.toString().padStart(3, "0") }}</span
        >

        <h2
          class="text-[21px] font-semibold text-[var(--primary-text)] mb-[2px] capitalize"
        >
          {{ pokemon.name }}
        </h2>

        <ul class="flex gap-2 flex-wrap">
          <li v-for="type in pokemon.types" :key="type">
            <PokemonTypeBadge
              :badgeStyle="pokemonTheme[type].badge"
              :icon="pokemonTheme[type].icon"
              :name="translatePokemonType(type)"
            />
          </li>
        </ul>
      </div>
      <div
        class="relative rounded-lg bg-no-repeat bg-center bg-[length:90%] h-[102px] w-[126px]"
        :class="theme.badge"
      >
        <FavButton
          :pokemon="pokemon"
          class="absolute !right-[5px] top-[5px] z-20"
        />
        <div
          class="relative z-10 w-[126px] h-[102px] flex items-center justify-center"
        >
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
import { computed, ref } from "vue";
import FavButton from "@/components/common/FavButton.vue";
import PokemonTypeBadge from "@/components/pokemons/PokemonTypeBadge.vue";
import { pokemonTheme } from "@/constants/pokemonTheme";
import type { Pokemon } from "@/types/pokemon";
import { translatePokemonType } from "@/constants/pokemonTypes";

const loadedPokemonImage = ref(false);
const props = defineProps<{
  pokemon: Pokemon;
}>();

const primaryType = computed(() => props.pokemon.types[0]);
const theme = computed(
  () => pokemonTheme[primaryType.value as keyof typeof pokemonTheme],
);
</script>
