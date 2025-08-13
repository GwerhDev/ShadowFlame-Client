<script setup lang="ts">
import { PropType, ref, watch } from 'vue';
import { Member } from '../../../../interfaces/shadowWar';
import ShadowWarMemberCard from './ShadowWarMemberCard.vue'; // This is an existing component, I will only use it, not modify it.

const props = defineProps({
  members: {
    type: Array as PropType<Member[]>,
    required: true
  },
  initialSelectedMemberIds: {
    type: Array as PropType<string[]>,
    default: () => []
  }
});

const emit = defineEmits(['close', 'update-selection']);

const selectedMembers = ref<string[]>([]);

watch(() => props.initialSelectedMemberIds, (newVal) => {
  selectedMembers.value = [...newVal];
}, { immediate: true });

const handleCardClick = (member: Member) => {
  const index = selectedMembers.value.indexOf(member._id);
  if (index === -1) {
    selectedMembers.value.push(member._id);
  } else {
    selectedMembers.value.splice(index, 1);
  }
  emit('update-selection', selectedMembers.value);
};

const isSelected = (memberId: string) => {
  return selectedMembers.value.includes(memberId);
};
</script>

<template>
  <div class="container-modal-component" @click.self="$emit('close')">
    <div class="modal-container">
      <div class="d-flex justify-content-between align-items-center">
        <h2>Seleccionar Miembros Confirmados</h2>
      </div>
      <div class="member-grid">
        <div v-for="member in members" :key="member._id" class="member-card-wrapper"
          :class="{ 'is-selected': isSelected(member._id) }" @click="handleCardClick(member)">
          <ShadowWarMemberCard :member="member" />
          <i v-if="isSelected(member._id)" class="fas fa-check-circle check-icon"></i>
        </div>
      </div>
      <button @click="$emit('close')" class="secondary-button">Cancelar</button>
    </div>
  </div>
</template>

<style scoped lang="scss" src="./ConfirmedSelectionModal.scss" />