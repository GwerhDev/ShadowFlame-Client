<template>
  <main class="main-container red-shadow-fx">
    <div class="div-container">
      <PublicNextBattle />
    </div>
  </main></template>

<script setup lang="ts">
import PublicNextBattle from '../components/ShadowWar/PublicNextBattle.vue';
</script>

<style scoped>
.div-container {
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
}

@media (max-width: 1100px) {
  .div-container {
    padding-top: 2rem;
  }
}
</style>