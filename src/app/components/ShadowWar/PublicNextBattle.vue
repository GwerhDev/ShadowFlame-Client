<script setup lang="ts">
import { ref, onMounted, Ref } from 'vue';

const nextWarDate = ref('');
const nextWarDateObject: Ref<Date | null> = ref(null);

const calculateNextWarDate = () => {
  const todayForLogic = new Date();
  let thursday = new Date(todayForLogic);
  thursday.setDate(thursday.getDate() + (4 - thursday.getDay() + 7) % 7);
  thursday.setHours(19, 30, 0, 0);

  let saturday = new Date(todayForLogic);
  saturday.setDate(saturday.getDate() + (6 - saturday.getDay() + 7) % 7);
  saturday.setHours(19, 30, 0, 0);

  if (thursday.getTime() < todayForLogic.getTime()) {
      thursday.setDate(thursday.getDate() + 7);
  }
  if (saturday.getTime() < todayForLogic.getTime()) {
      saturday.setDate(saturday.getDate() + 7);
  }

  if (thursday.getTime() < saturday.getTime()) {
      nextWarDateObject.value = thursday;
  } else {
      nextWarDateObject.value = saturday;
  }

  if (nextWarDateObject.value) {
    nextWarDate.value = nextWarDateObject.value.toLocaleString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' });
  }
};

onMounted(() => {
  calculateNextWarDate();
});

</script>

<template>
  <div>
    <h2>Próxima Batalla</h2>
    <p>La próxima Guerra Sombría es el {{ nextWarDate }}h (hora del servidor).</p>
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
}

h2 {
  margin-bottom: 1rem;
}

p {
  margin-bottom: 0.5rem;
}
</style>
