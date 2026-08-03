import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'onboarding',
      component: () => import('@/views/OnBoarding.vue'),
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: () => import('@/views/Favorites.vue'),
    },
    {
      path: '/regions',
      name: 'regions',
      component: () => import('@/views/Regions.vue'),
    },
    {
      path: '/pokemons',
      name: 'pokemons',
      component: () => import('@/views/Pokemons.vue'),
    },
    {
      path: '/pokemon/:id',
      name: 'pokemon-detail',
      component: () => import('@/views/PokemonDetail.vue'),
      props: true,
    },
  ],
})

export default router