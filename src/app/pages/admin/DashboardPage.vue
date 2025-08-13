<script setup lang="ts">
import DashboardComponent from '../../components/admin/DashboardComponent.vue';
</script>

<template>
  <main class="red-shadow-fx">
    <div class="div-container">
      <DashboardComponent />
    </div>
  </main>
</template>

<style scoped>
.div-container {
  width: 100%;
  padding-top: 7rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.info-text {
  display: flex;
  justify-content: center;
  padding-inline: 1rem;
}

</style>
