<script setup>
import { ref, onMounted } from 'vue'
const message = ref('Hello World!')

onMounted(() => {
  message.value = 'Bye world!'
})
</script>

<template>
  <main>
    <input type="text" v-model="message" />
    {{ message }}
  </main>
</template>
