<style scoped lang="scss" src="./ToDoComponent.scss"/>
<script setup lang="ts">
import { ref } from "vue";
import ToDoCard from "./ToDoCard.vue";
import { useStore } from '../../middlewares/store';
import { onMounted } from 'vue';
import diabloIcon from "../../assets/svg/diablo-icon.svg";

const store: any = useStore();
const isButtonDisabled = ref(false);
const title = ref("");
const emit = defineEmits(['added']);

onMounted(async () => {
  await store.handleGetTask()
});

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
        <input type="text" list="options" placeholder="Escribe una tarea" v-model="title" />
        <datalist id="options">
          <option value="Asamblea de las sombras"></option>
          <option value="Mazmorras aleatorias"></option>
          <option value="Recolectar escencia de monstruo"></option>
        </datalist>
        <button class="add-button" type="submit" :disabled="isButtonDisabled">+</button>
      </form>
      <ul>
        <ToDoCard v-for="(item, index) in store.currentUser.tasks" :key="index" :todo="item" />
      </ul>
    </div>
  </div>
</template>