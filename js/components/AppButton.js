export default {
  template: `<button 
    :class="{
      'bg-purple-600 hover:bg-purple-800': type == 'primary',
      'bg-green-600 hover:bg-green-800': type == 'success',
      'bg-orange-600 hover:bg-orange-800': type == 'warning',
      'bg-red-600 hover:bg-red-800': type == 'danger',
    }"
    class="px-5 py-2.5 text-white rounded mx-2 disabled:cursor-not-allowed" 
    :disabled="processing"
  >
    <slot/>
  </button>`,
  props: {
    type: {
      type: String,
      default: 'primary',
    },
    processing: {
      type: Boolean,
      default: false,
    },
  },
}
