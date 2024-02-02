<script setup lang="ts">

</script>

<template>
  <main>
    <section class="first-section">
      <div class="left-section">
        <img class="di-logo" src="../../assets/avif/di-logo.avif" alt="">
        <div class="warband">
          <span class="title-container">
            <h1 class="title">The Flame</h1>
            <p>cofradía</p>
          </span>
          <h3 class="subtitle">"No está muerto todo lo que yace eternamente; y con extraños, incluso la muerte puede morir."</h3>
        </div>
      </div>
      <div class="right-section"></div>
    </section>
    <section class="second-section">
      <h1>Salva a Sanctuary</h1>
    </section>
    <section class="third-section">
      <h1>... y a Richter</h1>
    </section>
  </main>
</template>

<style scoped>
  main {
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
    overflow-x: hidden;
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
    background: linear-gradient(to bottom, transparent 1%, black 90%);
  }

  .second-section {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: 1.1rem;
    padding-right: 1.1rem;
    background: linear-gradient(to bottom, black 20%, var(--color-secondary-bg) 100%);
  }

  .third-section {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: 1.1rem;
    padding-right: 1.1rem;
    background: linear-gradient(to bottom, var(--color-secondary-bg) 30%, var(--color-red-action) 300%);
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

  .title-container {
    gap: 0;
    padding: 0;
    margin: 0;
    font-family: 'Cinzel', serif;
  }

  .title {
    margin-bottom: -20px;
    color: antiquewhite;
  }

  .subtitle {
    color: antiquewhite;
    font-weight: 400;
  }

</style>
