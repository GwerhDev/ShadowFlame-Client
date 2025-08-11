<script setup lang="ts">
import { defineProps, PropType, ref } from 'vue';
import { Member } from '../../../../interfaces/shadowWar';
import ShadowWarMemberCard from './ShadowWarMemberCard.vue';

const props = defineProps({
  members: {
    type: Array as PropType<Member[]>,
    required: true
  }
});

const emit = defineEmits(['close', 'member-selected']);

const localSelectedMember = ref<Member | null>(null);

const handleCardClick = (member: Member) => {
  localSelectedMember.value = member;
};

const confirmSelection = () => {
  if (localSelectedMember.value) {
    emit('member-selected', localSelectedMember.value);
  }
};
</script>

<template>
  <div class="container-modal-component" @click.self="$emit('close')" style="display: flex;">
    <div class="modal-container">
      <h3>Seleccionar Miembro</h3>
      <div class="member-selection-grid">
        <ShadowWarMemberCard 
          v-for="member in members" 
          :key="member._id" 
          :member="member" 
          @click="handleCardClick(member)"
          :class="{ 'selected': localSelectedMember?._id === member._id }"
        />
      </div>
      <div class="modal-actions">
        <button @click="confirmSelection" :disabled="!localSelectedMember" class="submit-button button">Confirmar</button>
        <button @click="$emit('close')" class="secondary-button">Cancelar</button>
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

.selected {
  border-color: var(--accent-color);
  box-shadow: 0 0 10px var(--accent-color);
  transform: scale(1.05);
}
</style>
