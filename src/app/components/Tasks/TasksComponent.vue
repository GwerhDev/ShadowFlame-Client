<style scoped lang="scss" src="./TasksComponent.scss" />
<script setup lang="ts">
import { ref, onMounted, Ref, watch } from "vue";
import { useStore } from '../../../middlewares/store';
import { optionTodoList } from "../../../helpers/lists";
import TasksCard from "./TasksCard.vue";
import TasksLateralMenu from "./TasksLateralMenu.vue";
import diabloIcon from "../../../assets/svg/diablo-icon.svg";
import DeniedAccess from "../../utils/DeniedAccess.vue";
import LoaderComponent from "../../utils/LoaderComponent.vue";
import CharacterSelector from "../Selectors/CharacterSelector/CharacterSelector.vue";

const store: any = useStore();
const title: Ref = ref("");
const message: Ref = ref("");
const isButtonDisabled: Ref = ref(true);
const date: Ref = ref(new Date().toISOString().substring(0, 10));
const type: Ref = ref("mytasks");

onMounted(async () => {
  try {
    message.value = "";
    if (!store.currentUser.tasktype) { 
      await store.handleGetTask(date.value, type.value);
      store.setTaskType(type.value);
      store.setTaskDate(date.value);
    } else {
      type.value = store.currentUser.tasktype;
      date.value = store.currentUser.taskdate;
      await store.handleGetTask(store.currentUser.taskdate, store.currentUser.tasktype);
    }
  } catch (error) {
    console.error(error);
  } finally {
    message.value = "No hay tareas para esta fecha.";
  }
});

watch(() => store.currentCharacter, async (newCharacter, oldCharacter) => {
  if (newCharacter !== oldCharacter) {
    await store.handleGetTask(store.currentUser.taskdate, store.currentUser.tasktype);
  }
});

async function handleDate(e: any) {
  date.value = e.target.value;
  store.setTaskDate(date.value);
  await store.handleGetTask(store.currentUser.taskdate, store.currentUser.tasktype);
}

function handleInput() {
  if (title.value.length) isButtonDisabled.value = false;
  else isButtonDisabled.value = true;
}

async function createTask() {
  isButtonDisabled.value = true;

  const formData: any = {
    date: store.currentUser.taskdate,
    type: store.currentUser.tasktype,
    title: title.value,
    fixed: false,
    user: !store.currentCharacter ? store.currentUser.userData.id : null,
    character: store.currentCharacter,
  };

  await store.handleCreateTask(formData);
  await store.handleGetTask(store.currentUser.taskdate, store.currentUser.tasktype);

  isButtonDisabled.value = true;
  title.value = "";
}
</script>

<template>
  <div class="container-tasks-component">
    <div class="tasks-container">
      <span class="mb-3 mt-1">
        <img :src="diabloIcon" alt="icon" />
        <h1>Mis Tareas</h1>
      </span>

      <CharacterSelector />

      <div class="section-container">
        <section class="menu-section">
          <TasksLateralMenu :logged="store.currentUser.logged" />
        </section>
        <section class="todolist-section" v-if="store.currentUser.logged">
          <div class="filter-container">
            <input :value="date" type="date" @input="handleDate" v-if="store.currentUser.logged" />
          </div>

          <form @submit.prevent="createTask" disabled v-if="store.currentUser.tasktype === 'mytasks' && !store.currentUser.taskloading">
            <input type="text" list="options" placeholder="Agregar una tarea a tu lista" v-model="title"
              @input="handleInput" />

            <datalist id="options">
              <option v-for="option of optionTodoList" :value="option"></option>
            </datalist>
            <button class="add-button" type="submit" :disabled="isButtonDisabled">
              <p>+</p>
            </button>
          </form>
          <ul v-if="store.currentUser.task?.length && !store.currentUser.taskloading">
            <TasksCard v-for="(item, index) in store.currentUser.task" :key="index" :todo="item"/>
          </ul>
          <ul v-if="!store.currentUser.task?.length">{{ message }}</ul>
          <LoaderComponent v-if="(!store.currentUser.task?.length && !message.length) || store.currentUser.taskloading" />
        </section>
        <section v-else class="justify-content-center align-items-center d-flex g-1 w-100">
          <DeniedAccess />
        </section>
      </div>
    </div>
  </div>
</template>
