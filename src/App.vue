<template>
    <Toaster richColors position="bottom-right" />
    <RouterView />
    <Menu v-if="route.meta.showMenu" />
</template>

<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import Menu from '@/components/common/Menu.vue'
import { Toaster } from 'vue-sonner'

const route = useRoute()
</script>
