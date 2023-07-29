import AssignmentList from './AssignmentList.js'
import AssignmentCreate from './AssignmentCreate.js'

export default {
  components: {
    AssignmentList,
    AssignmentCreate,
  },
  template: `<section class="space-y-6">
    <assignment-list :assignments="filters.inProgress" title="In Progress"></assignment-list>
    <assignment-list :assignments="filters.completed" title="Completed"></assignment-list>
    <assignment-create @add="add"></assignment-create>
  </section>`,
  data() {
    return {
      assignments: [],
    }
  },
  computed: {
    filters() {
      return {
        inProgress: this.assignments.filter(
          (assignment) => !assignment.complete
        ),
        completed: this.assignments.filter((assignment) => assignment.complete),
      }
    },
  },
  created() {
    fetch('http://localhost:3000/assignments')
      .then((res) => res.json())
      .then((data) => (this.assignments = data))
  },
  methods: {
    add(newAssignment) {
      this.assignments.push({
        id: this.assignments.length + 1,
        name: newAssignment,
        complete: false,
        tag: 'physics',
      })
    },
  },
}
