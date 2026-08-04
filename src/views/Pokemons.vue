<template>
  <Loading v-if="pokemonStore.loading" />

  <Error
    v-else-if="pokemonStore.error"
    :image="'/src/assets/commons/magikarp.svg'"
    :title="'Algo salió mal...'"
    :description="pokemonStore.error"
    :hasButton="true"
    :buttonText="'Reintentar'"
    @action="pokemonStore.fetchPokemons"
  />

    <div v-else>
      <Searchbar @search="filterPokemons" @clear="clearSearch" />
      <section
        class="flex justify-center flex-wrap gap-3 md:justify-start md:items-start"
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
import Loading from '../components/common/Loading.vue';
import Error from '../components/common/Error.vue';
import Searchbar from '../components/common/Searchbar.vue';

import { onMounted, computed, ref } from 'vue'
import { usePokemonStore } from '@/stores/pokemon'
import PokemonCard from '../components/pokemons/PokemonCard.vue'

const pokemonStore = usePokemonStore()

onMounted(() => {
  pokemonStore.fetchPokemons()
})

const search = ref('')

const filteredPokemons = computed(() => {
  if (!search.value) {
    return pokemonStore.pokemons
  }

  return pokemonStore.pokemons.filter((pokemon) =>
    pokemon.name
      .toLowerCase()
      .includes(search.value.toLowerCase())
  )
})

const filterPokemons = (value: string) => {
  search.value = value
}

const clearSearch = () => {
  search.value = ''
}
</script>