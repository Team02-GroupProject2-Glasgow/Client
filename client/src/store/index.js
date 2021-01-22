import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    words: [],
    player: {},
    players: [],
    isTheWinner: false,
    winner: {}
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
    },
    setIsTheWinner (state, payload) {
      state.isTheWinner = payload
    },
    setWinner (state, payload) {
      state.winner = payload
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
    },
    SOCKET_setTheWinner (context, payload) {
      context.commit('setWinner', payload)
      context.commit('setIsTheWinner', true)
      console.log(payload)
    }
  },
  modules: {
  }
})
