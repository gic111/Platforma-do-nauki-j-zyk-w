<template>
  <div
    class="home"
  >
    <h1>Welcome to the Flashcard App</h1>
    <router-link
      to="/cards"
      class="btn"
    >
      View Flashcards
    </router-link>
  </div>
</template>

<script setup>
// No need for separate script section in Vue 3 <script setup>
</script>

<style scoped>
.home {
  text-align: center;
  padding: 2rem;
}
.btn {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background: #42b983;
  color: white;
  text-decoration: none;
  border-radius: 4px;
}
</style>