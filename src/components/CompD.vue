<script setup>
import { inject } from 'vue'

const { title, changeTitle } = inject('title')
</script>

<template>
  <div>{{ title }}</div>
  <button @click="changeTitle('Bye Bye, Good Bye!')">Change</button>
</template>

<style scoped></style>
