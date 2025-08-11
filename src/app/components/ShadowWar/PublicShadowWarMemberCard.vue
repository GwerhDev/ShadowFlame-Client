<script setup lang="ts">
import { defineProps, PropType } from 'vue';
import { Member } from '../../../interfaces/shadowWar';

defineProps({
  member: {
    type: Object as PropType<Member | undefined>,
    default: undefined,
  },
});
</script>

<template>
  <div class="public-member-card">
    <div v-if="member" class="member-info">
      <p class="character-name">{{ member.character }}</p>
      <p class="battletag">{{ member.battletag }}</p>
    </div>
    <div v-else class="empty-slot">
      <p>Vacante</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.public-member-card {
  border: 1px solid #444;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  background-color: #222;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.member-info .character-name {
  font-weight: bold;
  font-size: 1.1rem;
  color: #ffc107;
}

.member-info .battletag {
  color: #aaa;
  font-size: 0.9rem;
}

.empty-slot {
  color: #666;
}
</style>
