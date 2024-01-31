<style scoped lang="scss" src="./NavComponent.scss"/>
<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useStore } from '../../middlewares/store';

const store: any = useStore();
const router: any = useRouter();

function handleLogout() {
  store.logout();
  router.push('/');
}

</script>

<template>
  <div class="nav-container">
    <nav>
      <div class="section-container">
        <span class="logo-container">
          <img src="../../assets/diabloimmortal-logo.png" alt="" height="60px">
        </span>
        <button @click="handleLogout">
          salir
        </button>
      </div>
    </nav>
  </div>
</template>