import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state() {
    return {
      count: 5,
    }
  },

  actions: {
    increment() {
      if (this.count < 10) {
        this.count++
      }
    },
  },

  getters: {
    remaining() {
      return 10 - this.count
    },
  },
})
