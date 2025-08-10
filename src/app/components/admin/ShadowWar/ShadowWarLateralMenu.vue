<style scoped lang="scss" src="./ShadowWarLateralMenu.scss"/>
<script setup lang="ts">
import { Ref, ref } from 'vue';
import { useStore } from '../../../../middlewares/store';

const store: any = useStore();
const props: any = defineProps({ logged: Boolean });
const active: Ref = ref({ backgroundColor: "var(--color-primary)" });

async function handleType(type: string) {
  store.setShadowWarTab(type);
};

function styleActive(type: string) {
  if (store.currentUser.shadowWarTab == type) {
    return active.value;
  }
};

</script>

<template>
  <div class="container-lateral">
    <ul>
      <li>
        <button :disabled="!props.logged" class="first" @click="handleType('next-battle')" :style="props.logged && styleActive('next-battle')">
          <img src="../../../../assets/svg/quest-icon.svg" alt="Próxima" />
          <span>Próxima</span>
          <span></span>
        </button>
      </li>
      <li>
        <button :disabled="!props.logged" class="last" @click="handleType('history')" :style="props.logged && styleActive('history')">
          <img src="../../../../assets/svg/calendar-icon.svg" alt="Historial" />
          <span>Historial</span>
          <span></span>
        </button>
      </li>
    </ul>
  </div>
</template>