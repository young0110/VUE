<template>
  <div class="main">
    <HeadBar></HeadBar>
    <IntroBar></IntroBar>
    <FooterBar></FooterBar>
  </div>
</template>

<script>
import HeadBar from './HeadBar'
import IntroBar from './IntroBar'
import FooterBar from './FooterBar'
export default {
  name: 'Index',
  components: {HeadBar, IntroBar, FooterBar}
}
</script>
