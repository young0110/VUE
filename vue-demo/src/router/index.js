import Vue from 'vue'
import Router from 'vue-router'
import ManageHome from '@/components/back/'
import Home from '@/components/home/'
import Login from '@/components/common/Login'

Vue.use(Router)

const constantRouterMap = [
  {
    path: '/',
    redirect: '/login'
  }, {
    path: '/login',
    component: Login
  }, {
    path: '/home',
    component: Home
  }, {
    path: '/back',
    component: ManageHome
  }
]

export default new Router({
  routes: constantRouterMap
})

export const asyncRouterMap = [
  {
    path: '/back',
    component: ManageHome,
    children: [
      {
        path: '/index',
        name: 'bright.css',
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
            // component: () => import('@/components/back/system/RoleManager')
            component: resolve => (require(['@/components/back/system/RoleManager'], resolve))
          }
        ]
      }
    ]
  }
]
