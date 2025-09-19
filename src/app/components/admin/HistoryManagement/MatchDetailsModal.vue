<script setup lang="ts">
import { PropType, ref, watch } from 'vue';
import { Match, Member, ShadowWar } from '../../../../interfaces/shadowWar';
import CustomModal from '../../Modals/CustomModal.vue';
import { useStore } from '../../../../middlewares/store';

const props = defineProps({
  match: {
    type: Object as PropType<Match | null> | null,
    required: true
  }, 
  currentShadowWar: {
    type: Object as PropType<ShadowWar | null>,
    required: true
  }
});

const emit = defineEmits(['close']);

const store = useStore();

const editableResult = ref('');

watch(() => props.match, (newMatch) => {
  if (newMatch) {
    editableResult.value = newMatch.result || 'pending';
  }
}, { immediate: true });

const getMemberName = (member: Member | undefined) => {
  return member ? member.character : 'N/A';
};

const updateResult = async () => {
  if (!store.admin.shadowWars || !props.match) return;

  const updatedShadowWar = JSON.parse(JSON.stringify(props.currentShadowWar));
  
  const battleTypes = ['exalted', 'eminent', 'famed', 'proud'] as const;
  let matchFound = false;
  for (const type of battleTypes) {
    const matchIndex = updatedShadowWar.battle[type].findIndex((m: Match) => 
      m.group1.member.every((mem, i) => mem?._id === props.match?.group1.member[i]?._id) &&
      m.group2.member.every((mem, i) => mem?._id === props.match?.group2.member[i]?._id)
    );
    if (matchIndex !== -1) {
      updatedShadowWar.battle[type][matchIndex].result = editableResult.value;
      matchFound = true;
      break;
    }
  }

  if (!matchFound) {
    console.error('Match not found in shadow war for update.');
    return;
  }

  try {
    await store.handleUpdateShadowWar(updatedShadowWar._id!, updatedShadowWar);
  } catch (error) {
    console.error('Error updating shadow war result:', error);
  }
};
</script>

<template>
  <CustomModal :title="`Detalles de Partida`" @close="$emit('close')">
    <div class="match-details-content">
      <div class="result-section">
        <p>Resultado:</p>
        <select v-model="editableResult" @change="updateResult">
          <option value="pending">Pendiente</option>
          <option value="victory">Victoria</option>
          <option value="defeat">Derrota</option>
          <option value="draw">Empate</option>
        </select>
      </div>
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
