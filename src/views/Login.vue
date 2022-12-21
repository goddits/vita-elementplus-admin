<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'

const ruleFormRef = ref()

const router = useRouter()

const validateUser = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入用户名'))
  } else {
    callback()
  }
}

const validatePass = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入密码'))
  } else {
    callback()
  }
}

const validateCode = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入验证码'))
  } else {
    callback()
  }
}

const { VITE_APP_NAME, VITE_APP_PWD, VITE_APP_CODE } = import.meta.env

onMounted(() => {
  ruleForm.userName = VITE_APP_NAME
  ;(ruleForm.userPass = VITE_APP_PWD), (ruleForm.code = VITE_APP_CODE)
})

const ruleForm = reactive({
  userName: '',
  userPass: '',
  code: ''
})

const rules = reactive({
  userName: [{ validator: validateUser, trigger: 'blur' }],
  userPass: [{ validator: validatePass, trigger: 'blur' }],
  code: [{ validator: validateCode, trigger: 'blur' }]
})

const submitForm = (formEl: any) => {
  if (!formEl) return
  formEl.validate((valid: any) => {
    if (valid) {
      router.push('/dashboard')
      ElMessage.success('登录成功')
    } else {
      console.log('error submit!')
      return false
    }
  })
}
</script>

<template>
  <div class="login">
    <div class="login-box">
      <div class="login-form">
        <el-form
          ref="ruleFormRef"
          :model="ruleForm"
          status-icon
          :rules="rules"
          class="demo-ruleForm"
        >
          <el-form-item prop="userName">
            <el-input
              type="text"
              placeholder="用户名:charlse"
              v-model="ruleForm.userName"
            >
              <template #prefix>
                <el-icon><User style="width: 30px; height: 30px" /></el-icon>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="userPass">
            <el-input
              type="password"
              autocomplete="off"
              placeholder="密码:123456"
              v-model="ruleForm.userPass"
            >
              <template #prefix>
                <el-icon><Lock style="width: 30px; height: 30px" /></el-icon>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="code">
            <el-row :gutter="10">
              <el-col :span="14">
                <el-input v-model="ruleForm.code">
                  <template #prefix>
                    <el-icon
                      ><MoreFilled style="width: 30px; height: 30px"
                    /></el-icon>
                  </template>
                </el-input>
              </el-col>
              <el-col :span="10">
                <el-button class="login-btn">获取验证码</el-button>
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              @click="submitForm(ruleFormRef)"
              class="login-btn"
              >登录</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.login {
  height: 100vh;
  background: url('../assets/login.jpg') 100%/100% no-repeat;
  display: flex;
  align-items: center;
}
.login-box {
  width: 360px;
  margin: 0 auto;
  background-color: #fff;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
}
/* .login-title {
  text-align: center;
  width: 100%;
  height: 40px;
  line-height: 40px;
  font-size: 24px;
  font-weight: bolder;
} */
.login-form {
  width: 100%;
  display: flex;
  padding-top: 20px;
  justify-content: center;
  align-items: center;
}
.login-form .el-form {
  width: 100%;
  padding: 10px 30px;
}
.login-btn {
  display: block;
  width: 100%;
}
</style>
