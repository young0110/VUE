<template>
    <section class="intro-bar x-1024">
      <template v-for="(bar, index) in introBarList">
        <LandScapeBar v-if="bar.type === 1" :key="index" :info="bar"></LandScapeBar>
        <PortraitBar v-else-if="bar.type === 2" :key="index" :info="bar"></PortraitBar>
        <SplitLandScapeBar v-else-if="bar.type === 3" :key="index" :info="bar"></SplitLandScapeBar>
        <SplitPortraitBar v-else :key="index" :info="bar"></SplitPortraitBar>
      </template>
    </section>
</template>

<script>
import LandScapeBar from './IntroBars/LandScapeBar'
import PortraitBar from './IntroBars/PortraitBar'
import SplitLandScapeBar from './IntroBars/SplitLandScapeBar'
import SplitPortraitBar from './IntroBars/SplitPortraitBar'
export default {
  name: 'IntroBar',
  components: {LandScapeBar, PortraitBar, SplitLandScapeBar, SplitPortraitBar},
  data () {
    return {
      introBarList: [
        {
          type: 1,
          title: '横屏广告',
          subTitle: '这是一个横屏广告',
          pic: '',
          link: ''
        },
        {
          type: 2,
          title: '竖屏广告',
          subTitle: '这是一个竖屏广告',
          pic: '',
          link: ''
        },
        {
          type: 3,
          items: [
            {
              title: '分屏横屏广告1',
              subTitle: '这个是分屏横屏广告1',
              pic: '',
              link: ''
            },
            {
              title: '分屏横屏广告2',
              subTitle: '这个是分屏横屏广告2',
              pic: '',
              link: ''
            }
          ]
        },
        {
          type: 4,
          items: [
            {
              title: '分屏竖屏广告1',
              subTitle: '这个是分屏竖屏广告1',
              pic: '',
              link: ''
            },
            {
              title: '分屏竖屏广告2',
              subTitle: '这个是分屏竖屏广告2',
              pic: '',
              link: ''
            },
            {
              title: '分屏竖屏广告3',
              subTitle: '这个是分屏竖屏广告3',
              pic: '',
              link: ''
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="less">
.intro-bar {
  margin: 0 auto;
}
</style>
