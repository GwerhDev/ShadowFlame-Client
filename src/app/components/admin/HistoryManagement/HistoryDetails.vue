<template>
  <div>
    <h2>Detalles de la Guerra Sombría</h2>
    <div v-if="loading">
      Cargando...
    </div>
    <div v-else-if="error">
      <p>Error al cargar los detalles: {{ error }}</p>
    </div>
    <div v-else-if="shadowWarDetails">
      <small>
        <p>Fecha: {{ new Date(shadowWarDetails.date).toLocaleString() }}</p>
      </small>
      <p>Clan Enemigo: {{ shadowWarDetails.enemyClan?.name || 'N/A' }}</p>
      <p>Resultado: {{ shadowWarDetails.result }}</p>
      <div>
        Miembros confirmados: {{ confirmedMembersCount }}
        <i @click="openMembersModal" class="fas fa-eye icon-button"></i>
      </div>
    </div>
    <div v-else>
      <p>No se encontraron detalles para esta Guerra Sombría.</p>
    </div>

    <ConfirmedMembersModal
      v-if="showMembersModal"
      :members="shadowWarDetails?.confirmed || []"
      @close="closeMembersModal"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import { getShadowWarById } from '../../../../middlewares/services/shadowWarService';
import { ShadowWar } from '../../../../interfaces/shadowWar';
import ConfirmedMembersModal from './ConfirmedMembersModal.vue';

const route = useRoute();
const shadowWarDetails = ref<ShadowWar | null>(null);
const loading = ref(true);
const error = ref(null);
const showMembersModal = ref(false);

const confirmedMembersCount = computed(() => {
  return shadowWarDetails.value?.confirmed?.length || 0;
});

const openMembersModal = () => {
  showMembersModal.value = true;
};

const closeMembersModal = () => {
  showMembersModal.value = false;
};

onMounted(async () => {
  const shadowWarId = route.params.shadowwar_id as string;
  if (shadowWarId) {
    try {
      loading.value = true;
      const response = await getShadowWarById(shadowWarId);
      shadowWarDetails.value = response;
    } catch (err: any) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  }
});
</script>

<style scoped lang="scss" src="./HistoryDetails.scss"></style>