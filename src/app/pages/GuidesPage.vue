<script setup lang="ts">
import GuidesComponent from '../components/Guides/GuidesComponent.vue';

</script>

<template>
  <main class="main-container red-shadow-fx">
    <div class="div-container">
      <GuidesComponent />
    </div>
  </main>
</template>

<style scoped>
.div-container {
  padding: 0;
  display: flex;
  padding-left: 1rem;
  padding-right: 1rem;
}

@media (max-width: 1100px) {
  .div-container {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }
}
</style>
