import Vue from 'vue'
import Router from 'vue-router'
import BackHome from '@/components/back/'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'back',
      component: BackHome
    }
  ]
})
