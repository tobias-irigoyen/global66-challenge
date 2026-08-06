const pokemonTypes: Record<string, string> = {
  normal: 'Normal',
  fire: 'Fuego',
  water: 'Agua',
  electric: 'Eléctrico',
  grass: 'Planta',
  ice: 'Hielo',
  fighting: 'Lucha',
  poison: 'Veneno',
  ground: 'Tierra',
  flying: 'Volador',
  psychic: 'Psíquico',
  bug: 'Bicho',
  rock: 'Roca',
  ghost: 'Fantasma',
  dragon: 'Dragón',
  dark: 'Siniestro',
  steel: 'Acero',
  fairy: 'Hada',
}

const weaknessesByType: Record<string, string[]> = {
  normal: ['fighting'],
  fire: ['ground', 'rock', 'water'],
  water: ['electric', 'grass'],
  electric: ['ground'],
  grass: ['bug', 'fire', 'flying', 'ice', 'poison'],
  ice: ['fighting', 'fire', 'rock', 'steel'],
  fighting: ['fairy', 'flying', 'psychic'],
  poison: ['ground', 'psychic'],
  ground: ['grass', 'ice', 'water'],
  flying: ['electric', 'ice', 'rock'],
  psychic: ['bug', 'dark', 'ghost'],
  bug: ['flying', 'rock', 'fire'],
  rock: ['fighting', 'grass', 'ground', 'steel', 'water'],
  ghost: ['dark', 'ghost'],
  dragon: ['ice', 'dragon', 'fairy'],
  dark: ['bug', 'fairy', 'fighting'],
  steel: ['fighting', 'fire', 'ground'],
  fairy: ['poison', 'steel'],
}

export function translatePokemonType(type: string): string {
  return pokemonTypes[type] ?? type
}

export function getTypeWeaknesses(type: string): string[] {
  return weaknessesByType[type] ?? []
}