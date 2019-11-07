<template>
  <div class="login-main">
    <div class="win left-win"></div>
    <div class="win right-win">
      <div class="login-block">
        <p>Login</p>
        <el-form label-width="100px">
          <el-form-item label="用户名">
            <el-input auto-complete="off" v-model="loginForm.userName"/>
          </el-form-item>
          <el-form-item label="密码">
            <el-input type="password" auto-complete="off" v-model="loginForm.password" />
          </el-form-item>
          <el-form-item>
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
      this.$store.commit('login', userName)
      this.$router.push('/home')
    }
  }
}
</script>

<style lang="less">
.login-main {
  width: 100%;
  height: 100%;
  display: flex;
  .win {
    display: inline-block;
  }
  .left-win {
    width: 60%;
    height: 100%;
    background: #ccc;
  }
  .right-win {
    width: 40%;
    height: 100%;
    .login-block {
      width: 480px;
      height: auto;
      margin: 240px auto 0;
      background: #eee;
      padding: 50px 0;
      p {
        height: 40px;
        padding: 10px;
        font-size: 20px;
      }
      .el-form-item {
        margin: 30px auto 0;
        .el-input {
          width: 300px;
          border-bottom: 2px solid #ccc;
        }
        .el-button {
          width: 300px;
          background: #ccc;
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
          border-bottom: 2px solid #999;
        }
        .el-button:hover {
          background: #999;
          border: 0;
          color: #fff;
        }
      }
    }
  }

}
</style>
