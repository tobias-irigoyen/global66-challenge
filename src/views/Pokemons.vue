<template>
  <Loading v-if="pokemonStore.loading" />

  <Messagge
    v-else-if="pokemonStore.error"
    :image="'/src/assets/commons/magikarp.svg'"
    :title="'Algo salió mal...'"
    :description="pokemonStore.error"
    :hasButton="true"
    :buttonText="'Reintentar'"
    @action="pokemonStore.fetchPokemons"
  />

  <div class="relative" v-else>
    <div class="flex justify-start items-center gap-2 flex-wrap">
      <Searchbar @search="filterPokemons" @clear="clearSearch" />

      <Filters v-model="selectedTypes" class="pokemon-filters" />
      <p v-if="selectedTypes.length" class="text-[var(--disabled-color)] w-full">
        Se han encontrado <span class="font-semibold  mr-2">{{filteredPokemons.length}} resultados</span> 
      <button
        v-if="selectedTypes.length"
        @click="clearFilters"
        class="text-[14px] cursor-pointer underline text-[var(--primary-btn)]"
      >
        Borrar filtro
      </button>
      </p>
    </div>

    <section
      class="flex justify-center flex-wrap gap-3 mt-4 md:justify-start md:items-start"
    >
      <PokemonCard
        v-for="pokemon in filteredPokemons"
        :key="pokemon.id"
        :pokemon="pokemon"
      />
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { usePokemonStore } from "@/stores/pokemon";

import Loading from "../components/common/Loading.vue";
import Messagge from "../components/common/Message.vue";
import Searchbar from "../components/common/Searchbar.vue";
import Filters from "../components/common/Filters.vue";
import PokemonCard from "../components/pokemons/PokemonCard.vue";

const pokemonStore = usePokemonStore();

onMounted(() => {
  pokemonStore.fetchPokemons();
});

const search = ref("");
const selectedTypes = ref<string[]>([]);

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

const filterPokemons = (value: string) => {
  search.value = value;
};

const clearSearch = () => {
  search.value = "";
};

const clearFilters = () => {
  selectedTypes.value = [];
};
</script>
