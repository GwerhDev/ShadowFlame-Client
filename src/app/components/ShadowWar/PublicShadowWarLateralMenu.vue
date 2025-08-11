<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import * as ShadowWarInterfaces from '../../../interfaces/shadowWar';
import questIcon from '../../../assets/svg/quest-icon.svg';
import calendarIcon from '../../../assets/svg/calendar-icon.svg';

const props = defineProps<{
  battleCategories: { [key: string]: ShadowWarInterfaces.Match[] };
  activeCategory: string;
}>();

const emit = defineEmits(['update:activeCategory']);

function handleCategoryClick(categoryName: string) {
  emit('update:activeCategory', categoryName);
}
</script>

<template>
  <div class="container-lateral">
    <ul>
      <li v-for="(category, categoryName) in battleCategories" :key="categoryName">
        <button
          @click="handleCategoryClick(categoryName)"
          :class="{ active: activeCategory === categoryName }"
        >
          <img :src="categoryName === 'next-battle' ? questIcon : calendarIcon" alt="icon" />
          <span>{{ categoryName.charAt(0).toUpperCase() + categoryName.slice(1) }}</span>
          <span></span>
        </button>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss" src="./PublicShadowWarLateralMenu.scss" />
