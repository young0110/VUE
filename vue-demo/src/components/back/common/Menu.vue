<template>
  <div class="aside-basic">
    <div ref="userBasic" :class="['user-basic', isCollapse ? 'inactive' : 'active']" @click="collapse"></div>
    <el-menu default-active="1-4-1" class="el-menu-vertical" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span slot="title">导航一</span>
      </template>
      <el-menu-item-group>
        <span slot="title">分组一</span>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="分组2">
        <el-menu-item index="1-3">选项3</el-menu-item>
      </el-menu-item-group>
      <el-submenu index="1-4">
        <span slot="title">选项4</span>
        <el-menu-item index="1-4-1">选项1</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-menu-item index="2">
      <i class="el-icon-menu"></i>
      <span slot="title">导航二</span>
    </el-menu-item>
    <el-menu-item index="3">
      <i class="el-icon-setting"></i>
      <span slot="title">导航三</span>
    </el-menu-item>
  </el-menu>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data () {
    return {
      userBasicHeight: ['65px', '240px'],
      isCollapse: false,
      menuList: []
    }
  },
  methods: {
    collapse () {
      this.isCollapse = !this.isCollapse
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  },
  mounted () {}
}
</script>

<style lang="less">
.aside-basic {
  width: 100%;
  height: auto;
  min-height: 400px;
  .user-basic {
    width: 100%;
    height: 201px;
  }
  .active {
    height: 201px;
  }
  .inactive {
    height: 60px;
  }
  .el-menu-vertical:not(.el-menu--collapse) {
    width: 240px;
    min-height: 400px;
    .el-submenu {
      width: 100%;
    }
  }
}
</style>
