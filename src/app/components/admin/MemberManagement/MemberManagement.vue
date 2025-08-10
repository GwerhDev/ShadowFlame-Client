<style scoped lang="scss" src="./MemberManagement.scss"/>
<script setup lang="ts">
import { useStore } from '../../../../middlewares/store';
import { onMounted, ref } from 'vue';
import TableComponent from '../../Tables/TableComponent.vue';
import MemberListCard from './MemberListCard.vue';
import router from '../../../routes';
import LoaderComponent from '../../../utils/LoaderComponent.vue';
import AddMemberModal from './AddMemberModal.vue';

const store: any = useStore();
const showModal = ref(false);

onMounted(async () => {
  await store.handleGetMembers();
});

function handleDashboardButton() {
  router.push('/dashboard');
};

function handleAddMember() {
  showModal.value = true;
};

const navItems = ['#', 'nombre', 'personaje', 'resonancia', 'clase', 'whatsapp'];

</script>

<template>
  <div class="ul-container">
    <span class="button-list">
      <button @click="handleDashboardButton">Volver</button>
      <button @click="handleAddMember">Add Member</button>
    </span>
    <ul v-if="store.admin.members">
      <TableComponent :navItems="navItems">
        <li v-for="member in store.admin.members" :key="member._id">
          <MemberListCard :member="member"></MemberListCard>
        </li>
      </TableComponent>
    </ul>
    <LoaderComponent v-else />

    <AddMemberModal v-if="showModal" @close="showModal = false" />
  </div>
</template>