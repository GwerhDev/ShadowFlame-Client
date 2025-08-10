<style scoped lang="scss" src="./MemberListCard.scss" />
<script setup lang="ts">
defineProps(['member']);
</script>

<template>
  <div class="list-container">
    <span>
      <img src="../../../../assets/svg/profile-icon.svg" alt="">
    </span>
    <span>
      <p>{{ member.username }}</p>
    </span>
    <span>
      <p>{{ member.character }}</p>
    </span>
    
    <span>
      <p>{{ member.resonance }}</p>
    </span>
    <span>
      <p>{{ member.class }}</p>
    </span>
    <span>
      <p>{{ member.whatsapp }}</p>
    </span>
  </div>
</template>