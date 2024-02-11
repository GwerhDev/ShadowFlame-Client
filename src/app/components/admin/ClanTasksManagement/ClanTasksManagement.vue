<style scoped lang="scss" src="./ClanTasksManagement.scss"/>
<script setup lang="ts">
import { useStore } from '../../../../middlewares/store';
import { onMounted } from 'vue';
import router from '../../../routes';
import LoaderComponent from '../../../utils/LoaderComponent.vue';

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
      <button @click="handleDashboardButton">Volver</button>
    </ul>
    <ul v-if="store.admin.clantasks">
      <nav>
        <li>#</li>
        <li>actividad</li>
      </nav>
    </ul>
    <LoaderComponent v-else />
  </div>
</template>
