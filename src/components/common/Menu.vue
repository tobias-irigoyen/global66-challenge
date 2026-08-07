<template>
    <aside class="fixed bottom-0 left-0 w-full rounded-xl border-gray-300 border-t-2 pt-4 py-2 px-[1rem] bg-white z-30">
        <ul class="flex justify-between items-center gap-4 md:justify-center md:gap-12">
            <li>
                <RouterLink to="/pokedex" class="menu-link min-w-[74px] md:min-w-[76px] flex flex-col justify-center items-center gap-2 cursor-pointer">
                    <HomeIcon />
                    Pokedex
                </RouterLink>
            </li>
            <li>
                <RouterLink to="/regiones" class="menu-link min-w-[74px] md:min-w-[76px] flex flex-col justify-center items-center gap-2 cursor-pointer">
                    <RegionsIcon />
                    Regiones
                </RouterLink>
            </li>
            <li>
                <RouterLink to="/favoritos" class="menu-link min-w-[74px] md:min-w-[76px] flex flex-col justify-center items-center gap-2 cursor-pointer">
                    <FavoritesIcon />
                    Favoritos
                </RouterLink>
            </li>
            <li>
                <RouterLink to="/perfil" class="menu-link min-w-[74px] md:min-w-[76px] flex flex-col justify-center items-center gap-2 cursor-pointer"
                >
                    <ProfileIcon />
                    Perfil
                </RouterLink>
            </li>
        </ul>
    </aside>
</template>

<script setup lang="ts">
import HomeIcon from '../icons/HomeIcon.vue';
import RegionsIcon from '../icons/RegionsIcon.vue';
import ProfileIcon from '../icons/ProfileIcon.vue';
import FavoritesIcon from '../icons/FavoritesIcon.vue';
</script>

