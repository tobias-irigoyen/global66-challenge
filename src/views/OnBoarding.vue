<template>
  <section class="h-[calc(100vh-72px)] flex items-end justify-center md:items-center">
    <OnboardingStep
      v-if="currentStep === 1"
      v-model="currentStep"
      image="/src/assets/onboard/fisher.png"
      alt="pokemon fisher"
      title="Todos los Pokémon en un solo lugar"
      description="Accede a una amplia lista de Pokémon de todas las generaciones creadas por Nintendo"
      button-text="Continuar"
      @action="currentStep = 2"
    />

    <OnboardingStep
      v-else
      v-model="currentStep"
      image="/src/assets/onboard/woman-trainer.png"
      alt="woman pokemon trainer"
      title="Mantén tu Pokédex actualizada"
      description="Regístrate y guarda tu perfil, Pokémon favoritos, configuraciones y mucho más en la aplicación"
      button-text="Empecemos"
      @action="() => {}"
    />
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import OnboardingStep from '@/components/onboarding/OnboardingStep.vue' 

const currentStep = ref(1)
</script>