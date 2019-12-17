<template>
  <div class="main">
    <baidu-map ak="ZY7aIbSlkRGU1m5tQlopvIVxRtvKCi0M">
      <bm-view></bm-view>
    </baidu-map>
  </div>
</template>

<script>
import BaiduMap from 'vue-baidu-map/components/map/Map.vue'
import BmView from 'vue-baidu-map/components/map/MapView.vue'
export default {
  name: "IndexMap",
  components: {
    BaiduMap,
    BmView
  }
}
</script>

<style lang="less">
.main {
  width: 100%;
  height: 100%;
}
</style>
