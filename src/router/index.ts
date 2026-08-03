import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'splash',
      component: () => import('@/views/Splash.vue'),
    },
    {
      path: '/onboarding-1',
      name: 'onboarding-1',
      component: () => import('@/views/OnBoardingOne.vue'),
    },
    {
      path: '/onboarding-2',
      name: 'onboarding-2',
      component: () => import('@/views/OnBoardingTwo.vue'),
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