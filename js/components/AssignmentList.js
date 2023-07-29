import AssignmentItem from './AssignmentItem.js'

export default {
  components: {
    AssignmentItem,
  },
  template: `<section v-if="assignments.length">
    <h2 class="font-bold mb-2">{{ title }} ({{ assignments.length }})</h2>
    <div class="flex gap-2">
      <button 
        v-for="(tag, idx) in tags" 
        :key="idx" 
        class="border border-white text-sm rounded px-2 py-px"
        :class="{
          'border-blue-500 text-blue-500': tag == currTag
        }"
        @click="currTag = tag"
      >
        {{ tag }}
      </button>
    </div>
    <ul class="border border-gray-600 divide-y divide-gray-600 mt-6">
      <assignment-item v-for="assignment in filteredAssignments" :key="assignment.id" :assignment="assignment"></assignment-item>
    </ul>
  </section>`,
  props: {
    title: String,
    assignments: Array,
  },
  data() {
    return {
      currTag: 'all',
    }
  },
  computed: {
    tags() {
      return [
        'all',
        ...new Set(this.assignments.map((assignment) => assignment.tag)),
      ]
    },
    filteredAssignments() {
      return this.assignments.filter(
        (assignment) => this.currTag == 'all' || this.currTag == assignment.tag
      )
    },
  },
}
