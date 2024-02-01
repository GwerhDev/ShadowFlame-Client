<style scoped lang="scss" src="./DashboardButton.scss"/>
<script setup lang="ts">
import { useRouter } from 'vue-router';

const router: any = useRouter();

function handleClick() {
  router.push('/dashboard')
}

</script>

<template>
  <button class="nav-button action-button" @click="handleClick">
    <p>Dashboard</p>
  </button>
</template>