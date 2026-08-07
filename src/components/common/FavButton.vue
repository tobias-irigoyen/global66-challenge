<template>
  <button
    v-if="route.name !== 'pokemon-detail'"
    type="button"
    @click.stop.prevent="toggleFavorite"
    class="absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer"
  >
    <span class="sr-only">{{ isFavorite ? 'Quitar favorito' : 'Agregar favorito' }}</span>
    <img
      :src="isFavorite ? filledIcon : emptyIcon"
      :alt="isFavorite ? 'Quitar favorito' : 'Agregar favorito'"
    />
  </button>

  <button
    v-else
    type="button"
    @click.stop.prevent="toggleFavorite"
    class="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer"
  >
    <span class="sr-only">{{ isFavorite ? 'Quitar favorito' : 'Agregar favorito' }}</span>
    <DetailFavIconFilled v-if="isFavorite" />
    <DetailFavIcon v-else />
  </button>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { toast } from "vue-sonner";

import emptyIcon from "@/assets/pokemons/empty-fav.svg";
import filledIcon from "@/assets/commons/fav.svg";

import { useFavoritesPokemonsStore } from "@/stores/favorites";
import type { Pokemon } from "@/types/pokemon";

import DetailFavIcon from "@/components/icons/DetailFavIcon.vue";
import DetailFavIconFilled from "@/components/icons/DetailFavIconFilled.vue";

const route = useRoute();

const props = defineProps<{
  pokemon: Pokemon;
}>();

const favoritesStore = useFavoritesPokemonsStore();

const isFavorite = computed(() =>
  favoritesStore.isFavorite(props.pokemon.id)
);

const capitalize = (text: string) =>
  text.charAt(0).toUpperCase() + text.slice(1);

const toggleFavorite = () => {
  const added = favoritesStore.toggleFavorite(props.pokemon);

  if (added) {
    toast.success(`${capitalize(props.pokemon.name)} ha sido agregado a favoritos.`);
  } else {
    toast.info(`${capitalize(props.pokemon.name)} ha sido eliminado de favoritos.`);
  }
};

onMounted(() => {
  favoritesStore.loadFavorites();
});
</script>