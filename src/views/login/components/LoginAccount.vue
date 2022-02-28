<template>
  <div>
    <el-form
      label-width="60px"
      :rules="rules"
      :model="accountInfo"
      ref="formRef"
    >
      <el-form-item label="账号" prop="username">
        <el-input v-model="accountInfo.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="accountInfo.password"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, defineExpose } from 'vue'
import { rules } from '../config/rules'
import { ElForm } from 'element-plus/lib/components'

const accountInfo = reactive({
  username: '',
  password: ''
})
const formRef = ref<InstanceType<typeof ElForm>>()

const loginAction = () => {
  formRef.value.validate((valid) => {
    if (valid) {
      console.log(valid, '验证成功')
    } else {
      console.log(valid, '验证失败')
    }
  })
}

defineExpose({
  loginAction
})
</script>

<style lang="less" scoped></style>
