<template>
  <div>
    <h1>Flashcards</h1>
    <CardForm @submit="handleSubmit" />
    <CardList />
    <ReviewCard v-if="reviewMode" />
    <button @click="reviewMode = !reviewMode">
      {{ reviewMode ? 'Exit Review' : 'Start Review' }}
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useFlashcardStore } from '@/stores/flashcards';

const store = useFlashcardStore();
const reviewMode = ref(false);

onMounted(() => store.fetchCards());

const handleSubmit = (cardData) => {
  if (editingId.value) {
    store.updateCard(editingId.value, cardData);
  } else {
    store.createCard(cardData);
  }
};
</script>