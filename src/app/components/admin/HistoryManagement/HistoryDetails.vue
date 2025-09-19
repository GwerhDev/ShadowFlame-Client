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
      <p>ID: {{ shadowWarDetails._id }}</p>
      <p>Fecha: {{ new Date(shadowWarDetails.date).toLocaleString() }}</p>
      <p>Clan Enemigo: {{ shadowWarDetails.enemyClan?.name || 'N/A' }}</p>
      <!-- Add more details as needed -->
    </div>
    <div v-else>
      <p>No se encontraron detalles para esta Guerra Sombría.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { getShadowWarById } from '../../../../middlewares/services/shadowWarService';
import { ShadowWar } from '../../../../interfaces/shadowWar';

const route = useRoute();
const shadowWarDetails = ref<ShadowWar | null>(null);
const loading = ref(true);
const error = ref(null);

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

<style scoped>
/* Add your styles here */
</style>