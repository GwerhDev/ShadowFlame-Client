<script setup lang="ts">
import ToDoComponent from '../components/Tasks/ToDoComponent.vue';
</script>

<template>
  <main class="main-container red-shadow-fx">
    <div class="div-container">
      <ToDoComponent />
    </div>
  </main>
</template>

<style scoped>
.div-container {
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 1100px) {
  .div-container {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }
}
</style>

