import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore('main', () => {
  let isCollapse = ref(false)
  let asideWidth = ref('')
  const routepath = ref(null)

  const handleAsideWidth = () => {
    switch (isCollapse.value) {
      case false:
        asideWidth.value = 220 + 'px'
        break
      case true:
        asideWidth.value = 60 + 'px'
        break
    }
    console.log(asideWidth.value)
  }

  const closeCol = () => {
    isCollapse.value = !isCollapse.value
    console.log('操作了', isCollapse)
    handleAsideWidth()
  }

  return {
    isCollapse,
    asideWidth,
    routepath,
    closeCol,
    handleAsideWidth
  }
})
