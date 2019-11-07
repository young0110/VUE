import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import data from './staticData'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    menuList: data.menuList,
    breadcrumbList: [],
    loginUser: data.loginUser
  },
  mutations: {
    login: (state, userName) => {
      state.loginUser = {
        name: userName
      }
    },
    logout: (state) => {
      state.loginUser = null
      state.breadcrumbList = []
    },
    initBreadcrumbList: (state, list) => {
      state.breadcrumbList = list
    }
  },
  actions: {

  },
  //  使用插件 persistedstate 解决刷新vuex数据丢失问题 npm install vuex-persistedstate --save
  plugins: [createPersistedState()]
})

export default store
