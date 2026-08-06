import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'

import PokemonCard from '@/components/pokemons/PokemonCard.vue'
import { vi } from 'vitest'

vi.mock('vue-router', () => ({
  useRoute: () => ({
    name: 'pokemons'
  }),
  RouterLink: {
    template: '<a><slot /></a>'
  }
}))


describe('PokemonCard.vue', () => {

  it('show the pokemon name', () => {

    const wrapper = mount(PokemonCard, {
      props: {
        pokemon: {
          id: 1,
          name: 'bulbasaur',
          image: '/image.png',
          types: ['grass']
        }
      },

      global: {
        plugins: [
          createTestingPinia()
        ]
      }
    })


    expect(wrapper.text())
      .toContain('bulbasaur')

  })

})