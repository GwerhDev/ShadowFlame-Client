<style scoped lang="scss" src="./UserManagement.scss"/>
<script setup lang="ts">
import { useStore } from '../../../../middlewares/store';
import { onMounted } from 'vue';
import TableComponent from '../../Tables/TableComponent.vue';
import UserListCard from './UserListCard.vue';
import router from '../../../routes';
import LoaderComponent from '../../../utils/LoaderComponent.vue';

const store: any = useStore();

onMounted(async () => {
  await store.handleGetUsers();
});

function handleDashboardButton() {
  router.push('/dashboard');
};

const navItems = ['#', 'username', 'rol', 'status', 'acciones'];

</script>

<template>
  <div class="ul-container">
    <ul>
      <button @click="handleDashboardButton">Volver</button>
    </ul>
    <ul v-if="store.admin.users">
      <TableComponent :navItems="navItems">
        <li v-for="user in store.admin.users" :key="user._id">
          <UserListCard :user="user"></UserListCard>
        </li>
      </TableComponent>
    </ul>
    <LoaderComponent v-else />
  </div>
</template>
