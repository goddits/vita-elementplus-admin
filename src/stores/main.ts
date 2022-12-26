import {ref} from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore('main', () => {

  let isCollapse = ref(false)
  let asideWidth ='250px'

  const closeCol = () =>{
    isCollapse.value = !isCollapse.value
    console.log('操作了',isCollapse);

  }

  const handleAsideWidth = () =>{
    if(isCollapse.value){
      asideWidth = '250px'? '250px' : '60px'
    }

  }

  return {
    isCollapse,
    closeCol,
    handleAsideWidth,
  }
})
