import AssignmentItem from './AssignmentItem.js'
import AssignmentTags from './AssignmentTags.js'
import Panel from './Panel.js'

export default {
  components: {
    AssignmentItem,
    AssignmentTags,
    Panel,
  },
  template: `<panel v-if="assignments.length">
    <div class="flex justify-between items-start">
      <h2 class="font-bold mb-2">{{ title }} ({{ assignments.length }})</h2>
      <button v-if="canToggle" @click="$emit('toggle')">&times;</button>
    </div>
    <assignment-tags 
      v-model:currTag="currTag"
      :initial-tags="this.assignments.map((assignment) => assignment.tag)"
    ></assignment-tags>
    <ul class="border border-gray-600 divide-y divide-gray-600 mt-6">
      <assignment-item v-for="assignment in filteredAssignments" :key="assignment.id" :assignment="assignment"></assignment-item>
    </ul>
    <slot></slot>
    <template v-slot:footer>
      This is just a test footer...
    </template>
  </panel>`,
  props: {
    title: String,
    assignments: Array,
    canToggle: { type: Boolean, default: false },
  },
  data() {
    return {
      currTag: 'all',
    }
  },
  computed: {
    filteredAssignments() {
      return this.assignments.filter(
        (assignment) => this.currTag == 'all' || this.currTag == assignment.tag
      )
    },
  },
}
