import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('main', () => {
  const count = ref(0)

  return { count }
})
