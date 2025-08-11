<script setup lang="ts">
import PublicShadowWarComponent from '../components/ShadowWar/PublicShadowWarComponent.vue';
</script>

<template>
  <main class="main-container red-shadow-fx">
    <div class="div-container">
      <PublicShadowWarComponent />
    </div>
  </main>
</template>

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