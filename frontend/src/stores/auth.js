import { defineStore } from 'pinia'
import api from '@/api'
import router from '@/router'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    returnUrl: null
  }),
  actions: {
    async login (username, password) {
      const user = await api.post('/login', { username, password })
      this.user = user
      router.push(this.returnUrl || '/')
    }
  }
})