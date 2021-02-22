<template>
  <!-- 横屏 -->
  <div class="landscape-bar">
    <img  v-if="!reverse" class="bar-img" :src="info.pic" v-default-img="defaultImg"/>
    <p class="bar-title">{{ info.title }}</p>
    <p class="bar-sub-title">{{ info.subTitle }}</p>
    <a class="bar-link" :href="info.link">前往></a>
    <img  v-if="reverse" class="bar-img" :src="info.pic" v-default-img="defaultImg"/>
  </div>
</template>

<script>
import defaultImg from '../../../../static/images/LandScapeBar.gif'
export default {
  name: 'LandScapeBar',
  props: {
    info: [Object],
    reverse: Boolean
  },
  data () {
    return {
      defaultImg
    }
  }
}
</script>

<style lang="less">
.landscape-bar {
  width: 100%;
  height: auto;
  margin-bottom: 10px;
  .bar-img {
    width: 100%;
    height: 480px;
  }
  .bar-title {
    width: 100%;
    height: 60px;
    line-height: 60px;
    font-weight: bolder;
    font-size: 30px;
    text-align: center;
    margin: 20px 0;
  }
  .bar-sub-title {
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-weight: bold;
    font-size: 20px;
    text-align: center;
    margin: 10px 0;
  }
  .bar-link {
    display: block;
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 18px;
    text-align: center;
    margin: 10px 0;
  }
}
</style>
