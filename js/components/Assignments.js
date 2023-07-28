import AssignmentList from './AssignmentList.js'

export default {
  components: {
    AssignmentList,
  },
  template: `<section class="space-y-6">
    <assignment-list :assignments="filters.inProgress" title="In Progress"></assignment-list>
    <assignment-list :assignments="filters.completed" title="Completed"></assignment-list>
  </section>`,
  data() {
    return {
      assignments: [
        { id: 1, name: 'Assignment 01', complete: false },
        { id: 2, name: 'Assignment 02', complete: false },
        { id: 3, name: 'Assignment 03', complete: false },
        { id: 4, name: 'Assignment 04', complete: false },
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
}
