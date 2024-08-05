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

      <ul>
        <li>
          Paragón mínimo de 
          200
          .
        </li>
        <li>
          Participación semanal en Guerra Sombría al menos
          1
          batalla por semana.
        </li>
        <li>
          Participación semanal en Asalto de la Bóveda al menos 
          3 veces 
          a la semana.
        </li>
        <li>
          Participación semanal en Torres Malditas 
          cuando sea necesario
          .
        </li>
        <li>
          Rango de Sombra mínimo de 
          Fantasma 
          al acabar cada ciclo.
        </li>
        <li>
          Inactividad máxima de 
          7 días
          .
        </li>
        <li>
          Ingresar a grupo de Whatsapp.
        </li>
      </ul>
      <p>
        Los miembros que no cumplan los requerimientos serán expulsados del Clan y no se permitirá su reingreso hasta
        el siguiente Ciclo.
      </p>
    </div>
  </div>
</template>