<template>
  <div class="main">
    <BM></BM>
  </div>
</template>

<script>
import BM from '../../common/IndexMap'
export default {
  name: 'Home',
  components: {BM}
}
</script>

<style lang="less" scoped>
  .main {
    width: 100%;
    height: 100%;
    background: #7f7f7f;
  }
</style>
