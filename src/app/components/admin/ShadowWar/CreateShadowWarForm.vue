<script setup lang="ts">
import { ref, defineProps, onMounted, Ref, PropType } from 'vue';
import { createShadowWar, getClans, getMembers } from '../../../../middlewares/services';
import { Clan, Member, Match } from '../../../../interfaces/shadowWar'; // Import interfaces

const props = defineProps({
  date: {
    type: Object as PropType<Date | null>, // Use Object as type, and then cast with PropType
    required: true,
  },
});

const clans: Ref<Clan[]> = ref([]);
const members: Ref<Member[]> = ref([]);
const enemyClan = ref('');

// Initialize battle categories with 3 matches each
const battleCategories = ref<{
  exalted: Match[];
  eminent: Match[];
  famed: Match[];
  proud: Match[];
}> ({
  exalted: Array(3).fill(null).map(() => ({ group1: { member: [] }, group2: { member: [] }, result: 'pending' })),
  eminent: Array(3).fill(null).map(() => ({ group1: { member: [] }, group2: { member: [] }, result: 'pending' })),
  famed: Array(3).fill(null).map(() => ({ group1: { member: [] }, group2: { member: [] }, result: 'pending' })),
  proud: Array(3).fill(null).map(() => ({ group1: { member: [] }, group2: { member: [] }, result: 'pending' })),
});

onMounted(async () => {
  clans.value = await getClans();
  members.value = await getMembers();
});

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
    <div>
      <label for="enemyClan">Clan Enemigo:</label>
      <select id="enemyClan" v-model="enemyClan" required>
        <option value="" disabled>Selecciona un clan</option>
        <option v-for="clan in clans" :key="clan._id" :value="clan._id">{{ clan.name }}</option>
      </select>
    </div>

    <h3>Miembros de Batalla:</h3>
    <div v-for="(category, categoryName) in battleCategories" :key="categoryName">
      <h4>{{ categoryName.charAt(0).toUpperCase() + categoryName.slice(1) }}</h4>
      <div v-for="(match, matchIndex) in category" :key="matchIndex">
        <h5>Match {{ matchIndex + 1 }}</h5>
        <div>
          <label>Group 1 (4 members):</label>
          <select v-model="match.group1.member" multiple>
            <option v-for="member in members" :key="member._id" :value="member._id">{{ member.name }}</option>
          </select>
        </div>
        <div>
          <label>Group 2 (4 members):</label>
          <select v-model="match.group2.member" multiple>
            <option v-for="member in members" :key="member._id" :value="member._id">{{ member.name }}</option>
          </select>
        </div>
      </div>
    </div>

    <button type="submit">Crear Guerra Sombría</button>
  </form>
</template>