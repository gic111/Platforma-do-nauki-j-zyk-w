<template>
  <div class="card-list">
    <h1>Your Flashcards</h1>
    <router-link
      to="/"
      class="btn"
    >
      Back Home
    </router-link>

    <!-- We'll add the actual card list later -->
    <div class="cards-container">
      <p>Flashcards will appear here</p>
    </div>
  </div>
</template>

<script setup>
// Will add Pinia store integration later
</script>

<style scoped>
.card-list {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}
</style>