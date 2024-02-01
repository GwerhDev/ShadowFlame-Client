<style scoped lang="scss" src="./DashboardComponent.scss"/>
<script setup lang="ts">
import { useStore } from '../../../middlewares/store';
import { Ref, onMounted, ref } from 'vue';

const store: any = useStore();
const editionActive: any = ref(false);
const role: Ref<string> = ref('');
const status: Ref<string> = ref('');

onMounted(async() => {
  await store.handleGetUsers();
});

function handleEdit() {
  editionActive.value = true;
};

async function handleUpdate(user: any) {
  const formData = {
    status: status.value?.length? status.value : user.status,
    role: role.value?.length? role.value : user.role
  }

  await store.handleUpdateUser(user._id, formData)
  await store.handleGetUsers();
  editionActive.value = false;
};

function handleCancel() {
  editionActive.value = false;
};

function handleDelete(id: string) {
  console.log(id);
  editionActive.value = false;
};

function handleStatus($event: any) {
  status.value = $event.target.value;
};

function handleRole($event: any) {
  role.value = $event.target.value;
};

</script>

<template>
  <div class="ul-container">
    <ul v-if="editionActive">
      <li v-for="user in store.users" :key="user._id">
        <img src="../../../assets/svg/profile-icon.svg" alt="">
        <span>
          <p>{{ user.battletag }}</p>
          <select :value="user.role" @change="handleRole">
            <option value="admin">admin</option>
            <option value="member">member</option>
          </select>
          <select :value="user.status" @change="handleStatus">
            <option value="active">active</option>
            <option value="inactive">inactive</option>
          </select>        
        </span>
        <ul class="buttons-container">
          <button @click="handleUpdate(user)">
            guardar
          </button>
          <button @click="handleCancel">
            cancelar
          </button>
        </ul>
      </li>
    </ul>
    <ul v-else>
      <li v-for="user in store.users" :key="user._id">
        <img src="../../../assets/svg/profile-icon.svg" alt="">
        <span>
          <p>{{ user.battletag }}</p>
          <p>{{ user.role }}</p>
          <p>{{ user.status }}</p>
        </span>
        <ul class="buttons-container">
          <button @click="handleEdit">
            editar
          </button>
          <button @click="handleDelete(user._id)">
            eliminar
          </button>
        </ul>
      </li>
    </ul>
  </div>
</template>
