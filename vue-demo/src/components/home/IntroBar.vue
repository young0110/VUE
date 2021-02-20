<template>
    <section class="intro-bar x-1024">
      <div v-for="(bar, index) in introBarList" :key="index">
        <LandScapeBar v-if="bar.type === 1"></LandScapeBar>
        <PortraitBar v-if="bar.type === 2"></PortraitBar>
        <SplitLandScapeBar v-if="bar.type === 3"></SplitLandScapeBar>
        <SplitPortraitBar v-if="bar.type === 4"></SplitPortraitBar>
      </div>
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
          title: '',
          subTitle: '',
          pic: '',
          link: ''
        },
        {
          type: 2,
          title: '',
          subTitle: '',
          pic: '',
          link: ''
        },
        {
          type: 3,
          items: [
            {
              title: '',
              subTitle: '',
              pic: '',
              link: ''
            },
            {
              title: '',
              subTitle: '',
              pic: '',
              link: ''
            }
          ]
        },
        {
          type: 4,
          items: [
            {
              title: '',
              subTitle: '',
              pic: '',
              link: ''
            },
            {
              title: '',
              subTitle: '',
              pic: '',
              link: ''
            },
            {
              title: '',
              subTitle: '',
              pic: '',
              link: ''
            }
          ]
        }
      ]
    }
  },
  methods: {

  }
}
</script>

<style lang="less">
.intro-bar {
  margin: 0 auto;
}
</style>
