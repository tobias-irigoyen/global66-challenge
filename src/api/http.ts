const BASE_URL = 'https://pokeapi.co/api/v2'

export async function http<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${BASE_URL}${endpoint}`)

  if (!response.ok) {
    throw new Error(`Error ${response.status}`)
  }

  return response.json()
}