<script setup lang="ts">
import { computed } from 'vue';
import * as ShadowWarInterfaces from '../../../interfaces/shadowWar';
import PublicShadowWarMemberCard from './PublicShadowWarMemberCard.vue';
import { useStore } from '../../../middlewares/store';
import MemberCardSkeleton from '../common/MemberCardSkeleton.vue';

const store: any = useStore();

const props = defineProps({
  activeTab: {
    type: String,
    required: true
  },
  loading: {
    type: Boolean,
    required: true
  }
});

const activeCategory = computed(() => props.activeTab);
const shadowWarData = computed(() => store.currentUser.shadowWarData);
const error = computed(() => store.currentUser.shadowWarError);

const getPaddedMembers = (members: ShadowWarInterfaces.Member[] | undefined) => {
  const padded: (ShadowWarInterfaces.Member | undefined)[] = members ? [...members] : [];
  const missingMembers = 4 - padded.length;
  if (missingMembers > 0) {
    return padded.concat(Array(missingMembers).fill(undefined));
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
          <div v-if="activeCategory === String(categoryName)" class="category">
            <h3>{{ String(categoryName).charAt(0).toUpperCase() + String(categoryName).slice(1) }}</h3>
            <div v-if="category.length === 0">
              <p>No hay partidas asignadas para esta categoría.</p>
            </div>
            <div v-else>
              <div class="matches-row-container">
                <div v-for="(match, matchIndex) in category" :key="matchIndex" class="match">
                  <h4>Match {{ matchIndex + 1 }}</h4>
                  <div class="match-groups">
                    <div class="group">
                      <h5>Grupo 1</h5>
                      <div class="member-cards-grid">
                        <template v-if="loading">
                          <MemberCardSkeleton />
                        </template>
                        <template v-else>
                          <PublicShadowWarMemberCard v-for="(member, index) in getPaddedMembers(match.group1.member)" :key="index" :member="member" />
                        </template>
                      </div>
                    </div>
                    <div class="group">
                      <h5>Grupo 2</h5>
                      <div class="member-cards-grid">
                        <template v-if="loading">
                          <MemberCardSkeleton />
                        </template>
                        <template v-else>
                          <PublicShadowWarMemberCard v-for="(member, index) in getPaddedMembers(match.group2.member)" :key="index" :member="member" />
                        </template>
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
  </div>
</template>

<style scoped lang="scss" src="./PublicShadowWar.scss" />