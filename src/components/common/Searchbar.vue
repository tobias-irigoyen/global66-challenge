<template>
  <form
    @submit.prevent="handleSearch"
    class="searchbar flex items-center gap-4 !mb-4"
  >
    <div class="relative">
      <SearchIcon class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" />
      <label class="sr-only" for="searchbar-input">Buscar:</label>
      <input
        id="searchbar-input"
        name="searchbar-input"
        v-model="search"
        class="rounded-full border-2 border-gray-200 px-4 py-2 pl-11"
        type="text"
        placeholder="Buscar Pokemon..."
      />
    </div>

    <button
      type="submit"
      class="search-btn flex justify-center items-center border-2 border-gray-200 h-[45px] w-[45px] rounded-full cursor-pointer transition-colors hover:bg-[var(--primary-btn)]"
    >
      <span class="sr-only">Buscar</span>
      <SearchIcon />
    </button>

    <button
      v-if="hasSearch && searchedData.length > 0"
      type="button"
      @click="clearSearch"
      class="text-red-500 pb-1 border-b-2 cursor-pointer"
    >
      X Limpiar búsqueda
    </button>
  </form>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import SearchIcon from '@/components/icons/SearchLens.vue'
import type { Pokemon } from '@/types/pokemon'

const props = defineProps<{
  searchedData: Pokemon[];
}>();

const search = defineModel<string>({ required: true });
const hasSearch = ref(false);

const emit = defineEmits<{
  search: [value: string]
  clear: []
}>()

const handleSearch = () => {
  const query = search.value.trim()

  if (!query) return

  hasSearch.value = true
  emit('search', query)
}

const clearSearch = () => {
  search.value = ''
  hasSearch.value = false

  emit('clear')
}

watch(search, (value) => {
  if (!value) {
    hasSearch.value = false;
  }
});
</script>



<style>
@media all and (max-width: 360px) {
  .search-button {
    width: 45px;
    height: 45px;
  }
}
@media all and (max-width: 350px) {
  .searchbar {
    flex-wrap: wrap;
  }
  .pokemon-filters {
    margin-left: unset;
  }
}
</style>