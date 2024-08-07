<style scoped lang="scss" src="./GuidesMaps.scss" />

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useStore } from '../../../middlewares/store';

const store: any = useStore();
const canvas = ref<HTMLCanvasElement | null>(null);
const context = ref<CanvasRenderingContext2D | null>(null);
const mapImage = ref<HTMLImageElement | null>(null);

const captureDrawing = () => {
  if (canvas.value && context.value && mapImage.value) {
    context.value.clearRect(0, 0, canvas.value.width, canvas.value.height);
    context.value.drawImage(mapImage.value, 0, 0, canvas.value.width, canvas.value.height);

    /*     const image = canvas.value.toDataURL('image/png');
     */
  }
};

onMounted(() => {
  if (canvas.value && mapImage.value) {
    context.value = canvas.value.getContext('2d');
    canvas.value.width = mapImage.value.clientWidth;
    canvas.value.height = mapImage.value.clientHeight;

    if (context.value) {
      context.value.drawImage(mapImage.value, 0, 0, canvas.value.width, canvas.value.height);
    }
  }
});

</script>

<template>
  <div class="canvas-container">
    <span class="selector-container">
      <select name="" id="">
        <option value="westmarch">Marca del Oeste</option>
      </select>
    </span>
    <img src="../../../assets/webp/westmarch.webp" alt="Westmarch" width="100%" ref="mapWestmarch">
    <canvas ref="canvas"></canvas>
  </div>
  <button class="mb-3" v-if="store.currentUser.userData.role === 'admin'" @click="captureDrawing">Capturar
    dibujo</button>
</template>