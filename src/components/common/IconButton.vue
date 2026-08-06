<template>
  <button class="p-2 cursor-pointer" @click="emit('click')">
    <component :is="icon" />
    <span class="sr-only">{{ hiddenLabel }}</span>
  </button>
</template>

<script setup lang="ts">
import type { Component } from "vue";

defineProps<{
  icon: Component;
  hiddenLabel: string;
}>();

const emit = defineEmits<{
  click: [];
}>();
</script>
