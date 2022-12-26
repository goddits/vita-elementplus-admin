<template>
  <el-menu
    class="el-menu-vertical-demo"
    :collapse="store.isCollapse"
    :collapse-transition="false"
    unique-opened
    @select="getMenu"
    router
  >
    <template v-for="(item, index) in menuList">
      <el-sub-menu
        v-if="item.children && item.children.length > 0"
        :index="item.meta.title"
      >
        <template #title>
          <el-icon><icon-menu /></el-icon>
          {{ item.meta.title }}
        </template>
        <el-menu-item v-for="ele in item.children" :index="ele.path">
          {{ ele.meta?.title }}
        </el-menu-item>
      </el-sub-menu>

      <el-menu-item v-else :index="item.path">
        <el-icon><icon-menu /></el-icon>
        <template #title>{{ item.meta.title }}</template>
      </el-menu-item>
    </template>
  </el-menu>
</template>

<script setup lang="ts">
import { useStore } from '@/stores/main'
import { useRouter } from 'vue-router'
import { Menu as IconMenu } from '@element-plus/icons-vue'
const store = useStore()
const router = useRouter()
const menuList = router.getRoutes().filter((v) => v.meta.isMenu)
console.log('菜单', menuList)

const getMenu = (e: any) => {
  console.log(e)
  store.routepath = e
}
</script>

<style lang="scss" scoped>
.el-menu {
  width: 100%;
  height: 100vh;
  border: 0;
  box-shadow: 2px 2px;
  transition: all 0.3s;
  background-color: #33d4f4;
}

</style>
