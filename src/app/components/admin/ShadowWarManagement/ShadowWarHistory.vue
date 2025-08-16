<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { ShadowWar } from '../../../../interfaces/shadowWar';
import { getShadowWars } from '../../../../middlewares/services/shadowWarService';

const shadowWars = ref<ShadowWar[]>([]);
const loading = ref(true);

onMounted(async () => {
  try {
    const response = await getShadowWars();
    shadowWars.value = response;
  } catch (error) {
    console.error('Error fetching shadow wars:', error);
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <div class="shadow-war-history">
    <h2>Historial de Guerras Sombrías</h2>
    <div v-if="loading" class="loading">
      Cargando historial...
    </div>
    <div v-else>
      <table class="history-table">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Clan Enemigo</th>
            <th>Resultado</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="war in shadowWars" :key="war._id">
            <td>{{ new Date(war.date).toLocaleString('es-ES') }}</td>
            <td>{{ war.enemyClan?.name }}</td>
            <td>{{ war.result }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.shadow-war-history {
  padding: 1rem;
}

.loading {
  text-align: center;
  padding: 2rem;
}

.history-table {
  width: 100%;
  border-collapse: collapse;
}

.history-table th,
.history-table td {
  border: 1px solid #444;
  padding: 0.5rem;
  text-align: left;
}

.history-table th {
  background-color: #222;
}
</style>
