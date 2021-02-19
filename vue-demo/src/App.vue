<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
  /*  原如下 修改为 -> 使用插件 persistedstate 解决 vuex 刷新数据丢失问题
  created () {
    if (sessionStorage.getItem('store')) {
      this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(sessionStorage.getItem('store'))))
    }
    window.addEventListener('beforeunload', () => {
      sessionStorage.setItem('store', JSON.stringify(this.$store.state))
    })
  } */
}
</script>

<style lang="less">
@import '../static/css/common.css';
@import '../static/css/color.css';
</style>
