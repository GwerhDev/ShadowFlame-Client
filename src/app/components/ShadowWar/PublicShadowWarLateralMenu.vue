<style scoped lang="scss" src="./PublicShadowWarLateralMenu.scss" />
<script setup lang="ts">
import { Ref, ref } from 'vue';
import { useStore } from '../../../middlewares/store';

defineProps({ logged: Boolean });
const store: any = useStore();
const active: Ref = ref({ backgroundColor: "var(--color-primary)" });

async function handleType(type: string) {
  store.setPublicNextBattleTab(type);
};

function styleActive(type: string) {
  if (store.currentUser.publicNextBattleTab == type) {
    return active.value;
  }
};

</script>

<template>
  <div class="container-lateral">
    <ul>
      <li>
        <button class="first" @click="handleType('exalted')"
          :style="styleActive('exalted')">
          <img src="../../../assets/svg/quest-icon.svg" alt="Exalted" />
          <span>Exalted</span>
          <span></span>
        </button>
      </li>
      <li>
        <button @click="handleType('eminent')"
          :style="styleActive('eminent')">
          <img src="../../../assets/svg/calendar-icon.svg" alt="Eminent" />
          <span>Eminent</span>
          <span></span>
        </button>
      </li>
      <li>
        <button @click="handleType('famed')"
          :style="styleActive('famed')">
          <img src="../../../assets/svg/calendar-icon.svg" alt="Famed" />
          <span>Famed</span>
          <span></span>
        </button>
      </li>
      <li>
        <button  class="last" @click="handleType('proud')"
          :style="styleActive('proud')">
          <img src="../../../assets/svg/calendar-icon.svg" alt="Proud" />
          <span>Proud</span>
          <span></span>
        </button>
      </li>
    </ul>
  </div>
</template>