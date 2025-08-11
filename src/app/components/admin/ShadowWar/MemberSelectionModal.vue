<script setup lang="ts">
import { defineProps, PropType } from 'vue';
import { Member } from '../../../../interfaces/shadowWar';
import ShadowWarMemberCard from './ShadowWarMemberCard.vue';

const props = defineProps({
  members: {
    type: Array as PropType<Member[]>,
    required: true
  },
  assignedMemberIds: {
    type: Array as PropType<string[]>,
    default: () => []
  }
});

const emit = defineEmits(['close', 'member-selected']);

const handleCardClick = (member: Member) => {
  if (props.assignedMemberIds.includes(member._id)) {
    return; // Do nothing if member is already assigned
  }
  emit('member-selected', member);
  emit('close');
};

const isAssigned = (memberId: string) => {
  return props.assignedMemberIds.includes(memberId);
};
</script>

<template>
  <div class="container-modal-component" @click.self="$emit('close')" style="display: flex;">
    <div class="modal-container">
      <div class="d-flex justify-content-between align-items-center">
        <h3>Seleccionar Miembro</h3>
        <button @click="$emit('close')" class="secondary-button">Cancelar</button>
      </div>
      <div class="member-selection-grid">
        <ShadowWarMemberCard 
          v-for="member in members" 
          :key="member._id" 
          :member="member" 
          @click="handleCardClick(member)"
          :class="{ 'is-assigned': isAssigned(member._id) }"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss" src="./MemberSelectionModal.scss" />
<style scoped lang="scss">
.member-selection-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  max-height: 400px;
  overflow-y: auto;
}

.is-assigned {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}
</style>
