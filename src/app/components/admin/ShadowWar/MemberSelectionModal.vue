<script setup lang="ts">
import { PropType } from 'vue';
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
        <h2>Seleccionar Miembro</h2>
      </div>
      <div class="member-selection-grid">
        <ShadowWarMemberCard v-for="member in members" :key="member._id" :member="member"
          @click="handleCardClick(member)" :class="{ 'is-assigned': isAssigned(member._id) }" />
      </div>
      <button @click="$emit('close')" class="secondary-button">Cancelar</button>
    </div>
  </div>
</template>

<style scoped lang="scss" src="./MemberSelectionModal.scss" />

