<template>
  <form
    @submit.prevent="handleSearch"
    class="searchbar flex items-center flex-wrap gap-4 !mb-4"
  >
    <div class="relative">
      <SearchLens class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" />

      <input
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
      <SearchIcon />
    </button>

    <button
      v-if="hasSearch"
      type="button"
      @click="clearSearch"
      class="text-red-500 pb-1 border-b-2 cursor-pointer hover:font-semibold"
    >
      X Limpiar búsqueda
    </button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SearchIcon from '@/components/icons/SearchLens.vue'

const search = ref('')
const hasSearch = ref(false)

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
</script>