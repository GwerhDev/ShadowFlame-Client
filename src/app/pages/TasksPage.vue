<script setup lang="ts">
import ToDoComponent from '../components/todo/ToDoComponent.vue';
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
  padding-left: 1.3rem;
  padding-right: 1.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

