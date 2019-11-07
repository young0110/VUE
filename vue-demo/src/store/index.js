import Vue from 'vue'
import Vuex from 'vuex'
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
    },
    initBreadcrumbList: (state, list) => {
      state.breadcrumbList = list
    }
  },
  actions: {

  }
})

export default store
