<style scoped lang="scss" src="./GuidesComponent.scss" />
<script setup lang="ts">
import CharacterSelector from "../Selectors/CharacterSelector/CharacterSelector.vue";
</script>

<template>
  <div class="container-guides-component">
    <div class="guides-container">
      <CharacterSelector />
      <div class="section-container">
        <router-view />
      </div>
    </div>
  </div>
</template>