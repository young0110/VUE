import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const menuList = [
  {
    name: '首页',
    path: 'a'
  },
  {
    name: '图表展示',
    path: 'b',
    children: [
      {
        name: '折线图展示',
        path: 'b1'
      },
      {
        name: '柱状图展示',
        path: 'b2'
      }
    ]
  },
  {
    name: '系统管理',
    path: 'c',
    children: [
      {
        name: '用户管理',
        path: 'c1'
      },
      {
        name: '角色管理',
        path: 'c2'
      }
    ]
  }
]

const store = new Vuex.Store({
  state: {
    menuList: menuList
  },
  mutations: {

  },
  actions: {

  }
})

export default store
