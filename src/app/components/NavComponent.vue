<style scoped lang="scss" src="./NavComponent.scss"/>
<script setup lang="ts">
import NavWebComponent from './NavWebComponent.vue';
import NavMobileComponent from './NavMobileComponent.vue';
import AccountMenuMobile from './AccountMenuMobile.vue';

</script>

<template>
  <div class="nav-container">
    <NavWebComponent></NavWebComponent>
    <NavMobileComponent></NavMobileComponent>
  </div>
  <AccountMenuMobile></AccountMenuMobile>
</template>