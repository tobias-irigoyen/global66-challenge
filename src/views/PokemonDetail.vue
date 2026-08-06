<template>
  <Loading v-if="pokemonStore.loading" />

  <Feedback
    v-else-if="pokemonStore.error"
    :image="'/src/assets/commons/magikarp.svg'"
    :title="'Algo salió mal...'"
    :description="pokemonStore.error"
    :hasButton="true"
    :buttonText="'Reintentar'"
    @action="() => router.push('/pokemons')"
  />

  <section
    v-else-if="pokemonStore.pokemon"
    class="flex justify-center px-0 pb-6 !mt-[-60px] !pt-[330px] relative md:items-center md:min-h-screen md:!pt-0"
  >
    <nav
      class="h-[60px] w-full fixed top-0 left-0 right-0 z-50"
      :class="theme.badge"
    >
      <ul class="flex justify-between items-center px-4 m-0 h-full">
        <li>
          <RouterLink to="/pokemons">
            <ChevronLeft />
            <span class="sr-only">Volver</span>
          </RouterLink>
        </li>
        <li>
          <ul class="flex justify-end items-center gap-4">
            <li><FavButton :pokemon="pokemonStore.pokemon" /></li>
            <li>
              <IconButton
                :icon="ShareIcon"
                :hidden-label="'Compartir'"
                @click="copyPokemonInfo()"
              />
            </li>
          </ul>
        </li>
      </ul>
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
          <PokemonData
            :icon="WeightIcon"
            :label="'Peso'"
            :value="pokemonStore.pokemon.weight"
            :unit="'kg'"
          />
          <PokemonData
            :icon="HeightIcon"
            :label="'Altura'"
            :value="pokemonStore.pokemon.height"
            :unit="'m'"
          />
          <PokemonData
            :icon="CategoryIcon"
            :label="'Categoría'"
            :value="pokemonStore.pokemon.category.replace('Pokémon', '')"
            :unit="''"
          />
          <PokemonData
            :icon="HabilityIcon"
            :label="'Habilidad'"
            :value="pokemonStore.pokemon.abilities[0]"
            :unit="''"
          />
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
              <div
                class="flex justify-start items-center gap-2 text-[0.75rem] font-medium"
              >
                <span><MaleIcon /></span
                ><span> {{ pokemonStore.pokemon.gender.male }}%</span>
              </div>
              <div
                class="flex justify-start items-center gap-2 text-[0.75rem] font-medium"
              >
                <span><FemaleIcon /></span
                ><span>{{ pokemonStore.pokemon.gender.female }}%</span>
              </div>
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
            >
              <PokemonTypeBadge
                :badgeStyle="
                  pokemonTheme[weakness as keyof typeof pokemonTheme].badge
                "
                :icon="pokemonTheme[weakness as keyof typeof pokemonTheme].icon"
                :name="translatePokemonType(weakness)"
              />
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
import PokemonData from "@/components/pokemons/PokemonData.vue";
import PokemonTypeBadge from "@/components/pokemons/PokemonTypeBadge.vue";
import Feedback from "@/components/common/Feedback.vue";
import FavButton from "@/components/common/FavButton.vue";
import IconButton from "@/components/common/IconButton.vue";
import ShareIcon from "@/components/icons/ShareIcon.vue";
import WeightIcon from "@/components/icons/WeightIcon.vue";
import HeightIcon from "@/components/icons/HeightIcon.vue";
import CategoryIcon from "@/components/icons/CategoryIcon.vue";
import HabilityIcon from "@/components/icons/HabilityIcon.vue";
import Loading from "@/components/common/Loading.vue";
import ChevronLeft from "@/components/icons/ChevronLeft.vue";
import MaleIcon from "@/components/icons/MaleIcon.vue";
import FemaleIcon from "@/components/icons/FemaleIcon.vue";

const route = useRoute();
const pokemonStore = usePokemonStore();
const loadedPokemonImage = ref(false);
import { useRouter } from "vue-router";

const router = useRouter();

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

const capitalize = (pokemonInfo: string) =>
  pokemonInfo.charAt(0).toUpperCase() + pokemonInfo.slice(1);

const copyPokemonInfo = async () => {
  if (!pokemonStore.pokemon) return;

  const pokemon = pokemonStore.pokemon;

  const pokemonInfo = [
    `Nombre: ${capitalize(pokemon.name)}`,
    `Tipos: ${pokemon.types
      .map((type: string) => capitalize(translatePokemonType(type)))
      .join(", ")}`,
    `Peso: ${pokemon.weight} kg`,
    `Altura: ${pokemon.height} m`,
    `Categoría: ${capitalize(pokemon.category.replace("Pokémon", "").trim())}`,
    `Habilidad: ${capitalize(pokemon.abilities[0])}`,
    `Género masculino: ${
      pokemon.gender ? `${pokemon.gender.male}%` : "Sin género"
    }`,
    `Género femenino: ${
      pokemon.gender ? `${pokemon.gender.female}%` : "Sin género"
    }`,
    `Debilidades: ${pokemon.weaknesses
      .map((type: string) => capitalize(translatePokemonType(type)))
      .join(", ")}`,
  ].join(", ");

  try {
    await navigator.clipboard.writeText(pokemonInfo);
  } catch (error) {
    console.error("No se pudo copiar al portapapeles", error);
  }
};
</script>
