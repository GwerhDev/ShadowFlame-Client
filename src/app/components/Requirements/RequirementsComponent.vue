<style scoped lang="scss" src="./RequirementsComponent.scss" />

<script setup lang="ts">
import diabloIcon from "../../../assets/svg/diablo-icon.svg";

</script>

<template>
  <div class="container-requirements-component">
    <div class="requirements-container">
      <span class="mb-3 mt-1">
        <img :src="diabloIcon" alt="icon" />
        <h1>Requisitos</h1>
      </span>

      <ul class="d-flex col">
        <li>
          <p class="p-0 m-0 d-flex g-small">
            Paragón mínimo de <span class="featured-text">200</span>
          </p>
        </li>

        <li>
          <p class="p-0 m-0 d-flex g-small">
            Participación semanal en:
          </p>
          <p class="p-0 m-0 d-flex g-small">
            Guerra Sombría al menos
            <span class="featured-text">
              1 batalla por semana
            </span>
          </p>
        </li>

        <li>
          <p class="p-0 m-0 d-flex g-small">
            Asalto de la Bóveda al menos
            <span class="featured-text">
              3 veces a la semana
            </span>
          </p>
        </li>
        <li>
          <p class="p-0 m-0 d-flex g-small">
            Torres Malditas
            <span class="featured-text">
              jueves y/o sábado
            </span>
          </p>
        </li>

        <li>
          <p class="p-0 m-0 d-flex g-small">
            Rango de Sombra mínimo de
            <span class="featured-text">
              Fantasma
            </span>
            (ciclo)
          </p>
        </li>
        <li>
          <p class="p-0 m-0 d-flex g-small">
            Inactividad máxima de
            <span class="featured-text">
              7 días
            </span>
          </p>
        </li>

        <li>
          <p class="p-0 m-0 d-flex g-small">
            Ingresar a grupo de
            <span class="featured-text">
              Whatsapp
            </span>

          </p>
        </li>
      </ul>
      <span class="mt-1">
        <a class="button" target="_blank" href="https://chat.whatsapp.com/JKgACyEmmyx3HXsRf5SPlY">Solicitar ingreso</a>
      </span>
      <p class="message-container">
        Los miembros que no cumplan los requerimientos serán expulsados del Clan y no se permitirá su reingreso hasta
        el siguiente Ciclo.
      </p>
    </div>
  </div>
</template>