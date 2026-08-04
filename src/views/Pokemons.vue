<template>
  <section class="h-[calc(100vh-225px)] flex items-end justify-center md:items-center">
<Error 
      image="/src/assets/commons/magikarp.svg"
      title="Algo salió mal..."
      description="No pudimos cargar la información en este momento. Verifica tu conexión o intenta nuevamente más tarde."
      buttonText="Reintentar"
      @action="() => {}"
    />
</section>
</template>

<script setup lang="ts">
import Error from '../components/common/Error.vue'
</script>