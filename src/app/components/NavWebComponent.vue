<style scoped lang="scss" src="./NavWebComponent.scss"/>
<script setup lang="ts">
import AccountButton from './AccountButton.vue';
import LogoComponent from './LogoComponent.vue';
import NavMenuComponent from './NavMenuComponent.vue';
import UserMenuComponent from './UserMenuComponent.vue';
import DashboardButton from './admin/DashboardButton.vue';

</script>

<template>
  <nav class="nav-web">
    <div class="section-container">
      <LogoComponent></LogoComponent>

      <NavMenuComponent></NavMenuComponent>

      <AccountButton></AccountButton>
      
      <DashboardButton></DashboardButton>
    </div>
    <UserMenuComponent></UserMenuComponent>
  </nav>
</template>