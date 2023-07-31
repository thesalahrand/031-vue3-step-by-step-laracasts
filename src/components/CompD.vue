<script setup>
import { quizStore } from '../stores/quizStore'
</script>

<template>
  <div>
    {{ quizStore.title }}
    <button @click="quizStore.title = 'Basic Quiz App Updated!'">
      Click Me
    </button>
  </div>
</template>

<style scoped></style>
