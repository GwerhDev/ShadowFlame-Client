<script setup lang="ts">
import { ref, PropType } from 'vue';
import { Match } from '../../../../interfaces/shadowWar';
import CustomModal from '../../Modals/CustomModal.vue';
import MatchDetailsModal from './MatchDetailsModal.vue'; // New import

defineProps({
  battleType: {
    type: String,
    required: true
  },
  matches: {
    type: Array as PropType<Match[]>,
    required: true
  }
});

const emit = defineEmits(['close']);

const showMatchDetailsModal = ref(false);
const selectedMatch = ref<Match | null>(null);

const openMatchDetailsModal = (match: Match) => {
  selectedMatch.value = match;
  showMatchDetailsModal.value = true;
};

const closeMatchDetailsModal = () => {
  showMatchDetailsModal.value = false;
  selectedMatch.value = null;
};

</script>

<template>
  <CustomModal :title="`Detalles de Batalla: ${battleType.charAt(0).toUpperCase() + battleType.slice(1)}`" @close="$emit('close')">
    <div class="battle-details-content">
      <div v-for="(match, index) in matches" :key="index" class="match-summary-section">
        <h4>Partida {{ index + 1 }}</h4>
        <p>Resultado: {{ match.result || 'Pendiente' }}</p>
        <button @click="openMatchDetailsModal(match)" class="detail-button">
          <i class="fas fa-eye"></i> Ver detalles
        </button>
      </div>
    </div>

    <MatchDetailsModal
      v-if="showMatchDetailsModal"
      :match="selectedMatch"
      @close="closeMatchDetailsModal"
    />
  </CustomModal>
</template>

<style scoped lang="scss" src="./BattleDetailsModal.scss">

</style>