import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    words: [],
    users: []
  },
  mutations: {
    setWords (state, payload) {
      state.words = payload
    },
    setUsers (state, payload) {
      state.users = payload
    }
  },
  actions: {
    SOCKET_init (context, payload) {
      console.log('Init bro')
      context.commit('setWords', payload)
    },
    SOCKET_sendUser (context, payload) {
      console.log(payload)
      context.commit('setUsers', payload)
    }
  },
  modules: {
  }
})
