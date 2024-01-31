<script setup lang="ts">

</script>

<template>
  <main>
    <section class="first-section">
      <div class="left-section">
        <img class="di-logo" src="../../assets/avif/di-logo.avif" alt="">
        <div class="warband">
          <h1>The Flame</h1>
          <h3>"No está muerto todo lo que yace eternamente; y con extraños, incluso la muerte puede morir."</h3>
        </div>
      </div>
      <div class="right-section"></div>
    </section>
  </main>
</template>

<style scoped>
  main {
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    position: absolute;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(../../assets/avif/background.avif);
  }

  .first-section {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-left: 1.1rem;
    padding-right: 1.1rem;
  }

  .left-section {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .warband {
    text-align: center;
    max-width: 500px;
  }

  .di-logo{
    width: 500px;
  }

</style>
