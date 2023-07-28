export default {
  template: `<button class="bg-purple-600 hover:bg-purple-800 px-5 py-2.5 text-white rounded mx-2 disabled:cursor-not-allowed" disabled="processing ? true : false">
    <slot/>
  </button>`,
  data() {
    return {
      processing: true,
    }
  },
}
