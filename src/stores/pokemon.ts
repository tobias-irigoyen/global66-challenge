import { defineStore } from 'pinia'
import { ref } from 'vue'

import * as pokemonApi from '@/services/pokemonApi'
import { getTypeWeaknesses } from '@/constants/pokemonTypes'
import { getAbilityName } from '@/constants/abilities'
import type { Pokemon } from '@/types/pokemon'

export const usePokemonStore = defineStore('pokemon', () => {
  const pokemons = ref<Pokemon[]>([])
  const pokemon = ref<any | null>(null)

  const loading = ref(false)
  const error = ref<string | null>(null)

  const mapPokemon = (data: any): Pokemon => ({
    id: data.id,
    name: data.name,
    image: data.sprites.front_default,
    types: data.types.map(
      (type: { type: { name: string } }) => type.type.name
    )
  })

  const fetchPokemons = async () => {
    loading.value = true
    error.value = null

    try {
      const { results } = await pokemonApi.getPokemonList()

      const data = await Promise.all(
        results.map((pokemon: { url: string }) =>
          pokemonApi.getPokemon(pokemon.url)
        )
      )

      pokemons.value = data.map(mapPokemon)
    } catch (err) {
      console.error(err)

      error.value =
        'No pudimos cargar la información en este momento. Verifica tu conexión o intenta nuevamente más tarde.'

      pokemons.value = []
    } finally {
      loading.value = false
    }
  }

  const fetchPokemonById = async (id: number | string) => {
    loading.value = true
    error.value = null

    try {
      const [pokemonData, speciesData] = await Promise.all([
        pokemonApi.getPokemon(id),
        pokemonApi.getPokemonSpecies(id)
      ])

      const abilities = pokemonData.abilities.map(
        (ability: any) => getAbilityName(ability.ability.name)
      )

      const description =
        speciesData.flavor_text_entries.find(
          (entry: any) => entry.language.name === 'es'
        )?.flavor_text ??
        speciesData.flavor_text_entries.find(
          (entry: any) => entry.language.name === 'en'
        )?.flavor_text ??
        ''

      const category =
        speciesData.genera.find(
          (g: any) => g.language.name === 'es'
        )?.genus ??
        speciesData.genera.find(
          (g: any) => g.language.name === 'en'
        )?.genus ??
        ''

      const genderRate = speciesData.gender_rate

      let male = 0
      let female = 0

      if (genderRate !== -1) {
        female = genderRate * 12.5
        male = 100 - female
      }

      const weaknesses = [
        ...new Set(
          pokemonData.types.flatMap((t: any) =>
            getTypeWeaknesses(t.type.name)
          )
        )
      ]

      pokemon.value = {
        ...mapPokemon(pokemonData),

        description: description
          .replace(/\n/g, ' ')
          .replace(/\f/g, ' '),

        height: pokemonData.height / 10,

        weight: pokemonData.weight / 10,

        category,

        abilities,

        gender: {
          male,
          female
        },

        weaknesses
      }
    } catch (err) {
      console.error(err)

      error.value = err

      pokemon.value = null
    } finally {
      loading.value = false
    }
  }

  return {
    pokemons,
    pokemon,
    loading,
    error,
    fetchPokemons,
    fetchPokemonById
  }
})