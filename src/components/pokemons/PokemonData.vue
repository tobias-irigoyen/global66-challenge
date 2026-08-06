<template>
  <div class="flex flex-col items-start justify-start gap-2">
    <div class="flex justify-start items-center gap-2">
      <component :is="props.icon" />
      <h3
        class="font-medium uppercase text-[var(--secondary-text)] text-[.75rem] tracking-[5%]"
      >
        {{ props.label }}
      </h3>
    </div>
    <span
      class="font-medium text-[1.125rem] text-[var(--primary-text)] uppercase border-1 border-gray-300 px-6 py-2 rounded-lg w-full text-center"
      >{{ props.value }} {{ props.unit}}</span
    >
  </div>
</template>

<script setup lang="ts">
import type { Component } from "vue";

const props = defineProps<{
  icon: Component;
  label: string;
  value: string | number;
  unit: string;
}>();
</script>
