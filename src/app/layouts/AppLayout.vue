<style scoped lang="scss" src="./AppLayout.scss" />
<script setup lang="ts">
import { useStore } from '../../middlewares/store';
import SideBar from './SideBar.vue';
import diabloIcon from "../../assets/svg/diablo-icon.svg";

const store: any = useStore();

defineProps({
  loading: {
    type: Boolean,
    required: true
  },
  sidebarTabs: {
    type: Array,
    required: true
  },
  activeLayoutTab: {
    type: String,
    required: true
  },
  title: {
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
          <SideBar :logged="store.currentUser.logged" :tabs="sidebarTabs" :active-tab="activeLayoutTab" />
        </section>
        <section class="content-section">
          <span class="mb-3 mt-1">
            <img :src="diabloIcon" alt="icon" />
            <h1>{{ title }}</h1>
          </span>
          <div class="scrollable-content">
            <slot></slot>
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
