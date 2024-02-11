<style scoped lang="scss" src="./UserManagement.scss"/>
<script setup lang="ts">
import { useStore } from '../../../../middlewares/store';
import { onMounted } from 'vue';
import UserListCard from './UserListCard.vue';
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
        <li>username</li>
        <li>rol</li>
        <li>status</li>
        <li>acciones</li>
      </nav>
      <li v-for="user in store.users" :key="user._id">
        <UserListCard :user="user"></UserListCard>
      </li>
    </ul>
    <div v-else class="loader"></div>
  </div>
</template>
