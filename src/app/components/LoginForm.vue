<script setup lang="ts">
import { useStore } from '../../middlewares/store/index';
import { useRouter } from 'vue-router';
import { onMounted, computed } from 'vue';
import { getUserToken } from '../../helpers';
import { API_URL } from '../../middlewares/misc/const';

const store: any = useStore();
const router: any = useRouter();
const currentUser: any = computed(() => store.currentUser);

let token: string = getUserToken() || "";
let urlLogin: string = API_URL + "/login-bnet" || "";

onMounted(() => {
  if (!currentUser?.value.error && token) {
    router.push('/');
  }
});

</script>

<template>
  <form class="login-form">
    <a class="button" :href="urlLogin">Entrar</a>
  </form>
  <div class="d-flex justify-content-center align-items-center w-100 mt-1">
    <div class="divider"></div>
  </div>
</template>

<style scoped lang="scss" src="./LoginForm.scss"/>