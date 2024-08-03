<script setup lang="ts">
import Auth from "../components/AuthComponent.vue"
</script>

<template>
  <main class="main-container">
    <div class="container">
      <Suspense>
        <Auth />
      </Suspense>
    </div>
  </main>
</template>