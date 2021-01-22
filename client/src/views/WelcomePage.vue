<template>
  <div class="container-fluid bg">
    <div class="row justify-content-center mt-5">
      <div class="col-4 mb-5">
        <div class="card shadow bg-light">
          <div class="card-body">
            <form-name @update="name = $event;"/>
            <span @click="checkName" class='start-btn'>Enter Room</span>
          </div>
        </div>
      </div>
      <show-name-page v-if="name" :name="name" />
    </div>
    <!-- <audio autoplay loop>
      <source src="@/assets/01-title.mp3">
    </audio> -->
  </div>
</template>

<script>
import FormName from '../components/FormName.vue'
import ShowNamePage from '../components/ShowNamePage.vue'
export default {
  components: { ShowNamePage, FormName },
  data () {
    return {
      name: ''
    }
  },
  methods: {
    checkName () {
      if (!this.name) {
        this.$swal('Please enter your name')
      } else {
        this.checkPlayers()
      }
    },
    checkPlayers () {
      if (this.players.length <= 3) {
        this.joinRoom()
        this.$router.push({ name: 'GamePage' })
      } else {
        this.$swal('Sorry the room is full')
      }
    },
    joinRoom () {
      this.$socket.emit('joinRoom', { username: this.name, room: 1, progress: 0 })
    }
  },
  computed: {
    players () {
      return this.$store.state.players
    }
  }
}
</script>

<style scoped>
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
    border-radius: 7px;
    box-shadow: 0 .2em gray;
    cursor: pointer;
  }
  .start-btn:active {
    box-shadow: none;
    position: relative;
    top: .2em;
  }

  .bg {
    position:fixed;
    top:0;
    left:0;
    bottom: 0;
    right: 0;
    background-color: #141114;
    background-image: linear-gradient(335deg, black 23px, transparent 23px),
      linear-gradient(155deg, black 23px, transparent 23px),
      linear-gradient(335deg, black 23px, transparent 23px),
      linear-gradient(155deg, black 23px, transparent 23px);
    background-size: 58px 58px;
    background-position: 0px 2px, 4px 35px, 29px 31px, 34px 6px;
  }
</style>
