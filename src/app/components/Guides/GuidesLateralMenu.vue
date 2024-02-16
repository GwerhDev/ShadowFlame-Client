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
          <img src="../../../assets/svg/bot-icon.svg" alt="" />
          <span>ChatBot</span>
          <span></span>
        </button>
      </li>
      <li>
        <button disabled>
          <img src="../../../assets/svg/clan-shield-icon.svg" alt="" />
          <span>Páginas</span>
          <span></span>
        </button>
      </li>
      <li>
        <button disabled class="last">
          <img src="../../../assets/svg/swords-warband-icon.svg" alt="" />
          <span>Streamers</span>
          <span></span>
        </button>
      </li>
    </ul>
  </div>
</template>