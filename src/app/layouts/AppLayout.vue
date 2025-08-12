<style scoped lang="scss" src="./AppLayout.scss" />
<script setup lang="ts">
import { useStore } from '../../middlewares/store';
import SideBar from './SideBar.vue';
import diabloIcon from "../../assets/svg/diablo-icon.svg";
import TabBar from './TabBar.vue';

const store: any = useStore();

defineProps({
  loading: {
    type: Boolean,
    required: true
  },
  sidebarTabs: Array as () => Array<{
    id: string;
    name: string;
    icon: string;
    length?: number;
  }>,
  title: {
    type: String,
    required: true
  }
});
</script>

<template>
  <div class="container-lo-page">
    <div class="lo-container">
      <div class="section-container">
        <section class="menu-section desktop">
          <img :src="diabloIcon" alt="icon" />
          <SideBar :logged="store.currentUser.logged" :tabs="sidebarTabs" />
        </section>

        <section class="content-section">
          <span class="title-section">
            <img :src="diabloIcon" alt="icon" />
            <h1>{{ title }}</h1>
          </span>
          <section class="menu-section mobile">
            <TabBar :logged="store.currentUser.logged" :tabs="sidebarTabs" />
          </section>
          <div class="scrollable-content">
            <slot></slot>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
