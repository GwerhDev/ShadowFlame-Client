<style scoped lang="scss" src="./AddMemberModal.scss" />
<script setup lang="ts">
import { ref, defineEmits, computed } from 'vue';
import diabloIcon from "../../../../assets/svg/diablo-icon.svg";

const emit = defineEmits(['close']);

const username = ref('');
const character = ref('');
const resonance = ref(0);
const selectedClass = ref('');
const whatsapp = ref('');

const isCharacterEmpty = computed(() => character.value.trim() === '');

const classes = [
  { name: "Druida", value: "druid", image: "https://blz-contentstack-images.akamaized.net/v3/assets/blt77f4425de611b362/blt75eca7075dbe5195/6851ec39300f1cc6e7953c4b/druid_svg_1.svg" },
  { name: "Bárbaro", value: "barbarian", image: "https://blz-contentstack-images.akamaized.net/v3/assets/blt77f4425de611b362/bltb1bf7cc5cf89d819/64b045d7b4f503538bb32b79/class-icons_barbarian2.svg" },
  { name: "Caballero de Sangre", value: "bloodknight", image: "https://blz-contentstack-images.akamaized.net/v3/assets/blt77f4425de611b362/bltf64f01e05eb84480/663a8766d83f5f651716ddc4/class-icons_bloodknight2.svg" },
  { name: "Guerrero Divino", value: "crusader", image: "https://blz-contentstack-images.akamaized.net/v3/assets/blt77f4425de611b362/bltf64f01e05eb84480/663a8766d83f5f651716ddc4/class-icons_bloodknight2.svg" },
  { name: "Cazador de Demonios", value: "demonhunter", image: "https://blz-contentstack-images.akamaized.net/v3/assets/blt77f4425de611b362/blt2a35acdcf570d8c2/64b045d7c08cca43789b2796/class-icons_demonhunter2.svg" },
  { name: "Monje", value: "monk", image: "https://blz-contentstack-images.akamaized.net/v3/assets/blt77f4425de611b362/blta20b6ac6454f28e4/64b045d7c08cca42bd9b2792/class-icons_monk2.svg" },
  { name: "Nigromante", value: "necromancer", image: "https://blz-contentstack-images.akamaized.net/v3/assets/blt77f4425de611b362/blt98e1e1105822157d/64b045d7e052526a87ff673f/class-icons_necromancer2.svg" },
  { name: "Tempest", value: "tempest", image: "https://blz-contentstack-images.akamaized.net/v3/assets/blt77f4425de611b362/blt98e1e1105822157d/64b045d7e052526a87ff673f/class-icons_necromancer2.svg" },
  { name: "Arcanista", value: "wizard", image: "https://blz-contentstack-images.akamaized.net/v3/assets/blt77f4425de611b362/bltb1877f62e0edfd8e/64b045d7e052522a71ff6743/class-icons_wizard2.svg" },
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
              <button type="submit" :disabled="isCharacterEmpty"
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