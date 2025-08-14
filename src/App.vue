<script setup lang="ts">
import { useStore } from './middlewares/store/index';
import { Ref, ref, onMounted } from 'vue';
import NavComponent from './app/components/NavComponent.vue';

const store: any = useStore();
const token: any = localStorage.getItem('userToken');
const loggedin: Ref = ref(false);

onMounted(async () => {
  try {
    const response = await store.handleUserData(token);
    if (response) {
      loggedin.value = true;
    }
  } catch (error) {
    loggedin.value = true;
  } finally {
    loggedin.value = true;
  }
});

</script>

<template>
  <router-view />
  <template
    v-if="!$route.path.startsWith('/signup') && !$route.path.startsWith('/login') && !$route.path.startsWith('/auth')">
    <nav-component :loggedin="loggedin" />
  </template>
</template>