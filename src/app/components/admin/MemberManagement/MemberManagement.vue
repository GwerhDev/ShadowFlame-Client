<style scoped lang="scss" src="./MemberManagement.scss"/>
<script setup lang="ts">
import { useStore } from '../../../../middlewares/store';
import { onMounted, ref, watch } from 'vue';
import TableComponent from '../../Tables/TableComponent.vue';
import MemberListCard from './MemberListCard.vue';
import router from '../../../routes';
import LoaderComponent from '../../../utils/LoaderComponent.vue';
import AddMemberModal from './AddMemberModal.vue';

const store: any = useStore();
const showModal = ref(false);
const loading = ref(true); // New ref for loading state

onMounted(() => {
  // Data fetching is now handled by the watch effect
});

watch(() => store.currentUser.logged, async (isLoggedIn) => {
  if (isLoggedIn && !store.admin.members) { // Only fetch if logged in and members data is not already present
    loading.value = true; // Set loading to true before fetching
    await store.handleGetMembers();
    loading.value = false; // Set loading to false after data is processed
  } else if (!isLoggedIn) {
    // Optionally reset data or handle logout state
    store.admin.members = null; // Clear members data on logout
    loading.value = false;
  }
}, { immediate: true }); // immediate: true to run the watcher immediately on component setup

function handleDashboardButton() {
  router.push('/dashboard');
};

function handleAddMember() {
  showModal.value = true;
};

const navItems = ['#', 'battletag', 'personaje', 'resonancia', 'clase', 'whatsapp', 'acciones'];

</script>

<template>
  <div class="ul-container">
    <span class="button-list">
      <button @click="handleDashboardButton">Volver</button>
      <button @click="handleAddMember">Agregar miembro</button>
    </span>
    <ul v-if="!loading && store.admin.members">
      <TableComponent :navItems="navItems">
        <li v-for="member in store.admin.members" :key="member._id">
          <MemberListCard :member="member"></MemberListCard>
        </li>
      </TableComponent>
    </ul>
    <div v-else-if="loading" class="skeleton-table-container">
      <div class="skeleton-table-header">
        <div class="skeleton-box skeleton-header-item"></div>
        <div class="skeleton-box skeleton-header-item"></div>
        <div class="skeleton-box skeleton-header-item"></div>
        <div class="skeleton-box skeleton-header-item"></div>
        <div class="skeleton-box skeleton-header-item"></div>
        <div class="skeleton-box skeleton-header-item"></div>
        <div class="skeleton-box skeleton-header-item"></div>
      </div>
      <div class="skeleton-table-row" v-for="n in 5" :key="n">
        <div class="skeleton-box skeleton-cell"></div>
        <div class="skeleton-box skeleton-cell"></div>
        <div class="skeleton-box skeleton-cell"></div>
        <div class="skeleton-box skeleton-cell"></div>
        <div class="skeleton-box skeleton-cell"></div>
        <div class="skeleton-box skeleton-cell"></div>
        <div class="skeleton-box skeleton-cell"></div>
      </div>
    </div>
    <p v-else>No hay miembros disponibles.</p>

    <AddMemberModal v-if="showModal" @close="showModal = false" />
  </div>
</template>