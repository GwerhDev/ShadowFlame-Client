<style scoped lang="scss" src="./AddMemberModal.scss" />
<script setup lang="ts">
import { ref, defineEmits } from 'vue';
import diabloIcon from "../../../../assets/svg/diablo-icon.svg";

const emit = defineEmits(['close']);

const username = ref('');
const character = ref('');
const resonance = ref(0);
const memberClass = ref('');
const whatsapp = ref('');

function handleCloseModal() {
  emit('close');
};

function handleSubmit() {
  // TODO: Implement member creation logic
  const formData = {
    username: username.value,
    character: character.value,
    resonance: resonance.value,
    class: memberClass.value,
    whatsapp: whatsapp.value,
  };
  console.log('New Member Data:', formData);
  handleCloseModal();
};
</script>

<template>
  <div class="container-modal-component">
    <div class="modal-container">
      <span class="mb-3 mt-1">
        <ul class="d-flex col g-1">
          <span class="d-flex row align-items-center">
            <img :src="diabloIcon" alt="icon" />
            <h2>Agregar nuevo miembro</h2>
          </span>
          <form @submit.prevent="handleSubmit">
            <ul class="d-flex col g-1">
              <span class="d-flex g-1">
                <label for="username">Username:</label>
                <input type="text" id="username" v-model="username" required>
              </span>
              <span class="d-flex g-1">
                <label for="character">Character:</label>
                <input type="text" id="character" v-model="character" required>
              </span>
              <span class="d-flex g-1">
                <label for="resonance">Resonance:</label>
                <input type="number" id="resonance" v-model.number="resonance">
              </span>
              <span class="d-flex g-1">
                <label for="class">Class:</label>
                <input type="text" id="class" v-model="memberClass" required>
              </span>
              <span class="d-flex g-1">
                <label for="whatsapp">WhatsApp:</label>
                <input type="text" id="whatsapp" v-model="whatsapp">
              </span>
              <button type="submit"
                class="submit-button button justify-content-center align-items-center d-flex g-1 w-100">Add
                Member</button>
              <button type="button" @click="handleCloseModal" class="secondary-button">Cancel</button>
            </ul>
          </form>
        </ul>
      </span>
    </div>
  </div>
</template>