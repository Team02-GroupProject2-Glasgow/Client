<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-6">
        <div class="card shadow bg-light">
          <div class="card-body">
            <h2><i class="fas fa-trophy"></i> Tebak Kata Game <i class="fas fa-trophy"></i></h2>
            <h3>Please enter your name :</h3>
            <div class="mb-3">
              <input v-model="name" type="text" class="form-control" id="name" required>
            </div>
            <h3>Welcome {{ name }}</h3>
            <span @click="startGame" class='start-btn'>START</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: ''
    }
  },
  methods: {
    startGame () {
      console.log('masukk')
    }
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
  .start-btn{
    font-family: 'Press Start 2p';
    font-size: 20pt;
    text-align: center;
    display: inline-block;
    margin:5px;
    font-weight: bold;
    padding: 10px 5px 10px 10px ;
    background-color: lightgray;
    text-shadow: -1px -1px black, 1px 1px white;
    color: gray;
    -webkit-border-radius: 7px;
    -moz-border-radius: 7px;
    -o-border-radius: 7px;
    border-radius: 7px;
    box-shadow: 0 .2em gray;
    cursor: pointer;
  }
  .start-btn:active {
    box-shadow: none;
    position: relative;
    top: .2em;
}
</style>
