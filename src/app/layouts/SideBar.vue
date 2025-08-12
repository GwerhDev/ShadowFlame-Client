<style scoped lang="scss" src="./SideBar.scss" />
<script setup lang="ts">
import { Ref, ref } from 'vue';
import { useStore } from '../../middlewares/store';

defineProps({
  logged: Boolean,
  tabs: {
    type: Array,
    required: true
  },
  activeTab: {
    type: String,
    required: true
  }
});

const store: any = useStore();
const active: Ref = ref({ backgroundColor: "var(--color-primary)" });

function handleType(type: string) {
  store.setLayoutTab(type);
};

function styleActive(type: string) {
  if (store.currentUser.layoutTab == type) {
    return active.value;
  }
};

</script>

<template>
  <div class="container-lateral">
    <ul>
      <li v-for="(tab, index) in tabs" :key="tab.id">
        <button
          :title="tab.name"
          :class="{ 'first': index === 0, 'last': index === tabs.length - 1 }"
          @click="handleType(tab.id)"
          :style="styleActive(tab.id)"
        >
          <i :class="tab.icon"></i>
          <span>{{ tab.name }}</span>
          <span></span>
        </button>
      </li>
    </ul>
  </div>
</template>
