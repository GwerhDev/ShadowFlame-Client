<style scoped lang="scss" src="./NavComponent.scss"/>
<script setup lang="ts">
import NavMenuMobile from './NavMenuMobile.vue';
import NavWebComponent from './NavWebComponent.vue';
import AccountMenuMobile from './AccountMenuMobile.vue';
import NavMobileComponent from './NavMobileComponent.vue';

</script>

<template>
  <div class="nav-container">
    <NavWebComponent />
    <NavMobileComponent />
  </div>
  <div class="account-mobile">
    <AccountMenuMobile />
  </div>
  <div class="menu-mobile">
    <NavMenuMobile />
  </div>
</template>