<template>
  <div>
    <h2>Detalles de la Guerra Sombría</h2>
    <div v-if="loading">
      Cargando...
    </div>
    <div v-else-if="error">
      <p>Error al cargar los detalles: {{ error }}</p>
    </div>
    <div v-else-if="currentShadowWar">
      <small>
        <p>Fecha: {{ new Date(currentShadowWar.date).toLocaleString() }}</p>
      </small>
      <p>Clan Enemigo: {{ currentShadowWar.enemyClan?.name || 'N/A' }}</p>
      <div class="result-section">
        <p>Resultado:</p>
        <select v-model="selectedResult" @change="updateShadowWarResult">
          <option v-for="option in shadowWarResults" :key="option.value" :value="option.value">
            {{ option.text }}
          </option>
        </select>
      </div>
      <div>
        Miembros confirmados: {{ confirmedMembersCount }}
        <i @click="openMembersModal" class="fas fa-eye icon-button"></i>
      </div>
    </div>
    <div v-else>
      <p>No se encontraron detalles para esta Guerra Sombría.</p>
    </div>

    <div v-if="currentShadowWar?.battle">
      <h3>Batallas</h3>
      <div v-for="(matches, battleType) in currentShadowWar?.battle" :key="battleType" class="battle-section">
        <h4>{{ battleType.charAt(0).toUpperCase() + battleType.slice(1) }}</h4>

        <div v-for="(match, index) in matches" :key="index" class="match-summary-section">
          <h5>Partida {{ index + 1 }}</h5>
          <p>
            Miembros participantes: {{match.group1.member.filter(m => m).length + match.group2.member.filter(m =>
            m).length}}
          </p>
          <p>Resultado: {{ translateResult(match.result) }}</p>
          <i @click="openMatchDetailsModal(match)" class="fas fa-eye icon-button"></i>
        </div>
      </div>
    </div>
  </div>
  <div v-if="!currentShadowWar?.battle">
    <p>No se encontraron detalles para esta Guerra Sombría.</p>
  </div>

  <ConfirmedMembersModal v-if="showMembersModal" :members="currentShadowWar?.confirmed || []"
    @close="closeMembersModal" />

  <MatchDetailsModal v-if="showMatchDetailsModal" :match="selectedMatch" @close="closeMatchDetailsModal" />

</template>

<script setup lang="ts">
import { ref, onMounted, computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import { Match } from '../../../../interfaces/shadowWar';
import { translateResult } from '../../../../helpers/lists';
import MatchDetailsModal from './MatchDetailsModal.vue';
import ConfirmedMembersModal from './ConfirmedMembersModal.vue';
import { useStore } from '../../../../middlewares/store';

const route = useRoute();
const store = useStore();
const currentShadowWar = computed(() => store.admin.currentShadowWar);
const loading = ref(true);
const error = ref(null);
const showMembersModal = ref(false);
const showMatchDetailsModal = ref(false); // New state for MatchDetailsModal
const selectedMatch = ref<Match | null>(null); // New state for selected match

const shadowWarResults = [
  { value: 'victory', text: 'Victoria' },
  { value: 'defeat', text: 'Derrota' },
  { value: 'draw', text: 'Empate' },
  { value: 'pending', text: 'Pendiente' },
];

const selectedResult = ref('');

watch(currentShadowWar, (newVal) => {
  if (newVal) {
    selectedResult.value = newVal.result;
  }
}, { immediate: true });

const confirmedMembersCount = computed(() => {
  return currentShadowWar.value?.confirmed?.length || 0;
});

const openMembersModal = () => {
  showMembersModal.value = true;
};

const closeMembersModal = () => {
  showMembersModal.value = false;
};

const openMatchDetailsModal = (match: Match) => {
  selectedMatch.value = match;
  showMatchDetailsModal.value = true;
};

const closeMatchDetailsModal = () => {
  showMatchDetailsModal.value = false;
  selectedMatch.value = null;
};

const updateShadowWarResult = async () => {
  if (currentShadowWar.value?._id && selectedResult.value) {
    try {
      await store.handleUpdateShadowWar(currentShadowWar.value._id, { result: selectedResult.value });
      // Optionally, re-fetch the shadow war details to ensure UI is up-to-date
      // store.handleGetShadowWar(currentShadowWar.value._id);
    } catch (err: any) {
      console.error('Error updating shadow war result:', err);
      // Revert selectedResult if update fails
      selectedResult.value = currentShadowWar.value.result;
      error.value = err.message;
    }
  }
};

onMounted(async () => {
  const shadowWarId = route.params.shadowwar_id as string;
  if (shadowWarId) {
    try {
      loading.value = true;
      store.handleGetShadowWar(shadowWarId);
    } catch (err: any) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  }
});
</script>

<style scoped lang="scss" src="./HistoryDetails.scss"></style>
