export default {
  template: `<form @submit.prevent="add">
    <div class="border-gray-600 text-black">
      <input placeholder="New assignment..." class="p-2" v-model="newAssignment"/>
      <button class="bg-white border-l p-2">Add</button>
    </div>
  </form>`,
  data() {
    return {
      newAssignment: '',
    }
  },
  methods: {
    add() {
      this.$emit('add', this.newAssignment)
      this.newAssignment = ''
    },
  },
}
