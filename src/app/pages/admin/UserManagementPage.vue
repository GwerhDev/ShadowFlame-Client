<script setup lang="ts">
import UserManagement from '../../components/admin/UserManagement/UserManagement.vue';

</script>

<template>
  <div class="container">
    <UserManagement />
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
