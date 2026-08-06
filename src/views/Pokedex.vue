<template>
  <Loading v-if="pokemonStore.loading" />

  <Feedback
    v-else-if="pokemonStore.error"
    :image="'/src/assets/commons/magikarp.svg'"
    :title="'Algo salió mal...'"
    :description="pokemonStore.error"
    :hasButton="true"
    :buttonText="'Reintentar'"
    @action="pokemonStore.fetchPokemons"
  />

  <section class="relative" v-else>
    <h1 class="sr-only">Pokedex</h1>
    <div class="flex justify-start items-center gap-2 flex-wrap">
      <Searchbar
        v-model="inputSearch"
        @search="filterPokemons"
        @clear="clearSearch"
        :searched-data="filteredPokemons"
      />

      <Filters v-model="selectedTypes" class="pokemon-filters" />
      <p
        v-if="selectedTypes.length && filteredPokemons.length > 0"
        class="text-[var(--disabled-color)] w-full"
      >
        Se han encontrado
        <span class="font-semibold mr-2"
          >{{ filteredPokemons.length }} resultados</span
        >
        <button
          v-if="selectedTypes.length"
          @click="clearFilters"
          class="text-[14px] cursor-pointer underline text-[var(--primary-btn)]"
        >
          Borrar filtro
        </button>
      </p>
    </div>

    <div
      class="flex justify-center flex-wrap gap-3 mt-4 md:justify-start md:items-start"
    >
      <PokemonCard
        v-for="pokemon in filteredPokemons"
        :key="pokemon.id"
        :pokemon="pokemon"
      />
      <Feedback
        v-if="filteredPokemons.length === 0"
        :image="'/src/assets/commons/no-results.png'"
        :title="'No se encontró ningún Pokemon...'"
        :description="'No hay Pokemons que coincidan con tu búsqueda. Intenta con una nueva.'"
        :hasButton="true"
        :buttonText="'Nueva búsqueda'"
        @action="clearSearchAndFilters()"
      />
  </div>
</section>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { usePokemonStore } from "@/stores/pokemon";
import { useFavoritesPokemonsStore } from "@/stores/favorites";

import Loading from "../components/common/Loading.vue";
import Feedback from "../components/common/Feedback.vue";
import Searchbar from "../components/common/Searchbar.vue";
import Filters from "../components/common/Filters.vue";
import PokemonCard from "../components/pokemons/PokemonCard.vue";

const pokemonStore = usePokemonStore();
const favoritesStore = useFavoritesPokemonsStore();
const inputSearch = ref("");
const search = ref("");
const selectedTypes = ref<string[]>([]);

onMounted(() => {
  pokemonStore.fetchPokemons();
  favoritesStore.loadFavorites();
});

const filteredPokemons = computed(() => {
  return pokemonStore.pokemons.filter((pokemon) => {
    const matchSearch =
      !search.value ||
      pokemon.name.toLowerCase().includes(search.value.toLowerCase());

    const matchType =
      selectedTypes.value.length === 0 ||
      selectedTypes.value.some((type) => pokemon.types.includes(type));

    return matchSearch && matchType;
  });
});

const filterPokemons = () => {
  search.value = inputSearch.value.trim();
};

const clearSearch = () => {
  inputSearch.value = "";
  search.value = "";
};

const clearFilters = () => {
  selectedTypes.value = [];
};

const clearSearchAndFilters = () => {
  inputSearch.value = "";
  search.value = "";
  selectedTypes.value = [];
};
</script>
