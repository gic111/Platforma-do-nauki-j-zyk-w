import { defineStore } from 'pinia'
import api from '@/api'

export const useFlashcardStore = defineStore('flashcards', {
  state: () => ({
    cards: [],
    loading: false
  }),
  actions: {
    async fetchCards () {
      this.loading = true
      this.cards = await api.get('/flashcards')
      this.loading = false
    },
    async createCard (card) {
      const newCard = await api.post('/flashcards', card)
      this.cards.push(newCard)
    },
    async updateCard (id, updates) {
      const updated = await api.put(`/flashcards/${id}`, updates)
      this.cards = this.cards.map(c => c.id === id ? updated : c)
    },
    async deleteCard (id) {
      await api.delete(`/flashcards/${id}`)
      this.cards = this.cards.filter(c => c.id !== id)
    }
  }
})