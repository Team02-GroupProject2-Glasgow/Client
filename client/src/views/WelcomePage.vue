<template>
  <div class="container-fluid bg">
    <div class="row justify-content-center mt-5">
      <div class="col-4 mb-5">
        <div class="card shadow bg-light">
          <div class="card-body">
            <h2><i class="fas fa-trophy"></i> Tebak Kata Game <i class="fas fa-trophy"></i></h2>
            <h6>Please enter your name :</h6>
            <div class="mb-3">
              <input v-model="name" type="text" class="form-control" id="name" required>
            </div>
            <span @click="checkPlayers" class='start-btn'>Enter Room</span>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="sign" v-if="name">
            <span class="fast-flicker pr-5">W</span>el<span class="flicker">c</span>ome
        </div>
      </div>
      <div class="col-12">
        <div class="sign" v-if="name">
          <span class="fast-flicker"> {{ name }} </span>
        </div>
      </div>
    </div>
    <!-- <audio autoplay loop>
      <source src="@/assets/01-title.mp3">
    </audio> -->
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

  .sign {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 50%;
    background-image: radial-gradient(
      ellipse 50% 35% at 50% 50%,
      #6b1839,
      transparent
    );
    transform: translate(-50%, -50%);
    letter-spacing: 2;
    left: 50%;
    top: 50%;
    font-family: "Clip";
    text-transform: uppercase;
    font-size: 4em;
    color: #ffe6ff;
    text-shadow: 0 0 0.6rem #ffe6ff, 0 0 1.5rem #ff65bd,
      -0.2rem 0.1rem 1rem #ff65bd, 0.2rem 0.1rem 1rem #ff65bd,
      0 -0.5rem 2rem #ff2483, 0 0.5rem 3rem #ff2483;
    animation: shine 2s forwards, flicker 3s infinite;
  }

  @keyframes blink {
    0%,
    22%,
    36%,
    75% {
      color: #ffe6ff;
      text-shadow: 0 0 0.6rem #ffe6ff, 0 0 1.5rem #ff65bd,
        -0.2rem 0.1rem 1rem #ff65bd, 0.2rem 0.1rem 1rem #ff65bd,
        0 -0.5rem 2rem #ff2483, 0 0.5rem 3rem #ff2483;
    }
    28%,
    33% {
      color: #ff65bd;
      text-shadow: none;
    }
    82%,
    97% {
      color: #ff2483;
      text-shadow: none;
    }
  }

  .flicker {
    animation: shine 2s forwards, blink 3s 2s infinite;
  }

  .fast-flicker {
    animation: shine 2s forwards, blink 10s 1s infinite;
  }

  @keyframes shine {
    0% {
      color: #6b1839;
      text-shadow: none;
    }
    100% {
      color: #ffe6ff;
      text-shadow: 0 0 0.6rem #ffe6ff, 0 0 1.5rem #ff65bd,
        -0.2rem 0.1rem 1rem #ff65bd, 0.2rem 0.1rem 1rem #ff65bd,
        0 -0.5rem 2rem #ff2483, 0 0.5rem 3rem #ff2483;
    }
  }

  @keyframes flicker {
    from {
      opacity: 1;
    }

    4% {
      opacity: 0.9;
    }

    6% {
      opacity: 0.85;
    }

    8% {
      opacity: 0.95;
    }

    10% {
      opacity: 0.9;
    }

    11% {
      opacity: 0.922;
    }

    12% {
      opacity: 0.9;
    }

    14% {
      opacity: 0.95;
    }

    16% {
      opacity: 0.98;
    }

    17% {
      opacity: 0.9;
    }

    19% {
      opacity: 0.93;
    }

    20% {
      opacity: 0.99;
    }

    24% {
      opacity: 1;
    }

    26% {
      opacity: 0.94;
    }

    28% {
      opacity: 0.98;
    }

    37% {
      opacity: 0.93;
    }

    38% {
      opacity: 0.5;
    }

    39% {
      opacity: 0.96;
    }

    42% {
      opacity: 1;
    }

    44% {
      opacity: 0.97;
    }

    46% {
      opacity: 0.94;
    }

    56% {
      opacity: 0.9;
    }

    58% {
      opacity: 0.9;
    }

    60% {
      opacity: 0.99;
    }

    68% {
      opacity: 1;
    }

    70% {
      opacity: 0.9;
    }

    72% {
      opacity: 0.95;
    }

    93% {
      opacity: 0.93;
    }

    95% {
      opacity: 0.95;
    }

    97% {
      opacity: 0.93;
    }

    to {
      opacity: 1;
    }
  }

</style>
