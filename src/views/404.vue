<template>
  <section class="min-h-screen flex flex-col justify-center items-center text-center px-4">
    <img src="@/assets/commons/404.png" alt="404 página no encontrada" class="w-auto object-contain mb-4" />
    <h1 class="sr-only">404 Pagina no encontrada</h1>

    <h2 class="text-[1.75rem] font-semibold mb-4">
      Página no encontrada
    </h2>

    <p class="text-[var(--secondary-text) mb-10">
      La página que intentas visitar no existe.
    </p>

    <RouterLink
      to="/pokemons"
      class="font-semibold bg-[var(--primary-btn)] hover:bg-[var(--checked-btn)] cursor-pointer w-full text-white py-4 rounded-full max-w-[620px] transition-colors"
    >
      Volver al inicio
    </RouterLink>
  </section>
</template>