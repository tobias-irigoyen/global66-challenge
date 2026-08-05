<template>
  <button
    type="button"
    @click.stop.prevent="toggleFavorite"
    class="absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer"
  >
    <img
      :src="isFavorite ? filledIcon : emptyIcon"
      :alt="isFavorite ? 'Quitar favorito' : 'Agregar favorito'"
    />
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";

import emptyIcon from "@/assets/pokemons/empty-fav.svg";
import filledIcon from "@/assets/commons/fav.svg";

import { useFavoritesPokemonsStore } from "@/stores/favorites";
import type { Pokemon } from "@/types/pokemon";

const props = defineProps<{
  pokemon: Pokemon;
}>();

const favoritesStore = useFavoritesPokemonsStore();

const isFavorite = computed(() =>
  favoritesStore.isFavorite(props.pokemon.id)
);

const toggleFavorite = () => {
  favoritesStore.toggleFavorite(props.pokemon);
};
</script>