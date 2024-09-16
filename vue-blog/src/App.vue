<script setup>
import { RouterView } from 'vue-router'
import HeaderArea from '@/components/layout/header-area.vue'
import SideArea from '@/components/layout/side-area.vue'
import FooterArea from '@/components/layout/footer-area.vue'
</script>

<template>
  <div class="common-layout">
    <el-container>
      <side-area />
      <el-container direction="vertical">
        <header-area />
        <el-main><RouterView /></el-main>
        <footer-area />
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
.common-layout{
  height: 100vh;
}

.el-container{
  height: 100%;
}
</style>
