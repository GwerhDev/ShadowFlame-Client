<style scoped lang="scss" src="./MemberManagement.scss"/>
<script setup lang="ts">
import { useStore } from '../../../../middlewares/store';
import { onMounted } from 'vue';
import TableComponent from '../../Tables/TableComponent.vue';
import MemberListCard from './MemberListCard.vue';
import router from '../../../routes';
import LoaderComponent from '../../../utils/LoaderComponent.vue';

const store: any = useStore();

onMounted(async () => {
  // TODO: Implement fetching members
  // await store.handleGetMembers();
});

function handleDashboardButton() {
  router.push('/dashboard');
};

const navItems = ['#', 'username', 'character', 'role', 'resonance', 'class', 'whatsapp'];

</script>

<template>
  <div class="ul-container">
    <ul>
      <button @click="handleDashboardButton">Volver</button>
    </ul>
    <ul v-if="store.admin.members">
      <TableComponent :navItems="navItems">
        <li v-for="member in store.admin.members" :key="member._id">
          <MemberListCard :member="member"></MemberListCard>
        </li>
      </TableComponent>
    </ul>
    <LoaderComponent v-else />
  </div>
</template>