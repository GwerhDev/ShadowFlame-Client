<style scoped lang="scss" src="./EnemyClanManagement.scss" />
<script setup lang="ts">
import { useStore } from '../../../../middlewares/store';
import { Ref, ref, watch } from 'vue';
import TableComponent from '../../Tables/TableComponent.vue';
import EnemyClanListCard from './EnemyClanListCard.vue';
import AddEnemyClanModal from './AddEnemyClanModal.vue';
import { getClans } from '../../../../middlewares/services';
import { Clan } from '../../../../interfaces/shadowWar';

const store: any = useStore();
const clans: Ref<Clan[]> = ref([]);
const showModal = ref(false);
const loading = ref(true);

watch(() => store.currentUser.logged, async (isLoggedIn) => {
  if (isLoggedIn) {
    loading.value = true;
    if (!store.admin.clans) {
      clans.value = await getClans();
    }
    loading.value = false;
  } else {
    store.admin.clans = null;
    loading.value = false;
  }
}, { immediate: true });

function handleAddClan() {
  showModal.value = true;
};

const navItems = ['nombre', 'status', 'members', 'acciones'];

</script>

<template>
  <div class="ul-container">
    <span class="button-list">
      <button @click="handleAddClan">Agregar clan</button>
    </span>
    <ul v-if="!loading && clans">
      <TableComponent :navItems="navItems">
        <li v-for="clan in clans" :key="clan._id">
          <EnemyClanListCard :clan="clan"></EnemyClanListCard>
        </li>
      </TableComponent>
    </ul>
    <div v-else-if="loading" class="skeleton-table-container">
      <div class="skeleton-table-header">
        <div class="skeleton-box skeleton-header-item"></div>
        <div class="skeleton-box skeleton-header-item"></div>
      </div>
      <div class="skeleton-table-row" v-for="n in 5" :key="n">
        <div class="skeleton-box skeleton-cell"></div>
        <div class="skeleton-box skeleton-cell"></div>
      </div>
    </div>
    <p v-else>No hay clanes disponibles.</p>

    <AddEnemyClanModal v-if="showModal" @close="showModal = false" />
  </div>
</template>
