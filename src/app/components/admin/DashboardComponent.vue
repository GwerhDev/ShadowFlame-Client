<style scoped lang="scss" src="./DashboardComponent.scss"/>
<script setup lang="ts">

</script>

<template>
  <div class="dashboard-container">
    <h1>Dashboard</h1>
    <ul>
      <router-link to="/dashboard/user-management">
        <li>Usuarios</li>
      </router-link>

      <router-link to="/dashboard/my-tasks-management">
        <li>My Tasks </li>
      </router-link>

      <router-link to="/dashboard/clan-tasks-management">
        <li>Clan Tasks</li>
      </router-link>

      <router-link to="/dashboard/warband-tasks-management">
        <li>Warband Tasks</li>
      </router-link>
    </ul>
  </div>
</template>
