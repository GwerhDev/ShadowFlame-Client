<style scoped lang="scss" src="./HistoryManagement.scss"/>
<script setup lang="ts">
import { useStore } from '../../../../middlewares/store';
import { onMounted, ref, watch } from 'vue';
import TableComponent from '../../Tables/TableComponent.vue';
import HistoryListCard from './HistoryListCard.vue';

const store: any = useStore();
const loading = ref(true);

onMounted(() => {
  // Data fetching is now handled by the watch effect
});

watch(() => store.currentUser.logged, async (isLoggedIn) => {
  if (isLoggedIn) {
    loading.value = true;
    if (!store.admin.shadowWars) {
      await store.handleGetShadowWars();
    }
    loading.value = false;
  } else {
    store.admin.shadowWars = null;
    loading.value = false;
  }
}, { immediate: true });


const navItems = ['Fecha', 'Enemigo', 'Resultado', 'Acciones'];

</script>

<template>
  <div class="ul-container">
    <ul v-if="!loading && store.admin.shadowWars">
      <TableComponent :navItems="navItems">
        <li v-for="war in store.admin.shadowWars" :key="war._id">
          <HistoryListCard :war="war"></HistoryListCard>
        </li>
      </TableComponent>
    </ul>
    <div v-else-if="loading" class="skeleton-table-container">
      <div class="skeleton-table-header">
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
      </div>
    </div>
    <p v-else>No hay historiales disponibles.</p>
  </div>
</template>