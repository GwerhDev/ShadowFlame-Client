<script setup lang="ts">
import { PropType } from 'vue';
import { Match, Member } from '../../../../interfaces/shadowWar';
import CustomModal from '../../Modals/CustomModal.vue';

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

const getMemberName = (member: Member | undefined) => {
  return member ? member.character : 'N/A';
};
</script>

<template>
  <CustomModal :title="`Detalles de Batalla: ${battleType.charAt(0).toUpperCase() + battleType.slice(1)}`" @close="$emit('close')">
    <div class="battle-details-content">
      <div v-for="(match, index) in matches" :key="index" class="match-section">
        <h4>Partida {{ index + 1 }}</h4>
        <p>Resultado: {{ match.result || 'Pendiente' }}</p>
        <div class="team-composition">
          <div class="team-group">
            <h5>Grupo 1</h5>
            <ul>
              <li v-for="(member, memberIndex) in match.group1.member" :key="memberIndex">
                {{ getMemberName(member) }}
              </li>
            </ul>
          </div>
          <div class="team-group">
            <h5>Grupo 2</h5>
            <ul>
              <li v-for="(member, memberIndex) in match.group2.member" :key="memberIndex">
                {{ getMemberName(member) }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </CustomModal>
</template>

<style scoped lang="scss">
.battle-details-content {
  padding: 1rem;
}

.match-section {
  margin-bottom: 1.5rem;
  border: 1px solid #333;
  padding: 1rem;
  border-radius: 8px;
  background-color: #1a1a1a;

  h4 {
    color: #e0e0e0;
    margin-bottom: 0.8rem;
  }

  p {
    color: #b0b0b0;
    margin-bottom: 0.5rem;
  }
}

.team-composition {
  display: flex;
  justify-content: space-around;
  gap: 1rem;
  margin-top: 1rem;
}

.team-group {
  flex: 1;
  background-color: #2a2a2a;
  padding: 0.8rem;
  border-radius: 5px;

  h5 {
    color: #f0f0f0;
    margin-bottom: 0.6rem;
    text-align: center;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    color: #c0c0c0;
    padding: 0.2rem 0;
    text-align: center;
  }
}
</style>