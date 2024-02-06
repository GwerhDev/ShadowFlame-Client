<style scoped lang="scss" src="./ToDoCard.scss"/>
<script setup lang="ts">
import { useStore } from '../../middlewares/store';

const store: any = useStore();

const props: any = defineProps({ todo: Object });

async function handleCheckButton() {
  const formData: any = {
    completed: !props.todo.completed
  };

  await store.handleUpdateTask(props.todo._id, formData);
  await store.handleGetTask();
};

async function handleDeleteButton() {
  await store.handleDeleteTask(props.todo._id);
  await store.handleGetTask();
};

</script>

<template>
  <li>
    <input type="checkbox" :checked="props.todo.completed" @change="handleCheckButton" />
    <p>{{ props.todo.title }}</p>
    <button @click="handleDeleteButton">x</button>
  </li>
</template>
