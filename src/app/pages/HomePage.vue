<script setup lang="ts">
import ManifestoComponent from '../components/ManifestoComponent.vue';

</script>

<template>
  <main>
    <section class="first-section">
      <div class="left-section mw-1250">
        <span class="logo-styles f-size-large">ShadowFlame</span>
        <div class="warband">
          <h3 class="subtitle">Las Sombras reinarán</h3>
        </div>
      </div>
      <div class="right-section mw-1250"></div>
    </section>
    <div class="divider-top"></div>
    <ManifestoComponent />
    <div class="divider-bottom"></div>
    <section class="second-section">
      <h1 class="mb-1">Salva a Sanctuary</h1>
      <h3 class="subtitle mw-800">Sanctuary vuelve a estar asediado por las hordas demoníacas y necesita tu ayuda para
        defenderse del ataque.</h3>
    </section>
    <section class="third-section">
      <h1 class="mb-1">... y a Richter</h1>
      <h3 class="subtitle mw-800">Camaradería y apoyo mutuo.</h3>
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
  padding-left: 1.1rem;
  padding-right: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
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
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.right-section {
  width: 100%;
  aspect-ratio: 16/9;
}

.warband {
  text-align: center;
  max-width: 500px;
  margin-top: 1rem;
}

.di-logo {
  width: 500px;
}

.subtitle {
  color: antiquewhite;
  font-weight: 400;
}

@media (max-width: 1100px) {
  .first-section {
    align-items: center;
    max-height: 800px;
    flex-direction: column;
  }

  .left-section {
    justify-content: center;
  }

  .right-section {
    display: none;
  }

  .di-logo {
    max-width: 420px;
  }

  .left-section {
    width: 100%;
    max-width: 400px;
  }

  .subtitle {
    font-size: 15px;
  }
}
</style>
