<template>
  <div class="main">
    <!-- 左边模块 -->
    <div class="login-page login-page-left"></div>
    <!-- 右边模块 -->
    <div class="login-page login-page-right">
      <div class="login-bar">
        <p>Login</p>
        <el-form class="login-win" label-width="100px">
          <el-form-item class="login-win-line" label="用户名" >
            <el-input auto-complete="off" v-model="loginForm.userName" placeholder="请输入用户名" />
          </el-form-item>
          <el-form-item class="login-win-line" label="密码" >
            <el-input type="password" auto-complete="off" v-model="loginForm.password" placeholder="请输入密码" />
          </el-form-item>
          <el-form-item class="login-win-line">
            <el-button @click="login">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      loginForm: {
        userName: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      let userName = this.loginForm.userName
      let password = this.loginForm.password
      if (userName && password) {
        // TODO 验证用户名密码
        this.$store.commit('login', userName)
        this.$router.push('/home')
      } else {
        this.$message.warning('请输入用户名和密码！')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.main {
  display: flex;
  .login-page {
    display: inline-block;
  }
  .login-page-left {
    width: 60%;
    height: 100%;
  }
  .login-page-right {
    width: 40%;
    height: 100%;
    .login-bar {
      width: 480px;
      height: auto;
      min-height: 360px;
      position: relative;
      top: 240px;
      left: calc(50% - 240px);
      padding: 40px 0;
      p {
        height: 40px;
        line-height: 40px;
        font-weight: bold;
        padding: 10px 40px;
        font-size: 20px;
      }
      .login-win {
        padding: 10px 0;
        .login-win-line {
          margin: 30px auto 0;
          .el-input {
            width: 300px;
          }
          .el-button {
            width: 300px;
            font-weight: bold;
          }
          .el-input input {
            border-radius: 4px;
          }
          .el-input input:hover {
            border: 0;
            outline: 0;
          }
          .el-input input:focus-within {
            border: 0;
            outline: 0;
          }
          .el-input:hover {

          }
          .el-button:hover {
            border: 0;
          }
        }
      }
    }
  }
}
</style>
