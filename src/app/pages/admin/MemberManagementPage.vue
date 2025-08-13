<script setup lang="ts">
import MemberManagement from '../../components/admin/MemberManagement/MemberManagement.vue';

</script>

<template>
  <div class="container">
    <MemberManagement />
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
    margin-top: 3rem;
  }
}

</style>