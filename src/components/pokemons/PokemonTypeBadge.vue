<template>
  <div
    class="flex items-center gap-2 px-2 py-1 rounded-full text-[11px] text-white font-medium"
    :class="props.badgeStyle"
  >
    <img :src="props.icon" :alt="props.name" class="w-5 h-5" />

    <span>{{ props.name }}</span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  badgeStyle: string;
  icon: string;
  name: string;
}>();
</script>
