<style scoped lang="scss" src="./GuidesLateralMenu.scss"/>
<script setup lang="ts">
import { Ref, ref } from 'vue';
import { useStore } from '../../../middlewares/store';

const store: any = useStore();
const props: any = defineProps({ logged: Boolean });
const active: Ref = ref({ backgroundColor: "var(--color-primary)" });

async function handleType(type: string) {
  store.setGuideType(type);
};

function styleActive(type: string) {
  if (store.currentUser.guidetype === type) {
    return active.value;
  };
};

</script>

<template>
  <div class="container-lateral">
    <ul>
      <li>
        <button :disabled="!props.logged" class="first" @click="handleType('chatbot')" :style="props.logged && styleActive('chatbot')">
          <img src="../../../assets/svg/bot-icon.svg" alt="Chatbot" />
          <span>ChatBot</span>
          <span></span>
        </button>
      </li>

      <li>
        <button :disabled="!props.logged" @click="handleType('maps')" :style="props.logged && styleActive('maps')">
          <img src="../../../assets/svg/map-icon.svg" alt="Mapas" />
          <span>Mapas</span>
          <span></span>
        </button>
      </li>
      <li>
        <button disabled>
          <img src="../../../assets/svg/clan-shield-icon.svg" alt="Páginas" />
          <span>Páginas</span>
          <span></span>
        </button>
      </li>
      <li>
        <button disabled class="last">
          <img src="../../../assets/svg/swords-warband-icon.svg" alt="Streamers" />
          <span>Streamers</span>
          <span></span>
        </button>
      </li>
    </ul>
  </div>
</template>