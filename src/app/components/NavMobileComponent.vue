<style scoped lang="scss" src="./NavMobileComponent.scss"/>
<script setup lang="ts">
import LogoComponent from './LogoComponent.vue';
import BurgerMenu from './BurgerMenuComponent.vue';
import UserMenuComponent from './UserMenuComponent.vue';
import AccountMobileButton from './AccountMobileButton.vue';

defineProps(["loggedin"]);

</script>

<template>
  <nav class="nav-mobile">
    <div class="section-container">
      <BurgerMenu />
      <LogoComponent />
      <AccountMobileButton :loggedin="loggedin" />
    </div>
    <UserMenuComponent />
  </nav>
</template>