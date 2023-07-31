<script setup>
import { useFlash } from '@/composables/useFlash'

const { flash } = useFlash()
</script>

<template>
  <div class="about">
    <button @click="flash('Here\'s the title!', '...and here\'s the text!')">Click Me</button>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
