<template>
  <section>
      <Messagge
        :image="'/src/assets/commons/jigglypuff.png'"
        :title="'¡Muy pronto disponible!'"
        :description="'Estamos trabajando para traerte esta sección. Vuelve más adelante para descubrir todas las novedades.'"
        :hasButton="false"
      />
  </section>
</template>

<script setup lang="ts">
import Messagge from '../components/common/Message.vue';
</script>