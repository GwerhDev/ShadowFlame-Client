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

    <div v-if="shadowWarDetails?.battle">
      <h3>Batallas</h3>
      <div v-for="(matches, battleType) in shadowWarDetails?.battle" :key="battleType">
        <h4>{{ battleType.charAt(0).toUpperCase() + battleType.slice(1) }}</h4>
        <p>Miembros participantes: {{matches.reduce((acc, match) => acc + match.group1.member.filter(m => m).length +
          match.group2.member.filter(m => m).length, 0)}}
          <i @click="openBattleDetailsModal(battleType, matches)" class="fas fa-eye icon-button"></i>
        </p>
      </div>
    </div>
  </div>
  <div v-if="!shadowWarDetails?.battle">
    <p>No se encontraron detalles para esta Guerra Sombría.</p>
  </div>

  <ConfirmedMembersModal v-if="showMembersModal" :members="shadowWarDetails?.confirmed || []"
    @close="closeMembersModal" />

  <BattleDetailsModal v-if="showBattleDetailsModal" :battleType="selectedBattleType" :matches="selectedBattleMatches"
    @close="closeBattleDetailsModal" />

</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import { getShadowWarById } from '../../../../middlewares/services/shadowWarService';
import { ShadowWar, Match } from '../../../../interfaces/shadowWar';
import ConfirmedMembersModal from './ConfirmedMembersModal.vue';
import BattleDetailsModal from './BattleDetailsModal.vue';

const route = useRoute();
const shadowWarDetails = ref<ShadowWar | null>(null);
const loading = ref(true);
const error = ref(null);
const showMembersModal = ref(false);
const showBattleDetailsModal = ref(false);
const selectedBattleType = ref('');
const selectedBattleMatches = ref<Match[]>([]);

const confirmedMembersCount = computed(() => {
  return shadowWarDetails.value?.confirmed?.length || 0;
});

const openMembersModal = () => {
  showMembersModal.value = true;
};

const closeMembersModal = () => {
  showMembersModal.value = false;
};

const openBattleDetailsModal = (battleType: string, matches: Match[]) => {
  selectedBattleType.value = battleType;
  selectedBattleMatches.value = matches;
  showBattleDetailsModal.value = true;
};

const closeBattleDetailsModal = () => {
  showBattleDetailsModal.value = false;
};

onMounted(async () => {
  const shadowWarId = route.params.shadowwar_id as string;
  if (shadowWarId) {
    try {
      loading.value = true;
      const response = await getShadowWarById(shadowWarId);
      console.log(response)
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