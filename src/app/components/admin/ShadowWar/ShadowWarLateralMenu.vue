<style scoped lang="scss" src="./ShadowWarLateralMenu.scss"/>
<script setup lang="ts">
import { Ref, ref } from 'vue';
import { useStore } from '../../../../middlewares/store';

const store: any = useStore();
const props: any = defineProps({ logged: Boolean });
const active: Ref = ref({ backgroundColor: "var(--color-primary)" });

async function handleType(type: string) {
  store.setTaskType(type);
  store.setTaskLoading(true);
  await store.handleGetTask(store.currentUser.taskdate, store.currentUser.tasktype);
  store.setTaskLoading(false);
};

function styleActive(type: string) {
  if (store.currentUser.tasktype === type) {
    return active.value;
  };
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