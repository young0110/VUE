<template>
  <!-- 竖屏 -->
  <div class="portrait-bar">
    <template v-if="reverse">
      <div class="portrait-bar-left">
        <img class="bar-img" :src="info.pic" v-default-img="defaultImg"/>
      </div>
      <div class="portrait-bar-right">
        <p class="bar-title">{{ info.title }}</p>
        <p class="bar-sub-title">{{ info.subTitle }}</p>
        <a class="bar-link" :href="info.link">前往></a>
      </div>
    </template>
    <template v-else>
      <div class="portrait-bar-right">
        <p class="bar-title">{{ info.title }}</p>
        <p class="bar-sub-title">{{ info.subTitle }}</p>
        <a class="bar-link" :href="info.link">前往></a>
      </div>
      <div class="portrait-bar-left">
        <img class="bar-img" :src="info.pic" v-default-img="defaultImg"/>
      </div>
    </template>
  </div>
</template>

<script>
import defaultImg from '../../../../static/images/PortraitBar.gif'
export default {
  name: 'PortraitBar',
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
.portrait-bar {
  width: 100%;
  height: 600px;
  margin-bottom: 10px;
  display: flex;
  .portrait-bar-left {
    width: 50%;
    height: 100%;
    .bar-img {
      width: 100%;
      height: 100%;
    }
  }
  .portrait-bar-right {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .bar-title {
      width: 100%;
      height: 60px;
      line-height: 60px;
      font-weight: bolder;
      font-size: 30px;
      text-align: center;
      margin: 20px 0;
      align-self: center;
    }
    .bar-sub-title {
      width: 100%;
      height: 40px;
      line-height: 40px;
      font-weight: bold;
      font-size: 20px;
      text-align: center;
      margin: 10px 0;
      align-self: center;
    }
    .bar-link {
      display: block;
      width: 100%;
      height: 40px;
      line-height: 40px;
      font-size: 18px;
      text-align: center;
      margin: 10px 0;
      align-self: center;
    }
  }
}
</style>
