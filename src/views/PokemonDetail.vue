<template>
  
  <Loading v-if="pokemonStore.loading" />

  <section
    v-else-if="pokemonStore.error"
    class="flex justify-center items-center h-screen"
  >
    <p>{{ pokemonStore.error }}</p>
  </section>

  <section
  v-else-if="pokemonStore.pokemon"
  class="flex justify-center px-0 pb-6 !mt-[-60px] !pt-[330px] relative md:items-center md:min-h-screen md:!pt-0"
>
<nav class="h-[60px] w-full fixed top-0 left-0 right-0 z-50" :class="theme.badge">
    <button @click="goBack" class="cursor-pointer">
      <ChevronLeft class="fixed top-4 left-4 z-50" />
      <span class="sr-only">Volver</span>
    </button>
  <button class="fixed top-4 right-4 z-50 cursor-pointer">
    <DetailFavIcon />
  </button>
</nav>
    <article class="max-w-md w-full">
      <div
  class="flex justify-center rounded-bl-full rounded-br-full p-4 mb-6 absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] z-[1] md:hidden"
  :class="theme.badge"
>
  <div class="relative z-10 w-[220px] h-[220px] mt-[60px]">
    <div
      v-if="!loadedPokemonImage"
      class="absolute inset-0 rounded-full bg-gray-300 animate-pulse"
    />

    <img
      :src="pokemonStore.pokemon.image"
      :alt="pokemonStore.pokemon.name"
      class="relative z-10 w-full h-full object-contain transition-opacity duration-200 mt-[50px]"
      :class="loadedPokemonImage ? 'opacity-100' : 'opacity-0'"
      @load="loadedPokemonImage = true"
    />
  </div>
</div>

      <div
  class="hidden md:flex justify-center items-center p-2 w-[180px] h-[180px] rounded-full mb-4"
  :class="theme.badge"
>
  <div class="relative z-10 w-[145px] h-[145px]">
    <div
      v-if="!loadedPokemonImage"
      class="absolute inset-0 rounded-full bg-gray-300 animate-pulse"
    />

    <img
      :src="pokemonStore.pokemon.image"
      :alt="pokemonStore.pokemon.name"
      class="relative z-10 w-full h-full object-contain transition-opacity duration-200"
      :class="loadedPokemonImage ? 'opacity-100' : 'opacity-0'"
      @load="loadedPokemonImage = true"
    />
  </div>
