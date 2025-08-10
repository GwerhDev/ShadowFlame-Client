<script setup lang="ts">
import { ref, defineProps, onMounted, Ref, PropType } from 'vue';
import { createShadowWar, getClans, getMembers } from '../../../../middlewares/services';
import { Clan, Member, Match } from '../../../../interfaces/shadowWar'; // Import interfaces
import TableComponent from '../../Tables/TableComponent.vue'; // Import TableComponent
import CreateClanModal from '../../admin/Clan/CreateClanModal.vue'; // Import CreateClanModal

const props = defineProps({
  date: {
    type: Object as PropType<Date | null>, // Use Object as type, and then cast with PropType
    required: true,
  },
});

const clans: Ref<Clan[]> = ref([]);
const members: Ref<Member[]> = ref([]);
const enemyClan = ref('');

// Ref for modal visibility
const showCreateClanModal = ref(false);

// Initialize battle categories with 3 matches each
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

const updateMemberDetails = (selectedMember: Member, categoryName: keyof typeof battleCategories.value, group: 'group1' | 'group2', matchIndex: number, memberIndex: number) => {
  if (selectedMember) {
    battleCategories.value[categoryName][matchIndex][group].member[memberIndex] = selectedMember;
  } else {
    battleCategories.value[categoryName][matchIndex][group].member[memberIndex] = undefined as any;
  }
};

const handleClanCreated = async () => {
  clans.value = await getClans(); // Refresh clan list
  showCreateClanModal.value = false; // Close modal
};

const handleSubmit = async () => {
  const formData = {
    date: props.date,
    result: "pending",
    enemyClan: enemyClan.value,
    battle: battleCategories.value,
    confirmed: [],
  };
  await createShadowWar(formData);
};
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <div class="clan-selector-container">
      <div>
        <label for="enemyClan">Clan Enemigo:</label>
        <select id="enemyClan" v-model="enemyClan" required>
          <option value="" disabled>Selecciona un clan</option>
          <option v-for="clan in clans" :key="clan._id" :value="clan._id">{{ clan.name }}</option>
        </select>
      </div>
      <button type="button" @click="showCreateClanModal = true">Crear Clan</button>
    </div>

    <CreateClanModal v-if="showCreateClanModal" @close="showCreateClanModal = false" @clanCreated="handleClanCreated" />

    <h3>Miembros de Batalla:</h3>
    <div v-for="(category, categoryName) in battleCategories" :key="categoryName">
      <h4>{{ categoryName.charAt(0).toUpperCase() + categoryName.slice(1) }}</h4>
      <div v-for="(match, matchIndex) in category" :key="matchIndex">
        <h5>Match {{ matchIndex + 1 }}</h5>
        <div class="match-groups">
          <div class="group">
            <label>Group 1 (4 members):</label>
            <TableComponent :nav-items="['personaje', 'clase', 'resonancia']">
              <li>
                <div v-for="n in 4" :key="n" class="table-row">
                  <span>
                    <select v-model="match.group1.member[n - 1]"
                      @change="updateMemberDetails(match.group1.member[n - 1], categoryName, 'group1', matchIndex, n - 1)">
                      <option :value="undefined" disabled>Selecciona un personaje</option>
                      <option v-for="member in members" :key="member._id" :value="member">{{ member.character }}
                      </option>
                    </select>
                  </span>
                  <span>{{ match.group1.member[n - 1]?.class || 'N/A' }}</span>
                  <span>{{ match.group1.member[n - 1]?.resonance || 'N/A' }}</span>
                </div>
              </li>
            </TableComponent>
          </div>
          <div class="group">
            <label>Group 2 (4 members):</label>
            <TableComponent :nav-items="['Personaje', 'Clase', 'Resonancia']">
              <div v-for="n in 4" :key="n" class="table-row">
                <select v-model="match.group2.member[n - 1]"
                  @change="updateMemberDetails(match.group2.member[n - 1], categoryName, 'group2', matchIndex, n - 1)">
                  <option :value="undefined" disabled>Selecciona un personaje</option>
                  <option v-for="member in members" :key="member._id" :value="member">{{ member.character }}</option>
                </select>
                <span>{{ match.group2.member[n - 1]?.class || 'N/A' }}</span>
                <span>{{ match.group2.member[n - 1]?.resonance || 'N/A' }}</span>
              </div>
            </TableComponent>
          </div>
        </div>
      </div>
    </div>

    <button type="submit">Crear Guerra Sombría</button>
  </form>
</template>