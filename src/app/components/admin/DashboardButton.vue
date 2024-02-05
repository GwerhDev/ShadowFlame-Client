<style scoped lang="scss" src="./DashboardButton.scss"/>
<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useStore } from '../../../middlewares/store';

const router: any = useRouter();
const store: any = useStore();

function handleClick() {
  router.push('/dashboard')
}

</script>

<template>
  <span class="dashboard-container" v-if="store.currentUser?.userData?.role === 'admin'">
    <button class="nav-button action-button" @click="handleClick">
      <p>Dashboard</p>
    </button>
  </span>
</template>