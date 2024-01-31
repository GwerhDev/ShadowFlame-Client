<style scoped lang="scss" src="./NavMenuComponent.scss"/>
<script setup lang="ts">

</script>

<template>
  <ul>
    <router-link to='/home'><li class="nav-button">Inicio</li></router-link>
    <router-link to='/my-tasks'><li class="nav-button">Mis Tareas</li></router-link>
    <router-link to='/calendar'><li class="nav-button">Calendario</li></router-link>
    <router-link to='/gallery'><li class="nav-button">Galería</li></router-link>
    <router-link to='/guides'><li class="nav-button">Guías</li></router-link>
  </ul>
</template>