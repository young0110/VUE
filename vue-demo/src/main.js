// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store'
import App from './App'
import ElementUI from 'element-ui'
import BaiduMap from 'vue-baidu-map'
import router, {asyncRouterMap} from './router'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/iconfont/iconfont.css'

Vue.use(BaiduMap, {
  ak: 'ZY7aIbSlkRGU1m5tQlopvIVxRtvKCi0M'
})

Vue.use(ElementUI)
Vue.config.productionTip = false

router.options.routes.push(asyncRouterMap[0])
router.addRoutes(router.options.routes)

router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next()
  } else {
    if (store.state.loginUser) {
      next()
    } else {
      next({
        path: '/login'
      })
    }
  }
})

// 自定义指令 图片加载失败时，加载默认图片
Vue.directive('default-img', async function (el, binding) {
  let imgUrl = binding.value
  if (imgUrl) {
    let ifExist = await imgUrlValid(imgUrl)
    if (ifExist) {
      el.setAttribute('src', imgUrl)
    }
  }
})

let imgUrlValid = function (url) {
  return new Promise((resolve) => {
    let img = new Image()
    img.onload = function () {
      if (this.complete) {
        resolve(true)
        img = null
      }
    }
    img.onerror = function () {
      resolve(false)
      img = null
    }
    img.src = url
  })
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store, // 使用vuex
  components: { App },
  template: '<App/>'
})
