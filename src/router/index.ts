import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'onboarding',
      component: () => import('@/views/OnBoarding.vue'),
      meta: {
        showMenu: false
      }
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: () => import('@/views/Favorites.vue'),
      meta: {
        showMenu: true
      }
    },
    {
      path: '/regions',
      name: 'regions',
      component: () => import('@/views/Regions.vue'),
      meta: {
        showMenu: true
      }
    },
    {
      path: '/pokemons',
      name: 'pokemons',
      component: () => import('@/views/Pokemons.vue'),
      meta: {
        showMenu: true
      }
    },
    {
      path: '/pokemon/:id',
      name: 'pokemon-detail',
      component: () => import('@/views/PokemonDetail.vue'),
      props: true,
      meta: {
        showMenu: true
      }
    },
    {
      path: '/profile',
      name: 'proflie',
      component: () => import('@/views/Profile.vue'),
      meta: {
        showMenu: true
      }
    }
  ],
})

export default router