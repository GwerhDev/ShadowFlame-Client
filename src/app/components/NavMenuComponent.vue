<style scoped lang="scss" src="./NavMenuComponent.scss"/>
<script setup lang="ts">
import { useStore } from '../../middlewares/store';

const store: any = useStore();

</script>

<template>
  <span class="nav-menu-container">
    <ul>
      <a href='https://diabloimmortal.blizzard.com/es-es/' target="_blank"><img src="../../assets/svg/diablo-icon.svg"
          alt=""></a>
      <router-link to='/'>
        <li class="nav-button">Inicio</li>
      </router-link>
      <router-link v-if="store.currentUser?.userData" to='/tasks'>
        <li class="nav-button">Mis Tareas</li>
      </router-link>
      <router-link v-if="store.currentUser?.userData" to='/calendar'>
        <li class="nav-button">Calendario</li>
      </router-link>
    <router-link v-if="store.currentUser?.userData" to='/guides'>
      <li class="nav-button">Guías</li>
    </router-link>
    <router-link to='/gallery'>
      <li class="nav-button">Galería</li>
    </router-link>
  </ul>

</span></template>