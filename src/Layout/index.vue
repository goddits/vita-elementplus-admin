<template>
  <el-container class="layout-container-demo">
    <el-aside :width="store.handleAsideWidth">
      <SideBar />
    </el-aside>

    <el-container>
      <el-header>
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

import {useStore} from '@/stores/main'

const store = useStore()

</script>

<style lang="scss" scoped>
.layout-container-demo{
  display: flex;
}

.el-header {
  padding-left: 0;
  height: 80px;
  background: blue;
}
.el-aside{
  min-height: 100vh;
}
.el-main {
  background: skyblue;
}
</style>
