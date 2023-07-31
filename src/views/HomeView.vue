<script setup>
import TabbableTextarea from '@/components/TabbableTextarea.vue'

import { ref } from 'vue'

const comment = ref('Type your comment...')
</script>

<template>
  <main>
    <TabbableTextarea style="width: 100%; height: 300px" v-model="comment" />
  </main>
</template>
