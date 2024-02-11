<script setup lang="ts">
import ClanTasksManagement from '../../components/admin/ClanTasksManagement/ClanTasksManagement.vue';

</script>

<template>
  <div class="container">
    <ClanTasksManagement />
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
