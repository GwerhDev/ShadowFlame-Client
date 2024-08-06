<style scoped lang="scss" src="./GuidesGems.scss" />
<script setup lang="ts">
import { onMounted } from 'vue';
import { useStore } from '../../../middlewares/store';
import { $d } from '../../../functions';

const store: any = useStore();

onMounted(async () => {
  await store.handleGetCharacter();
});

function handleChange(e: any) {
  if (e.target.value === "create-character") {
    $d(".container-modal-component").style.display = "flex";
    e.target.value = "default";
  }
}

</script>

<template>
  <section class="container-gems">
    <div class="inner-container">
      <span class="d-flex w-100 g-1">
        <select :onchange="handleChange" class="" name="character-selector" id="character-selector">
          <option value="default">default</option>
          <option v-for="character in store.currentUser?.userData?.character" value="">{{ character.name }}</option>
          <option value="create-character">Crear</option>
        </select>
        <div class="filter-container">
          <input :value="null" type="date" @input="" v-if="store.currentUser.logged" />
        </div>
      </span>
    </div>
  </section>
</template>