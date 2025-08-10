<script setup lang="ts">
import { ref, defineProps, onMounted } from 'vue';
import { createShadowWar, getClans, getMembers } from '../../../../middlewares/services';

const props = defineProps({
  date: {
    type: Date,
    required: true,
  },
});

const clans = ref([]);
const members = ref([]);
const enemyClan = ref('');
const exalted = ref([]);
const eminent = ref([]);
const famed = ref([]);
const proud = ref([]);

onMounted(async () => {
  clans.value = await getClans();
  members.value = await getMembers();
});

const handleSubmit = async () => {
  const formData = {
    date: props.date,
    result: "pending", // Default result for new war
    enemyClan: enemyClan.value,
    battle: {
      exalted: { member: exalted.value },
      eminent: { member: eminent.value },
      famed: { member: famed.value },
      proud: { member: proud.value },
    },
    confirmed: [], // Initially empty
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

    <div>
      <h3>Miembros de Batalla:</h3>
      <div>
        <label for="exalted">Exaltados:</label>
        <select id="exalted" v-model="exalted" multiple>
          <option v-for="member in members" :key="member._id" :value="member._id">{{ member.name }}</option>
        </select>
      </div>
      <div>
        <label for="eminent">Eminentes:</label>
        <select id="eminent" v-model="eminent" multiple>
          <option v-for="member in members" :key="member._id" :value="member._id">{{ member.name }}</option>
        </select>
      </div>
      <div>
        <label for="famed">Famosos:</label>
        <select id="famed" v-model="famed" multiple>
          <option v-for="member in members" :key="member._id" :value="member._id">{{ member.name }}</option>
        </select>
      </div>
      <div>
        <label for="proud">Orgullosos:</label>
        <select id="proud" v-model="proud" multiple>
          <option v-for="member in members" :key="member._id" :value="member._id">{{ member.name }}</option>
        </select>
      </div>
    </div>

    <button type="submit">Crear Guerra Sombría</button>
  </form>
</template>