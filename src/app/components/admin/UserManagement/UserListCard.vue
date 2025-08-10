<style scoped lang="scss" src="./UserListCard.scss" />
<script setup lang="ts">
import { useStore } from '../../../../middlewares/store';
import { Ref, onMounted, ref } from 'vue';

const store: any = useStore();
const role: Ref<string> = ref('');
const status: Ref<string> = ref('');
const editionActive: any = ref(false);
const deleteActive: any = ref(false);

defineProps(['user']);

onMounted(async () => {
  await store.handleGetUsers();
});

function handleEdit() {
  editionActive.value = true;
};

async function handleUpdate(user: any) {
  const formData = {
    status: status.value?.length ? status.value : user.status,
    role: role.value?.length ? role.value : user.role
  }

  await store.handleUpdateUser(user._id, formData)
  await store.handleGetUsers();
  await store.handleGetAdminNotifications();
  editionActive.value = false;
};

async function handleDeleteUser(id: string) {
  await store.handleDeleteUser(id);
  await store.handleGetUsers();
  await store.handleGetAdminNotifications();
};

function handleCancel() {
  editionActive.value = false;
  deleteActive.value = false;
};

function handleDelete() {
  deleteActive.value = true;
};

function handleStatus($event: any) {
  status.value = $event.target.value;
};

function handleRole($event: any) {
  role.value = $event.target.value;
};

function styleStatus(status: string) {

  if (status === 'active') {
    return { backgroundColor: '#99d499' }
  }

  if (status === 'pending') {
    return { backgroundColor: '#eaec72' }
  }

  if (status === 'inactive') {
    return { backgroundColor: '#b67f75' }
  }

};

</script>

<template>
  <div class="list-container" v-if="editionActive && !deleteActive">
    <span>
      <img src="../../../../assets/svg/profile-icon.svg" alt="">
    </span>
    <span>
      <p>{{ user.battletag }}</p>
    </span>
    <span>
      <select :value="user.role" @change="handleRole">
        <option value="admin">admin</option>
        <option value="member">member</option>
        <option value="clanleader">clanleader</option>
        <option value="warbandleader">warbandleader</option>
      </select>
    </span>
    <span>
      <select :value="user.status" @change="handleStatus">
        <option value="active">active</option>
        <option value="pending">pending</option>
        <option value="inactive">inactive</option>
      </select>
    </span>
    <span>
      <ul class="buttons-container">
        <button @click="handleUpdate(user)">
          ✔️
        </button>
        <button @click="handleCancel">
          ❌
        </button>
      </ul>
    </span>
  </div>
  <div class="list-container red-bg" v-if="!editionActive && deleteActive">
    <span>
      <img src="../../../../assets/svg/profile-icon.svg" alt="">
    </span>
    <span>
      <p>{{ user.battletag }}</p>
    </span>
    <span>
      <p>{{ user.role }}</p>
    </span>
    <span>
      <p>{{ user.status }}</p>
    </span>
    <span>
      <ul class="buttons-container">
        <button @click="handleDeleteUser(user._id)">
          ✔️
        </button>
        <button @click="handleCancel">
          ❌
        </button>
      </ul>
    </span>
  </div>
  <div class="list-container" v-if="!editionActive && !deleteActive">
    <span>
      <img src="../../../../assets/svg/profile-icon.svg" alt="">
    </span>
    <span>
      <p>{{ user.battletag }}</p>
    </span>
    <span>
      <p>{{ user.role }}</p>
    </span>
    <span>
      <p class="status-container"><span class="status" :style="styleStatus(user.status)"></span></p>
    </span>
    <span>
      <ul class="buttons-container">
        <button @click="handleEdit">
          <img src="../../../../assets/svg/edit-icon.svg" alt="" width="18px">
        </button>
        <button @click="handleDelete">
          <img src="../../../../assets/svg/delete-icon.svg" alt="" width="22px">
        </button>
      </ul>
    </span>
  </div>
</template>
