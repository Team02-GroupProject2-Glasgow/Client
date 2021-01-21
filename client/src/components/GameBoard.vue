<template>
  <div class="game-board position-relative bg-1">
    <h2 class="text-white mb-5">Game Tebak Kata</h2>
    <div class="progres position-absolute text-warning fs-1">
      1/5
    </div>
    <div class="leader-board position-absolute text-white">
      <span class="fs-4 fw-bold">LEADER BOARD</span>
      <div class="bg-3 p-1 fs-5 rounded-pill mt-2">
        <span class="mx-2">Abby</span>
        <span class="mx-2 text-warning">4/5</span>
      </div>
      <div class="bg-3 p-1 fs-5 rounded-pill mt-2">
        <span class="mx-2">Anthony</span>
        <span class="mx-2 text-warning">3/5</span>
      </div>
      <div class="bg-3 p-1 fs-5 rounded-pill mt-2">
        <span class="mx-2">Arif</span>
        <span class="mx-2 text-warning">2/5</span>
      </div>
      <div class="bg-3 p-1 fs-5 rounded-pill mt-2">
        <span class="mx-2">Pajar</span>
        <span class="mx-2 text-warning">2/5</span>
      </div>
    </div>
    <!-- Qlue -->
    <div class="w-50 mx-auto text-white fs-5">
      <div
        v-for="(qlue, ind) in word.qlue"
        :key="ind"
        class="mb-3 rounded overflow-hidden"
      >
        <div class="d-flex justify-content-start">
          <div class="col-2 bg-4 p-2">{{ ind + 1 }}</div>
          <div class="col-10 bg-2 p-2 fw-bold">{{ qlue }}</div>
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
  </div>
</template>

<script>
export default {
  name: 'GameBoard',
  data () {
    return {
      word: {
        id: 1,
        qlue: ['nyamuk', 'dinding', 'blabala', 'bdjasd', 'kjdsad'],
        answer: 'CICAK'
      },
      first: '',
      second: '',
      third: '',
      fourth: '',
      fifth: '',
      answer: ''
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
    checkAnswer () {
      this.answer = `${this.first}${this.second}${this.third}${this.fourth}${this.fifth}`.toUpperCase()
      if (this.answer === this.word.answer) {
        console.log('benar')
      }
    }
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
  left: 14rem;
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
