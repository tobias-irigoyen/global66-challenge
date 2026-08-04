import { defineStore } from 'pinia'
import { ref } from 'vue'

import * as pokemonApi from '@/services/pokemonApi'
import type { Pokemon } from '@/types/pokemon'

export const usePokemonStore = defineStore('pokemon', () => {
  const pokemons = ref<Pokemon[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  const fetchPokemons = async () => {
    loading.value = true
    error.value = null

    try {
      const { results } = await pokemonApi.getPokemonList()

      const data = await Promise.all(
        results.map((pokemon) =>
          pokemonApi.getPokemon(pokemon.url)
        )
      )

      pokemons.value = data.map((pokemon) => ({
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.sprites.front_default,
        types: pokemon.types.map(
          (type: { type: { name: string } }) => type.type.name
        )
      }))
    } catch (err) {
      console.error(err)

      error.value =
        'No pudimos cargar la información en este momento. Verifica tu conexión o intenta nuevamente más tarde.'

      pokemons.value = []
    } finally {
      loading.value = false
    }
  }

  return {
    pokemons,
    loading,
    error,
    fetchPokemons
  }
})