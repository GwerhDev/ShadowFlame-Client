<style scoped lang="scss" src="./HistoryListCard.scss"/>
<script setup lang="ts">
import { defineProps } from 'vue';

defineProps(['war']);

const formatDate = (dateString: string) => {
  const options: any = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('es-ES', options);
};
</script>

<template>
  <div class="list-container">
    <span>
      <p>{{ formatDate(war.date) }}</p>
    </span>
    <span>
      <p>{{ war.enemyClan.name }}</p>
    </span>
    <span>
      <p>{{ war.result }}</p>
    </span>
    <span>
      <ul class="buttons-container">
        <button>
          Ver
        </button>
      </ul>
    </span>
  </div>
</template>