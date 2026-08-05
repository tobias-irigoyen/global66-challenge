<template>
  <div>
    <div>
      <button
        @click="openFilters"
        class="filters-button filters-icon mb-4 flex justify-center items-center border-2 border-gray-200 h-[45px] w-[45px] rounded-full cursor-pointer transition-colors hover:bg-[var(--primary-btn)]"
      >
        <FiltersIcon />
        <span class="sr-only">Filtros</span>
      </button>
    </div>

    <div
      v-if="showFilters"
      class="filters-panel absolute top-[50px] left-0 bg-white z-50 w-100 py-4 px-6 border border-gray-300 rounded-xl"
    >
      <button class="cursor-pointer" @click="cancel">
        <CloseIcon />
      </button>

      <h3 class="font-semibold text-[21px] text-center mb-8">
        Filtra por tus preferencias
      </h3>

      <div class="flex justify-between items-center py-2">
        <h4
          class="font-semibold text-[1rem]"
          style="font-family: var(--montserrat)"
        >
          Tipo
        </h4>

        <ChevronUp />
      </div>

      <form @submit.prevent class="min-h-[400px]">
        <div class="border-b-2 border-t-2 border-gray-300 mb-6 py-2 pb-4 max-h-[250px] overflow-y-auto">
          <div
            v-for="type in pokemonTypes"
            :key="type"
            class="flex justify-between items-center py-2"
          >
            <label
              :for="type"
              class="w-100"
              style="font-family: var(--montserrat)"
            >
              {{ translatePokemonType(type) }}
            </label>

            <input
              :id="type"
              :name="type"
              :value="type"
              v-model="draftSelectedTypes"
              type="checkbox"
              class="mr-[5px]"
            />
          </div>
        </div>

        <div class="flex flex-col gap-4 absolute bottom-0 left-0 right-0 mx-auto w-100 p-4">
          <button
            type="button"
            @click="applyFilters"
            class="font-semibold bg-[var(--primary-btn)] hover:bg-[var(--checked-btn)] cursor-pointer text-white py-4 rounded-full transition-colors"
          >
            Aplicar
          </button>

          <button
            type="button"
            @click="cancel"
            class="font-semibold py-2 rounded-full cursor-pointer transition-colors hover:underline"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

import FiltersIcon from "@/components/icons/FiltersIcon.vue";
import ChevronUp from "@/components/icons/ChevronUp.vue";
import CloseIcon from "@/components/icons/CloseIcon.vue";

import { pokemonTheme } from "@/constants/pokemonTheme";
import { translatePokemonType } from "@/constants/pokemonTypes";

const pokemonTypes = Object.keys(
  pokemonTheme
) as (keyof typeof pokemonTheme)[];

const selectedTypes = defineModel<string[]>();
const showFilters = ref(false);
const draftSelectedTypes = ref<string[]>([]);

watch(
  selectedTypes,
  (value) => {
    draftSelectedTypes.value = [...(value ?? [])];  },
  { immediate: true }
);

const openFilters = () => {
  draftSelectedTypes.value = [...(selectedTypes.value ?? [])];
    showFilters.value = true;
};

const applyFilters = () => {
  selectedTypes.value = [...draftSelectedTypes.value];
  showFilters.value = false;
};

const cancel = () => {
  draftSelectedTypes.value = [...(selectedTypes.value ?? [])];
  showFilters.value = false;
};
</script>