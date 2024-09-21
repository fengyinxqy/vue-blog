import localforage from 'localforage'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user',()=>{
  const userInfo = ref({})
  localforage.getItem('userInfo').then((res)=>{
    if(res){
      userInfo.value = res
    }
  })

  const setUserInfo = (info)=>{
    userInfo.value = info
    localforage.setItem('userInfo', info)
  }

  return {
    userInfo,
    setUserInfo
  }
})