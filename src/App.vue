<script setup>
import { ref, provide } from 'vue'
import CompA from './components/CompA.vue'

const title = ref('Hello World!')

provide('title', {
  title: title,
  changeTitle: (newTitle) => (title.value = newTitle),
})
</script>

<template>
  <div>
    <CompA />
    {{ title }}
  </div>
</template>

<style scoped></style>
