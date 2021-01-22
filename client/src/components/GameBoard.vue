<template>
  <div class="game-board position-relative bg-1">
    <h2 class="text-white mb-5">GAME TEBAK KATA</h2>
    <h1 class="text-white" v-if="!start">Players</h1>
    <div class="mb-4 mt-4" v-if="!start">
    <div class="d-flex justify-content-center">
      <div class="col-2">
        <div v-for="player in players" :key="player.id" class="list-group-item bg-3 text-warning rounded-pill mb-2">{{ player.username }}</div>
      </div>
    </div>
    </div>
    <h4 class="text-white mb-2" v-if="!start && players.length !==4 ">Wating for players..</h4>
    <button v-if="!start" @click="startGame" :disabled="players.length !== 4" class="btn btn-success w-25">Start</button>
    <!-- Button trigger modal -->
    <div class="mt-3">
      <button v-if="!start" type="button" class="btn btn-info w-25 text-white" data-bs-toggle="modal" data-bs-target="#modalRules">
        Rules / Peraturan
      </button>
      <!-- Modal -->
      <div class="modal fade" id="modalRules" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Rules / Peraturan Permainan</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p>1. Maksimal player yang dapat join adalah 4 player, jika penuh mohon menunggu</p>
              <p>2. Setiap player akan bermain untuk menebak kata dengan clue clue yang sudah diberikan</p>
              <p>3. Setelah salah satu player ada yang menyelesaikan semua tebak kata, game akan berakhir</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="start">
      <!-- Player -->
      <div class="progres position-absolute text-white">
        <span class="fs-4 fw-bold">PLAYER</span>
        <div class="bg-3 p-1 fs-5 rounded-pill mt-2">
          <span class="mx-2">{{ player.username }}</span>
          <span class="mx-2 text-warning">{{ progress }}/5</span>
        </div>
      </div>
      <!-- Leader Board -->
      <div class="leader-board position-absolute text-white">
        <span class="fs-4 fw-bold">LEADER BOARD</span>
        <div v-for="(player, ind) in players" :key="ind" class="bg-3 p-1 fs-5 rounded-pill mt-2">
          <span class="mx-2">{{ player.username }}</span>
          <span class="mx-2 text-warning">{{ player.progress }}/5</span>
        </div>
      </div>
      <!-- Qlue -->
      <div class="w-50 mx-auto text-white fs-5">
        <div
          v-for="(clue, ind) in word.clue"
          :key="ind"
          class="mb-3 rounded overflow-hidden"
        >
          <div class="d-flex justify-content-start">
            <div class="col-2 bg-4 p-2">{{ ind + 1 }}</div>
            <div class="col-10 bg-2 p-2 fw-bold">{{ clue }}</div>
          </div>
        </div>
      </div>
      <!-- Answer -->
      <div class="d-flex justify-content-between w-50 mt-5 mx-auto">
        <div class="col-2 mx-auto bg-2 p-3 rounded">
          <input v-model="first" type="text" class="form-control text-center fs-4 fw-bold text-uppercase" maxlength="1">
        </div>
        <div class="col-2 mx-auto bg-2 p-3 rounded">
          <input v-model="second" type="text" class="form-control text-center fs-4 fw-bold text-uppercase" maxlength="1">
        </div>
        <div class="col-2 mx-auto bg-2 p-3 rounded">
          <input v-model="third" type="text" class="form-control text-center fs-4 fw-bold text-uppercase" maxlength="1">
        </div>
        <div class="col-2 mx-auto bg-2 p-3 rounded">
          <input v-model="fourth" type="text" class="form-control text-center fs-4 fw-bold text-uppercase" maxlength="1">
        </div>
        <div class="col-2 mx-auto bg-2 p-3 rounded">
          <input v-model="fifth" type="text" class="form-control text-center fs-4 fw-bold text-uppercase" maxlength="1">
        </div>
      </div>
      <!-- Button Next / Wrong -->
      <div v-if="isTrue" class="mt-3">
        <button @click="nextGame(word.id)" class="btn btn-success w-50">Next Question</button>
      </div>
      <!-- <div v-if="winner.isWinner" class="mt-3">
        <button class="btn btn-success w-50">Udah ada yang menang</button>
      </div> -->
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'GameBoard',
  data () {
    return {
      start: false,
      progress: 0,
      word: {},
      first: '',
      second: '',
      third: '',
      fourth: '',
      fifth: '',
      answer: '',
      isTrue: false
    }
  },
  watch: {
    first () {
      this.checkAnswer()
    },
    second () {
      this.checkAnswer()
    },
    third () {
      this.checkAnswer()
    },
    fourth () {
      this.checkAnswer()
    },
    fifth () {
      this.checkAnswer()
    }
  },
  methods: {
    startGame () {
      this.start = true
      this.word = this.words[0]
      console.log(this.word)
    },
    checkAnswer () {
      this.answer = `${this.first}${this.second}${this.third}${this.fourth}${this.fifth}`
      if (this.answer === this.word.answer && this.word.id === 5) {
        this.isWinner = true
        this.$socket.emit('getTheWinner', {
          isWinner: true,
          player: this.player
        })
      } else if (this.answer === this.word.answer) {
        console.log('benar')
        this.isTrue = true
      } else if (this.answer.length === 5) {
        console.log('salah')
      }
    },
    nextGame (id) {
      this.isTrue = false
      this.progress++
      this.first = ''
      this.second = ''
      this.third = ''
      this.fourth = ''
      this.fifth = ''
      this.word = this.words[id]
      this.$socket.emit('updateProgress', {
        id: this.player.id,
        progress: this.progress
      })
    }
  },
  computed: {
    ...mapState([
      'words',
      'player',
      'players',
      'winner'
    ])
  }
}
</script>

<style>
.game-board {
  margin-top: 3rem;
}
.leader-board {
  left: 2rem;
}
.progres {
  right: 5rem;
}
.bg-1 {
  background-color: #11698e;
}
.bg-2 {
  background-color: #19456b;
}
.bg-3 {
  background-color: #eb596e;
}
.bg-4 {
  background-color: #f88f01;
}
</style>
