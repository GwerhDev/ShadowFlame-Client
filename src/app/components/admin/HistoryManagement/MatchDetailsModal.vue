<script setup lang="ts">
import { PropType } from 'vue';
import { Match, Member } from '../../../../interfaces/shadowWar';
import CustomModal from '../../Modals/CustomModal.vue';

defineProps({
  match: {
    type: Object as PropType<Match | null> | null,
    required: true
  }
});

const emit = defineEmits(['close']);

const getMemberName = (member: Member | undefined) => {
  return member ? member.character : 'N/A';
};
</script>

<template>
  <CustomModal :title="`Detalles de Partida`" @close="$emit('close')">
    <div class="match-details-content">
      <p>Resultado: {{ match?.result || 'Pendiente' }}</p>
      <div class="team-composition">
        <div class="team-group">
          <h5>Grupo 1</h5>
          <ul>
            <li v-for="(member, memberIndex) in match?.group1.member" :key="memberIndex">
              {{ getMemberName(member) }}
            </li>
          </ul>
        </div>
        <div class="team-group">
          <h5>Grupo 2</h5>
          <ul>
            <li v-for="(member, memberIndex) in match?.group2.member" :key="memberIndex">
              {{ getMemberName(member) }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </CustomModal>
</template>

<style scoped lang="scss" src="./MatchDetailsModal.scss" />
