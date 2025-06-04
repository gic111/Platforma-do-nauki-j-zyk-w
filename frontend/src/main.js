import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // If using vue-router

const app = createApp(App)
app.use(router) // If using router
app.mount('#app')