import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "onboarding",
      component: () => import("@/views/OnBoarding.vue"),
      meta: {
        showMenu: false,
      },
    },
    {
      path: "/favoritos",
      name: "favoritos",
      component: () => import("@/views/Favorites.vue"),
      meta: {
        showMenu: true,
      },
    },
    {
      path: "/regiones",
      name: "regiones",
      component: () => import("@/views/Regions.vue"),
      meta: {
        showMenu: true,
      },
    },
    {
      path: "/pokedex",
      name: "pokedex",
      component: () => import("@/views/Pokedex.vue"),
      meta: {
        showMenu: true,
      },
    },
    {
      path: "/pokedex/:idOrName",
      name: "pokemon-detail",
      component: () => import("@/views/PokemonDetail.vue"),
      props: true,
      meta: {
        showMenu: true,
      },
    },
    {
      path: "/perfil",
      name: "perfil",
      component: () => import("@/views/Profile.vue"),
      meta: {
        showMenu: true,
      },
    },
    {
      path: "/:pathMatch(.*)*",
      name: "page-not-found",
      component: () => import("@/views/404.vue"),
      meta: {
        showMenu: false,
      },
    },
  ],
});

export default router;
