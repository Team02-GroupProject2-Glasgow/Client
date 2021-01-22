import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    words: [],
    player: {},
    players: []
  },
  mutations: {
    setWords (state, payload) {
      state.words = payload
    },
    setPlayer (state, payload) {
      state.player = payload
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
    SOCKET_sendPlayer (context, payload) {
      context.commit('setPlayer', payload)
    },
    SOCKET_players (context, payload) {
      console.log('Players bro')
      context.commit('setPlayers', payload)
    }
  },
  modules: {
  }
})
