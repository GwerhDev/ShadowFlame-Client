<script setup lang="ts">
import { ref, defineProps, onMounted, Ref, PropType } from 'vue';
import { updateShadowWar, getClans, getMembers } from '../../../../middlewares/services';
import { Clan, Member, Match } from '../../../../interfaces/shadowWar';
import CreateClanModal from '../../admin/Clan/CreateClanModal.vue';
import ShadowWarMemberCard from './ShadowWarMemberCard.vue';
import MemberSelectionModal from './MemberSelectionModal.vue';

const props = defineProps({
  date: {
    type: Object as PropType<Date | null>,
    required: true,
  },
  shadowWarId: {
    type: String,
    required: true,
  }
});

const clans: Ref<Clan[]> = ref([]);
const members: Ref<Member[]> = ref([]);
const enemyClan = ref('');
const showCreateClanModal = ref(false);
const showMemberSelectionModal = ref(false);
const currentSelectionContext = ref<{
  categoryName: keyof typeof battleCategories.value;
  group: 'group1' | 'group2';
  matchIndex: number;
  memberIndex: number;
} | null>(null);

const battleCategories = ref<{
  exalted: Match[];
  eminent: Match[];
  famed: Match[];
  proud: Match[];
}>({
  exalted: Array(3).fill(null).map(() => ({ group1: { member: Array(4).fill(undefined) }, group2: { member: Array(4).fill(undefined) }, result: 'pending' })),
  eminent: Array(3).fill(null).map(() => ({ group1: { member: Array(4).fill(undefined) }, group2: { member: Array(4).fill(undefined) }, result: 'pending' })),
  famed: Array(3).fill(null).map(() => ({ group1: { member: Array(4).fill(undefined) }, group2: { member: Array(4).fill(undefined) }, result: 'pending' })),
  proud: Array(3).fill(null).map(() => ({ group1: { member: Array(4).fill(undefined) }, group2: { member: Array(4).fill(undefined) }, result: 'pending' })),
});

onMounted(async () => {
  clans.value = await getClans();
  members.value = await getMembers();
});

const updateShadowWarData = async () => {
  const battleData = JSON.parse(JSON.stringify(battleCategories.value));
  // ... (rest of the function is the same)
  const formData = {
    enemyClan: enemyClan.value,
    battle: battleData,
  };
  await updateShadowWar(props.shadowWarId, formData);
};

const openMemberSelection = (categoryName: keyof typeof battleCategories.value, group: 'group1' | 'group2', matchIndex: number, memberIndex: number) => {
  currentSelectionContext.value = { categoryName, group, matchIndex, memberIndex };
  showMemberSelectionModal.value = true;
};

const handleMemberSelected = (selectedMember: Member) => {
  if (currentSelectionContext.value) {
    const { categoryName, group, matchIndex, memberIndex } = currentSelectionContext.value;
    battleCategories.value[categoryName][matchIndex][group].member[memberIndex] = selectedMember;
    updateShadowWarData();
  }
  showMemberSelectionModal.value = false;
};

const handleClanCreated = async () => {
  clans.value = await getClans();
  showCreateClanModal.value = false;
};
</script>

<template>
  <div>
    <div class="clan-selector-container">
      <label for="enemyClan">Clan Enemigo:</label>
      <select id="enemyClan" v-model="enemyClan" @change="updateShadowWarData" required>
        <option value="">Clan no definido</option>
        <option v-for="clan in clans" :key="clan._id" :value="clan._id">{{ clan.name }}</option>
      </select>
      <button type="button" @click="showCreateClanModal = true">Crear Clan</button>
    </div>

    <CreateClanModal v-if="showCreateClanModal" @close="showCreateClanModal = false" @clanCreated="handleClanCreated" />
    <MemberSelectionModal 
      v-if="showMemberSelectionModal" 
      :members="members" 
      @close="showMemberSelectionModal = false" 
      @member-selected="handleMemberSelected" 
    />

    <h3>Miembros de Batalla:</h3>
    <div v-for="(category, categoryName) in battleCategories" :key="categoryName">
      <h4>{{ categoryName.charAt(0).toUpperCase() + categoryName.slice(1) }}</h4>
      <div v-for="(match, matchIndex) in category" :key="matchIndex">
        <h5>Match {{ matchIndex + 1 }}</h5>
        <div class="match-groups">
          <div class="group">
            <label>Group 1</label>
            <div class="member-cards-grid">
              <ShadowWarMemberCard 
                v-for="n in 4" 
                :key="n" 
                :member="match.group1.member[n - 1]" 
                @click="openMemberSelection(categoryName, 'group1', matchIndex, n - 1)"
              />
            </div>
          </div>
          <div class="group">
            <label>Group 2</label>
            <div class="member-cards-grid">
              <ShadowWarMemberCard 
                v-for="n in 4" 
                :key="n" 
                :member="match.group2.member[n - 1]" 
                @click="openMemberSelection(categoryName, 'group2', matchIndex, n - 1)"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss" src="./CreateShadowWarForm.scss" />
<style scoped lang="scss">
.member-cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}
</style>
