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
const enemyClanName = ref('');

onMounted(async () => {
  await store.handleGetNextShadowWar();
  if (store.currentUser.shadowWarData && store.currentUser.shadowWarData.date) {
    const warDate = new Date(store.currentUser.shadowWarData.date);
    nextWarDate.value = warDate.toLocaleString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    warTime.value = warDate.toLocaleString('es-ES', { hour: '2-digit', minute: '2-digit' });

    if (store.currentUser.shadowWarData.enemyClan) {
      enemyClanName.value = store.currentUser.shadowWarData.enemyClan.name;
    } else {
      enemyClanName.value = 'aun no está definido';
    }
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
      <p>La próxima <b>Guerra Sombría</b> es el <i>{{ nextWarDate }} a las {{ warTime }}h (hora del servidor)</i>.
        Enfrentaremos al Clan:
      <h4>{{ enemyClanName }}</h4>
      </p>

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