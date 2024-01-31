<script setup lang="ts"> 
  import { useStore } from './middlewares/store/index';
  import NavComponent from './app/components/NavComponent.vue';

  const store: any = useStore();
  const token: any = localStorage.getItem('userToken');
  store.handleUserData(token);
</script> 
 
<template>
  <router-view/>
  <template v-if="$route.path !== '/' && !$route.path.startsWith('/auth')">
    <nav-component/> 
  </template>
</template>