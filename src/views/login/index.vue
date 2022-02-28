<template>
  <div class="login">
    <login-panel></login-panel>
  </div>
</template>

<script lang="ts" setup>
import LoginPanel from './components/LoginPanel.vue'
</script>

<style lang="less" scoped>
.login {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: url('../../assets/img/login-bg.svg');
}
</style>
