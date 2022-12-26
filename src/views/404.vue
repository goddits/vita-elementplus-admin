<template>
  <div class="NotFound">
    <el-result icon="warning" sub-title="访问的页面不存在">
      <template #extra>
        <el-button type="primary" @click="goHome">返回首页</el-button>
      </template>
    </el-result>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

const goHome = () => {
  router.push('/home')
}
</script>

<style lang="scss" scoped>
.NotFound {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  // margin-top: 100px;
}
</style>
