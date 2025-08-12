<style scoped lang="scss" src="./PublicShadowWarComponent.scss" />
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useStore } from '../../../middlewares/store';
import ShadowWarLateralMenu from './PublicShadowWarLateralMenu.vue';
import PublicShadowWar from './PublicShadowWar.vue';
import diabloIcon from "../../../assets/svg/diablo-icon.svg";

const store: any = useStore();
const nextWarDate = ref('');
const warTime = ref('');

onMounted(async () => {
  await store.handleGetNextShadowWar();
  if (store.currentUser.shadowWarData && store.currentUser.shadowWarData.date) {
    const warDate = new Date(store.currentUser.shadowWarData.date);
    nextWarDate.value = warDate.toLocaleString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    warTime.value = warDate.toLocaleString('es-ES', { hour: '2-digit', minute: '2-digit' });
  }
});

</script>

<template>
  <div class="container-sw-page">
    <div class="sw-container">
      <span class="mb-3 mt-1">
        <img :src="diabloIcon" alt="icon" />
        <h1>Guerra Sombría</h1>
      </span>
      <p>La próxima Guerra Sombría es el {{ nextWarDate }} a las {{ warTime }}h (hora del servidor).</p>

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