<style scoped lang="scss" src="./AccountButton.scss"/>
<script setup lang="ts">
import { useStore } from '../../middlewares/store';
import { $display } from '../../functions';

const store: any = useStore();

function handleButton() {
  $display("#user-menu-container");
};

</script>

<template>
  <button class="nav-button" @click="handleButton">
    <img src="../../assets/svg/profile-icon.svg" alt="">
    <p>{{ store.currentUser?.userData?.username || "Cuenta"}}</p>
    <img src="../../assets/svg/open-menu-icon.svg" alt="" width="12px">
  </button>
</template>