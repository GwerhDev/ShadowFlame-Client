<script setup lang="ts">
import { defineProps, PropType } from 'vue';
import { Member } from '../../../interfaces/shadowWar';
import { classes } from '../../../middlewares/misc/const';

defineProps({
  member: {
    type: Object as PropType<Member | undefined>,
    default: undefined,
  },
});

const getClassImage = (className: string | undefined) => {
  const foundClass = classes.find(c => c.value === className);
  return foundClass ? foundClass.image : '';
};
</script>

<template>
  <div class="member-card">
    <div v-if="member" class="member-info">
      <img :src="getClassImage(member.class)" :alt="member.class" class="class-image" />
      <div class="member-details">
        <span class="character-name">{{ member.character }}</span>
        <span class="resonance">{{ member.battletag }}</span>
      </div>
    </div>
    <div v-else class="empty-card">
      <i class="fas fa-ban"></i>
      <span>No asignado</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@fortawesome/fontawesome-free/css/all.css';

.member-card {
  position: relative; // Needed for absolute positioning of the button
  border: 1px solid var(--primary-border-color);
  border-radius: 8px;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80px;
  background-color: var(--element-color-primary);

  &:hover {
    border-color: var(--accent-color);
    box-shadow: 0 0 10px var(--accent-color);
    background-color: var(--element-color-primary-hover);
  }

  .unassign-button {
    padding: 0;
    position: absolute;
    top: -5px;
    right: -5px;
    width: 20px;
    height: 20px;
    border: none;
    color: white;
    line-height: 20px;
    border-radius: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.3s ease;
    background-color: var(--element-color-primary-hover);
    cursor: pointer;
    z-index: 1;

    &:hover {
      background-color: var(--color-red-action-hover);
    }
  }

  .member-info {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    .class-image {
      width: 40px;
      height: 40px;
    }

    .member-details {
      display: flex;
      flex-direction: column;

      .character-name {
        font-weight: bold;
      }

      .resonance {
        color: var(--text-secondary-color);
      }
    }
  }

  .empty-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    color: var(--text-secondary-color);

    span:first-child {
      font-size: 2rem;
      line-height: 1;
    }
  }
}
</style>
