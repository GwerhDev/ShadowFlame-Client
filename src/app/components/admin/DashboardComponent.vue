<style scoped lang="scss" src="./DashboardComponent.scss" />
<script setup lang="ts">
import { useStore } from '../../../middlewares/store';

const store: any = useStore();

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
        <li v-if="store.currentUser?.userData?.role === 'admin' || store.currentUser?.userData?.role === 'leader' || store.currentUser?.userData?.role === 'official'">
          Miembros
        </li>
      </router-link>
      <router-link to="/dashboard/shadow-war">
        <li v-if="store.currentUser?.userData?.role === 'admin' || store.currentUser?.userData?.role === 'leader' || store.currentUser?.userData?.role === 'official'">
          Guerra Sombría
        </li>
      </router-link>
    </ul>
  </div>
</template>
