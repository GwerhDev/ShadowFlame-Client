<style scoped lang="scss" src="./AppLayout.scss" />
<script setup lang="ts">
import { useStore } from '../../middlewares/store';
import SideBar from './SideBar.vue';
import diabloIcon from "../../assets/svg/diablo-icon.svg";
import PublicShadowWar from '../components/ShadowWar/PublicShadowWar.vue';

const store: any = useStore();

defineProps({
  loading: {
    type: Boolean,
    required: true
  },
  nextWarDate: {
    type: String,
    required: true
  },
  warTime: {
    type: String,
    required: true
  },
  enemyClanName: {
    type: String,
    required: true
  }
});
</script>

<template>
  <div class="container-lo-page">
    <div class="lo-container">
      <div v-if="!loading" class="section-container">
        <section class="menu-section">
          <img :src="diabloIcon" alt="icon" />
          <SideBar :logged="store.currentUser.logged" />
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
