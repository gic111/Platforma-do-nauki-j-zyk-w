<template>
  <div>
    <div v-for="card in cards" :key="card.id" class="card">
      <h3>{{ card.front }}</h3>
      <p>{{ card.back }}</p>
      <button @click="editCard(card)">Edit</button>
      <button @click="deleteCard(card.id)">Delete</button>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useFlashcardStore } from '@/stores/flashcards'
import { storeToRefs } from 'pinia'

const store = useFlashcardStore()
const { cards, loading } = storeToRefs(store)

// Fetch cards on mount
onMounted(() => store.fetchCards())

const deleteCard = async (id) => {
  if (confirm('Delete this card?')) {
    await store.deleteCard(id)
  }
}
</script>