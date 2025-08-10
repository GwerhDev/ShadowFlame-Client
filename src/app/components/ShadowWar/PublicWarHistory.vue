<script setup lang="ts">
import { ref, onMounted, Ref } from 'vue';
import { getShadowWars } from '../../../middlewares/services/shadowWarService';
import { ShadowWar } from '../../../interfaces/shadowWar';

const shadowWars: Ref<ShadowWar[]> = ref([]);

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

          <h4>Detalles de Batalla:</h4>
          <div v-if="war.battle">
            <div v-for="(category, categoryName) in war.battle" :key="categoryName">
              <h5>{{ categoryName.charAt(0).toUpperCase() + categoryName.slice(1) }}</h5>
              <div v-for="(match, matchIndex) in category" :key="matchIndex">
                <h6>Match {{ matchIndex + 1 }}</h6>
                <p>Grupo 1:
                  <span v-for="member in match.group1.member" :key="member._id">
                    {{ member.name }}
                  </span>
                </p>
                <p>Grupo 2:
                  <span v-for="member in match.group2.member" :key="member._id">
                    {{ member.name }}
                  </span>
                </p>
                <p>Resultado del Match: {{ match.result || 'N/A' }}</p>
              </div>
            </div>
          </div>

          <p v-if="war.confirmed && war.confirmed.length">
            Miembros Confirmados:
            <span v-for="member in war.confirmed" :key="member._id">
              {{ member.name }}
            </span>
          </p>
        </li>
      </ul>
    </div>
    <div v-else>
      <p>No hay historial de Guerras Sombrías.</p>
    </div>
  </div>
</template>
