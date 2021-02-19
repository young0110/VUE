<template>
  <div class="main">
    <HeadBar></HeadBar>
    <section class="home-content x-1024">
      <IntroBar></IntroBar>
    </section>
    <FooterBar></FooterBar>
  </div>
</template>

<script>
import HeadBar from './HeadBar'
import IntroBar from './IntroBar'
import FooterBar from './FooterBar'
export default {
  name: 'Index',
  components: {HeadBar, IntroBar, FooterBar},
  data () {
    return {
      ads: [
        {
          type: 1,
          pic: '',
          title: '',
          subtitle: '',
          link: ''
        }
      ]
    }
  },
  methods: {

  }
}
</script>

<style lang="less">
.home-content {
  height: auto;
  min-height: 600px;
  margin: 0 auto;
  padding: 10px 0 10px 0;
}
</style>
