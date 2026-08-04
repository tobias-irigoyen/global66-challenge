<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'

import Menu from '@/components/common/Menu.vue'

const route = useRoute()
</script>

<template>
    <RouterView />
    <Menu v-if="route.meta.showMenu" />
</template>