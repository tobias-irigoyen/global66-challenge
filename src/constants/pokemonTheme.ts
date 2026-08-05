import grassIcon from '@/assets/pokemons/types/grass-icon.svg'
import poisonIcon from '@/assets/pokemons/types/poison-icon.svg'
import fireIcon from '@/assets/pokemons/types/fire-icon.svg'
import waterIcon from '@/assets/pokemons/types/water-icon.svg'
import electricIcon from '@/assets/pokemons/types/electric-icon.svg'
import bugIcon from '@/assets/pokemons/types/bug-icon.svg'
import normalIcon from '@/assets/pokemons/types/normal-icon.svg'
import flyingIcon from '@/assets/pokemons/types/flying-icon.svg'
import groundIcon from '@/assets/pokemons/types/ground-icon.svg'
import rockIcon from '@/assets/pokemons/types/rock-icon.svg'
import psychicIcon from '@/assets/pokemons/types/psychic-icon.svg'
import fightingIcon from '@/assets/pokemons/types/fighting-icon.svg'
import iceIcon from '@/assets/pokemons/types/ice-icon.svg'
import ghostIcon from '@/assets/pokemons/types/ghost-icon.svg'
import dragonIcon from '@/assets/pokemons/types/dragon-icon.svg'
import darkIcon from '@/assets/pokemons/types/dark-icon.svg'
import steelIcon from '@/assets/pokemons/types/steel-icon.svg'
import fairyIcon from '@/assets/pokemons/types/fairy-icon.svg'

export const pokemonTheme = {
  normal: {
    label: 'Normal',
    card: 'bg-[var(--light-gray)]',
    badge: 'bg-[var(--light-black)]',
    icon: normalIcon
  },

  fire: {
    label: 'Fuego',
    card: 'bg-[var(--light-red)]',
    badge: 'bg-[var(--fire-type)]',
    icon: fireIcon
  },

  water: {
    label: 'Agua',
    card: 'bg-[var(--light-blue)]',
    badge: 'bg-[var(--ice-type)]',
    icon: waterIcon
  },

  electric: {
    label: 'Eléctrico',
    card: 'bg-[var(--light-yellow)]',
    badge: 'bg-[var(--dark-yellow)]',
    icon: electricIcon
  },

  grass: {
    label: 'Planta',
    card: 'bg-[var(--light-green)]',
    badge: 'bg-[var(--grass-type)]',
    icon: grassIcon
  },

  ice: {
    label: 'Hielo',
    card: 'bg-[var(--light-cyan)]',
    badge: 'bg-[var(--ice-type)]',
    icon: iceIcon
  },

  fighting: {
    label: 'Lucha',
    card: 'bg-[var(--light-brown)]',
    badge: 'bg-[var(--light-orange)]',
    icon: fightingIcon
  },

  poison: {
    label: 'Veneno',
    card: 'bg-[var(--light-purple)]',
    badge: 'bg-[var(--poison-type)]',
    icon: poisonIcon
  },

  ground: {
    label: 'Tierra',
    card: 'bg-[var(--light-yellow)]',
    badge: 'bg-[var(--light-brown)]',
    icon: groundIcon
  },

  flying: {
    label: 'Volador',
    card: 'bg-[var(--light-sky)]',
    badge: 'bg-[var(--flying-type)]',
    icon: flyingIcon
  },

  psychic: {
    label: 'Psíquico',
    card: 'bg-[var(--light-purple)]',
    badge: 'bg-[var(--psychic-type)]',
    icon: psychicIcon
  },

  bug: {
    label: 'Bicho',
    card: 'bg-[var(--light-lime)]',
    badge: 'bg-[var(--light-green)]',
    icon: bugIcon,
    background: '',
  },

  rock: {
    label: 'Roca',
    card: 'bg-[var(--light-gray)]',
    badge: 'bg-[var(--light-black)]',
    icon: rockIcon
  },

  ghost: {
    label: 'Fantasma',
    card: 'bg-[var(--light-indigo)]',
    badge: 'bg-[var(--dark-indigo)]',
    icon: ghostIcon
  },

  dragon: {
    label: 'Dragón',
    card: 'bg-[var(--light-purple)]',
    badge: 'bg-[var(--dark-purple)]',
    icon: dragonIcon
  },

  dark: {
    label: 'Siniestro',
    card: 'bg-[var(--light-black)]',
    badge: 'bg-[var(--dark-black)]',
    icon: darkIcon
  },

  steel: {
    label: 'Acero',
    card: 'bg-[var(--light-steel)]',
    badge: 'bg-[var(--light-black)]',
    icon: steelIcon
  },

  fairy: {
    label: 'Hada',
    card: 'bg-[var(--light-rose)]',
    badge: 'bg-[var(--dark-rose)]',
    icon: fairyIcon
  },
} as const

export type PokemonType = keyof typeof pokemonTheme