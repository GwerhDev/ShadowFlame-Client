<style scoped lang="scss" src="./NavMenuComponent.scss"/>
<script setup lang="ts">
import { $display } from '../../functions';
import { useStore } from '../../middlewares/store';
import DashboardButton from './admin/DashboardButton.vue';

const store: any = useStore();

function handleClick() {
  $display('#nav-menu-mobile')
};

</script>

<template>
  <span class="nav-menu-container">
    <ul>
      <a class="link-official" href='https://diabloimmortal.blizzard.com/es-es/' target="_blank">
        <img src="../../assets/svg/diablo-icon.svg" alt="">
      </a>
      <router-link class="router-li" to='/' @click="handleClick">
        <li class="nav-button">Inicio</li>
      </router-link>
      <router-link class="router-li" v-if="store.currentUser?.userData" to='/tasks' @click="handleClick">
        <li class="nav-button">Mis Tareas</li>
      </router-link>
      <router-link class="router-li" v-if="store.currentUser?.userData" to='/calendar' @click="handleClick">
        <li class="nav-button">Calendario</li>
      </router-link>
      <router-link class="router-li" v-if="store.currentUser?.userData" to='/guides' @click="handleClick">
        <li class="nav-button">Guías</li>
      </router-link>
      <router-link class="router-li" to='/gallery' @click="handleClick">
        <li class="nav-button">Galería</li>
      </router-link>
      <span class="dashboard-container">
        <DashboardButton />
      </span>
    </ul>
  </span>
</template>