<style scoped lang="scss" src="./DashboardComponent.scss" />
<script setup lang="ts">
import { useStore } from '../../../middlewares/store';
import { useRouter } from 'vue-router';
import { findOrCreateShadowWarByDate } from '../../../middlewares/services/shadowWarService';
import { ref, Ref } from 'vue';

const store: any = useStore();
const router = useRouter();

const nextWarDateObject: Ref<Date | null> = ref(null);

const calculateNextWarDate = () => {
  const todayForLogic = new Date();
  let thursday = new Date(todayForLogic);
  thursday.setDate(thursday.getDate() + (4 - thursday.getDay() + 7) % 7);
  thursday.setHours(19, 30, 0, 0);

  let saturday = new Date(todayForLogic);
  saturday.setDate(saturday.getDate() + (6 - saturday.getDay() + 7) % 7);
  saturday.setHours(19, 30, 0, 0);

  if (thursday.getTime() < todayForLogic.getTime()) {
    thursday.setDate(thursday.getDate() + 7);
  }
  if (saturday.getTime() < todayForLogic.getTime()) {
    saturday.setDate(saturday.getDate() + 7);
  }

  if (thursday.getTime() < saturday.getTime()) {
    nextWarDateObject.value = thursday;
  } else {
    nextWarDateObject.value = saturday;
  }
};

calculateNextWarDate();

const handleShadowWarClick = async () => {
  if (nextWarDateObject.value) {
    try {
      const response = await findOrCreateShadowWarByDate(nextWarDateObject.value);
      router.push(`/dashboard/shadow-war/${response._id}`);
    } catch (error) {
      console.error('Error creating or finding Shadow War:', error);
      // Handle error, maybe show a message to the user
    }
  }
};
</script>

<template>
  <div class="dashboard-container">
    <h1>Dashboard</h1>
    <ul>
      <router-link to="/dashboard/user-management">
        <li v-if="store.currentUser?.userData?.role === 'admin'">
          Usuarios
          <span v-if="store.admin?.notifications?.pendingUsers.length">{{
            store.admin?.notifications?.pendingUsers.length }}</span>
        </li>
      </router-link>
      <router-link to="/dashboard/member-management">
        <li
          v-if="store.currentUser?.userData?.role === 'admin' || store.currentUser?.userData?.role === 'leader' || store.currentUser?.userData?.role === 'official'">
          Miembros
        </li>
      </router-link>
      <li
        v-if="store.currentUser?.userData?.role === 'admin' || store.currentUser?.userData?.role === 'leader' || store.currentUser?.userData?.role === 'official'"
        @click="handleShadowWarClick">
        Guerra Sombría
      </li>
    </ul>
  </div>
</template>
