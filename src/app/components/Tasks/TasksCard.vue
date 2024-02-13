<style scoped lang="scss" src="./TasksCard.scss"/>
<script setup lang="ts">
import { useStore } from '../../../middlewares/store';
import { Ref, ref } from 'vue'

const store: any = useStore();
const props: any = defineProps({ todo: Object });

const editionActive: Ref = ref(false);
const isCheckInputDisabled: Ref = ref(false);
const deleteConfirmationActive: Ref = ref(false);
const isInputDisabled: Ref = ref("");
const editedTitle: Ref = ref("");

function handleActivateEditionButton() {
  isInputDisabled.value = false;
  editionActive.value = true;
  editedTitle.value = props.todo.title;
};

function handleEditedTidleInput(e: any) {
  editedTitle.value = e.target.value;
};

function cancelEdit() {
  editionActive.value = false;
};

function cancelDelete() {
  deleteConfirmationActive.value = false;
};

function handleDeleteButton() {
  deleteConfirmationActive.value = true;
};

async function handleCheckButton(e: any) {
  isCheckInputDisabled.value = true;

  const formData = {
    completed: e.target.checked
  };

  await store.handleUpdateTask(props.todo._id, formData);
  await store.handleGetTask(store.currentUser.tasksdate);

  isCheckInputDisabled.value = false;
};

async function updateEdit() {
  isInputDisabled.value = true;

  const formData: any = {
    title: editedTitle.value,
  };

  await store.handleUpdateTask(props.todo._id, formData);
  await store.handleGetTask(store.currentUser.tasksdate);

  editionActive.value = false;
};

async function handleDeleteTaskConfirmation() {
  await store.handleDeleteTask(props.todo._id);
  await store.handleGetTask(store.currentUser.tasksdate);

  deleteConfirmationActive.value = false;
};

</script>

<template>
  <li v-if="!editionActive && !deleteConfirmationActive">
    <div class="loader" v-if="isCheckInputDisabled"></div>
    <input type="checkbox" :disabled="isCheckInputDisabled" @change="handleCheckButton" />
    <p>{{ props.todo.title }}</p>
    <span>
      <button @click="handleActivateEditionButton">
        <img src="../../../assets/svg/edit-icon.svg" alt="">
      </button>
      <button @click="handleDeleteButton">
        <img src="../../../assets/svg/delete-icon.svg" alt="">
      </button>
    </span>
  </li>
  <li v-if="editionActive && !deleteConfirmationActive">
    <input type="checkbox" disabled />
    <input class="edit-input" :value="props.todo.title" type="text" @input="handleEditedTidleInput">
    <span>
      <button @click="updateEdit">
        ✔️
      </button>
      <button @click="cancelEdit">
        ❌
      </button>
    </span>
  </li>
  <li v-if="deleteConfirmationActive">
    <input type="checkbox" disabled />
    <p>{{ props.todo.title }}</p>
    <span>
      <button @click="handleDeleteTaskConfirmation">
        ✔️
      </button>
      <button @click="cancelDelete">
        ❌
      </button>
    </span>
  </li>
</template>
