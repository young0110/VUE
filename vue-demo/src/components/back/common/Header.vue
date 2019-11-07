<template>
  <div class="top-line">
    <div class="line-right">
      <el-dropdown class="top-line-menu" placement="bottom" trigger="hover">
        <span class="menu-link">{{ this.$store.state.loginUser.name }}</span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人信息</el-dropdown-item>
          <el-dropdown-item>修改密码</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <i class="menu-split"></i>
      <div class="top-line-menu" @click="logout">
        <i class="iconfont icon-logout"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    logout () {
      this.$store.commit('logout')
      this.$router.push({path: 'login'})
    }
  }
}
</script>

<style lang="less">
.top-line {
  width: 100%;
  height: 100%;
  .line-right {
    width: auto;
    height: 100%;
    padding: 0 20px;
    float: right;
    text-align: center;
    display: flex;
    .top-line-menu:hover {
      border-bottom: 2px solid #999;
    }
    .top-line-menu {
      height: 58px;
      display: inline-block;
      cursor: pointer;
      .menu-link {
        display: inline-block;
        height: 18px;
        margin: 20px;
        line-height: 18px;
        font-size: 16px;
      }
    }
    .icon-logout {
      font-size: 18px;
      display: inline-block;
      margin: 20px 20px;
    }
    .menu-split {
      width: 2px;
      height: 20px;
      margin: 20px 0;
      background: #ccc;
    }
  }
}
</style>
