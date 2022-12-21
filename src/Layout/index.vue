<template>
  <el-container class="layout-container-demo">
    <el-aside width="200px">
      <SideBar />
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <Header />
      </el-header>

      <el-main>
        <Content />
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import SideBar from './components/SideBar/SideBar.vue'
import Header from './components/Header/Header.vue'
import Content from './components/Content/Content.vue'
</script>

<style lang="scss" scoped>
.el-header {
  background: blue;
}
.el-main {
  background: skyblue;
}
</style>
