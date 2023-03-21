import { reactive, ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
export const useMenuStore = defineStore('menu', () => {
  const menulist = ref([])

  const a = reactive({
    n: 1
  });
  function loadMenu() {

    if (!menulist.value.length) {
      axios.post("/system/menu").then((res) => {
        menulist.value = res.data.m
      })
    }
  }

  return { menulist, loadMenu, a }
}, {
  persist: true
})







