<script setup lang="ts">
import { computed, ref, Ref } from 'vue';
import CreateShadowWarForm from './CreateShadowWarForm.vue';
import { useStore } from '../../../../middlewares/store';


defineProps({
  nextWarDate: {
    type: String,
    required: true,
  },
});
const store: any = useStore();
const shadowWarData = computed(() => store.currentUser.shadowWarData);
const error: Ref<string | null> = ref(null);

</script>

<template>
  <div class="shadow-war-container">
    <span class="info-text">
      <h2>Próxima Batalla</h2>
      <p>La próxima Guerra Sombría es el {{ nextWarDate }} a las 19:30h (hora del servidor).</p>

      <div v-if="error">
        <p>Ha ocurrido un error:</p>
        <pre>{{ error }}</pre>
      </div>
    </span>

    <CreateShadowWarForm v-if="shadowWarData && shadowWarData._id" :shadowWarId="shadowWarData._id" />
  </div>
</template>

<style scoped>
.info-text {
  display: flex;
  flex-direction: column;
  padding-inline: 1rem;
}
</style>