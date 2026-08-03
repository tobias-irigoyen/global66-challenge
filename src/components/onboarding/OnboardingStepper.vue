<template>
  <ol class="flex justify-center gap-4">
    <li v-for="step in 2" :key="step">
      <button @click="currentStep = step">
        <span
          class="block h-3 rounded-full transition-all"
          :class="currentStep === step
            ? 'w-[40px] bg-[var(--dark-blue)]'
            : 'w-3 bg-[var(--light-blue)] cursor-pointer'"
        />
      </button>
    </li>
  </ol>
</template>

<script setup lang="ts">
const currentStep = defineModel<number>()
</script>