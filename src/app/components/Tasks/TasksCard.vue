<style scoped lang="scss" src="./TasksCard.scss"/>
<script setup lang="ts">
import { useStore } from '../../../middlewares/store';
import { Ref, ref } from 'vue'

const store: any = useStore();
const props: any = defineProps({ todo: Object, date: String });

const editionActive: Ref = ref(false);
const isCheckInputDisabled: Ref = ref(false);
const deleteConfirmationActive: Ref = ref(false);
const editedTitle: Ref = ref("");
const isInputDisabled: Ref = ref("");
const completed: Ref = ref(store.currentUser.mytasks?.completed?.includes(props.todo._id));

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

const filterDates = props.todo.completedDates?.filter((e: any) => e.substring(0, 10) === props.date);

async function handleCheckButton() {
  isCheckInputDisabled.value = true;

  let formData: any;

  if(filterDates.length) {
    formData = {
      completedDates: props.todo.completedDates.filter((e: any) => e.substring(0, 10) !== props.date)
    };
  } else if (props.todo.completedDates && !filterDates.length) {
    formData = {
      completedDates: [...props.todo.completedDates, props.date]
    };
  } else {
    formData = {
      completedDates: [props.date]
    };
  };

  await store.handleUpdateTask(props.todo._id, formData);
  await store.handleGetTask(props.date);

  completed.value = store.currentUser.mytasks?.completed.includes(props.todo._id);
  isCheckInputDisabled.value = false;
};

async function updateEdit() {
  isInputDisabled.value = true;

  const formData: any = {
    title: editedTitle.value,
  };

  await store.handleUpdateTask(props.todo._id, formData);
  await store.handleGetTask(props.date);

  editionActive.value = false;
};

async function handleDeleteTaskConfirmation() {
  await store.handleDeleteTask(props.todo._id);
  await store.handleGetTask(props.date);

  deleteConfirmationActive.value = false;
};

</script>

<template>
  <li v-if="!editionActive && !deleteConfirmationActive">
    <div class="loader" v-if="isCheckInputDisabled"></div>
    <input type="checkbox" :checked="completed" :disabled="isCheckInputDisabled" @change="handleCheckButton" />
    <p>{{ props.todo.title }}</p>
    <span v-if="!props.todo.fixed">
      <button @click="handleActivateEditionButton">
        <img src="../../../assets/svg/edit-icon.svg" alt="">
      </button>
      <button @click="handleDeleteButton">
        <img src="../../../assets/svg/delete-icon.svg" alt="">
      </button>
    </span>
  </li>
  <li v-if="editionActive && !deleteConfirmationActive">
    <input type="checkbox" :checked="completed" disabled />
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
    <input type="checkbox" :checked="completed" disabled />
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
