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
      assignments: [
        { id: 1, name: 'Assignment 01', complete: false, tag: 'math' },
        { id: 2, name: 'Assignment 02', complete: false, tag: 'physics' },
        { id: 3, name: 'Assignment 03', complete: false, tag: 'biology' },
        { id: 4, name: 'Assignment 04', complete: false, tag: 'math' },
      ],
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
