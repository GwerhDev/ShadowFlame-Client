<style scoped lang="scss" src="./CreateClanModal.scss" />
<script setup lang="ts">
import { ref, defineEmits } from 'vue';
import { createClan } from '../../../../middlewares/services/clanService';
import diabloIcon from "../../../../assets/svg/diablo-icon.svg"; // Assuming this path is correct

const emit = defineEmits(['close', 'clanCreated']);

const clanName = ref('');
const clanStatus = ref('active'); // Default status
const clanMembers = ref(0); // Default members

const handleCloseModal = () => {
  emit('close');
};

const handleSubmit = async () => {
  if (clanName.value.trim()) {
    const newClan = {
      name: clanName.value.trim(),
      status: clanStatus.value,
      members: clanMembers.value,
    };
    await createClan(newClan);
    emit('clanCreated');
    handleCloseModal();
  }
};
</script>

<template>
  <div class="container-modal-component">
    <div class="modal-container">
      <span class="mb-3 mt-1">
        <ul class="d-flex col g-1">
          <span class="d-flex row align-items-center">
            <img :src="diabloIcon" alt="icon" />
            <h2>Crear Nuevo Clan</h2>
          </span>
          <form @submit.prevent="handleSubmit">
            <ul class="d-flex col g-1">
              <span class="d-flex g-1">
                <label for="clanName">Nombre del Clan:</label>
                <input type="text" id="clanName" v-model="clanName" required>
              </span>
              <span class="d-flex g-1">
                <label for="clanStatus">Estado:</label>
                <select id="clanStatus" v-model="clanStatus" required>
                  <option value="top">Top</option>
                  <option value="active">Activo</option>
                  <option value="ghost">Fantasma</option>
                </select>
              </span>
              <span class="d-flex g-1">
                <label for="clanMembers">Miembros:</label>
                <input type="number" id="clanMembers" v-model.number="clanMembers" min="0" required>
              </span>
              <button type="submit" class="submit-button button justify-content-center align-items-center d-flex g-1 w-100">Crear Clan</button>
              <button type="button" @click="handleCloseModal" class="secondary-button">Cancelar</button>
            </ul>
          </form>
        </ul>
      </span>
    </div>
  </div>
</template>