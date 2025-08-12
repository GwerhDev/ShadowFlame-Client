<script setup lang="ts">
import AppLayout from '../layouts/AppLayout.vue';
</script>

<template>
  <main class="red-shadow-fx">
    <div class="div-container">
      <AppLayout />
    </div>
  </main>
</template>

<style scoped>
.div-container {
  height: 100%;
  padding: 1rem;
  padding-top: 7rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

 @media (max-width: 1100px) {
  .div-container {
    padding: 0;
  }
}
</style>