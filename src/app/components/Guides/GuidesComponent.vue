<style scoped lang="scss" src="./GuidesComponent.scss"/>
<script setup lang="ts">
import diabloIcon from "../../../assets/svg/diablo-icon.svg";
import GuidesChatBot from "./GuidesChatBot.vue";
import GuidesLateralMenu from "./GuidesLateralMenu.vue";

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
          <GuidesLateralMenu />
        </section>
        <section class="chatbox-section">
          <GuidesChatBot />
        </section>
      </div>
    </div>
  </div>
</template>