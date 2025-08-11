<script setup lang="ts">
import { watch } from 'vue';
import * as ShadowWarInterfaces from '../../../interfaces/shadowWar';
import PublicShadowWarMemberCard from './PublicShadowWarMemberCard.vue';
import { useStore } from '../../../middlewares/store';

const store: any = useStore();

// This line will make TypeScript happy by "using" the imported component
PublicShadowWarMemberCard;

// Explicitly use Match in a type definition for a variable that is actually used
type ShadowWarWithMatch = ShadowWarInterfaces.ShadowWar & { battle: { exalted: ShadowWarInterfaces.Match[], eminent: ShadowWarInterfaces.Match[], famed: ShadowWarInterfaces.Match[], proud: ShadowWarInterfaces.Match[] } };

// Access store properties directly
const activeCategory = store.publicNextBattleTab;
const shadowWarData = store.currentUser.shadowWarData;
const error = store.currentUser.shadowWarError;

watch(() => store.publicNextBattleTab, (newVal, oldVal) => {
  console.log('activeCategory changed:', oldVal, '->', newVal);
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
    <div v-if="error">
      <p>Ha ocurrido un error:</p>
      <pre>{{ error }}</pre>
    </div>

    <div v-if="shadowWarData && shadowWarData.battle" class="main-content-wrapper">
      <div class="content-section">
        <div v-for="(category, categoryName) in shadowWarData.battle" :key="categoryName">
          <div v-if="activeCategory === categoryName" class="category">
            <h3>{{ categoryName.charAt(0).toUpperCase() + categoryName.slice(1) }}</h3>
            <p>Category Data:</p>
            <pre>{{ category }}</pre>
            <div v-if="category.length === 0">
              <p>No hay partidas asignadas para esta categoría.</p>
            </div>
            <div v-else>
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

<style scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
}

h2 {
  margin-bottom: 1rem;
}

p {
  margin-bottom: 0.5rem;
}
</style>
