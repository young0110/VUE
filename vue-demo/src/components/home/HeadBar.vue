<template>
    <nav class="head-bar"></nav>
</template>

<script>
export default {
  name: 'HeadBar',
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang="less">
.head-bar {
  width: 100%;
  height: 44px;
  background: rgba(0, 0, 0, 0.92);
  font-size: 17px;
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 9999;
  min-width: 1024px;
  margin: 0;
}
</style>
