<template>
  <el-header class="header flex items-center justify-end">
    <el-button
      v-if="!isLogin"
      text
      type="primary"
      @click="handleLogin"
    >
      登录
    </el-button>
    <el-dropdown v-else>
      <el-avatar 
        :size="50" 
        :src="state.circleUrl" 
      />
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </el-header>
</template>

<script setup>
import { ref } from 'vue'

const isLogin = ref(false)
const state = ref({
  circleUrl:
    'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
})

const handleLogin = () => {

}
</script>

<style lang="scss" scoped>
.header {
  background-color: #c6e2ff;
}
</style>