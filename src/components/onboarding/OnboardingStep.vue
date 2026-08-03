<template>
  <article class="flex flex-col justify-end items-center">
    <img
      :src="image"
      :alt="title"
      class="mx-auto mb-8 h-[270px]"
    />

    <h1 class="text-[1.625rem] font-medium text-center mb-4">
      {{ title }}
    </h1>

    <p class="text-center text-sm mb-8 text-[var(--secondary-text)] md:max-w-[80%]">
      {{ description }}
    </p>

    <OnboardingStepper
      v-model="currentStep"
      class="mb-4"
    />

    <button
      class="font-semibold bg-[var(--primary-btn)] hover:bg-[var(--checked-btn)] cursor-pointer w-full text-white py-4 rounded-full max-w-[620px] transition-colors"
      @click="emit('action')"
    >
      {{ buttonText }}
    </button>
  </article>
</template>

<script setup lang="ts">
import OnboardingStepper from './OnboardingStepper.vue'

const currentStep = defineModel<number>()

defineProps<{
  image: string
  title: string
  description: string
  buttonText: string
}>()

const emit = defineEmits<{
  (e: 'action'): void
}>()
</script>