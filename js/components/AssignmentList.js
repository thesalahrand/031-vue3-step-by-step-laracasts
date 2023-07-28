import AssignmentItem from './AssignmentItem.js'

export default {
  components: {
    AssignmentItem,
  },
  template: `<section class="mb-8" v-if="assignments.length">
    <h2 class="font-bold mb-2">{{ title }}</h2>
    <ul>
      <assignment-item v-for="assignment in assignments" :key="assignment.id" :assignment="assignment"></assignment-item>
    </ul>
  </section>`,
  props: {
    title: String,
    assignments: Array,
  },
}
