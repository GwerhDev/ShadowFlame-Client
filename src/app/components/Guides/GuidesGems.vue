<style scoped lang="scss" src="./GuidesGems.scss" />
<script setup lang="ts">
import { useStore } from '../../../middlewares/store';

const store: any = useStore();

</script>

<template>
  <section class="container-gems">
    <div class="inner-container">
      <span class="d-flex w-100 g-1">
        <div class="filter-container">
          <input :value="null" type="date" @input="" v-if="store.currentUser.logged" />
        </div>
      </span>
    </div>
  </section>
</template>