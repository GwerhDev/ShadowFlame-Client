<style scoped lang="scss" src="./NavMenuComponent.scss" />
<script setup lang="ts">
import { $d } from '../../functions';
import DashboardButton from './admin/DashboardButton.vue';

function handleClick() {
  $d('#nav-menu-mobile').style.display = 'none';
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

      <router-link class="router-li" to='/tasks' @click="handleClick">
        <li class="nav-button">Mis Tareas</li>
      </router-link>

      <router-link class="router-li" to='/guides' @click="handleClick">
        <li class="nav-button">El Guía</li>
      </router-link>

      <router-link class="router-li" to='/requirements' @click="handleClick">
        <li class="nav-button">Requisitos</li>
      </router-link>

      <router-link class="router-li" to='/gallery' @click="handleClick">
        <li class="nav-button">Galería</li>
      </router-link>

      <span class="dashboard-container" @click="handleClick">
        <DashboardButton />
      </span>
    </ul>
  </span>
</template>