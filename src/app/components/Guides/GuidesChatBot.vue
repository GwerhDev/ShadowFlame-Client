<style scoped lang="scss" src="./GuidesChatBot.scss"/>
<script setup lang="ts">
import { Ref, ref } from 'vue';
import { useStore } from '../../../middlewares/store';


const store: any = useStore();
const query: Ref = ref("");
const question: Ref = ref("");
const answer: Ref = ref("");
const isButtonDisabled: Ref = ref(true);
const isInputDisabled: Ref = ref(false);

async function handleSubmit() {
  try {
    question.value = query.value;
    query.value = "";
    isInputDisabled.value = true;
    isButtonDisabled.value = true;
    answer.value = "Escribiendo..."
    answer.value = await store.handleChatbotQuery({ query: question.value });
    isInputDisabled.value = false;
  } catch (error) {
    console.error(error);
  }
};

function handleInput(e: any) {
  query.value = e.target.value
  if (query.value.length) {
    isButtonDisabled.value = false;
  } else {
    isButtonDisabled.value = true;
  }
};

</script>

<template>
  <section class="container-chatbox">
    <div class="inner-container">
      <div class="chatbox-container">
        <span v-if="question">
          <div class="question"><p>{{ question }}</p><img src="../../../assets/svg/profile-icon.svg" alt="Tú"></div>
          <div class="answer"><img src="../../../assets/svg/bot-icon.svg" alt="El Guía"><p>{{ answer }}</p></div>
        </span>
        <div class="chatbot-presentation" v-else>
          <h1>ChatBot</h1>
          <img src="../../../assets/svg/bot-icon.svg" alt="El Guía" height="100px">
          <p>Hazme una pregunta</p>
        </div>
      </div>
      <div class="form-container">
        <form @submit.prevent="handleSubmit">
          <input :value="query" type="text" placeholder="Escribe aquí..." @input="handleInput" :disabled="isInputDisabled">
          <button :disabled="isButtonDisabled">
            <img src="../../../assets/svg/bot-icon.svg" alt="">
          </button>
        </form>
      </div>
    </div>
  </section>
</template>