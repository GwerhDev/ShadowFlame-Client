<style scoped lang="scss" src="./ToDoCompletedCard.scss"/>
<script setup lang="ts">
import { ref } from 'vue';
import { useStore } from '../../middlewares/store';

const store: any = useStore();
const props: any = defineProps({ todo: Object });
const deleteConfirmationActive: any = ref(false);

function handleDeleteButton() {
  deleteConfirmationActive.value = true;
};

function cancelDelete() {
  deleteConfirmationActive.value = false;
};

async function handleCheckButton() {
  const formData: any = {
    completed: !props.todo.completed
  };

  await store.handleUpdateTask(props.todo._id, formData);
  await store.handleGetTask();
};

async function handleDeleteTaskConfirmation() {
  await store.handleDeleteTask(props.todo._id);
  await store.handleGetTask();
};

</script>

<template>
  <li v-if="props.todo.completed && !deleteConfirmationActive">
    <input type="checkbox" :checked="props.todo.completed" @change="handleCheckButton" />
    <p>{{ props.todo.title }}</p>
    <span>
      <button @click="handleDeleteButton">
        <img src="../../assets/svg/delete-icon.svg" alt="">
      </button>
    </span>
  </li>
  <li v-if="props.todo.completed && deleteConfirmationActive">
    <input type="checkbox" :checked="props.todo.completed" disabled/>
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