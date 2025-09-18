<template>
  <div class="modal-overlay" @click.self="closeModal">
    <div class="modal-container">
      <div class="modal-header">
        <h3>Vincular Miembros a {{ userName }}</h3>
        <button @click="closeModal" class="close-button">&times;</button>
      </div>
      <div class="modal-body">
        <div v-if="loading" class="loader">Cargando miembros...</div>
        <div v-else class="members-list">
          <div v-for="member in allMembers" :key="member._id" class="member-item">
            <input
              type="checkbox"
              :id="member._id"
              :value="member._id"
              v-model="selectedMemberIds"
            />
            <label :for="member._id">{{ member.character }}</label>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button @click="saveSelection" class="button primary-button">Guardar</button>
        <button @click="closeModal" class="button secondary-button">Cancelar</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineProps, defineEmits, watch } from 'vue';
import { getMembers } from '../../../../middlewares/services';
import type { Member } from '../../../../interfaces/shadowWar';

const props = defineProps<{
  initialSelectedIds: string[];
  userName: string;
}>();

const emits = defineEmits<{'close': [], 'save': [selectedIds: string[]]}>();

const allMembers = ref<Member[]>([]);
const selectedMemberIds = ref<string[]>([]);
const loading = ref(true);

onMounted(async () => {
  try {
    const response = await getMembers();
    allMembers.value = response;
  } catch (error) {
    console.error("Error fetching clan members:", error);
  } finally {
    loading.value = false;
  }
});

watch(() => props.initialSelectedIds, (newVal) => {
  selectedMemberIds.value = [...newVal];
}, { immediate: true });

const closeModal = () => {
  emits('close');
};

const saveSelection = () => {
  emits('save', selectedMemberIds.value);
  closeModal();
};
</script>

<style lang="scss" scoped>
@import './LinkMemberModal.scss';
</style>
