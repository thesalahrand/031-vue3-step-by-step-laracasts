<script setup>
import CompA from './components/CompA.vue'
import { quizStore } from './stores/quizStore'
</script>

<template>
  <div>
    {{ quizStore.title }}
    <CompA />
  </div>
</template>

<style scoped></style>
