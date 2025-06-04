import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import CardList from '@/views/CardList.vue'
import Flashcard from '@/views/Flashcard.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/cards', component: CardList }
    {path: '/flashcard', component: Flashcard }
  ]
})

export default router