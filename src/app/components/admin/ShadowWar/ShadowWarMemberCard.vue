<script setup lang="ts">
import { defineProps, PropType } from 'vue';
import { Member } from '../../../../interfaces/shadowWar';
import { classes } from '../../../../middlewares/misc/const';

defineProps({
  member: {
    type: Object as PropType<Member | undefined>,
    default: undefined
  }
});

const getClassImage = (className: string | undefined) => {
  const foundClass = classes.find(c => c.value === className);
  return foundClass ? foundClass.image : '';
};
</script>

<template>
  <div class="member-card" @click="$emit('click')">
    <div v-if="member" class="member-info">
      <img :src="getClassImage(member.class)" :alt="member.class" class="class-image" />
      <div class="member-details">
        <span class="character-name">{{ member.character }}</span>
        <span class="resonance">{{ member.resonance }}</span>
      </div>
    </div>
    <div v-else class="empty-card">
      <span>+</span>
      <span>Asignar Miembro</span>
    </div>
  </div>
</template>

<style scoped lang="scss" src="./ShadowWarMemberCard.scss" />
