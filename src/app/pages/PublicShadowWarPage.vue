<script setup lang="ts">
import PublicNextBattle from '../components/ShadowWar/PublicNextBattle.vue';
import PublicWarHistory from '../components/ShadowWar/PublicWarHistory.vue';
import diabloIcon from "../../assets/svg/diablo-icon.svg";
</script>

<template>
  <div class="container-sw-page">
    <div class="sw-container">
      <span class="mb-3 mt-1">
        <img :src="diabloIcon" alt="icon" />
        <h1>Guerra Sombría</h1>
      </span>

      <div class="section-container">
        <section class="content-section">
          <PublicNextBattle />
          <PublicWarHistory />
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container-sw-page {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem;
  min-height: calc(100vh - 60px); /* Adjust based on your header/footer height */
  background-color: #1a1a1a;
  color: #f0f0f0;
}

.sw-container {
  background-color: #2a2a2a;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.sw-container span {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
}

.sw-container img {
  width: 40px;
  height: 40px;
  margin-right: 10px;
}

.sw-container h1 {
  font-size: 2.5rem;
  color: #e0b000;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

.section-container {
  display: flex;
  width: 100%;
  gap: 1rem;
}

.content-section {
  flex-grow: 1;
  background-color: #3a3a3a;
  border-radius: 6px;
  padding: 1.5rem;
}
</style>
