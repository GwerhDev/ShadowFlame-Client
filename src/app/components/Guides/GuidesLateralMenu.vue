<style scoped lang="scss" src="./GuidesLateralMenu.scss"/>
<script setup lang="ts">
const props: any = defineProps({ logged: Boolean });

</script>

<template>
  <div class="container">
    <ul>
      <li>
        <button :disabled="!props.logged">
          <img src="../../../assets/svg/bot-icon.svg" alt="" />
          <span>ChatBot</span>
          <span></span>
        </button>
      </li>
      <li>
        <button disabled>
          <img src="../../../assets/svg/clan-shield-icon.svg" alt="" />
          <span>Páginas</span>
          <span></span>
        </button>
      </li>
      <li>
        <button disabled>
          <img src="../../../assets/svg/swords-warband-icon.svg" alt="" />
          <span>Streamers</span>
          <span></span>
        </button>
      </li>
    </ul>
  </div>
</template>