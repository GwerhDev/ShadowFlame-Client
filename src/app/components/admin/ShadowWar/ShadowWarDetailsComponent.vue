<style scoped lang="scss" src="./ShadowWarComponent.scss" />
<script setup lang="ts">
import { useStore } from '../../../../middlewares/store';
import ShadowWarLateralMenu from './ShadowWarLateralMenu.vue';
import NextBattle from './NextBattle.vue';
import WarHistory from './WarHistory.vue';
import DeniedAccess from "../../../utils/DeniedAccess.vue";
import diabloIcon from "../../../../assets/svg/diablo-icon.svg";

const store: any = useStore();
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
        <section class="content-section" v-if="store.currentUser?.logged && store.currentUser?.shadowWarTab === 'next-battle'">
          <NextBattle />
        </section>
        <section class="content-section" v-else-if="store.currentUser?.logged && store.currentUser?.shadowWarTab === 'history'">
          <WarHistory />
        </section>
        <section v-else class="justify-content-center align-items-center d-flex g-1 w-100">
          <DeniedAccess />
        </section>
      </div>
    </div>
  </div>
</template>