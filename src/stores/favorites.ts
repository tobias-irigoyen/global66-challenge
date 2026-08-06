import { defineStore } from "pinia";
import { ref } from "vue";
import type { Pokemon } from "@/types/pokemon";

export const useFavoritesPokemonsStore = defineStore("favorites", () => {
    const favorites = ref<Pokemon[]>([]);
    
  const loadFavorites = () => {
    const storedFavorites = localStorage.getItem("pokemon-favorites");

    if (storedFavorites) {
      favorites.value = JSON.parse(storedFavorites);
    }
  };

const toggleFavorite = (pokemon: Pokemon) => {
  const exists = favorites.value.some(
    fav => fav.id === pokemon.id
  )

  if (exists) {
    favorites.value = favorites.value.filter(
      fav => fav.id !== pokemon.id
    )

    localStorage.setItem(
      'pokemon-favorites',
      JSON.stringify(favorites.value)
    )

    return false
  }

  favorites.value.push(pokemon)

  localStorage.setItem(
    'pokemon-favorites',
    JSON.stringify(favorites.value)
  )

  return true
}

  const isFavorite = (id: number) => {
    return favorites.value.some(
      (pokemon) => pokemon.id === id
    );
  };


  return {    
    favorites,
    loadFavorites,
    toggleFavorite,
    isFavorite
  };
});