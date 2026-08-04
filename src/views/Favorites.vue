<template>
  <section>
      <Messagge
        :image="'/src/assets/commons/magikarp.svg'"
        :title="'No has marcado ningún Pokémon como favorito'"
        :description="'Haz clic en el ícono de corazón de tus Pokémon favoritos y aparecerán aquí.'"
        :hasButton="false"
      />
  </section>
</template>

<script setup lang="ts">
import Messagge from '../components/common/Message.vue';
</script>