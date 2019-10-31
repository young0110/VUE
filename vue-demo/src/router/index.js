import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/back/'
import Index from '@/components/back/common/Home'

Vue.use(Router)

const constantRouterMap = [
  {
    path: '/',
    redirect: '/home'
  }, {
    path: '/home',
    name: '主页',
    component: Home,
    children: [
      {
        path: '/index',
        name: '首页',
        component: Index
      }, {
        path: '/system/userManager',
        name: '用户管理',
        component: () => import('@/components/back/system/UserManager')
      }, {
        path: '/system/roleManager',
        name: '角色管理',
        component: () => import('@/components/back/system/RoleManager')
      }
    ]
  }
]

export default new Router({
  routes: constantRouterMap
})
