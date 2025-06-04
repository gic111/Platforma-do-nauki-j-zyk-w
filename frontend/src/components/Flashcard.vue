<template>
  <div
    class="flashcard"
    :class="{ flipped }"
    @click="flipCard"
  >
    <div class="front">
      {{ card.front }}
    </div>
    <div class="back">
      {{ card.back }}
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
defineProps(['card'])
const flipped = ref(false)
</script>

<style scoped>
.flashcard {
  width: 300px;
  height: 200px;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}
.flipped { transform: rotateY(180deg); }
</style>