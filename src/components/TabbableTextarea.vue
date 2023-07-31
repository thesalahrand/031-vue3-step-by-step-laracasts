<script setup>
defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])
function onTabPress(e) {
  const textarea = e.target

  const value = textarea.value,
    start = textarea.selectionStart,
    end = textarea.selectionEnd

  textarea.value = value.substring(0, start) + '\t' + value.substring(end)

  textarea.selectionStart = textarea.selectionEnd = start + 1
}
</script>

<template>
  <textarea
    @keydown.tab.prevent="onTabPress"
    v-text="modelValue"
    @keyup="emit('update:modelValue', $event.target.value)"
  ></textarea>
</template>
