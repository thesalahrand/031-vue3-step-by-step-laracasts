import { ref, watch } from 'vue'

export function useStorage(key, val = null) {
  const storedVal = JSON.parse(localStorage.getItem(key))

  if (storedVal) {
    val = ref(storedVal)
  } else {
    val = ref(val)
    write()
  }

  watch(val, write)

  function write() {
    if (val.value === null || val.value == '') {
      localStorage.removeItem(key)
    } else {
      localStorage.setItem(key, JSON.stringify(val.value))
    }
  }

  return val
}
