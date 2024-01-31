<style scoped lang="scss" src="./UserMenuComponent.scss"/>
<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useStore } from '../../middlewares/store';
import { $d } from '../../functions';

const store: any = useStore();
const router: any = useRouter();

document.addEventListener('mouseup', function (e) {
  const container = $d('#user-menu-container');
  if (!container?.contains(e.target)) {
    return (
      $d('#user-menu-container').style.display = 'none'
    )
  }
  return;
});

function handleLogout() {
  store.logout();
  router.push('/');
}

</script>

<template>
  <div class="container" id="user-menu-container">
    <span class="user-data">
      <p class="battletag"><span>{{ store.currentUser?.userData?.username }}</span>#{{
        store.currentUser?.userData?.discriminator }}</p>
      <p class="role">{{ store.currentUser?.userData?.role }}</p>
    </span>
    <ul>
      <li>
        <img src="../../assets/svg/settings-icon.svg" alt="">
        Ajustes de tu cuenta
      </li>
      
      <li @click="handleLogout">
        <img src="../../assets/svg/logout-icon.svg" alt="">
        Cerrar sesión
      </li>
    </ul>
  </div>
</template>