import { describe, it, expect, beforeEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'

import { useFavoritesPokemonsStore } from '@/stores/favorites'
import type { Pokemon } from '@/types/pokemon'


describe('Favorites store', () => {

  beforeEach(() => {
    setActivePinia(createPinia())
  })


  it('add a pokemon to favorites', () => {

    const store = useFavoritesPokemonsStore()

    store.toggleFavorite({
      id: 25,
      name: 'pikachu',
      image: '',
      types: ['electric']
    })


    expect(store.favorites.length)
      .toBe(1)

  })


  it('remove a pokemon from favorites', () => {

    const store = useFavoritesPokemonsStore()

    const pokemon: Pokemon = {
      id: 25,
      name: 'pikachu',
      image: '',
      types: ['electric']
    }


    store.toggleFavorite(pokemon)
    store.toggleFavorite(pokemon)


    expect(store.favorites.length)
      .toBe(0)

  })

})