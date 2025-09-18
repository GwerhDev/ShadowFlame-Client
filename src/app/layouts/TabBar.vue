<style scoped lang="scss" src="./TabBar.scss" />
<script setup lang="ts">
import { Ref, ref } from 'vue';
import { useStore, AppStore } from '../../middlewares/store';

withDefaults(defineProps<{
  logged: Boolean,
  tabs: Array<{
    id: string;
    name: string;
    icon: string;
    length?: number;
  }>,
}>(), {
  tabs: () => []
});

const store: AppStore = useStore();
const active: Ref = ref({ backgroundColor: "var(--color-primary)" });

function handleType(tab: { id: string; name: string; icon: string; length?: number; }) {
  store.setTab({ value: tab.id, label: tab.name });
};

function styleActive(type: string) {
  if (store.layout.tab.value == type) {
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
          @click="handleType(tab)"
          :style="styleActive(tab.id)"
        >
          <i :class="tab.icon"></i>
          <span>{{ tab.name }}</span>
          <small v-if="store.currentUser.userBattleInfo.some(b => b.category === tab.id)"><i class="fas fa-user-shield user-battle-indicator"></i></small>
        </button>
      </li>
    </ul>
  </div>
</template>
