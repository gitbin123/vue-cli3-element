<template>
  <div class="login">
    <el-form label-position="left" label-width="80px" class="loginForm">
      <el-form-item label="用户名">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input></el-input>
      </el-form-item>
      <el-form-item style="text-align:right">
        <el-button @click="login">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<style scoped>
.login {
  background-image: url("../assets/img/login.gif");
  background-size: 80%;
  height: 100%;
  overflow: hidden;
}
.loginForm {
  width: 300px;
  margin: 300px auto;
  background: black;
  padding: 50px 50px 10px;
  opacity: 0.8;
}
>>> .el-form-item__label {
  color: yellow;
}
</style>
<script>
export default {
  methods: {
    login() {
      this.$router.push("/");
    }
  }
};
</script> 

