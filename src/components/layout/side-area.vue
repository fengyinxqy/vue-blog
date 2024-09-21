<template>
  <el-aside
    class="side-bar"
    width="200px"
  >
    <h5 class="side-bar-logo items-center flex justify-center">
      <el-icon class="logo">
        <ScaleToOriginal />
      </el-icon>
    </h5>
    <el-menu
      :default-active="defaultActive"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-menu-item
        v-for="item in menuList"
        :key="item.path"
        :index="item.path"
      >
        <el-icon size="24">
          <component :is="item.icon" />
        </el-icon>
        <span>{{ item.title }}</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script setup>
import {
  ScaleToOriginal
} from '@element-plus/icons-vue'
import { ref } from 'vue'

const menuList = ref([
  {
    title: '首页',
    path: '/',
    icon: 'HomeFilled'
  }
])

const defaultActive = ref('/')

const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}
</script>

<style lang="scss" scoped>
.side-bar{
  background-color: #d9ecff;
}

.side-bar-logo{
  height: 60px;
}

.logo{
  font-size: 50px;
}

.el-menu{
  border: none;
}
</style>