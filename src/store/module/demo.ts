import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useStore = defineStore(
  'main',
  () => {
    const someState = ref('hello pinia')
    return { someState }
  },
  {
    persist: true,
  },
)
