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
          Paragón mínimo de <span class="variable-value"> {{ 200 }} </span>.
        </li>
        <li>
          Participación semanal en Guerra Sombría al menos
          <span class="variable-value">1</span>
          batalla por semana.
        </li>
        <li>
          Participación semanal en Asalto de la Bóveda al menos <span class="variable-value">3 veces</span> a la semana.
        </li>
        <li>
          Participación semanal en Torres Malditas <span class="variable-value">cuando sea necesario</span>.
        </li>
        <li>
          Rango de Sombra mínimo de <span class="variable-value">Fantasma</span> al acabar cada ciclo.
        </li>
        <li>
          Inactividad máxima de <span class="variable-value">7</span> días
        </li>
        <li>
          Ingresar a grupo de Whatsapp
        </li>
      </ul>
      <p>
        Los miembros que no cumplan los requerimientos serán expulsados del Clan y no se permitirá su reingreso hasta
        el siguiente Ciclo.
      </p>
    </div>
  </div>
</template>