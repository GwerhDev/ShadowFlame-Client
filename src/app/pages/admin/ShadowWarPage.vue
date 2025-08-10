<script setup lang="ts">
import ShadowWarComponent from '../../components/admin/ShadowWar/ShadowWarComponent.vue';
</script>

<template>
  <main class="main-container red-shadow-fx">
    <div class="div-container">
      <ShadowWarComponent />
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