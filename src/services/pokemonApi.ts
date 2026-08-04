import { http } from "@/api/http";

export async function getPokemonList() {
  return http<{
    results: {
      name: string;
      url: string;
    }[];
  }>("/pokemon?limit=150");
}

export async function getPokemon(url: string) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Error ${response.status}: ${response.statusText}`);
  }

  return response.json();
}
