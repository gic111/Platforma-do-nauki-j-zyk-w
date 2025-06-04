<template>
  <div
    v-for="card in cards"
    :key="card.id"
  >
    <input
      v-model="card.front"
      placeholder="Question"
    >
    <input
      v-model="card.back"
      placeholder="Answer"
    >
  </div>
  <button @click="saveCards">
    Save
  </button>
</template>

<script setup>
import { ref } from 'vue'
import api from '@/api' 
import { useFlashcardStore } from '@/stores/flashcards'

const cards = ref([{ id: 1, front: '', back: '' }])
const saveCards = () => api.post('/cards', cards.value)
</script>