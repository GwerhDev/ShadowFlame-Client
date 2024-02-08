<style scoped lang="scss" src="./GuidesChatBot.scss"/>
<script setup lang="ts">
import { Ref, ref } from 'vue';
import { useStore } from '../../../middlewares/store';


const store: any = useStore();
const query: Ref = ref("");
const answer: Ref = ref("Hazme una pregunta");
const isButtonDisabled: Ref = ref(true);
const isInputDisabled: Ref = ref(false);

async function handleSubmit() {
  try {
    isInputDisabled.value = true;
    isButtonDisabled.value = true;
    answer.value = await store.handleChatbotQuery({ query: query.value });
    query.value = "";
    console.log(answer.value);
    isInputDisabled.value = false;
  } catch (error) {
    console.log(error);
  }
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
  <section class="container-chatbox">
    <div class="inner-container">
      <div class="chatbox-container">
        <p>{{ answer }}</p>
      </div>
      <form @submit.prevent="handleSubmit">
        <input :value="query" type="text" @input="handleInput" :disabled="isInputDisabled">
        <button :disabled="isButtonDisabled">
          <img src="../../../assets/svg/bot-icon.svg" alt="">
        </button>
      </form>
    </div>
  </section>
</template>