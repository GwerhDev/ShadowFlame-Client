<style scoped lang="scss" src="./ToDoComponent.scss"/>
<script setup lang="ts">
import { ref } from "vue";
import ToDoCard from "./ToDoCard.vue";
import ToDoCompletedCard from "./ToDoCompletedCard.vue";
import { useStore } from '../../../middlewares/store';
import { onMounted } from 'vue';
import diabloIcon from "../../../assets/svg/diablo-icon.svg";

const store: any = useStore();

const title = ref("");
const isButtonDisabled = ref(true);

const optionList: string[] = [
  "Asamblea de las sombras",
  "Mazmorras aleatorias",
  "Recolectar escencia de monstruo",
]

onMounted(async () => {
  await store.handleGetTask()
});

function handleInput() {
  if (title.value.length) isButtonDisabled.value = false;
  else isButtonDisabled.value = true;
};

async function addTodo() {
  isButtonDisabled.value = true;

  const formData: any = {
    title: title.value,
    index: 1,
    date: new Date(),
    repeat: false,
    completed: false,
    repeatType: null
  }

  await store.handleCreateTask(formData);
  await store.handleGetTask();

  title.value = "";
  isButtonDisabled.value = false;
};

</script>

<template>
  <div class="container">
    <div class="todo-container">
      <span>
        <img :src="diabloIcon" alt="icon" />
        <h1>Mis Tareas</h1>
      </span>
      <form @submit.prevent="addTodo">
        <input type="text" list="options" placeholder="Escribe una tarea" v-model="title" @input="handleInput"/>
        <datalist id="options">
          <option v-for="option of optionList" :value="option"></option>
        </datalist>
        <button class="add-button" type="submit" :disabled="isButtonDisabled">
          <p>+</p>
        </button>
      </form>
      <ul>
        <ToDoCard v-for="(item, index) in store.currentUser.tasks" :key="index" :todo="item"/>
      </ul>
      <div class="divider"></div>
      <ul>
        <ToDoCompletedCard v-for="(item, index) in store.currentUser.tasks" :key="index" :todo="item"/>
      </ul>
    </div>
  </div>
</template>