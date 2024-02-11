<script setup lang="ts">
import MyTasksManagement from '../../components/admin/MyTasksManagement/MyTasksManagement.vue';

</script>

<template>
  <div class="container">
    <MyTasksManagement />
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
