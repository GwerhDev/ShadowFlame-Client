<style scoped lang="scss" src="./AddMemberModal.scss" />
<script setup lang="ts">
import { ref, defineEmits } from 'vue';
import diabloIcon from "../../../../assets/svg/diablo-icon.svg";

const emit = defineEmits(['close']);

const username = ref('');
const character = ref('');
const resonance = ref(0);
const selectedClass = ref('');
const whatsapp = ref('');

const classes = [
  { name: "Druida", value: "druid", image: "/dummy-druid.png" },
  { name: "Bárbaro", value: "barbarian", image: "/dummy-barbarian.png" },
  { name: "Caballero de Sangre", value: "bloodknight", image: "/dummy-bloodknight.png" },
  { name: "Guerrero Divino", value: "crusader", image: "/dummy-crusader.png" },
  { name: "Cazador de Demonios", value: "demonhunter", image: "/dummy-demonhunter.png" },
  { name: "Monje", value: "monk", image: "/dummy-monk.png" },
  { name: "Nigromante", value: "necromancer", image: "/dummy-necromancer.png" },
  { name: "Tempest", value: "tempest", image: "/dummy-tempest.png" },
  { name: "Arcanista", value: "wizard", image: "/dummy-wizard.png" },
];

function handleClassSelection(classValue: string) {
  selectedClass.value = classValue;
};

function handleCloseModal() {
  emit('close');
};

function handleSubmit() {
  // TODO: Implement member creation logic
  const formData = {
    username: username.value,
    character: character.value,
    resonance: resonance.value,
    class: selectedClass.value,
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
                <input type="number" id="resonance" v-model.number="resonance" min="0">
              </span>
              <span class="d-flex g-1">
                <label for="whatsapp">WhatsApp:</label>
                <input type="text" id="whatsapp" v-model="whatsapp">
              </span>
              <span class="d-flex col g-1">
                <label>Class:</label>
                <div class="class-selection d-flex row g-1">
                  <button type="button" v-for="cls in classes" :key="cls.value" @click="handleClassSelection(cls.value)"
                    :class="{ 'selected-class': selectedClass === cls.value }">
                    <img :src="cls.image" :alt="cls.name" width="50" height="50">
                    <span>{{ cls.name }}</span>
                  </button>
                </div>
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