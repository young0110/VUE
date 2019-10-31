<template>
  <div class="aside-basic">
    <!-- 信息模块 -->
    <div ref="userBasic" :class="['user-basic', isCollapse ? 'inactive' : 'active']" @click="collapse"></div>
    <!-- 菜单列表 -->
    <el-menu
      class="el-menu-vertical"
      :collapse="isCollapse"
      :unique-opened="true"
      router
    >
      <template v-for="menu in this.$store.state.menuList">
        <el-submenu :index="menu.path" :key="menu.path" v-if="menu.children">
          <template slot="title">
            <i :class="['iconfont', menu.icon]"></i>
            <span slot="title">{{ menu.name }}</span>
          </template>
          <template v-for="child in menu.children">
            <el-menu-item :index="child.path" :key="child.path">
              <!-- i class=""></i-->
              <span>{{ child.name }}</span>
            </el-menu-item>
          </template>
        </el-submenu>
        <el-menu-item :index="menu.path" :key="menu.path" v-if="!menu.children">
          <i :class="['iconfont', menu.icon]"></i>
          <span slot="title">{{ menu.name }}</span>
        </el-menu-item>
      </template>

    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data () {
    return {
      isCollapse: false
    }
  },
  methods: {
    collapse () {
      this.isCollapse = !this.isCollapse
    }
  }
}
</script>

<style lang="less">
.aside-basic {
  width: 100%;
  height: auto;
  min-height: 400px;
  .user-basic {
    width: 100%;
    height: 200px;
  }
  .el-menu {
    border: 0;
    text-align: left;
  }
  .active {
    height: 200px !important;
  }
  .inactive {
    height: 60px !important;
  }
  .el-menu-vertical:not(.el-menu--collapse) {
    width: 240px;
    min-height: 400px;
    .el-submenu {
      width: 100%;
    }
  }
}
.iconfont {
  font-size: 18px;
  margin: 0 4px 0 0;
}
</style>
