import Vue from 'vue'
import Vuex from 'vuex'
import data from './staticData'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    menuList: data.menuList,
    loginUser: data.loginUser
  },
  mutations: {

  },
  actions: {

  }
})

export default store
