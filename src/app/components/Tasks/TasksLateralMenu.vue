<style scoped lang="scss" src="./TasksLateralMenu.scss"/>
<script setup lang="ts">
import { Ref, ref } from 'vue';
import { useStore } from '../../../middlewares/store';

const store: any = useStore();
const props: any = defineProps({ logged: Boolean });
const active: Ref = ref({ backgroundColor: "var(--color-primary)" })

function handleType(type: string) {
  store.setTaskType(type);
  store.handleGetTask(store.currentUser.taskdate, store.currentUser.tasktype);
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
        <button :disabled="!props.logged" class="first" @click="handleType('mytasks')" :style="styleActive('mytasks')">
          <img src="../../../assets/svg/profile-icon.svg" alt="" />
          <span>Mis Tareas</span>
          <span></span>
        </button>
      </li>
      <li>
        <button :disabled="!props.logged" @click="handleType('clantasks')" :style="styleActive('clantasks')">
          <img src="../../../assets/svg/clan-shield-icon.svg" alt="" />
          <span>Clan</span>
          <span></span>
        </button>
      </li>
      <li>
        <button disabled>
          <img src="../../../assets/svg/swords-warband-icon.svg" alt="" />
          <span>Cofradía</span>
          <span></span>
        </button>
      </li>
      <li>
        <button disabled class="last">
          <img src="../../../assets/svg/calendar-icon.svg" alt="" />
          <span>Calendario</span>
          <span></span>
        </button>
      </li>
    </ul>
  </div>
</template>