</div>

      <div>
        <h1 class="text-3xl font-bold text-[var(--primary-text)] capitalize">
          {{ pokemonStore.pokemon.name }}
        </h1>

        <span
          class="uppercase font-medium text-[1rem] text-[var(--text-[var(--secondary-text)])]"
        >
          Nº{{ pokemonStore.pokemon.id.toString().padStart(3, "0") }}
        </span>

        <ul class="flex gap-2 flex-wrap mt-4">
          <li
            v-for="type in pokemonStore.pokemon.types"
            :key="type"
            class="flex items-center gap-2 px-3 py-1 rounded-full text-xs text-white font-medium"
            :class="pokemonTheme[type as keyof typeof pokemonTheme].badge"
          >
            <img
              :src="pokemonTheme[type as keyof typeof pokemonTheme].icon"
              :alt="type"
              class="w-5 h-5"
            />

            <span>{{ translatePokemonType(type) }}</span>
          </li>
        </ul>

        <div v-if="pokemonStore.pokemon.description" class="mt-4">
          <p class="text-sm text-[var(--text-[var(--secondary-text)])]">
            {{ pokemonStore.pokemon.description }}
          </p>
        </div>

        <div class="mt-8 space-y-4 grid grid-cols-2 gap-4">
          <div class="flex flex-col items-start justify-start gap-2">
            <div class="flex justify-start items-center gap-2">
              <WeightIcon />
              <h3
                class="font-medium uppercase text-[var(--secondary-text)] text-[.75rem] tracking-[5%]"
              >
                Peso
              </h3>
            </div>
            <span
              class="font-medium text-[1.125rem] text-[var(--primary-text)] uppercase border-1 border-gray-300 px-6 py-2 rounded-lg w-full text-center"
              >{{ pokemonStore.pokemon.weight }} kg</span
            >
          </div>

          <div class="flex flex-col items-start justify-start gap-2">
            <div class="flex justify-start items-center gap-2">
              <HeightIcon />
              <h3
                class="font-medium uppercase text-[var(--secondary-text)] text-[.75rem] tracking-[5%]"
              >
                Altura
              </h3>
            </div>
            <span
              class="font-medium text-[1.125rem] text-[var(--primary-text)] uppercase border-1 border-gray-300 px-6 py-2 rounded-lg w-full text-center"
              >{{ pokemonStore.pokemon.height }} m</span
            >
          </div>

          <div class="flex flex-col items-start justify-start gap-2">
            <div class="flex justify-start items-center gap-2">
              <CategoryIcon />
              <h3
                class="font-medium uppercase text-[var(--secondary-text)] text-[.75rem] tracking-[5%]"
              >
                Categoría
              </h3>
            </div>
            <span
              class="font-medium text-[1.125rem] text-[var(--primary-text)] uppercase border-1 border-gray-300 px-6 py-2 rounded-lg w-full text-center"
              >{{ pokemonStore.pokemon.category.replace("Pokémon", "") }}</span
            >
          </div>

          <div class="flex flex-col items-start justify-start gap-2">
            <div class="flex justify-start items-center gap-2">
              <HabilityIcon />
              <h3
                class="font-medium uppercase text-[var(--secondary-text)] text-[.75rem] tracking-[5%]"
              >
                Habilidad
              </h3>
            </div>

            <ul class="w-full">
              <li
                class="font-medium text-[1.125rem] text-[var(--primary-text)] uppercase border-1 border-gray-300 px-6 py-2 rounded-lg text-center"
              >
                {{ pokemonStore.pokemon.abilities[0] }}
              </li>
            </ul>
          </div>
        </div>
        <div class="mt-4">
          <h3
            class="font-medium uppercase text-[var(--secondary-text)] text-[.75rem] text-center tracking-[5%]"
          >
            Género
          </h3>

          <div
            v-if="pokemonStore.pokemon.gender"
            class="flex flex-col justify-center items-center mt-2 mb-6"
          >
            <div
              class="flex justify-start items-center bg-gray-200 w-full mb-2 rounded-full"
            >
              <div
                class="bg-[var(--male-genre)] w-4 h-4 rounded-tl-lg rounded-bl-lg rounded-tr-none rounded-br-none"
                :style="{ width: pokemonStore.pokemon.gender.male + '%' }"
              ></div>

              <div
                class="bg-[var(--female-genre)] w-4 h-4 rounded-tr-lg rounded-br-lg rounded-tl-none rounded-bl-none"
                :style="{ width: pokemonStore.pokemon.gender.female + '%' }"
              ></div>
            </div>
            <div class="flex justify-between items-center w-full">
              <div class="flex justify-start items-center gap-2 text-[0.75rem] font-medium"><span><MaleIcon /></span><span> {{ pokemonStore.pokemon.gender.male }}%</span></div>
              <div class="flex justify-start items-center gap-2 text-[0.75rem] font-medium"><span><FemaleIcon /></span><span>{{ pokemonStore.pokemon.gender.female }}%</span></div>
            </div>
          </div>

          <p v-else>Sin género</p>
        </div>

        <div>
          <h3 class="font-medium text-[1.125rem] text-[var(--primary-text)]">
            Debilidades
          </h3>

          <ul class="flex gap-4 flex-wrap mt-2">
            <li
              v-for="weakness in pokemonStore.pokemon.weaknesses"
              :key="weakness"
              class="flex items-center gap-2 px-3 py-1 rounded-full text-xs text-white font-medium"
              :class="pokemonTheme[weakness as keyof typeof pokemonTheme].badge"            >
              <img
              :src="pokemonTheme[weakness as keyof typeof pokemonTheme].icon"                :alt="weakness"
                class="w-5 h-5"
              />

              <span>{{ translatePokemonType(weakness) }}</span>
            </li>
          </ul>
        </div>
      </div>
    </article>
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { usePokemonStore } from "@/stores/pokemon";
import { pokemonTheme } from "@/constants/pokemonTheme";
import { translatePokemonType } from "@/constants/pokemonTypes";
import WeightIcon from "@/components/icons/WeightIcon.vue";
import HeightIcon from "@/components/icons/HeightIcon.vue";
import CategoryIcon from "@/components/icons/CategoryIcon.vue";
import HabilityIcon from "@/components/icons/HabilityIcon.vue";
import Loading from "@/components/common/Loading.vue";
import ChevronLeft from "@/components/icons/ChevronLeft.vue";
import ChevronLeftLight from "@/components/icons/ChevronLeftLight.vue";
import DetailFavIcon from "@/components/icons/DetailFavIcon.vue";
import MaleIcon from "@/components/icons/MaleIcon.vue";
import FemaleIcon from "@/components/icons/FemaleIcon.vue";

const route = useRoute();
const pokemonStore = usePokemonStore();
const loadedPokemonImage = ref(false);
import { useRouter } from 'vue-router'

const router = useRouter()
const goBack = () => {
  router.back()
}

onMounted(async () => {
  loadedPokemonImage.value = false;

  await pokemonStore.fetchPokemonById(route.params.idOrName as string);
});

const primaryType = computed(() => {
  return pokemonStore.pokemon?.types[0] ?? "normal";
});

const theme = computed(() => {
  return pokemonTheme[primaryType.value as keyof typeof pokemonTheme];
});
</script>

