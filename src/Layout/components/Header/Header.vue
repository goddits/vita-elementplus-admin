<template>
  <div class="f-header">
    <el-icon class="icon-btn" v-if="!store.isCollapse" @click="store.closeCol"><Fold /></el-icon>
    <el-icon class="icon-btn" v-else @click="store.closeCol"><Expand /></el-icon>
    <el-icon class="icon-btn"><RefreshRight /></el-icon>
    <div class="r-header">
      <el-icon class="icon-btn"><FullScreen /></el-icon>
      <el-icon class="icon-btn"><Aim /></el-icon>
      <el-dropdown class="dropdown">
        <span class="el-dropdown-link">
          <el-avatar
            :size="50"
            src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80"
          />
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>修改密码</el-dropdown-item>
            <el-dropdown-item>退出登录</el-dropdown-item>
            <el-dropdown-item>Github</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useStore} from '@/stores/main'

const store = useStore()


</script>

<style lang="scss" scoped>
.f-header {
  min-height: 100%;
  display: flex;
  align-items: center;
  font-size: 22px;
}
.r-header {
  margin-left: auto;
  display: flex;
  align-items: center;
}
.icon-btn {
  width: 50px;
  height: 80px;
  cursor: pointer;
}
.icon-btn:hover {
  background: #1e6ef8;
}
.f-header .dropdown {
  display: flex;
  cursor: pointer;
}
.f-header .el-dropdown-link{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
