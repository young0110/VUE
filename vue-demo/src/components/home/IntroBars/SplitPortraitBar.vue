<template>
  <!-- 分割竖屏 -->
  <div class="split-portrait-bar">
    <template v-for="(bar, index) in info.items">
      <PortraitBar :info="bar" :reverse="index % 2 === 0" :key="index"></PortraitBar>
    </template>
  </div>
</template>

<script>
import PortraitBar from './PortraitBar'
export default {
  name: 'SplitPortraitBar',
  components: {PortraitBar},
  props: {
    info: [Object]
  }
}
</script>

<style lang="less">
.split-portrait-bar {
  width: 100%;
  height: auto;
}
</style>
