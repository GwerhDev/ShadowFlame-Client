<script setup lang="ts">
import AppLayout from '../layouts/AppLayout.vue';
import GuidesComponent from '../components/Guides/GuidesComponent.vue';
import AddCharacterModal from '../components/Settings/AddCharacterModal.vue';
import { ref } from 'vue';

const loading = ref(false);

const sidebarTabs = [
  { id: 'chatbot', name: 'Chatbot', icon: 'fas fa-robot', path: '/guides/chatbot' },
  { id: 'maps', name: 'Mapas', icon: 'fas fa-map-marked-alt', path: '/guides/maps' },
  { id: 'pages', name: 'Páginas', icon: 'fas fa-globe', path: '/guides/pages', disabled: true },
  { id: 'streamers', name: 'Streamers', icon: 'fas fa-tower-broadcast', path: '/guides/streamers', disabled: true },

];
</script>

<template>
  <main class="red-shadow-fx">
    <div class="div-container">
      <AppLayout :loading="loading" :sidebar-tabs="sidebarTabs">
        <GuidesComponent />
        <AddCharacterModal />
      </AppLayout>
    </div>
  </main>
</template>

<style scoped>
.div-container {
  padding: 1rem;
  padding-top: 7rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.info-text {
  display: flex;
  justify-content: center;
  padding-inline: 1rem;
}

.clan-name {
  font-size: 2rem;
}

@media (max-width: 1100px) {
  .div-container {
    padding: 0;
  }
}
</style>
