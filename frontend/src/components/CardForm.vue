<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="form.front" placeholder="Question" required>
    <textarea v-model="form.back" placeholder="Answer" required></textarea>
    <button type="submit">Save</button>
  </form>
</template>

<script setup>

import { ref } from 'vue'
import { useFlashcardStore } from '@/stores/flashcards'

const props = defineProps({
  card: { type: Object, default: null }
})

const store = useFlashcardStore()
const editing = ref(!!props.card)
const form = ref({
  front: props.card?.front || '',
  back: props.card?.back || ''
})

const handleSubmit = async () => {
  if (editing.value) {
    await store.updateCard(props.card.id, form.value)
  } else {
    await store.createCard(form.value)
    form.value = { front: '', back: '' } // Reset form
  }
}
</script>