<style scoped lang="scss" src="./CharacterSelector.scss" />
<script setup lang="ts">
import { onMounted } from 'vue';
import { $d } from '../../../../functions';
import { useStore } from '../../../../middlewares/store';

const store = useStore();

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
  <span class="mb-1">
    <select :onchange="handleChange" class="" name="character-selector" id="character-selector">
      <option value="default">Por defecto</option>
      <option v-for="character in store.currentUser?.userData?.character" value="">{{ character.name }}</option>
      <option disabled class="separator">─────────────</option>
      <option value="create-character">Crear</option>
    </select>
  </span>
</template>