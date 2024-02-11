<style scoped lang="scss" src="./MyTasksManagement.scss"/>
<script setup lang="ts">
import { useStore } from '../../../../middlewares/store';
import { onMounted } from 'vue';
import router from '../../../routes';

const store: any = useStore();

onMounted(async () => {
  await store.handleGetUsers();
});

function handleDashboardButton() {
  router.push('/dashboard');
};

</script>

<template>
  <div class="ul-container">
    <ul>
      <button @click="handleDashboardButton">Dashboard</button>
    </ul>
    <ul v-if="store.users">
      <nav>
        <li>#</li>
        <li>actividad</li>
      </nav>
    </ul>
    <div v-else class="loader"></div>
  </div>
</template>
