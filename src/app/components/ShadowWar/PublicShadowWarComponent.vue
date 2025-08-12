<style scoped lang="scss" src="./PublicShadowWarComponent.scss" />
<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { useStore } from '../../../middlewares/store';
import ShadowWarLateralMenu from './PublicShadowWarLateralMenu.vue';
import PublicShadowWar from './PublicShadowWar.vue';
import diabloIcon from "../../../assets/svg/diablo-icon.svg";

const store: any = useStore();
const nextWarDate = ref('');
const warTime = ref('');
const enemyClanName = ref('');
const loading = ref(true); // New ref for loading state

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
    loading.value = false; // Set loading to false after data is processed
  } else {
    // If shadowWarData is not available, still set loading to false
    // but perhaps display a message or handle the empty state
    loading.value = false;
  }
});

watch(() => store.currentUser.shadowWarData, (newVal) => {
  if (newVal && newVal.date) {
    const warDate = new Date(newVal.date);
    nextWarDate.value = warDate.toLocaleString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    warTime.value = warDate.toLocaleString('es-ES', { hour: '2-digit', minute: '2-digit' });

    if (newVal.enemyClan) {
      enemyClanName.value = newVal.enemyClan.name;
    } else {
      enemyClanName.value = 'aun no está definido';
    }
  } else {
    // Reset values if shadowWarData becomes null or invalid
    nextWarDate.value = '';
    warTime.value = '';
    enemyClanName.value = '';
  }
}, { immediate: true });

</script>

<template>
  <div class="container-sw-page">
    <div class="sw-container">
      <div v-if="!loading" class="section-container">
        <section class="menu-section">
          <img :src="diabloIcon" alt="icon" />
          <ShadowWarLateralMenu :logged="store.currentUser.logged" />
        </section>
        <section class="content-section">
          <span class="mb-3 mt-1">
            <img :src="diabloIcon" alt="icon" />
            <h1>Guerra Sombría</h1>
          </span>
          <p>La próxima <b>Guerra Sombría</b> es el <i>{{ nextWarDate }} a las {{ warTime }}h (hora del servidor)</i>.
            Enfrentaremos al Clan:
          <h4>{{ enemyClanName }}</h4>
          </p>
          <div class="scrollable-content">
            <PublicShadowWar />
          </div>
        </section>
      </div>

      <div v-else class="skeleton-section-container">
        <div class="skeleton-menu-section">
          <div class="skeleton-box skeleton-menu-item"></div>
          <div class="skeleton-box skeleton-menu-item"></div>
          <div class="skeleton-box skeleton-menu-item"></div>
        </div>
        <div class="skeleton-content-section">
          <div class="skeleton-box skeleton-title"></div>
          <div class="skeleton-matches-row-container">
            <div class="skeleton-match">
              <div class="skeleton-box skeleton-subtitle"></div>
              <div class="skeleton-member-cards-grid">
                <div class="skeleton-box skeleton-member-card"></div>
                <div class="skeleton-box skeleton-member-card"></div>
                <div class="skeleton-box skeleton-member-card"></div>
                <div class="skeleton-box skeleton-member-card"></div>
              </div>
            </div>
            <div class="skeleton-match">
              <div class="skeleton-box skeleton-subtitle"></div>
              <div class="skeleton-member-cards-grid">
                <div class="skeleton-box skeleton-member-card"></div>
                <div class="skeleton-box skeleton-member-card"></div>
                <div class="skeleton-box skeleton-member-card"></div>
                <div class="skeleton-box skeleton-member-card"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>