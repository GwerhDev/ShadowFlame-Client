<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { useStore } from '../../middlewares/store';
import AppLayout from '../layouts/AppLayout.vue';
import PublicShadowWar from '../components/ShadowWar/PublicShadowWar.vue';

const store: any = useStore();
const nextWarDate = ref('');
const warTime = ref('');
const enemyClanName = ref('');
const loading = ref(true);

const sidebarTabs = [
  { id: 'exalted', name: 'Sublime', icon: 'fas fa-crown' },
  { id: 'eminent', name: 'Eminente', icon: 'fas fa-trophy' },
  { id: 'famed', name: 'Célebre', icon: 'fas fa-medal' },
  { id: 'proud', name: 'Imponente', icon: 'fas fa-fist-raised' },
];

onMounted(async () => {
  await store.handleGetNextShadowWar();
  if (store.currentUser.shadowWarData && store.currentUser.shadowWarData.date) {
    const warDate = new Date(store.currentUser.shadowWarData.date);
    nextWarDate.value = warDate.toLocaleString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    warTime.value = warDate.toLocaleString('es-ES', { hour: '2-digit', minute: '2-digit' });

    if (store.currentUser.shadowWarData.enemyClan) {
      enemyClanName.value = store.currentUser.shadowWarData.enemyClan.name;
    } else {
      enemyClanName.value = 'aun no está definido';
    }
    loading.value = false;
  } else {
    loading.value = false;
  }
});

watch(() => store.currentUser.shadowWarData, (newVal) => {
  if (newVal && newVal.date) {
    const warDate = new Date(newVal.date);
    nextWarDate.value = warDate.toLocaleString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    warTime.value = warDate.toLocaleString('es-ES', { hour: '2-digit', minute: '2-digit' });

    if (newVal.enemyClan) {
      enemyClanName.value = newVal.enemyClan.name;
    } else {
      enemyClanName.value = 'aun no está definido';
    }
  } else {
    nextWarDate.value = '';
    warTime.value = '';
    enemyClanName.value = '';
  }
}, { immediate: true });
</script>

<template>
  <main class="red-shadow-fx">
    <div class="div-container">
      <AppLayout
        :loading="loading"
        :sidebar-tabs="sidebarTabs"
        :active-layout-tab="store.currentUser.layoutTab"
        title="Guerra Sombría"
      >
        <p>La próxima <b>Guerra Sombría</b> es el <i>{{ nextWarDate }} a las {{ warTime }}h (hora del servidor)</i>.
          Enfrentaremos al Clan:
        <h4>{{ enemyClanName }}</h4>
        </p>
        <PublicShadowWar :active-tab="store.currentUser.layoutTab" />
      </AppLayout>
    </div>
  </main>
</template>

<style scoped>
.div-container {
  height: 100%;
  padding: 1rem;
  padding-top: 7rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

 @media (max-width: 1100px) {
  .div-container {
    padding: 0;
  }
}
</style>
