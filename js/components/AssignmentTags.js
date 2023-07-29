export default {
  template: `<div class="flex gap-2">
    <button 
      v-for="(tag, idx) in tags" 
      :key="idx" 
      class="border border-white text-sm rounded px-2 py-px"
      :class="{
        'border-blue-500 text-blue-500': tag == currTag
      }"
      @click="$emit('update', tag)"
    >
      {{ tag }}
    </button>
  </div>`,
  props: {
    initialTags: Array,
    currTag: String,
  },
  computed: {
    tags() {
      return ['all', ...new Set(this.initialTags)]
    },
  },
}
