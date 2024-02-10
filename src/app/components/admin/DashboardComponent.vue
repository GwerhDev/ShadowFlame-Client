<style scoped lang="scss" src="./DashboardComponent.scss"/>
<script setup lang="ts">
import { useStore } from '../../../middlewares/store';
import { onMounted } from 'vue';
import UserListCard from './UserListCard.vue';

const store: any = useStore();

onMounted(async () => {
  await store.handleGetUsers();
});

</script>

<template>
  <div class="ul-container">
    <ul v-if="store.users">
      <nav>
        <li>#</li>
        <li>username</li>
        <li>role</li>
        <li>status</li>
        <li>actions</li>
      </nav>
      <li v-for="user in store.users" :key="user._id">
        <UserListCard :user="user"></UserListCard>
      </li>
    </ul>
    <div v-else class="loader"></div>
  </div>
</template>
