<template>
  <section class="flex justify-center flex-wrap gap-3 md:justify-start md:items-start"
  :class="favoritesStore.favorites.length === 0 ? '' : 'pt-[50px]'"
  >
  <header class="bg-white flex justify-between items-center fixed top-0 left-0 right-0 mx-auto h-[75px] px-4">
    <RouterLink to="/pokemons">
      <ChevronLeftLight />
      <span class="sr-only">Volver</span>
    </RouterLink>
    <h1 class="mr-auto ml-auto font-semibold text-[1rem]"
    style="font-family: var(--montserrat)">
    Favoritos
  </h1>
  </header>
      <Feedback
        v-if="favoritesStore.favorites.length === 0"
        :image="'/src/assets/commons/magikarp.svg'"
        :title="'No has marcado ningún Pokémon como favorito'"
        :description="'Haz clic en el ícono de corazón de tus Pokémon favoritos y aparecerán aquí.'"
        :hasButton="false"
      />
    <PokemonCard
        v-else
        v-for="pokemon in favoritesStore.favorites"
        :key="pokemon.id"
        :pokemon="pokemon"
      />
  </section>
</template>

<script setup lang="ts">
import Feedback from '../components/common/Feedback.vue';
import ChevronLeftLight from '@/components/icons/ChevronLeftLight.vue'; 
import { onMounted } from "vue";
import { useFavoritesPokemonsStore } from "@/stores/favorites";
import PokemonCard from "@/components/pokemons/PokemonCard.vue";

const favoritesStore = useFavoritesPokemonsStore();

onMounted(() => {
  favoritesStore.loadFavorites();
});
</script>