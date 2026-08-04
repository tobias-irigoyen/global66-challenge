import type { PokemonType } from '@/constants/pokemonTheme'

export interface Pokemon {
  id: number
  name: string
  image: string
  types: PokemonType[]
}