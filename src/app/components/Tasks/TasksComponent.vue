<style scoped lang="scss" src="./TasksComponent.scss"/>
<script setup lang="ts">
import { ref, onMounted, Ref } from "vue";
import { useStore } from '../../../middlewares/store';
import { optionTodoList } from "../../../helpers/lists";
import TasksCard from "./TasksCard.vue";
import TasksLateralMenu from "./TasksLateralMenu.vue";
import diabloIcon from "../../../assets/svg/diablo-icon.svg";
import DeniedAccess from "../../utils/DeniedAccess.vue";
import LoaderComponent from "../../utils/LoaderComponent.vue";

const store: any = useStore();
const title: Ref = ref("");
const date: Ref = ref(new Date().toISOString().substring(0, 10));
const isButtonDisabled: Ref = ref(true);
const message: Ref = ref("");

onMounted(async () => {
  message.value = "";
  try {
    await store.handleGetTask(date.value);
  } catch (error) {
    console.error(error);
  } finally {
    store.setTasksDate(date.value);
    message.value = "No hay tareas para esta fecha.";
  }
});

async function handleDate(e: any) {
  date.value = e.target.value;
  store.setTasksDate(date.value);
  await store.handleGetTask(store.currentUser.taskdate);
};

function handleInput() {
  if (title.value.length) isButtonDisabled.value = false;
  else isButtonDisabled.value = true;
};

async function createTask() {
  isButtonDisabled.value = true;

  const formData: any = {
    date: store.currentUser.taskdate,
    type: "mytasks",
    title: title.value,
    fixed: false,
    user: store.currentUser.userData.id
  };

  await store.handleCreateTask(formData);
  await store.handleGetTask(store.currentUser.taskdate);

  isButtonDisabled.value = true;
  title.value = "";
};

</script>

<template>
  <div class="container-tasks-component">
    <div class="tasks-container">
      <span class="mb-3 mt-1">
        <img :src="diabloIcon" alt="icon" />
        <h1>Mis Tareas</h1>
      </span>

      <div class="section-container">
        <section class="menu-section">
          <TasksLateralMenu :logged="store.currentUser.logged" />
        </section>
        <section class="todolist-section" v-if="store.currentUser.logged">
          <div class="filter-container">
            <input :value="date" type="date" @input="handleDate" v-if="store.currentUser.logged" />
          </div>

          <form @submit.prevent="createTask" disabled>
            <input type="text" list="options" placeholder="Agregar una tarea a tu lista" v-model="title"
              @input="handleInput" />

            <datalist id="options">
              <option v-for="option of optionTodoList" :value="option"></option>
            </datalist>
            <button class="add-button" type="submit" :disabled="isButtonDisabled">
              <p>+</p>
            </button>
          </form>
          <ul v-if="store.currentUser.task?.length">
            <TasksCard v-for="(item, index) in store.currentUser.task" :key="index" :todo="item"/>
          </ul>
          <ul v-if="!store.currentUser.task?.length">{{ message }}</ul>
          <LoaderComponent v-if="!store.currentUser.task?.length && !message.length" />
        </section>
        <section v-else class="justify-content-center align-items-center d-flex g-1 w-100">
          <DeniedAccess />
        </section>
      </div>
    </div>
  </div>
</template>