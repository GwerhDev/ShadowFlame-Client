<style scoped lang="scss" src="./ToDoLateralMenu.scss"/>
<script setup lang="ts">
</script>

<template>
  <div class="container">
    <ul>
      <li>
        <button>
          <img src="../../../assets/svg/profile-icon.svg" alt="" /> 
          <span>Mis Tareas</span>
          <span></span>
        </button>
      </li>
      <li>
        <button disabled>
          <img src="../../../assets/svg/clan-shield-icon.svg" alt="" />
          <span>Clan</span>
          <span></span>
        </button>
      </li>
      <li>
        <button disabled>
          <img src="../../../assets/svg/swords-warband-icon.svg" alt="" />
          <span>Cofradía</span>
          <span></span>
        </button>
      </li>
      <li>
        <button disabled>
          <img src="../../../assets/svg/calendar-icon.svg" alt="" /> 
          <span>Calendario</span>
          <span></span>
        </button>
      </li>
    </ul>
  </div>
</template>