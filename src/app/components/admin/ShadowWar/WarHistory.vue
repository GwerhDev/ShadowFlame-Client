<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getShadowWars } from '../../../../middlewares/services/shadowWarService';

const shadowWars = ref([]);

onMounted(async () => {
  shadowWars.value = await getShadowWars();
});

</script>

<template>
  <div>
    <h2>Historial de Guerras Sombrías</h2>
    <div v-if="shadowWars.length">
      <ul>
        <li v-for="war in shadowWars" :key="war._id">
          <p>Fecha: {{ new Date(war.date).toLocaleString() }}</p>
          <p>Clan Enemigo: {{ war.enemyClan?.name || 'N/A' }}</p>
          <p>Resultado: {{ war.result }}</p>
          <!-- Display battle details and confirmed members if needed -->
        </li>
      </ul>
    </div>
    <div v-else>
      <p>No hay historial de Guerras Sombrías.</p>
    </div>
  </div>
</template>