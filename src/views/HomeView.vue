<script setup>
import { useStorage } from '@/composables/useStorage'

const food = useStorage('food', 'salad')
const age = useStorage('age')
</script>

<template>
  <main>
    <p>
      What's your favorite food?
      <input type="text" v-model="food" />
    </p>
    <p>
      What's your age?
      <input type="text" v-model="age" />
    </p>
  </main>
</template>
