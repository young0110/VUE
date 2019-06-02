import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    title: 'Vue Demo',
    loginUser: {
      name: 'admin',
      isAdmin: true
    }
  },
  mutations: {

  },
  actions: {

  }
})

export default store
