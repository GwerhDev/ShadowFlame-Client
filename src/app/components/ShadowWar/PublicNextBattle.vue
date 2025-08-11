<script setup lang="ts">
import { ref, onMounted, Ref } from 'vue';
import { getNextShadowWar } from '../../../middlewares/services'; // Import the new service
import * as ShadowWarInterfaces from '../../../interfaces/shadowWar';
import PublicShadowWarMemberCard from './PublicShadowWarMemberCard.vue';
import PublicShadowWarLateralMenu from './PublicShadowWarLateralMenu.vue';
import diabloIcon from '../../../assets/svg/diablo-icon.svg';

// This line will make TypeScript happy by "using" the imported component
PublicShadowWarMemberCard;

// Explicitly use Match in a type definition for a variable that is actually used
type ShadowWarWithMatch = ShadowWarInterfaces.ShadowWar & { battle: { exalted: ShadowWarInterfaces.Match[], eminent: ShadowWarInterfaces.Match[], famed: ShadowWarInterfaces.Match[], proud: ShadowWarInterfaces.Match[] } };

const nextWarDate = ref('');
const shadowWar: Ref<ShadowWarWithMatch | null> = ref(null);
const error: Ref<string | null> = ref(null);
const activeCategory = ref('exalted');

onMounted(async () => {
  try {
    const fetchedShadowWar = await getNextShadowWar();
    if (fetchedShadowWar) {
      shadowWar.value = fetchedShadowWar as ShadowWarWithMatch;
      // Update nextWarDate based on fetched data, assuming it has a date property
      if (shadowWar.value.date) {
        nextWarDate.value = new Date(shadowWar.value.date).toLocaleString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' });
      }
    }
  } catch (e: any) {
    error.value = e.message;
  }
});
const getPaddedMembers = (members: ShadowWarInterfaces.Member[] | undefined) => {
  const padded = members ? [...members] : [];
  while (padded.length < 4) {
    padded.push(undefined);
  }
  return padded;
};
</script>

<template>
  <div class="public-next-battle">
    <div class="sw-container"> <!-- Added sw-container -->
      <span class="mb-3 mt-1">
        <img :src="diabloIcon" alt="icon" />
        <h1>Próxima Batalla</h1>
      </span>
      <p>La próxima Guerra Sombría es el {{ nextWarDate }}h (hora del servidor).</p>

      <div v-if="error">
        <p>Ha ocurrido un error:</p>
        <pre>{{ error }}</pre>
      </div>

      <div v-if="shadowWar && shadowWar.battle" class="main-content-wrapper">
        <PublicShadowWarLateralMenu
          v-if="shadowWar && shadowWar.battle"
          :battleCategories="shadowWar.battle"
          :activeCategory="activeCategory"
          @update:activeCategory="activeCategory = $event"
        />

        <div class="content-section">
          <div v-for="(category, categoryName) in shadowWar.battle" :key="categoryName">
            <div v-if="activeCategory === categoryName" class="category">
              <h3>{{ categoryName.charAt(0).toUpperCase() + categoryName.slice(1) }}</h3>
              <div v-for="(match, matchIndex) in category" :key="matchIndex" class="match">
                <h4>Match {{ matchIndex + 1 }}</h4>
                <div class="match-groups">
                  <div class="group">
                    <h5>Grupo 1</h5>
                    <div class="member-cards-grid">
                      <PublicShadowWarMemberCard v-for="(member, index) in getPaddedMembers(match.group1.member)" :key="index" :member="member" />
                    </div>
                  </div>
                  <div class="group">
                    <h5>Grupo 2</h5>
                    <div class="member-cards-grid">
                      <PublicShadowWarMemberCard v-for="(member, index) in getPaddedMembers(match.group2.member)" :key="index" :member="member" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss" src="./PublicNextBattle.scss" />