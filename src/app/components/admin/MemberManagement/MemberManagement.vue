<style scoped lang="scss" src="./MemberManagement.scss"/>
<script setup lang="ts">
import { useStore } from '../../../../middlewares/store';
import { onMounted, ref } from 'vue';
import TableComponent from '../../Tables/TableComponent.vue';
import MemberListCard from './MemberListCard.vue';
import router from '../../../routes';
import LoaderComponent from '../../../utils/LoaderComponent.vue';

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

const navItems = ['#', 'username', 'character', 'role', 'resonance', 'class', 'whatsapp'];

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

    <div v-if="showModal" class="modal-overlay">
      <div class="modal-content">
        <h2>Add New Member</h2>
        <p>Form goes here...</p>
        <button @click="showModal = false">Close</button>
      </div>
    </div>
  </div>
</template>