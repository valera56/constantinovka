import { ref, computed } from 'vue'
// @ts-ignore
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const saule = ref([{count:0}])
  const tanya = ref([{count:0}])

  function fncount  () {
    const dataT = localStorage.getItem('tanya')
    const dataS = localStorage.getItem('saule')
    saule.value = JSON.parse(dataS)
    tanya.value = JSON.parse(dataT)
  }

  function fntanua() {
    tanya.value.map((el)=>{el.count = +1})
    localStorage.setItem('tanya', JSON.stringify(tanya.value))
    localStorage.getItem('tanya')
  }
  function fnsaule(){
    saule.value.map((el)=>{el.count = +1})
    localStorage.setItem('saule', JSON.stringify(saule.value))
  }

  return { tanya,saule, fntanua, fnsaule, fncount }
})
