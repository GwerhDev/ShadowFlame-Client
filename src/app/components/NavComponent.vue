<style scoped lang="scss" src="./NavComponent.scss"/>
<script setup lang="ts">
import { useStore } from '../../middlewares/store';
import AccountButton from './AccountButton.vue';
import NavMenuComponent from './NavMenuComponent.vue';
import UserMenuComponent from './UserMenuComponent.vue';
import DashboardButton from './admin/DashboardButton.vue'

const store: any = useStore();
</script>

<template>
  <div class="nav-container">
    <nav>
      <div class="section-container">
        <span class="logo-container">
          <img src="../../assets/png/theflame-logo.png" alt="" width="120px">
        </span>
        <span class="nav-menu-container">
          <NavMenuComponent></NavMenuComponent>
        </span>
        <span class="account-container">
          <AccountButton></AccountButton>
        </span>
        <span class="dashboard-container" v-if="store.currentUser?.userData?.role === 'admin'">
          <DashboardButton></DashboardButton>
        </span>
      </div>
      <UserMenuComponent></UserMenuComponent>
    </nav>
  </div>
</template>