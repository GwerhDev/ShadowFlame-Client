<style scoped lang="scss" src="./ToDoCard.scss"/>
<script setup lang="ts">
import { useStore } from '../../middlewares/store';

const store: any = useStore();
const props: any = defineProps({
  todo: Object
})

async function handleDeleteButton() {
  await store.handleDeleteTask(props.todo._id)
  await store.handleGetTask();

};


</script>

<template>
  <li>
    <button>o</button>
    <p>{{ props.todo.title }}</p>
    <button @click="handleDeleteButton">x</button>
  </li>
</template>
