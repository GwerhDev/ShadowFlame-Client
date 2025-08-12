<style scoped lang="scss" src="./PublicShadowWarComponent.scss" />
<script setup lang="ts">
import { onMounted } from 'vue';
import { useStore } from '../../../middlewares/store';
import ShadowWarLateralMenu from './PublicShadowWarLateralMenu.vue';
import PublicShadowWar from './PublicShadowWar.vue';
import diabloIcon from "../../../assets/svg/diablo-icon.svg";

const store: any = useStore();

onMounted(() => {
  store.handleGetNextShadowWar();
});
</script>

<template>
  <div class="container-sw-page">
    <div class="sw-container">
      <span class="mb-3 mt-1">
        <img :src="diabloIcon" alt="icon" />
        <h1>Guerra Sombría</h1>
      </span>

      <div class="section-container">
        <section class="menu-section">
          <ShadowWarLateralMenu :logged="store.currentUser.logged" />
        </section>
        <section class="content-section">
          <PublicShadowWar />
        </section>
      </div>
    </div>
  </div>
</template>