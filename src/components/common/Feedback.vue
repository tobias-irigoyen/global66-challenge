<template>
  <article class="flex flex-col justify-center items-center h-[calc(100vh-225px)] mx-auto">

  <div class="mb-8 h-[215px] w-[270px]">
    <div
      v-if="!loadedImage"
      class="w-full h-full animate-pulse bg-gray-300 rounded-xl"
    />
    
    <img 
      :src="image"
      :alt="title"
      @load="loadedImage = true"
      class="mx-auto mb-8"
      :class="['w-full h-full object-contain transition-opacity duration-300', loadedImage ? 'opacity-100' : 'opacity-0'
      ]"
    />
  </div>

    <h1 class="text-[1.625rem] font-medium text-center mb-4">
      {{ title }}
    </h1>

    <p class="text-center text-sm mb-8 text-[var(--secondary-text)] md:max-w-[80%]">
      {{ description }}
    </p>

    <button
      v-if="hasButton"
      class="font-semibold bg-[var(--primary-btn)] hover:bg-[var(--checked-btn)] cursor-pointer w-full text-white py-4 rounded-full max-w-[620px] transition-colors"
      @click="emit('action')"
    >
      {{ buttonText }}
    </button>
  </article>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const loadedImage = ref(false)

defineProps<{
  image: string
  title: string
  description: string
  hasButton: boolean
  buttonText?: string
}>()

const emit = defineEmits<{
  (e: 'action'): void
}>()
</script>