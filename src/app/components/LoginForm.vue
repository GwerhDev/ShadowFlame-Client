<script setup lang="ts">
import { useStore } from '../../middlewares/store/index';
import { useRouter } from 'vue-router';
import { onMounted, computed } from 'vue';
import { getUserToken } from '../../helpers';

const store: any = useStore();
const router: any = useRouter();
const currentUser: any = computed(() => store.currentUser);

let email = "";
let password = "";
let token = getUserToken();

onMounted(() => {
  if (!currentUser?.value.error && token) {
    router.push('/account/settings/' + token);
  }
});

async function handleInnerLogin(e: any) {
  e.preventDefault();
  const formData: any = { email, password };
  try {
    const path: any = await store.handleLogin(formData);
    router.push(path);
  } catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <form class="login-form">
    <input type="text" placeholder="Correo electrónico o teléfono">
    <input type="password" placeholder="Contraseña">
    <button type="button" @click="handleInnerLogin">Iniciar sesión</button>
  </form>
</template>

<style scoped lang="scss" src="./LoginForm.scss"/>