<style scoped lang="scss" src="./TableComponent.scss"/>
<script setup lang="ts">
import { defineProps } from 'vue';

defineProps<{
  navItems: string[];
}>();
</script>

<template>
  <div class="table-container">
    <nav>
      <li v-for="(item, index) in navItems" :key="index">{{ item }}</li>
    </nav>
    <slot></slot>
  </div>
</template>
