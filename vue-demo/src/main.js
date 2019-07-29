// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import index from './store'
import App from './App'
import ElementUI from 'element-ui'

Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: index, // 使用vuex index
  components: { App },
  template: '<App/>'
})
