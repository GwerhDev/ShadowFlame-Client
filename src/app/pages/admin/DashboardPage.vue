<script setup lang="ts">
import DashboardComponent from '../../components/admin/DashboardComponent.vue';
</script>

<template>
  <div class="container">
    <DashboardComponent />
  </div>
</template>

<style scoped>
.container {
  width: 100vw;
  margin-top: 5rem;
  padding: 0;
}

@media (max-width: 1100px) {
  .container {
    margin-top: 2rem;
  }
}

</style>
