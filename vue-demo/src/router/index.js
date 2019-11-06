import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/back/'
import Login from '@/components/common/Login'

Vue.use(Router)

const constantRouterMap = [
  {
    path: '/',
    redirect: '/login'
  }, {
    path: '/home',
    component: Home
  }, {
    path: '/login',
    component: Login
  }
]

export default new Router({
  routes: constantRouterMap
})

export const asyncRouterMap = [
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '/index',
        name: 'index',
        title: '首页',
        component: () => import('@/components/back/common/Home')
      }, {
        path: '/system',
        name: 'system',
        title: '系统管理',
        component: () => import('@/components/back/system/'),
        children: [
          {
            path: '/system/userManager',
            name: 'userManager',
            title: '用户管理',
            component: () => import('@/components/back/system/UserManager')
          }, {
            path: '/system/roleManager',
            name: 'RoleManager',
            title: '角色管理',
            component: () => import('@/components/back/system/RoleManager')
          }
        ]
      }
    ]
  }
]
