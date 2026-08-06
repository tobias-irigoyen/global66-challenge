<template>
  <button
    v-if="route.name !== 'pokemon-detail'"
    type="button"
    @click.stop.prevent="toggleFavorite"
    class="absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer"
  >
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
    <DetailFavIconFilled v-if="isFavorite" />
    <DetailFavIcon v-else />
  </button>
</template>

<script setup lang="ts">
import { onMounted, computed } from "vue";
import emptyIcon from "@/assets/pokemons/empty-fav.svg";
import filledIcon from "@/assets/commons/fav.svg";
import { useFavoritesPokemonsStore } from "@/stores/favorites";
import type { Pokemon } from "@/types/pokemon";
import { useRoute } from "vue-router";
import DetailFavIcon from "@/components/icons/DetailFavIcon.vue";
import DetailFavIconFilled from "@/components/icons/DetailFavIconFilled.vue";

const route = useRoute();

const props = defineProps<{
  pokemon: Pokemon;
}>();

const favoritesStore = useFavoritesPokemonsStore();

const isFavorite = computed(() => favoritesStore.isFavorite(props.pokemon.id));

const toggleFavorite = () => {
  favoritesStore.toggleFavorite(props.pokemon);
};


onMounted(() => {
  favoritesStore.loadFavorites();
});
</script>
