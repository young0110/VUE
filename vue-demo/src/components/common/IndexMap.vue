<template>
  <div class="main">
    <baidu-map class="map"
               :center="center"
               :scroll-wheel-zoom="true"
               :zoom="zoom"
               @ready="mapReady"
               @click="getPoint"
    ></baidu-map>
  </div>
</template>

<script>
import BaiduMap from 'vue-baidu-map/components/map/Map.vue'
import BmView from 'vue-baidu-map/components/map/MapView.vue'
export default {
  name: 'IndexMap',
  components: {
    BaiduMap,
    BmView
  },
  data () {
    return {
      center: {lng: 118.46, lat: 32.03},
      zoom: 12
    }
  },
  methods: {
    mapReady ({Bmap, map}) {},
    getPoint (e) {
      console.log(e.point)
    }
  }
}
</script>

<style lang="less">
.main {
  width: 100%;
  height: 100%;
  .map {
    width: 100%;
    height: 100%;
  }
}
</style>
