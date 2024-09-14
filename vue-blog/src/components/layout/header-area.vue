<template>
  <el-header class="header flex items-center justify-end">
    <el-avatar :size="50" :src="state.circleUrl" />
  </el-header>
</template>

<script setup>
import {ref} from 'vue'
const state = ref({
  circleUrl:
    'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
})
</script>

<style lang="scss" scoped>
.header{
  background-color: #c6e2ff;
}
</style>