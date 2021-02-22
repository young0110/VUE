<template>
  <!-- 分割横屏 -->
  <div class="split-landscape-bar">
    <template v-for="(bar, index) in info.items">
      <LandScapeBar :info="bar" :reverse="index % 2 === 0" :key="index"></LandScapeBar>
    </template>
  </div>
</template>

<script>
import LandScapeBar from './LandScapeBar'
export default {
  name: 'SplitLandScapeBar',
  components: {LandScapeBar},
  props: {
    info: [Object]
  }
}
</script>

<style lang="less">
.split-landscape-bar {
  width: 100%;
  height: auto;
  display: flex;
}
</style>
