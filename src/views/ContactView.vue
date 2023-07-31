<script setup>
import { useFlash } from '@/composables/useFlash'

const { flash } = useFlash()
</script>

<template>
  <div class="contact">
    <button @click="flash('Good job!', 'You clicked me!', 'info')">Click Me</button>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .contact {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
