<style scoped lang="scss" src="./NavComponent.scss"/>
<script setup lang="ts">
import AccountButton from './AccountButton.vue';
import NavMenuComponent from './NavMenuComponent.vue';
import UserMenuComponent from './UserMenuComponent.vue';

</script>

<template>
  <div class="nav-container">
    <nav>
      <div class="section-container">
        <span class="logo-container">
          <img src="../../assets/diabloimmortal-logo.png" alt="" height="60px">
        </span>
        <span class="nav-menu-container">
          <NavMenuComponent></NavMenuComponent>
        </span>
        <span class="account-container">
          <AccountButton></AccountButton>
        </span>
      </div>
      <UserMenuComponent></UserMenuComponent>
    </nav>
  </div>
</template>