export default {
  template: `<div class="bg-gray-700 border border-gray-600 p-4 rounded-lg">
    <h2 v-if="$slots.heading" class="font-bold">
      <slot name="heading"/>
    </h2>
    <slot/>
    <footer v-if="$slots.footer" class="border-gray-600 border-t pt-2 mt-4">
      <slot name="footer"/>
    </footer>
  </div>`,
  props: {
    heading: String,
  },
}
