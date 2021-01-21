import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    words: [],
    users: [],
    user: {},
    players: []
  },
  mutations: {
    setWords (state, payload) {
      state.words = payload
    },
    setUsers (state, payload) {
      state.users = payload
    },
    setUser (state, payload) {
      state.user = payload
    },
    setPlayers (state, payload) {
      state.players = payload
    }
  },
  actions: {
    SOCKET_init (context, payload) {
      console.log('Init bro')
      context.commit('setWords', payload)
    },
    SOCKET_sendAllUser (context, payload) {
      console.log(payload)
      context.commit('setUsers', payload)
    },
    SOCKET_sendYou (context, payload) {
      context.commit('setUser', payload)
    },
    SOCKET_players (context, payload) {
      console.log('Players bro')
      context.commit('setPlayers', payload)
    }
  },
  modules: {
  }
})
