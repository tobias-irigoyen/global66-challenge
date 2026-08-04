<template>
  <Loading v-if="pokemonStore.loading" />

  <Error
    v-else-if="pokemonStore.error"
    image="/src/assets/commons/magikarp.svg"
    title="Algo salió mal..."
    :description="pokemonStore.error"
    buttonText="Reintentar"
    @action="pokemonStore.fetchPokemons"
  />

  <section
    v-else
    class="flex justify-center flex-wrap gap-3 md:justify-start md:items-start"
  >
    <PokemonCard
      v-for="pokemon in pokemonStore.pokemons"
      :key="pokemon.id"
      :pokemon="pokemon"
    />
  </section>
</template>

<script setup lang="ts">
import Loading from '../components/common/Loading.vue';
import Error from '../components/common/Error.vue'

import { onMounted } from 'vue'
import { usePokemonStore } from '@/stores/pokemon'
import PokemonCard from '../components/pokemons/PokemonCard.vue'

const pokemonStore = usePokemonStore()

onMounted(() => {
  pokemonStore.fetchPokemons()
})
</script>