<style scoped lang="scss" src="./RequirementsComponent.scss" />

<script setup lang="ts">
import { useStore } from "../../../middlewares/store";
import diabloIcon from "../../../assets/svg/diablo-icon.svg";

const store = useStore();

</script>

<template>
  <div class="container-requirements-component">
    <div class="requirements-container d-flex col align-items-center">
      <span class="mb-3 mt-1">
        <img :src="diabloIcon" alt="icon" />
        <h1>Requisitos</h1>
      </span>

      <ul class="d-flex col w-100 mw-800">
        Los requisitos mínimos que pedimos a los miembros son los siguientes:
        <li>
          <p class="p-0 m-0 d-flex g-small">
            Paragón de <span class="featured-text">500</span>
          </p>
        </li>

        <li>
          <p class="p-0 m-0 d-flex g-small">
            Rango de Sombra
            <span class="featured-text">
              Cazador
            </span>
            (4ta semana del ciclo)
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
        <a class="button" target="_blank" href="https://chat.whatsapp.com/JKgACyEmmyx3HXsRf5SPlY">
          {{ store.currentUser?.logged ? "Ir a whatsapp" : "Solicitar ingreso" }}
        </a>
      </span>
      <p class="message-container mw-1250">
        <i>
          Los miembros que no cumplan los requerimientos serán expulsados del Clan y no se permitirá su reingreso hasta
          el siguiente Ciclo.
        </i>
      </p>
    </div>
  </div>
</template>
