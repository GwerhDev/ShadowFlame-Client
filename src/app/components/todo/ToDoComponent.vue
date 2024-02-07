<style scoped lang="scss" src="./ToDoComponent.scss"/>
<script setup lang="ts">
import { ref, onMounted, Ref } from "vue";
import { useStore } from '../../../middlewares/store';
import { optionTodoList } from "../../../helpers/lists";
import ToDoCard from "./ToDoCard.vue";
import ToDoLateralMenu from "./ToDoLateralMenu.vue";
import ToDoCompletedCard from "./ToDoCompletedCard.vue";
import diabloIcon from "../../../assets/svg/diablo-icon.svg";

const store: any = useStore();
const title: Ref = ref("");
const date: Ref = ref(new Date().toISOString().substring(0, 10));
const isButtonDisabled: Ref = ref(true);
const message: Ref = ref("");

onMounted(async () => {
  message.value = "Cargando..."
  try {
    await store.handleGetTask(date.value);
  } catch (error) {
    console.error(error);
  } finally {
    message.value = "No hay tareas para esta fecha."
  }
});

async function handleDate(e: any) {
  date.value = e.target.value
  await store.handleGetTask(date.value);
}

function handleInput() {
  if (title.value.length) isButtonDisabled.value = false;
  else isButtonDisabled.value = true;
};

async function addTodo() {
  isButtonDisabled.value = true;

  const formData: any = {
    title: title.value,
    index: 1,
    date: date.value,
    repeat: false,
    completed: false,
    repeatType: null
  }

  await store.handleCreateTask(formData);
  await store.handleGetTask(date.value);

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

      <input :value="date" type="date" @input="handleDate" />

      <div class="section-container">
        <section class="menu-section">
          <ToDoLateralMenu />
        </section>
        <section class="todolist-section">
          <form @submit.prevent="addTodo">
            <input type="text" list="options" placeholder="Agregarla una tarea a tu lista" v-model="title"
              @input="handleInput" />
            <datalist id="options">
              <option v-for="option of optionTodoList" :value="option"></option>
            </datalist>
            <button class="add-button" type="submit" :disabled="isButtonDisabled">
              <p>+</p>
            </button>
          </form>
          <ul v-if="store.currentUser.tasks?.length">
            <ToDoCard v-for="(item, index) in store.currentUser.tasks" :key="index" :todo="item" :date="date"/>
          </ul>
          <ul v-if="store.currentUser.tasks?.length">
            <ToDoCompletedCard v-for="(item, index) in store.currentUser.tasks" :key="index" :todo="item" :date="date"/>
          </ul>
          <ul v-if="!store.currentUser.tasks?.length">{{ message }}</ul>
        </section>
      </div>
    </div>
  </div>
</template>