<style scoped lang="scss" src="./TasksLateralMenu.scss"/>
<script setup lang="ts">

const props: any = defineProps({ logged: Boolean });

</script>

<template>
  <div class="container-lateral">
    <ul>
      <li>
        <button :disabled="!props.logged" class="first">
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
        <button disabled class="last">
          <img src="../../../assets/svg/calendar-icon.svg" alt="" /> 
          <span>Calendario</span>
          <span></span>
        </button>
      </li>
    </ul>
  </div>
</template>