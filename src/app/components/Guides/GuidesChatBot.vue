<style scoped lang="scss" src="./GuidesChatBot.scss"/>
<script setup lang="ts">
import { Ref, ref } from 'vue';

const isButtonDisabled: Ref = ref(true);
const query: Ref = ref("");

async function handleSubmit() {
  query.value = "";
}

function handleInput(e: any) {
  query.value = e.target.value
  if (query.value.length) {
    isButtonDisabled.value = false;
  } else {
    isButtonDisabled.value = true;
  }
}

</script>

<template>
  <section class="container">
    <div class="inner-container">
      <div class="chatbox-container">

      </div>
      <form @submit.prevent="handleSubmit">
        <input :value="query" type="text" @input="handleInput">
        <button :disabled="isButtonDisabled">
          <img src="../../../assets/svg/bot-icon.svg" alt="">
        </button>
      </form>
    </div>
  </section>
</template>