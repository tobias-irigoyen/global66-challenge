const BASE_URL = 'https://pokeapi.co/api/v2'

export const getPokemonList = async () => {
  const response = await fetch(`${BASE_URL}/pokemon?limit=150`)

  if (!response.ok) {
    throw new Error('Error al obtener la lista de Pokémon')
  }

  return response.json()
}

export const getPokemon = async (urlOrId: string | number) => {
  const endpoint =
    typeof urlOrId === 'string'
      ? urlOrId
      : `${BASE_URL}/pokemon/${urlOrId}`

  const response = await fetch(endpoint)

  if (!response.ok) {
    throw new Error('Error al obtener el Pokémon')
  }

  return response.json()
}

export const getPokemonSpecies = async (id: number | string) => {
  const response = await fetch(`${BASE_URL}/pokemon-species/${id}`)

  if (!response.ok) {
    throw new Error('Error al obtener la especie del Pokémon')
  }

  return response.json()
}

export const getType = async (type: string) => {
  const response = await fetch(`${BASE_URL}/type/${type}`)

  if (!response.ok) {
    throw new Error('Error al obtener el tipo')
  }

  return response.json()
}


export const getAbility = async (ability: string) => {
  const response = await fetch(`${BASE_URL}/ability/${ability}`)

  if (!response.ok) {
    throw new Error('Error al obtener la habilidad')
  }

  return response.json()
}