<script setup>
import CompA from './components/CompA.vue'
import { quizStore } from './stores/quizStore'
import { useCounterStore } from './stores/counterStore'

const counter = useCounterStore()
</script>

<template>
  <div>
    {{ counter.count }}

    <button @click="counter.increment()" :disabled="!counter.remaining">
      Increment ({{ counter.remaining }} remaining)
    </button>
  </div>
</template>

<style scoped></style>
