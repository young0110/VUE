// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store'
import App from './App'
import ElementUI from 'element-ui'
import router, {asyncRouterMap} from './router'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/iconfont/iconfont.css'

Vue.use(ElementUI)
Vue.config.productionTip = false

router.options.routes.push(asyncRouterMap[0])
router.addRoutes(router.options.routes)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store, // 使用vuex
  components: { App },
  template: '<App/>'
})
