<style scoped lang="scss" src="./GuidesComponent.scss"/>
<script setup lang="ts">
import diabloIcon from "../../../assets/svg/diablo-icon.svg";
import GuidesChatBot from "./GuidesChatBot.vue";
import GuidesLateralMenu from "./GuidesLateralMenu.vue";
import { useStore } from '../../../middlewares/store';
import DeniedAccess from "../../utils/DeniedAccess.vue";

const store: any = useStore();

</script>

<template>
  <div class="container">
    <div class="todo-container">
      <span>
        <img :src="diabloIcon" alt="icon" />
        <h1>Guías</h1>
      </span>

      <div class="section-container">
        <section class="menu-section">
          <GuidesLateralMenu :logged="store.currentUser.logged" />
        </section>
        <section class="chatbox-section" v-if="store.currentUser.logged">
          <GuidesChatBot />
        </section>
        <section v-else class="justify-content-center align-items-center d-flex g-1 w-100">
          <DeniedAccess />
        </section>
      </div>
    </div>
  </div>
</template>