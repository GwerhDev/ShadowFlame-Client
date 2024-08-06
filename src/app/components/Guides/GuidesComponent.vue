<style scoped lang="scss" src="./GuidesComponent.scss"/>
<script setup lang="ts">
import { ref, onMounted, Ref } from "vue";
import { useStore } from '../../../middlewares/store';
import GuidesChatBot from "./GuidesChatBot.vue";
import GuidesMaps from "./GuidesMaps.vue";
import DeniedAccess from "../../utils/DeniedAccess.vue";
import GuidesLateralMenu from "./GuidesLateralMenu.vue";
import diabloIcon from "../../../assets/svg/diablo-icon.svg";
import GuidesGems from "./GuidesGems.vue";

const store: any = useStore();
const type: Ref = ref("chatbot");

onMounted(async () => {
  try {
    if (!store.currentUser.guidetype) { 
      const getChatbot = await store.handleGetChatbotModel();
      if(getChatbot === 'chatbot') {
        store.setGuideType('chatbot');
      }
    } else {
      type.value = store.currentUser.guidetype;
      await store.handleGetChatbotModel();
    }
  } catch (error) {
    console.error(error);
  } finally {

  }
});

</script>

<template>
  <div class="container-guides-component">
    <div class="guides-container">
      <span class="mb-3 mt-1">
        <img :src="diabloIcon" alt="icon" />
        <h1>El Guía</h1>
      </span>

      <div class="section-container">
        <section class="menu-section">
          <GuidesLateralMenu :logged="store.currentUser.logged" />
        </section>
        <section class="chatbox-section" v-if="store.currentUser?.logged && store.currentUser?.guidetype === 'chatbot'">
          <GuidesChatBot />
        </section>
        <section class="chatbox-section" v-else-if="store.currentUser?.logged && store.currentUser?.guidetype === 'gems'">
          <GuidesGems />
        </section>
        <section class="chatbox-section" v-else-if="store.currentUser?.logged && store.currentUser?.guidetype === 'maps'">
          <GuidesMaps />
        </section>
        <section v-else class="justify-content-center align-items-center d-flex g-1 w-100">
          <DeniedAccess />
        </section>
      </div>
    </div>
  </div>
</template>