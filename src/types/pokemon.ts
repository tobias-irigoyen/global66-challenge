import type { PokemonType } from '@/constants/pokemonTheme'

export interface Pokemon {
  id: number
  name: string
  image: string
  types: PokemonType[]
  description?: string
  height?: number
  weight?: number
  category?: string
  abilities?: string[]
  gender?: {
    male: number
    female: number
  }
  weaknesses?: PokemonType[]
}