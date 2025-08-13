<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { useStore } from '../../../middlewares/store';
import AppLayout from '../../layouts/AppLayout.vue';
import ShadowWar from '../../components/admin/ShadowWar/ShadowWar.vue';
import DeniedAccess from '../../utils/DeniedAccess.vue';
import MemberManagement from '../../components/admin/MemberManagement/MemberManagement.vue';
import UserManagement from '../../components/admin/UserManagement/UserManagement.vue';

const store: any = useStore();
const nextWarDate = ref('');
const warTime = ref('');
const enemyClanName = ref('');
const loading = ref(true);

const sidebarTabs = [
  { id: 'shadow-war', name: 'Guerra Sombría', icon: 'fas fa-shield' },
  { id: 'members', name: 'Miembros', icon: 'fas fa-user-group' },
  { id: 'users', name: 'Usuarios', icon: 'fas fa-users' },
];

onMounted(async () => {
  store.setTab({ value: 'shadow-war', label: 'Guerra Sombría' });
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

watch(() => store.layout.tab, async (newTab) => {
  if (newTab.value) {
    loading.value = true;
    await store.handleGetNextShadowWar();
    loading.value = false;
  }
});
</script>

<template>
  <main class="red-shadow-fx" v-if="store.currentUser?.logged">
    <div class="div-container">
      <AppLayout :logged="store.currentUser.logged" :loading="loading" :sidebar-tabs="sidebarTabs"
        :active-layout-tab="store.layout.tab" title="Guerra Sombría">
        <section class="content-section"
          v-if="store.currentUser?.logged && (store.currentUser?.userData?.role === 'admin' || store.currentUser?.userData?.role === 'leader' || store.userData?.currentUser?.role === 'officer') && store.layout.tab.value === 'shadow-war'">
          <ShadowWar :nextWarDate="nextWarDate" :warTime="warTime" :enemyClanName="enemyClanName" />
        </section>
        <section class="content-section"
          v-if="store.currentUser?.logged && (store.currentUser?.userData?.role === 'admin' || store.currentUser?.userData?.role === 'leader' || store.userData?.currentUser?.role === 'officer') && store.layout.tab.value === 'members'">
          <MemberManagement />
        </section>
        <section class="content-section"
          v-if="store.currentUser?.logged && (store.currentUser?.userData?.role === 'admin' || store.currentUser?.userData?.role === 'leader') && store.layout.tab.value === 'users'">
          <UserManagement />
        </section>
      </AppLayout>
    </div>
  </main>
  <div class="div-container">
    <DeniedAccess />
  </div>
</template>

<style scoped>
.div-container {
  width: 100vw;
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
