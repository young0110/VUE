<template>
  <!-- 控制台首页 -->
  <section class="el-container">
    <!-- 侧边栏 -->
    <aside class="el-aside">
      <Menu></Menu>
    </aside>
    <!-- 主体模块 -->
    <section class="el-container is-vertical">
      <!-- 主体头部 -->
      <header class="el-header"></header>
      <!-- 主体内容 -->
      <main class="el-main"></main>
    </section>
  </section>
</template>

<script>
import Menu from '../back/common/Menu'
import { mapState } from 'vuex'
export default {
  components: {Menu},
  name: 'backHome',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: ({
    ...mapState([
      'title',
      'loginUser'
    ])
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">

.el-container {
  display: flex;
  flex-direction: row;
  flex: 1;
  box-sizing: border-box;
  min-width: 0;
  height: 100%;
  .el-container.is-vertical {
    flex-direction: column;
  }
  .el-aside {
    width: 200px;
    height: 100%;
    overflow: auto;
    background: #ccc;
  }
  .el-header {
    padding: 0 20px;
    box-sizing: border-box;
    background: #ddd;
    height: 60px;
    flex: 0 1 auto;
  }
  .el-main {
    padding: 20px;
    background: #eee;
    flex: 1 1 auto;
  }
}
</style>
