<script setup lang="ts">
import { ref, onMounted, Ref, computed, watch } from 'vue';
import { getShadowWarById, updateShadowWar, getClans, getMembers } from '../../../../middlewares/services';
import { Clan, Member, Match } from '../../../../interfaces/shadowWar';
import CreateClanModal from '../../admin/Clan/CreateClanModal.vue';
import ShadowWarMemberCard from './ShadowWarMemberCard.vue';
import MemberSelectionModal from './MemberSelectionModal.vue';
import SearchSelector from '../../Selectors/SearchSelector.vue';

const props = defineProps({
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

const assignedMemberIds = computed(() => {
  const ids = new Set<string>();
  for (const category of Object.values(battleCategories.value)) {
    for (const match of category) {
      for (const member of match.group1.member) {
        if (member?._id) ids.add(member._id);
      }
      for (const member of match.group2.member) {
        if (member?._id) ids.add(member._id);
      }
    }
  }
  return Array.from(ids);
});

onMounted(async () => {
  clans.value = await getClans();
  members.value = await getMembers();

  if (props.shadowWarId) {
    const shadowWar = await getShadowWarById(props.shadowWarId);
    if (shadowWar) {
      if (shadowWar.battle) {
        const { exalted, eminent, famed, proud } = shadowWar.battle;
        battleCategories.value.exalted = exalted || battleCategories.value.exalted;
        battleCategories.value.eminent = eminent || battleCategories.value.eminent;
        battleCategories.value.famed = famed || battleCategories.value.famed;
        battleCategories.value.proud = proud || battleCategories.value.proud;
      }

      if (shadowWar.enemyClan) {
        enemyClan.value = shadowWar.enemyClan._id;
      }
    }
  }
});

watch(enemyClan, (newValue, oldValue) => {
  console.log('enemyClan changed:', { oldValue, newValue }); // Debug log
  // Only update if the value actually changes and it's not the initial load
  if (newValue !== oldValue) {
    updateShadowWarData();
  }
});

const updateShadowWarData = async () => {
  console.log('updateShadowWarData called with enemyClan:', enemyClan.value); // Debug log
  const battleData = JSON.parse(JSON.stringify(battleCategories.value));
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

const unassignMember = (categoryName: keyof typeof battleCategories.value, group: 'group1' | 'group2', matchIndex: number, memberIndex: number) => {
  battleCategories.value[categoryName][matchIndex][group].member[memberIndex] = undefined;
  updateShadowWarData();
};

const handleClanCreated = async () => {
  clans.value = await getClans();
  showCreateClanModal.value = false;
};
</script>

<template>
  <div class="create-shadow-war-form">
    <div class="clan-selector-container">
      <div class="clan-selection-area">
        <SearchSelector v-model="enemyClan" :options="clans" label="Clan Enemigo:"
          placeholder="Buscar o seleccionar clan" @select="updateShadowWarData" />

        <div class="action-buttons">
          <button type="button" @click="showCreateClanModal = true" class="btn-create-clan">Crear Nuevo Clan</button>
        </div>
      </div>
    </div>

    <CreateClanModal v-if="showCreateClanModal" @close="showCreateClanModal = false" @clanCreated="handleClanCreated" />
    <MemberSelectionModal v-if="showMemberSelectionModal" :members="members" :assigned-member-ids="assignedMemberIds"
      @close="showMemberSelectionModal = false" @member-selected="handleMemberSelected" />

    <h3>Miembros de Batalla:</h3>
    <div v-for="(category, categoryName) in battleCategories" :key="categoryName">
      <h4>{{ categoryName.charAt(0).toUpperCase() + categoryName.slice(1) }}</h4>
      <div v-for="(match, matchIndex) in category" :key="matchIndex">
        <h5>Match {{ matchIndex + 1 }}</h5>
        <div class="match-groups">
          <div class="group">
            <label>Group 1</label>
            <div class="member-cards-grid">
              <ShadowWarMemberCard v-for="n in 4" :key="n" :member="match.group1.member[n - 1]"
                :show-unassign-button="!!match.group1.member[n - 1]"
                @click="openMemberSelection(categoryName, 'group1', matchIndex, n - 1)"
                @unassign="unassignMember(categoryName, 'group1', matchIndex, n - 1)" />
            </div>
          </div>
          <div class="group">
            <label>Group 2</label>
            <div class="member-cards-grid">
              <ShadowWarMemberCard v-for="n in 4" :key="n" :member="match.group2.member[n - 1]"
                :show-unassign-button="!!match.group2.member[n - 1]"
                @click="openMemberSelection(categoryName, 'group2', matchIndex, n - 1)"
                @unassign="unassignMember(categoryName, 'group2', matchIndex, n - 1)" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss" src="./CreateShadowWarForm.scss" />