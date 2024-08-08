<style scoped lang="scss" src="./GuidesCrests.scss" />
<script setup lang="ts">
import { ref, Ref } from 'vue';
import { useStore } from '../../../middlewares/store';
import rareCrest from '../../../assets/webp/rare-crest.webp';
import legendaryCrest from '../../../assets/webp/legendary-crest.webp';
import eternalLegendaryCrest from '../../../assets/webp/eternal-legendary-crest.webp';

const store: any = useStore();
const date: Ref<string> = ref(new Date().toISOString().substring(0, 10));

const quantity: Ref<any> = ref({
  rare: 0,
  legendary: 0,
  eternalLegendary: 0,
});

function handleQuantity(e: Event) {
  const target = e.target as HTMLInputElement;
  quantity.value[target.name] = parseInt(target.value, 10) || 0;
};

/* function handleSave(e: Event) {
  e.preventDefault();

  const formDataRare: object = {
    type: "rare", 
    date, 
    quantity: quantity.value.rare,
    legendaryFound: false, 
    character: store.currentCharacter
  };

  const formDataLegendary: object = {
    type: "legendary", 
    date, 
    quantity: quantity.value.legendary,
    legendaryFound: false, 
    character: store.currentCharacter
  };

  const formDataEternalLegendary: object = {
    type: "eternalLegendary", 
    date, 
    quantity: quantity.value.eternalLegendary,
    legendaryFound: false,
    character: store.currentCharacter
  };
}; */

</script>

<template>
  <section class="container-crests">
    <div class="inner-container">
      <div class="filter-container d-flex col g-1 w-100">
        <input :value="date" type="date" @input="" v-if="store?.currentUser?.logged" />
        <ul class="form-container">
          <li class="d-flex col g-1">
            <div class="crest-form rare">
              <span>
                <label for="rare">Cimera Rara</label>
                <input name="rare" min="0" max="100" @input="handleQuantity" type="number">
              </span>
            </div>
            <div class="crest-form legendary">
              <span>
                <label for="legendary">Cimera Legendaria</label>
                <input name="legendary" min="0" max="100" @input="handleQuantity" type="number">
              </span>
              <span class="d-flex align-items-center">
                <label for="legendary-found-checkbox">Gema Legendaria encontrada</label>
                <input name="legendary-found-checkbox" type="checkbox" />
              </span>
            </div>

            <div class="crest-form eternal-legendary">
              <span>
                <label for="eternalLegendary">Cimera Legendaria Eterna</label>
                <input name="eternalLegendary" min="0" max="100" @input="handleQuantity" type="number">
              </span>
              <span class="d-flex align-items-center">
                <label for="legendary-found-checkbox">Gema Legendaria encontrada</label>
                <input name="legendary-found-checkbox" type="checkbox" />
              </span>
            </div>
          </li>
        </ul>
        <span class="d-flex g-1 p-1">
          <button @click="">Guardar</button>
        </span>
      </div>
      <div class="crest-img-container">
        <span>
          <img v-for="n in quantity.rare" :key="n" :src="rareCrest" alt="">
        </span>
        <span>
          <img v-for="n in quantity.legendary" :key="n" :src="legendaryCrest" alt="">
        </span>
        <span>
          <img v-for="n in quantity.eternalLegendary" :key="n" :src="eternalLegendaryCrest" alt="">
        </span>
      </div>
    </div>
  </section>
</template>
